'use client'

import { type FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { type Language } from '@/lib/i18n/dictionaries'

// Content translations
const content = {
  en: {
    title: "Latest Insights",
    readTime: "min read"
  },
  sv: {
    title: "Senaste Insikterna",
    readTime: "min läsning"
  }
}

// Types
interface BlogPost {
  title: string
  excerpt: string
  date: string
  slug: string
  readTime: string
  category: 'AI' | 'Technology' | 'Business' | 'PR'
}

interface BlogProps {
  lang: Language
  posts: BlogPost[]
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const BlogSection: FC<BlogProps> = ({ lang, posts }) => {
  return (
    <section className="py-24 bg-gradient-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            {content[lang].title}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.div
                key={post.slug}
                variants={itemVariants}
              >
                <Link href={`/${lang}/blog/${post.slug}`}>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <span className="text-sm text-blue-600">{post.category}</span>
                      <CardTitle>{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString(lang === 'sv' ? 'sv-SE' : 'en-US')}</span>
                        <span>{post.readTime} {content[lang].readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection 