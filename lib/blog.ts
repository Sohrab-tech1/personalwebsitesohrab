import { z } from 'zod'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Types
export const PostSchema = z.object({
  title: z.string(),
  date: z.string(),
  excerpt: z.string(),
  authorSlug: z.string().default('sohrab-fadai'),
  author: z.string().optional(),
  category: z.string(),
  tags: z.array(z.string()),
  readTime: z.string(),
  featured: z.boolean().optional().default(false),
  image: z.string().optional(),
  slug: z.string(),
  content: z.string(),
})

export type Post = z.infer<typeof PostSchema>

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function getAllPosts(): Promise<Post[]> {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        
        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents)
        
        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
          .use(html)
          .process(content)
        const contentHtml = processedContent.toString()

        // Validate and return the post data
        return PostSchema.parse({
          ...data,
          slug,
          content: contentHtml,
          authorSlug: data.authorSlug || 'sohrab-fadai',
        })
      })
  )

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export async function getBlogPost(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    return PostSchema.parse({
      ...data,
      slug,
      content: contentHtml,
      authorSlug: data.authorSlug || 'sohrab-fadai',
    })
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error)
    return null
  }
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.featured)
}

export async function getPostsByCategory(category: Post['category']): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.category === category)
} 