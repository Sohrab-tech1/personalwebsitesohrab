'use client'

import Image from 'next/image'
import { Twitter, Linkedin, Github } from 'lucide-react'
import { type Author } from '@/lib/authors'
import { FC } from 'react'

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
        />
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold">{author.name}</h3>
            <p className="text-gray-600 text-sm">{author.role}</p>
          </div>
          
          <div className="flex gap-2 md:ml-auto">
            {author.social?.x && (
              <a
                href={author.social.x }
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            )}
            {author.social?.linkedin && (
              <a
                href={author.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {author.social?.github && (
              <a
                href={author.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed">{author.bio}</p>
      </div>
    </div>
  )
} 