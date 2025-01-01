import { type FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { type Post } from '@/lib/blog'

interface RelatedPostsProps {
  currentPost: Post
  posts: Post[]
}

const RelatedPosts: FC<RelatedPostsProps> = ({ currentPost, posts }) => {
  // Filter out current post and find posts with matching category or tags
  const relatedPosts = posts
    .filter(post => post.slug !== currentPost.slug)
    .filter(post => 
      post.category === currentPost.category ||
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, 3) // Limit to 3 related posts

  if (relatedPosts.length === 0) return null

  return (
    <section className="mt-16 pt-16 border-t">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="group"
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              {post.image && (
                <div className="relative h-40 w-full overflow-hidden">
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
                    {post.readTime} read
                  </span>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RelatedPosts 