'use client'

import { type FC } from 'react'
import { type Language } from '@/lib/i18n/dictionaries'

interface HomePageProps {
  lang: Language
}

const HomePage: FC<HomePageProps> = ({ lang }) => {
  return (
    // Your existing home page content here
    // Update text content based on language prop
    <div>
      <h1>{lang === 'sv' ? 'Välkommen' : 'Welcome'}</h1>
      {/* Rest of your home page content */}
    </div>
  )
}

export default HomePage 