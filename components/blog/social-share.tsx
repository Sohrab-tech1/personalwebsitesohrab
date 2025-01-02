'use client'

import { Twitter, Linkedin, Link } from 'lucide-react'
import { toast } from 'sonner'
import { FC } from 'react'

interface SocialShareProps {
  url: string
  title: string
  description?: string
}

export const SocialShare: FC<SocialShareProps> = ({ 
  url, 
  title,
  description = ''
}) => {
  const handleShare = (platform: string) => {
    try {
      switch (platform) {
        case 'twitter':
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title}\n\n${description}`)}${encodeURIComponent('\n\n')}${encodeURIComponent(url)}`,
            '_blank',
            'noopener,noreferrer'
          )
          break
        case 'linkedin':
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            '_blank',
            'noopener,noreferrer'
          )
          break
        case 'copy':
          navigator.clipboard.writeText(url)
            .then(() => toast.success('Link copied to clipboard!'))
            .catch(() => toast.error('Failed to copy'))
          break
      }
    } catch (error) {
      console.error('Error sharing:', error)
      toast.error('Failed to share')
    }
  }

  return (
    <div className="flex flex-col gap-4 my-8">
      <h3 className="text-lg font-semibold">Share this article</h3>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => handleShare('twitter')}
          className="inline-flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50 transition-colors"
        >
          <Twitter className="h-4 w-4" />
          <span>X/Twitter</span>
        </button>

        <button
          onClick={() => handleShare('linkedin')}
          className="inline-flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50 transition-colors"
        >
          <Linkedin className="h-4 w-4" />
          <span>LinkedIn</span>
        </button>

        <div 
          className="fb-share-button" 
          data-href={url}
          data-layout=""
          data-size=""
        >
          <a 
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&amp;src=sdkpreparse`}
            className="fb-xfbml-parse-ignore"
            rel="noopener noreferrer"
          >
            Share
          </a>
        </div>

        <button
          onClick={() => handleShare('copy')}
          className="inline-flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50 transition-colors"
        >
          <Link className="h-4 w-4" />
          <span>Copy Link</span>
        </button>
      </div>
    </div>
  )
}