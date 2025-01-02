import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import Image from 'next/image'
import { CalendarDays, Clock, Share, Tag } from 'lucide-react'
import RelatedPosts from '@/components/blog/related-posts'
import { BlogImage } from '@/components/blog/blog-image'
import { getPlaceholderImage } from '@/lib/placeholder-image'
import { AuthorCard } from '@/components/blog/author-card'
import { getAuthor } from '@/lib/authors'
interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Sohrab Fadai',
    }
  }

  return {
    title: `${post.title} | Sohrab Fadai`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Sohrab Fadai'],
      images: post.image ? [post.image] : [],
    },
  }
}

// Generate static pages for all posts at build time
export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  const allPosts = await getAllPosts()

  if (!post) {
    notFound()
  }

  const imageUrl = post.image && post.image.startsWith('/') 
    ? post.image  // Use the actual image if it exists
    : getPlaceholderImage(post.title)

  const author = getAuthor(post.author)
  const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${params.slug}`

  return (
    <article className="min-h-screen py-12 bg-gradient-light">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto mb-12">
          <BlogImage
            src={imageUrl}
            alt={post.title}
            className="mb-8"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString()}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>{post.category}</span>
            </div>
          </div>

          <p className="text-xl text-gray-600">
            {post.excerpt}
          </p>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          {/* Tags */}
          <div className="mt-12 pt-6 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Add Related Posts */}
          <RelatedPosts currentPost={post} posts={allPosts} />

          <AuthorCard author={author} />
          
          <div className="mt-8">
          </div>
        </div>
      </div>
    </article> 
  )
} 