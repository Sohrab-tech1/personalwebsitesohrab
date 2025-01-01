import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import Image from 'next/image'
import { CalendarDays, Clock, Tag } from 'lucide-react'
import RelatedPosts from '@/components/blog/related-posts'

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

  return (
    <article className="min-h-screen py-12 bg-gradient-light">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto mb-12">
          {post.image && (
            <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
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
        </div>
      </div>
    </article>
  )
} 