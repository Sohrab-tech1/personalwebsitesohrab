import { Author } from '@/components/blog/author-card'

export const authors: Record<string, Author> = {
  'sohrab-fadai': {
    name: 'Sohrab Fadai',
    role: 'Founder and entrepreneur',
    image: '/images/sohrab-portrait.jpg',
    bio: 'Sohrab Fadai is a founder and entrepreneur with a passion for building innovative solutions. Specializing in AI solutions for a wider, kinder and more compassionate world.',
    social: {
      twitter: 'https://twitter.com/sohrabf',
      linkedin: 'https://linkedin.com/in/sohrabf',
      github: 'https://github.com/sohrabf'
    }
  },
  // Add more authors as needed
}

export function getAuthor(slug: string): Author {
  return authors[slug] || authors['sohrab-fadai'] // Default to your profile
} 