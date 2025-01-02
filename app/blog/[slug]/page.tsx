import { Metadata } from 'next'
import { BlogImage } from '@/components/blog/blog-image'
import { SocialShare } from '@/components/blog/social-share'
import { AuthorCard } from '@/components/blog/author-card'
import { getBlogPost } from '@/lib/blog'
import { getAuthor } from '@/lib/authors'
import { Mdx } from '@/components/mdx'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return null
  }

  const author = getAuthor(post.authorSlug)
  const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${params.slug}`

  return (
    <article className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      <div className="mb-8 flex items-center text-gray-600 text-sm">
        <span>By {author.name}</span>
        <span className="mx-2">•</span>
        <span>{post.readTime}</span>
      </div>

      <div>
        <BlogImage
          src={post.image || '/images/default-og.jpg'}
          alt={post.title}
          className="mb-8"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <Mdx code={post.content} />
      </div>
      
      <AuthorCard author={author} />
      
      
      <div className="mt-8">
        <SocialShare
          title={post.title}
          url={canonicalUrl}
          description={post.excerpt}
          image={post.image}
          author={author}
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  // Handle the case where post.image might be undefined
  const ogImage = post.image 
    ? post.image.startsWith('http')
      ? post.image
      : `${process.env.NEXT_PUBLIC_BASE_URL}${post.image}`
    : '' // Provide a default empty string if image is undefined

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [{ url: post.author }],
      images: [
        {
          url: ogImage || '', // Ensure url is never undefined
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage || ''],
    },
  }
} 