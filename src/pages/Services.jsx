import React, { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import AutoPageHeader from '../components/AutoPageHeader.jsx'
import Spacer from '../components/Spacer.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { getServices } from '../data/servicesContent.js'
import { notifyPageMounted } from '../utils/pageMounted.js'
import { usePageSeo } from '../utils/seo.js'

export default function Services({ showHeader = true }) {
  const { locale, t, localizePath } = useLocale()

  useEffect(() => {
    notifyPageMounted()
  }, [locale])

  const services = useMemo(() => getServices(locale), [locale])

  usePageSeo({
    locale,
    pathname: '/hizmetlerimiz',
    title: showHeader ? t.pageMeta.services : undefined,
    description: showHeader ? t.services.subtitle : undefined,
  })

  return (
    <div className="services-page">
      {showHeader ? <AutoPageHeader /> : null}
      {showHeader ? <Spacer size="md" /> : null}

      <section className="hay-section pt-60 pb-130">
        <div className="container container-2">
          <div className="section-heading text-center" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <h4 className="sub-heading">{t.services.subtitle}</h4>
            <h2 className="section-title">{t.services.title}</h2>
          </div>

          {/* Hizmet kartları — masaüstünde yan yana iki blok */}
          <div className="row g-4 services-grid">
            {services.map((service) => (
              <div key={service.slug} className="col-lg-6">
                <Link
                  to={localizePath(`/hizmetlerimiz/${service.slug}`)}
                  className="service-card"
                  title={service.title}
                >
                  <span className="service-card-icon">
                    <i className={service.icon}></i>
                  </span>

                  <span className="service-card-body">
                    <span className="service-card-title">{service.title}</span>
                    <span className="service-card-text">
                      {service.introText || ''}
                    </span>
                    <span className="service-card-more">
                      {t.cta.detail}
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>

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
