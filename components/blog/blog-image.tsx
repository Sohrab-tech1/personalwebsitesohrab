'use client'

import Image from 'next/image'
import { useState } from 'react'

interface BlogImageProps {
  src: string
  alt: string
  className?: string
}

export function BlogImage({ 
  src, 
  alt,
  className = ''
}: BlogImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Ensure correct path for images
  const imagePath = src.startsWith('http') 
    ? src // Use as is if it's a full URL
    : src.startsWith('/') 
      ? src // Use as is if it starts with /
      : `/images/${src}` // Add /images/ prefix for relative paths

  return (
    <div className={`relative w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      <Image
        src={imagePath}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        onError={(e) => {
          console.error('Image failed to load:', imagePath)
          setError(true)
        }}
        priority
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse text-gray-400">Loading...</div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <div className="text-sm text-center px-4">
            <p>Failed to load image</p>
            <p className="text-xs text-gray-400 mt-1">{imagePath}</p>
          </div>
        </div>
      )}
    </div>
  )
} 