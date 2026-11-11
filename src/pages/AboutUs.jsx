import React, { useEffect, useMemo } from 'react'
import AutoPageHeader from '../components/AutoPageHeader.jsx'
import Spacer from '../components/Spacer.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { aboutContent } from '../data/aboutContent.js'
import { notifyPageMounted } from '../utils/pageMounted.js'
import { usePageSeo } from '../utils/seo.js'

export default function AboutUs({ showHeader = true }) {
  const { locale, t, localizePath } = useLocale()

  useEffect(() => {
    notifyPageMounted()
  }, [locale])

  const content = useMemo(
    () => aboutContent[locale] || aboutContent.tr,
    [locale]
  )

  usePageSeo({
    locale,
    pathname: '/hakkimizda',
    title: showHeader ? t.pageMeta.about : undefined,
    description: showHeader ? content.paragraphs[0] : undefined,
  })

  return (
    <div className={`about-page${locale === 'ar' ? ' about-page--ar' : ''}`}>
      {showHeader ? <AutoPageHeader /> : null}
      {showHeader ? <Spacer size="md" /> : null}

      {/* HAKKIMIZDA */}
      <section className="hay-section about-intro-section pt-60 pb-70">
        <div className="container container-2">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-heading text-center">
                <h4 className="sub-heading">{content.badge}</h4>
                <h2 className="section-title">{content.title}</h2>
              </div>
              <div className="about-text">
                {content.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <div className="section-heading text-center">
                <img src="/assets/img/law/about-us.webp" alt={content.title} style={{ borderRadius: '23px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÇALIŞMA İLKELERİMİZ */}
      <section className="hay-section principles-section pt-0 pb-70">
        <div className="container container-2">
          <div className="section-heading text-center" style={{ justifyContent: 'center' , alignItems: 'center' }}>
            <h2 className="section-title">{content.principlesTitle}</h2>
            <p className="section-subtitle" style={{ marginBottom: '0px' }}>{t.about.principlesSubtitle}</p>
          </div>

          <div className="row g-4">
            {content.principles.map((principle) => (
              <div
                key={principle.number}
                className="col-lg-3 col-md-6"
              >
                <article className="principle-card">
                  <span className="principle-number">
                    {principle.number}
                  </span>
                  <h4 className="principle-title">{principle.title}</h4>
                  <p className="principle-desc">{principle.description}</p>
                </article>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="about-cta">
            <div className="about-cta-inner">
              <div className="about-cta-text">
                <h3>{t.about.ctaTitle}</h3>
                <p>{t.about.ctaText}</p>
              </div>
              <a
                href={localizePath('/iletisim')}
                className="tl-primary-btn white-btn"
              >
                {t.cta.contactLong}
                <span className="icon">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
