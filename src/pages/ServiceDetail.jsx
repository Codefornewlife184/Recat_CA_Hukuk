import React, { useEffect, useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AutoPageHeader from '../components/AutoPageHeader.jsx'
import Spacer from '../components/Spacer.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { getServiceBySlug } from '../data/servicesContent.js'
import { notifyPageMounted } from '../utils/pageMounted.js'
import { usePageSeo } from '../utils/seo.js'

function splitParagraphs(text) {
  return String(text || '')
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const { locale, t, localizePath } = useLocale()

  const service = useMemo(
    () => getServiceBySlug(slug, locale),
    [slug, locale]
  )

  useEffect(() => {
    notifyPageMounted()
  }, [locale, slug])

  if (!service) {
    return <Navigate to={localizePath('/hizmetlerimiz', locale)} replace />
  }

  const introParagraphs = splitParagraphs(service.introText)

  usePageSeo({
    locale,
    pathname: `/hizmetlerimiz/${slug}`,
    title: service.title,
    description: introParagraphs[0] || service.introTitle || t.services.subtitle,
  })

  return (
    <div className="services-page service-detail-page">
      <AutoPageHeader />
      <Spacer size="md" />

      <section className="hay-section pt-60 pb-130">
        <div className="container container-2">
          {/* HİZMET BAŞLIĞI */}
          <div className="service-detail-head">
            <span className="service-detail-icon">
              <i className={service.icon}></i>
            </span>
            <h1 className="service-detail-title">{service.title}</h1>
            {service.introTitle ? (
              <h2 className="service-detail-subtitle">{service.introTitle}</h2>
            ) : null}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about-text service-detail-text">
                {introParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* ALT BAŞLIKLAR — masaüstünde yan yana iki blok */}
          {service.sections?.length ? (
            <div className="row g-4 service-detail-grid">
              {service.sections.map((section) => (
                <div key={section.title} className="col-lg-6">
                  <article className="service-detail-block">
                    <h3 className="service-detail-block-title">
                      {section.title}
                    </h3>
                    <p className="service-detail-block-text">{section.text}</p>
                  </article>
                </div>
              ))}
            </div>
          ) : null}

          {/* LİSTELİ HİZMETLER (Arabuluculuk, Tahkim) */}
          {service.list?.length ? (
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {service.listIntro ? (
                  <p className="service-detail-list-intro">{service.listIntro}</p>
                ) : null}

                <ul className="legal-list">
                  {service.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                {service.outro ? (
                  <p className="legal-block-text">{service.outro}</p>
                ) : null}
              </div>
            </div>
          ) : null}

          {/* BİLGİLENDİRME NOTU */}
          {service.note ? (
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="legal-note">
                  <i className="fa-solid fa-circle-info"></i>
                  <span>{service.note}</span>
                </div>
              </div>
            </div>
          ) : null}

          {/* SAYFA SONU CTA */}
          <div className="about-cta">
            <div className="about-cta-inner">
              <div className="about-cta-text">
                <h3>{t.about.ctaTitle}</h3>
                <p>{t.about.ctaText}</p>
              </div>
              <div className="about-cta-actions">
                <Link
                  to={localizePath('/hizmetlerimiz')}
                  className="tl-primary-btn white-btn"
                >
                  {t.cta.allServices}
                </Link>
                <a
                  href={localizePath('/iletisim')}
                  className="tl-primary-btn white-btn"
                >
                  {t.cta.contact}
                  <span className="icon">
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
