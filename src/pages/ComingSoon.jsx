import React, { useEffect } from 'react'
import AutoPageHeader from '../components/AutoPageHeader.jsx'
import Spacer from '../components/Spacer.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { notifyPageMounted } from '../utils/pageMounted.js'

/**
 * Hizmetlerimiz / Makaleler / Dilekçe Örnekleri gibi içeriği
 * sonradan eklenecek sayfalar için ortak, tasarımı koruyan yapı.
 */
export default function ComingSoon({ sectionKey }) {
  const { locale, t, localizePath } = useLocale()
  const section = t[sectionKey]

  useEffect(() => {
    notifyPageMounted()
  }, [locale])

  return (
    <div className="coming-page">
      <AutoPageHeader />
      <Spacer size="md" />

      <section className="hay-section pt-60 pb-130">
        <div className="container container-2">
          <div className="section-heading text-center">
            <h4 className="sub-heading">{section.subtitle}</h4>
            <h2 className="section-title">{section.title}</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="coming-soon-box">
                <div className="coming-soon-icon">
                  <i className="fa-regular fa-file-lines"></i>
                </div>
                <h3>{section.emptyTitle}</h3>
                <p>{section.emptyText}</p>
                <a
                  href={localizePath('/iletisim')}
                  className="tl-primary-btn"
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
