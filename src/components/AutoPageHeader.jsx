import React from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from './PageHeader.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { stripLocaleFromPath } from '../i18n/config.js'
import { getServiceBySlug } from '../data/servicesContent.js'
import { TEAM_MEMBERS } from '../data/teamData.jsx'
import { getArticleBySlug } from '../data/articlesContent.js'

const BG = '/assets/img/bg-img/breadcrumb.png'

export default function AutoPageHeader({ customTitle, title }) {
  const { locale, t, localizePath } = useLocale()
  const { pathname } = useLocation()
  const normalizedPathname = stripLocaleFromPath(pathname)

  const metaMap = {
    '/': { title: t.pageMeta.home, currentText: t.pageMeta.home, to: '/' },
    '/hakkimizda': {
      title: t.pageMeta.about,
      currentText: t.pageMeta.about,
      to: '/hakkimizda',
    },
    '/kvkk': { title: t.pageMeta.kvkk, currentText: t.pageMeta.kvkk, to: '/kvkk' },
    '/cerez-politikasi': {
      title: t.pageMeta.cookiePolicy,
      currentText: t.pageMeta.cookiePolicy,
      to: '/cerez-politikasi',
    },
    '/yasal-uyari': {
      title: t.pageMeta.legalNotice,
      currentText: t.pageMeta.legalNotice,
      to: '/yasal-uyari',
    },
    '/ekibimiz': {
      title: t.pageMeta.team,
      currentText: t.pageMeta.team,
      to: '/ekibimiz',
    },
    '/hizmetlerimiz': {
      title: t.pageMeta.services,
      currentText: t.pageMeta.services,
      to: '/hizmetlerimiz',
    },
    '/referanslar': {
      title: t.pageMeta.references,
      currentText: t.pageMeta.references,
      to: '/referanslar',
    },
    '/makaleler': {
      title: t.pageMeta.articles,
      currentText: t.pageMeta.articles,
      to: '/makaleler',
    },
    '/iletisim': {
      title: t.pageMeta.contact,
      currentText: t.pageMeta.contact,
      to: '/iletisim',
    },
  }

  const m = metaMap[normalizedPathname] || metaMap['/']

  // 1. Ekibimiz detay eşleşmesi: /ekibimiz/:slug
  const teamMatch = normalizedPathname.match(/^\/ekibimiz\/(.+)$/)
  const teamMember = teamMatch
    ? TEAM_MEMBERS.find((member) => member.slug === teamMatch[1])
    : null

  // 2. Hizmet detay eşleşmesi: /hizmetlerimiz/:slug
  const detailMatch = normalizedPathname.match(/^\/hizmetlerimiz\/(.+)$/)
  const service = detailMatch
    ? getServiceBySlug(detailMatch[1], locale)
    : null

  const articleMatch = normalizedPathname.match(/^\/makaleler\/(.+)$/)
  const article = articleMatch
    ? getArticleBySlug(articleMatch[1], locale)
    : null

  // Başlık öncelik sırası: Dışarıdan Prop -> Ekip Üyesi -> Hizmet -> Standart Eşleşme
  const activeTitle =
    customTitle || title || teamMember?.name || service?.title || article?.title

  const header = activeTitle
    ? {
        title: activeTitle,
        currentText: activeTitle,
        to: normalizedPathname,
      }
    : m

  return (
    <>
      <PageHeader
        title={header.title}
        bg={BG}
        homeText={t.pageMeta.home}
        currentText={header.currentText}
        homeTo={localizePath('/')}
        currentTo={localizePath(header.to)}
      />

      <style>{`
        .page-header {
          background-color: #0b1b33;
        }

        .page-header .overlay {
          display: none;
        }

        .page-header .bg-img {
          background-position: center right;
        }

        .page-header .page-header-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 100vw;
          height: 100%;
          transform: translateX(-50%);
          background: radial-gradient(
            ellipse at center,
            rgba(11, 27, 51, 0.55) 0%,
            rgba(11, 27, 51, 0.26) 45%,
            rgba(11, 27, 51, 0) 74%
          );
          z-index: -1;
          pointer-events: none;
        }

        @media only screen and (max-width: 992px) {
          .page-header .bg-img {
            background-position: center;
          }

          .page-header .page-header-content::before {
            background: radial-gradient(
              ellipse at center,
              rgba(11, 27, 51, 0.62) 0%,
              rgba(11, 27, 51, 0.32) 50%,
              rgba(11, 27, 51, 0) 80%
            );
          }
        }
      `}</style>
    </>
  )
}
