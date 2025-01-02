import { type Language } from '@/lib/i18n/dictionaries'
// Import the HomePage component from the correct path - needs to be created
import HomePage from '@/components/home-page/index'

/**
 * Props interface for the Home page component
 * @interface HomePageProps
 * @property {Object} params - URL parameters
 * @property {Language} params.lang - The language code for the page
 */
interface HomePageProps {
  params: {
    lang: Language
  }
}

export default function Home({ params: { lang } }: HomePageProps) {
  return <HomePage lang={lang} />
}

// Generate static pages for all supported languages
export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'sv' }
  ]
} 