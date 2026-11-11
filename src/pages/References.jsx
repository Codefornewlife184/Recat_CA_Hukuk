import React, { useEffect, useMemo } from 'react'
import AutoPageHeader from '../components/AutoPageHeader.jsx'
import Spacer from '../components/Spacer.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { referenceLogos, referencesContent } from '../data/referencesContent.js'
import { notifyPageMounted } from '../utils/pageMounted.js'
import { usePageSeo } from '../utils/seo.js'

export default function References({ showHeader = true }) {
  const { locale, t } = useLocale()
  const content = useMemo(
    () => referencesContent[locale] || referencesContent.tr,
    [locale]
  )

  usePageSeo({
    locale,
    pathname: '/referanslar',
    title: showHeader ? t.pageMeta.references : undefined,
    description: showHeader ? content.intro : undefined,
  })

  useEffect(() => {
    notifyPageMounted()
  }, [locale])

  return (
    <div className="references-page">
      {showHeader ? <AutoPageHeader /> : null}
      {showHeader ? <Spacer size="md" /> : null}

      <section className="hay-section pt-60 pb-130">
        <div className="container container-2">
          <div
            className="section-heading text-center"
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <h4 className="sub-heading">{content.badge}</h4>
            <h2 className="section-title">{content.title}</h2>
            <p className="mt-3" style={{ maxWidth: '820px' }}>
              {content.intro}
            </p>
          </div>

          <div className="row g-4 mt-2">
            {referenceLogos.map((logo, index) => (
              <div key={logo} className="col-lg-3 col-md-4 col-6">
                <div className="reference-logo-card">
                  <img
                    src={logo}
                    alt={`${content.title} ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .reference-logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 170px;
          padding: 28px;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid rgba(18, 23, 88, 0.08);
          box-shadow: 0 12px 32px rgba(18, 23, 88, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .reference-logo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(18, 23, 88, 0.1);
        }

        .reference-logo-card img {
          max-width: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.86;
        }

        .reference-logo-card:hover img {
          filter: grayscale(0);
          opacity: 1;
        }
      `}</style>
    </div>
  )
}
