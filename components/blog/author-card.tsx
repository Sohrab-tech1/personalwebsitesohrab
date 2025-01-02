'use client'

import Image from 'next/image'
import { Twitter, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FC } from 'react'

export interface Author {
  name: string
  role: string
  image: string
  bio: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

interface AuthorCardProps {
  author: Author
}

export const AuthorCard: FC<AuthorCardProps> = ({ author }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start border rounded-lg p-6 bg-gray-50/50 mt-12">
      <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover"
          sizes="96px"
          priority
          quality={95}
        />
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold">{author.name}</h3>
            <p className="text-gray-600 text-sm">{author.role}</p>
          </div>
          
          <div className="flex gap-2 md:ml-auto">
            {author.social?.twitter && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(author.social?.twitter || '', '_blank')}
                className="hover:text-blue-400"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            )}
            {author.social?.linkedin && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(author.social?.linkedin || '', '_blank')}
                className="hover:text-blue-600"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            )}
            {author.social?.github && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(author.social?.github || '', '_blank')}
                className="hover:text-gray-900"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            )}
          </div>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed">{author.bio}</p>
      </div>
    </div>
  )
} 