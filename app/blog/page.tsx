import { type Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogPageClient from '@/components/blog/blog-page-client'

export const metadata: Metadata = {
  title: 'Blog | Insights on AI and Technology',
  description: 'Explore insights about AI, technology, and business growth.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  return <BlogPageClient initialPosts={posts} />
} 