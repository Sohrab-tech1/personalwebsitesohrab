import { type Metadata } from 'next'
import ServicesPage from '@/components/services/services-page'
import { dictionaries, type Language } from '@/lib/i18n/dictionaries'

interface ServicesProps {
  params: {
    lang: Language
  }
}

export async function generateMetadata({ params }: ServicesProps): Promise<Metadata> {
  const dictionary = dictionaries[params.lang]
  
  return {
    title: dictionary.services.title,
    description: dictionary.services.subtitle,
  }
}

export default function Services({ params: { lang } }: ServicesProps) {
  const dictionary = dictionaries[lang]
  return <ServicesPage dictionary={dictionary.services} />
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }]
} 