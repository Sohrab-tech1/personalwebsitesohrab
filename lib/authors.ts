export interface Author {
  name: string
  role: string
  image: string
  bio: string
  social?: {
    x?: string
    linkedin?: string
    github?: string
  }
}

export const authors: Record<string, Author> = {
  'sohrab-fadai': {
    name: 'Sohrab Fadai',
    role: 'Founder & entrepreneur',
    image: '/images/sohrabportrait.jpg', // Make sure this image exists in your public folder
    bio: 'Founder & entrepreneur with a passion for building AI solutions.',
    social: {
      x: 'https://x.com/sohrabf',
      linkedin: 'https://linkedin.com/in/sohrabf',
      github: 'https://github.com/sohrabf'
    }
  }
  // Add more authors as needed
}

export function getAuthor(slug: string): Author {
  return authors[slug] || authors['sohrab-fadai'] // Default to your profile
} 