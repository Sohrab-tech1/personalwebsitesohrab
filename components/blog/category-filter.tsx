'use client'

import { type FC } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { type Post } from '@/lib/blog'

interface CategoryFilterProps {
  categories: Post['category'][]
  activeCategory: Post['category'] | 'All'
  onCategoryChange: (category: Post['category'] | 'All') => void
  className?: string
}

const CategoryFilter: FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  className
}) => {
  const allCategories = ['All', ...categories] as const

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {allCategories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
            activeCategory === category
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}

export default CategoryFilter 