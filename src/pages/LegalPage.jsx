import React, { useEffect, useMemo } from 'react'
import AutoPageHeader from '../components/AutoPageHeader.jsx'
import Spacer from '../components/Spacer.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { legalContent } from '../data/legalContent.js'
import { notifyPageMounted } from '../utils/pageMounted.js'
import { usePageSeo } from '../utils/seo.js'

const META_KEY = {
  kvkk: 'kvkk',
  cerez: 'cookiePolicy',
  yasal: 'legalNotice',
}

function renderBlock(block, index) {
  if (!block) return null

  switch (block.type) {
    case 'h':
      return <h3 key={index} className="legal-block-title">{block.text}</h3>

    case 'p':
      return <p key={index} className="legal-block-text">{block.text}</p>

    case 'note':
      return (
        <div key={index} className="legal-note">
          <i className="fa-solid fa-circle-info"></i>
          <span>{block.text}</span>
        </div>
      )

    case 'ul':
      return (
        <ul key={index} className="legal-list">
          {(block.items || []).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )

    case 'kv':
      return (
        <ul key={index} className="legal-kv">
          {(block.items || []).map((item, i) => (
            <li key={i}>
              <span className="legal-kv-label">{item.label}</span>
              <span className="legal-kv-value">{item.value}</span>
            </li>
          ))}
        </ul>
      )

    default:
      return null
  }
}

export default function LegalPage({ docKey }) {
  const { locale, t } = useLocale()

  useEffect(() => {
    notifyPageMounted()
  }, [locale])

  const doc = useMemo(() => {
    const localized = legalContent[docKey]?.[locale]
    return localized || legalContent[docKey]?.tr
  }, [docKey, locale])

  if (!doc) return null

  const pathMap = {
    kvkk: '/kvkk',
    cerez: '/cerez-politikasi',
    yasal: '/yasal-uyari',
  }

  usePageSeo({
    locale,
    pathname: pathMap[docKey] || '/',
    title: doc.title,
    description: doc.blocks.find((block) => block.type === 'p')?.text || doc.title,
  })

  return (
    <div className="legal-page">
      <AutoPageHeader />
      <Spacer size="md" />

      <section className="hay-section pt-40 pb-130">
        <div className="container container-2">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-heading legal-heading">
                <h4 className="sub-heading">
                  {t.pageMeta[META_KEY[docKey]] || doc.title}
                </h4>
                <h2 className="section-title legal-title">{doc.title}</h2>
              </div>

              <div className="legal-content">
                {doc.blocks.map(renderBlock)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
