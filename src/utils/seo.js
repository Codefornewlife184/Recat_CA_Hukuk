import { useEffect } from 'react'
import { DEFAULT_LOCALE, LOCALE_META, SUPPORTED_LOCALES, localizePath } from '../i18n/config.js'
import { siteInfo } from '../data/siteInfo.js'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function buildAbsoluteUrl(pathname) {
  const normalizedPath = pathname === '/' ? '' : pathname
  return `${siteInfo.url}${normalizedPath}`
}

export function usePageSeo({
  locale = DEFAULT_LOCALE,
  title,
  description,
  pathname = '/',
}) {
  useEffect(() => {
    if (!title || !description) return

    const pageTitle = `${title} | ${siteInfo.brand}`
    const canonicalUrl = buildAbsoluteUrl(pathname)

    document.title = pageTitle
    document.documentElement.lang = LOCALE_META[locale]?.htmlLang || locale

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: pageTitle,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: LOCALE_META[locale]?.htmlLang || locale,
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: pageTitle,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    })

    SUPPORTED_LOCALES.forEach((lang) => {
      const href = buildAbsoluteUrl(localizePath(pathname, lang))
      upsertLink(`link[rel="alternate"][hreflang="${lang}"]`, {
        rel: 'alternate',
        hreflang: lang,
        href,
      })
    })

    upsertLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: buildAbsoluteUrl(localizePath(pathname, DEFAULT_LOCALE)),
    })
  }, [description, locale, pathname, title])
}
