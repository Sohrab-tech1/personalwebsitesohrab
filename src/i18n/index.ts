import sv from '../../messages/sv.json'
import en from '../../messages/en.json'

const messages = { sv, en } as const

export type Locale = keyof typeof messages

export function t(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: any = messages[locale]
  for (const k of keys) {
    value = value?.[k]
  }
  return value ?? key
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/')
  if (lang === 'en') return 'en'
  return 'sv'
}
