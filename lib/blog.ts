import { z } from 'zod'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { type Language } from './i18n/dictionaries'

// Types
const TranslatedPostSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  author: z.string(),
  category: z.enum(['AI', 'Technology', 'Business', 'PR']),
  tags: z.array(z.string()),
  readTime: z.string(),
})

export const PostSchema = z.object({
  translations: z.object({
    en: TranslatedPostSchema,
    sv: TranslatedPostSchema,
  }),
  date: z.string(),
  featured: z.boolean().optional(),
  image: z.string().optional(),
  slug: z.string(),
  content: z.string(),
})

export type Post = z.infer<typeof PostSchema>

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function getAllPosts(lang: Language): Promise<Post[]> {
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
        })
      })
  )

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string, lang: Language): Promise<Post | null> {
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
    })
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error)
    return null
  }
}

export async function getFeaturedPosts(lang: Language): Promise<Post[]> {
  const allPosts = await getAllPosts(lang)
  return allPosts.filter(post => post.featured)
}

export async function getPostsByCategory(category: Post['translations'][Language]['category'], lang: Language): Promise<Post[]> {
  const allPosts = await getAllPosts(lang)
  return allPosts.filter(post => post.translations[lang].category === category)
} 