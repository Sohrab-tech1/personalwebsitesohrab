'use client'

import { type FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search as SearchIcon, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { type Post } from '@/lib/blog'
import Link from 'next/link'

interface SearchProps {
  posts: Post[]
  className?: string
}

const Search: FC<SearchProps> = ({ posts, className }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const filteredPosts = searchQuery
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : []

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Input
          type="search"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="pl-10 pr-4 w-full"
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
            onClick={() => setSearchQuery('')}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <AnimatePresence>
        {(isFocused && searchQuery && filteredPosts.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border max-h-[400px] overflow-y-auto"
          >
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                onClick={() => {
                  setSearchQuery('')
                  setIsFocused(false)
                }}
                className="block p-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-blue-600">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {post.readTime} read
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        )}

        {(isFocused && searchQuery && filteredPosts.length === 0) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 top-full left-0 right-0 mt-2 p-4 bg-white rounded-lg shadow-lg border text-center text-gray-600"
          >
            No posts found for "{searchQuery}"
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for closing search results */}
      {isFocused && searchQuery && (
        <div 
          className="fixed inset-0 z-40 bg-black/20" 
          onClick={() => setIsFocused(false)}
        />
      )}
    </div>
  )
}

export default Search 