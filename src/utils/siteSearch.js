import { uiStrings } from '../i18n/uiStrings.js'
import { siteInfo } from '../data/siteInfo.js'
import { aboutContent } from '../data/aboutContent.js'
import { legalContent } from '../data/legalContent.js'
import { referencesContent } from '../data/referencesContent.js'
import { TEAM_MEMBERS } from '../data/teamData.jsx'
import { getServices } from '../data/servicesContent.js'
import { getArticles } from '../data/articlesContent.js'

function normalizeSearchText(value, locale = 'tr') {
  const lowerLocale = locale === 'ar' ? 'ar' : locale === 'en' ? 'en-US' : 'tr-TR'

  return String(value || '')
    .toLocaleLowerCase(lowerLocale)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/İ/g, 'i')
    .replace(/[^a-z0-9\u0600-\u06FF\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncateText(value, maxLength = 160) {
  const plain = String(value || '').replace(/\s+/g, ' ').trim()
  if (plain.length <= maxLength) return plain
  return `${plain.slice(0, maxLength - 1).trim()}...`
}

function collectBlockText(blocks = []) {
  return blocks
    .flatMap((block) => {
      const parts = []

      if (block?.text) {
        parts.push(block.text)
      }

      if (Array.isArray(block?.items)) {
        block.items.forEach((item) => {
          if (typeof item === 'string') {
            parts.push(item)
            return
          }

          if (item && typeof item === 'object') {
            parts.push(`${item.label || ''} ${item.value || ''}`)
          }
        })
      }

      return parts
    })
    .join(' ')
}

function createEntry({
  id,
  title,
  to,
  kind,
  kindLabel,
  subtitle = '',
  snippet = '',
  keywords = '',
  priority = 0,
}) {
  return {
    id,
    title,
    to,
    kind,
    kindLabel,
    subtitle,
    snippet: truncateText(snippet),
    keywords,
    priority,
  }
}

export function buildSearchIndex(locale, localizePath) {
  const t = uiStrings[locale] || uiStrings.tr
  const services = getServices(locale)
  const articles = getArticles(locale)
  const aboutPage = aboutContent[locale] || aboutContent.tr
  const referencesPage = referencesContent[locale] || referencesContent.tr
  const legalPages = {
    kvkk: legalContent.kvkk?.[locale] || legalContent.kvkk?.tr,
    cerez: legalContent.cerez?.[locale] || legalContent.cerez?.tr,
    yasal: legalContent.yasal?.[locale] || legalContent.yasal?.tr,
  }

  const entries = [
    createEntry({
      id: 'home',
      title: t.nav.home,
      subtitle: siteInfo.brand,
      to: localizePath('/'),
      kind: 'page',
      kindLabel: t.pageMeta.home,
      snippet: `${t.hero.slide1Title} ${t.hero.slide1Desc} ${t.hero.slide2Title} ${t.hero.slide2Desc}`,
      keywords: `${siteInfo.brand} ${siteInfo.brandEn} ${siteInfo.brandAr} ${siteInfo.ownerName} ${t.hero.badge} ${t.hero.slide1Title} ${t.hero.slide1Desc} ${t.hero.slide2Title} ${t.hero.slide2Desc}`,
      priority: 120,
    }),
    createEntry({
      id: 'about',
      title: t.nav.about,
      subtitle: aboutPage.title,
      to: localizePath('/hakkimizda'),
      kind: 'page',
      kindLabel: t.pageMeta.about,
      snippet: aboutPage.paragraphs?.[0] || '',
      keywords: `${aboutPage.badge} ${aboutPage.title} ${aboutPage.paragraphs?.join(' ')} ${aboutPage.principlesTitle} ${aboutPage.principles?.map((item) => `${item.title} ${item.description}`).join(' ')}`,
      priority: 110,
    }),
    createEntry({
      id: 'team',
      title: t.nav.team,
      subtitle: t.team.subtitle,
      to: localizePath('/ekibimiz'),
      kind: 'page',
      kindLabel: t.pageMeta.team,
      snippet: TEAM_MEMBERS.map((member) => member.name).join(' • '),
      keywords: TEAM_MEMBERS.map((member) => {
        const role = member.role?.[locale] || member.role?.tr || ''
        const description = member.description?.[locale] || member.description?.tr || ''
        const professionalText =
          member.professionalInfo?.text?.[locale] || member.professionalInfo?.text?.tr || ''
        const professionalList =
          member.professionalInfo?.list?.[locale] || member.professionalInfo?.list?.tr || []

        return `${member.name} ${role} ${description} ${professionalText} ${professionalList.join(' ')}`
      }).join(' '),
      priority: 105,
    }),
    createEntry({
      id: 'services',
      title: t.nav.services,
      subtitle: t.services.subtitle,
      to: localizePath('/hizmetlerimiz'),
      kind: 'page',
      kindLabel: t.pageMeta.services,
      snippet: services.slice(0, 4).map((service) => service.title).join(' • '),
      keywords: services.map((service) => `${service.title} ${service.introTitle || ''}`).join(' '),
      priority: 108,
    }),
    createEntry({
      id: 'references',
      title: t.nav.references,
      subtitle: referencesPage.title,
      to: localizePath('/referanslar'),
      kind: 'page',
      kindLabel: t.pageMeta.references,
      snippet: referencesPage.intro,
      keywords: `${referencesPage.badge} ${referencesPage.title} ${referencesPage.intro}`,
      priority: 90,
    }),
    createEntry({
      id: 'articles',
      title: t.nav.articles,
      subtitle: t.articles.title,
      to: localizePath('/makaleler'),
      kind: 'page',
      kindLabel: t.pageMeta.articles,
      snippet: t.articles.subtitle,
      keywords: articles
        .map((article) => `${article.title} ${article.summary || ''} ${article.introText || ''}`)
        .join(' '),
      priority: 92,
    }),
    createEntry({
      id: 'contact',
      title: t.nav.contact,
      subtitle: t.contact.title,
      to: localizePath('/iletisim'),
      kind: 'page',
      kindLabel: t.pageMeta.contact,
      snippet: `${siteInfo.email} • ${siteInfo.phones.map((phone) => phone.display).join(' • ')}`,
      keywords: `${siteInfo.brand} ${siteInfo.email} ${siteInfo.domain} ${siteInfo.url} ${siteInfo.addressFull[locale] || siteInfo.addressFull.tr} ${siteInfo.phones.map((phone) => `${phone.label} ${phone.display} ${phone.raw}`).join(' ')}`,
      priority: 115,
    }),
    createEntry({
      id: 'kvkk',
      title: t.nav.kvkk,
      subtitle: legalPages.kvkk?.title || '',
      to: localizePath('/kvkk'),
      kind: 'legal',
      kindLabel: t.pageMeta.kvkk,
      snippet: legalPages.kvkk?.blocks?.[0]?.text || '',
      keywords: `${legalPages.kvkk?.title || ''} ${collectBlockText(legalPages.kvkk?.blocks)}`,
      priority: 85,
    }),
    createEntry({
      id: 'cookie-policy',
      title: t.nav.cookiePolicy,
      subtitle: legalPages.cerez?.title || '',
      to: localizePath('/cerez-politikasi'),
      kind: 'legal',
      kindLabel: t.pageMeta.cookiePolicy,
      snippet: legalPages.cerez?.blocks?.[0]?.text || '',
      keywords: `${legalPages.cerez?.title || ''} ${collectBlockText(legalPages.cerez?.blocks)}`,
      priority: 82,
    }),
    createEntry({
      id: 'legal-notice',
      title: t.nav.legalNotice,
      subtitle: legalPages.yasal?.title || '',
      to: localizePath('/yasal-uyari'),
      kind: 'legal',
      kindLabel: t.pageMeta.legalNotice,
      snippet: legalPages.yasal?.blocks?.[0]?.text || '',
      keywords: `${legalPages.yasal?.title || ''} ${collectBlockText(legalPages.yasal?.blocks)}`,
      priority: 82,
    }),
  ]

  aboutPage.principles?.forEach((principle, index) => {
    entries.push(
      createEntry({
        id: `about-principle-${index + 1}`,
        title: principle.title,
        subtitle: aboutPage.principlesTitle,
        to: localizePath('/hakkimizda'),
        kind: 'section',
        kindLabel: t.pageMeta.about,
        snippet: principle.description,
        keywords: `${aboutPage.title} ${principle.number} ${principle.title} ${principle.description}`,
        priority: 54,
      })
    )
  })

  TEAM_MEMBERS.forEach((member) => {
    const role = member.role?.[locale] || member.role?.tr || ''
    const description = member.description?.[locale] || member.description?.tr || ''
    const professionalTitle =
      member.professionalInfo?.title?.[locale] || member.professionalInfo?.title?.tr || ''
    const professionalText =
      member.professionalInfo?.text?.[locale] || member.professionalInfo?.text?.tr || ''
    const professionalList =
      member.professionalInfo?.list?.[locale] || member.professionalInfo?.list?.tr || []

    entries.push(
      createEntry({
        id: `team-${member.slug}`,
        title: member.name,
        subtitle: role,
        to: localizePath(`/ekibimiz/${member.slug}`),
        kind: 'team',
        kindLabel: t.pageMeta.team,
        snippet: description,
        keywords: `${member.name} ${role} ${description} ${professionalTitle} ${professionalText} ${professionalList.join(' ')} ${member.email} ${member.phone}`,
        priority: 100,
      })
    )
  })

  services.forEach((service, serviceIndex) => {
    const baseKeywords = [
      service.title,
      service.introTitle,
      service.introText,
      service.listIntro,
      ...(service.list || []),
      ...(service.sections || []).flatMap((section) => [section.title, section.text]),
      service.outro,
      service.note,
    ]
      .filter(Boolean)
      .join(' ')

    entries.push(
      createEntry({
        id: `service-${service.slug}`,
        title: service.title,
        subtitle: t.pageMeta.services,
        to: localizePath(`/hizmetlerimiz/${service.slug}`),
        kind: 'service',
        kindLabel: t.pageMeta.services,
        snippet: service.introTitle || service.introText || '',
        keywords: baseKeywords,
        priority: 96 - serviceIndex,
      })
    )

    ;(service.sections || []).forEach((section, sectionIndex) => {
      entries.push(
        createEntry({
          id: `service-${service.slug}-section-${sectionIndex + 1}`,
          title: section.title,
          subtitle: service.title,
          to: localizePath(`/hizmetlerimiz/${service.slug}`),
          kind: 'section',
          kindLabel: t.pageMeta.services,
          snippet: section.text,
          keywords: `${service.title} ${section.title} ${section.text}`,
          priority: 60,
        })
      )
    })

    ;(service.list || []).forEach((listItem, listIndex) => {
      entries.push(
        createEntry({
          id: `service-${service.slug}-list-${listIndex + 1}`,
          title: listItem,
          subtitle: service.title,
          to: localizePath(`/hizmetlerimiz/${service.slug}`),
          kind: 'section',
          kindLabel: t.pageMeta.services,
          snippet: service.introText || service.outro || '',
          keywords: `${service.title} ${listItem} ${service.introText || ''} ${service.outro || ''}`,
          priority: 52,
        })
      )
    })
  })

  articles.forEach((article, articleIndex) => {
    const baseKeywords = [
      article.title,
      article.summary,
      article.introText,
      ...(article.sections || []).flatMap((section) => [section.title, section.text]),
      article.note,
    ]
      .filter(Boolean)
      .join(' ')

    entries.push(
      createEntry({
        id: `article-${article.slug}`,
        title: article.title,
        subtitle: t.articles.title,
        to: localizePath(`/makaleler/${article.slug}`),
        kind: 'article',
        kindLabel: t.pageMeta.articles,
        snippet: article.summary || article.introText || '',
        keywords: baseKeywords,
        priority: 88 - articleIndex,
      })
    )

    ;(article.sections || []).forEach((section, sectionIndex) => {
      entries.push(
        createEntry({
          id: `article-${article.slug}-section-${sectionIndex + 1}`,
          title: section.title,
          subtitle: article.title,
          to: localizePath(`/makaleler/${article.slug}`),
          kind: 'section',
          kindLabel: t.pageMeta.articles,
          snippet: section.text,
          keywords: `${article.title} ${section.title} ${section.text}`,
          priority: 50,
        })
      )
    })
  })

  Object.entries(legalPages).forEach(([key, page]) => {
    const pagePath =
      key === 'kvkk'
        ? '/kvkk'
        : key === 'cerez'
          ? '/cerez-politikasi'
          : '/yasal-uyari'

    page?.blocks?.forEach((block, index) => {
      if (block?.type !== 'h') return

      entries.push(
        createEntry({
          id: `legal-${key}-heading-${index + 1}`,
          title: block.text,
          subtitle: page.title,
          to: localizePath(pagePath),
          kind: 'section',
          kindLabel:
            key === 'kvkk'
              ? t.pageMeta.kvkk
              : key === 'cerez'
                ? t.pageMeta.cookiePolicy
                : t.pageMeta.legalNotice,
          snippet: collectBlockText(page.blocks.slice(index, index + 3)),
          keywords: `${page.title} ${collectBlockText(page.blocks.slice(index, index + 4))}`,
          priority: 48,
        })
      )
    })
  })

  return entries
}

export function searchSite(query, locale, localizePath, limit = 12) {
  const normalizedQuery = normalizeSearchText(query, locale)

  if (!normalizedQuery) return []

  const tokens = normalizedQuery.split(' ').filter(Boolean)

  return buildSearchIndex(locale, localizePath)
    .map((entry) => {
      const normalizedTitle = normalizeSearchText(entry.title, locale)
      const normalizedSubtitle = normalizeSearchText(entry.subtitle, locale)
      const normalizedSnippet = normalizeSearchText(entry.snippet, locale)
      const haystack = normalizeSearchText(
        `${entry.title} ${entry.subtitle} ${entry.snippet} ${entry.keywords}`,
        locale
      )

      let score = entry.priority || 0

      if (normalizedTitle === normalizedQuery) score += 160
      if (normalizedTitle.startsWith(normalizedQuery)) score += 120
      if (normalizedTitle.includes(normalizedQuery)) score += 80
      if (normalizedSubtitle.includes(normalizedQuery)) score += 40
      if (normalizedSnippet.includes(normalizedQuery)) score += 18
      if (haystack.includes(normalizedQuery)) score += 32

      let matchedTokenCount = 0

      tokens.forEach((token) => {
        if (!token) return

        if (normalizedTitle.includes(token)) {
          score += 26
          matchedTokenCount += 1
          return
        }

        if (normalizedSubtitle.includes(token)) {
          score += 14
          matchedTokenCount += 1
          return
        }

        if (normalizedSnippet.includes(token)) {
          score += 10
          matchedTokenCount += 1
          return
        }

        if (haystack.includes(token)) {
          score += 8
          matchedTokenCount += 1
        }
      })

      if (matchedTokenCount === tokens.length) {
        score += 24
      }

      return {
        ...entry,
        score,
      }
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score
      if ((right.priority || 0) !== (left.priority || 0)) {
        return (right.priority || 0) - (left.priority || 0)
      }
      return left.title.localeCompare(right.title, locale === 'en' ? 'en' : 'tr')
    })
    .slice(0, limit)
}

export { normalizeSearchText }
