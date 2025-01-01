'use client'

import { type FC } from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type Post } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import CategoryFilter from '@/components/blog/category-filter'
import Search from '@/components/blog/search'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPageClientProps {
  initialPosts: Post[]
}

const BlogPageClient: FC<BlogPageClientProps> = ({ initialPosts }) => {
  const [activeCategory, setActiveCategory] = useState<Post['category'] | 'All'>('All')
  
  const categories = Array.from(
    new Set(initialPosts.map(post => post.category))
  )

  const filteredPosts = activeCategory === 'All'
    ? initialPosts
    : initialPosts.filter(post => post.category === activeCategory)

  return (
    <main className="min-h-screen py-12 bg-gradient-light">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Latest Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Thoughts on AI, technology, and building successful businesses
          </p>
          
          {/* Search Bar */}
          <Search 
            posts={initialPosts} 
            className="max-w-xl mx-auto mb-8" 
          />
          
          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            className="justify-center mb-12"
          />
        </section>

        {/* Posts Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    {post.image && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-blue-600">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{post.readTime} read</span>
                        <div className="flex items-center gap-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span 
                              key={tag}
                              className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  )
}

export default BlogPageClient 