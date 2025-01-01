import { type FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  slug: string
  readTime: string
  category: 'AI' | 'Technology' | 'Business' | 'PR'
}

const BlogSection: FC = () => {
  const featuredPosts: BlogPost[] = [
    {
      title: "How AI is Transforming PR in 2025",
      excerpt: "Discover the latest AI trends reshaping public relations...",
      date: "2025-01-01",
      slug: "ai-transforming-pr-2025",
      readTime: "5 min",
      category: "AI"
    },
    // Add more posts
  ]

  return (
    <section className="py-24 bg-gradient-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Insights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <span className="text-sm text-blue-600">{post.category}</span>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime} read</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection 