import React, { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import AutoPageHeader from '../components/AutoPageHeader.jsx'
import Spacer from '../components/Spacer.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { getArticles } from '../data/articlesContent.js'
import { notifyPageMounted } from '../utils/pageMounted.js'

export default function Articles() {
  const { locale, t, localizePath } = useLocale()

  useEffect(() => {
    notifyPageMounted()
  }, [locale])

  const articles = useMemo(() => getArticles(locale), [locale])

  return (
    <div className="services-page articles-page">
      <AutoPageHeader />
      <Spacer size="md" />

      <section className="hay-section pt-60 pb-130">
        <div className="container container-2">
          <div
            className="section-heading text-center"
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <h4 className="sub-heading">{t.articles.listBadge}</h4>
            <h2 className="section-title">{t.articles.listHeading}</h2>
          </div>

          <div className="row g-4 services-grid">
            {articles.map((article, index) => (
              <div key={`${article.slug}-${index}`} className="col-lg-4">
                <Link
                  to={localizePath(`/makaleler/${article.slug}`)}
                  className="service-card article-card"
                  title={article.title}
                >
                  <span className="service-card-icon">
                    <i className={article.icon || 'fa-solid fa-scale-balanced'}></i>
                  </span>

                  <span className="service-card-body">
                    <span className="service-card-title">{article.title}</span>
                    <span className="service-card-text">
                      {article.summary || ''}
                    </span>
                    <span className="service-card-more">
                      {t.articles.readMore}
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
                <h3>{t.articles.ctaTitle}</h3>
                <p>{t.articles.ctaText}</p>
              </div>
              <div className="about-cta-actions">
                <Link
                  to={localizePath('/makaleler')}
                  className="tl-primary-btn white-btn"
                >
                  {t.articles.allArticles}
                  <span className="icon">
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
                <Link
                  to={localizePath('/iletisim')}
                  className="tl-primary-btn white-btn"
                >
                  {t.cta.contact}
                  <span className="icon">
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
