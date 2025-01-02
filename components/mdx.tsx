'use client'

import Markdown from 'markdown-to-jsx'

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600">
      <Markdown>{code}</Markdown>
    </div>
  )
} 