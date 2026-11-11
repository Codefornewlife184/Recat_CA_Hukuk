import React, { useEffect, useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AutoPageHeader from '../components/AutoPageHeader.jsx'
import Spacer from '../components/Spacer.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { getArticleBySlug } from '../data/articlesContent.js'
import { notifyPageMounted } from '../utils/pageMounted.js'

function splitParagraphs(text) {
  return String(text || '')
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

export default function ArticleDetail() {
  const { slug } = useParams()
  const { locale, t, localizePath } = useLocale()

  const article = useMemo(
    () => getArticleBySlug(slug, locale),
    [slug, locale]
  )

  useEffect(() => {
    notifyPageMounted()
  }, [locale, slug])

  if (!article) {
    return <Navigate to={localizePath('/makaleler', locale)} replace />
  }

  const introParagraphs = splitParagraphs(article.introText)

  return (
    <div className="services-page service-detail-page article-detail-page">
      <AutoPageHeader />
      <Spacer size="md" />

      <section className="hay-section pt-60 pb-130">
        <div className="container container-2">
          {/* MAKALE BAŞLIĞI */}
          <div className="service-detail-head text-center">
            <span className="service-detail-icon">
              <i className={article.icon || 'fa-solid fa-newspaper'}></i>
            </span>
            <h1 className="service-detail-title">{article.title}</h1>
          </div>

          {/* GİRİŞ METNİ */}
          {introParagraphs.length > 0 && (
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="about-text service-detail-text">
                  {introParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MAKALE ALT BÖLÜMLERİ */}
          {article.sections?.length ? (
            <div className="row g-4 service-detail-grid mt-2">
              {article.sections.map((section) => (
                <div key={section.title} className="col-lg-12">
                  <article className="service-detail-block">
                    <h3 className="service-detail-block-title">
                      {section.title}
                    </h3>
                    <div className="service-detail-block-text">
                      {splitParagraphs(section.text).map((p, idx) => (
                        <p key={idx} style={{ marginBottom: '12px' }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : null}

          {/* BİLGİLENDİRME NOTU */}
          {article.note ? (
            <div className="row justify-content-center mt-4">
              <div className="col-lg-10">
                <div className="legal-note">
                  <i className="fa-solid fa-circle-info"></i>
                  <span>{article.note}</span>
                </div>
              </div>
            </div>
          ) : null}

          <div className="about-cta mt-5">
            <div className="about-cta-inner">
              <div className="about-cta-text">
                <h3>{t.articles.otherArticlesTitle}</h3>
                <p>{t.articles.otherArticlesText}</p>
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
