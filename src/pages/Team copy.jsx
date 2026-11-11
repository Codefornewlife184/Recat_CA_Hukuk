import React, { useEffect, useMemo } from 'react'
import AutoPageHeader from '../components/AutoPageHeader.jsx'
import Spacer from '../components/Spacer.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { teamContent } from '../data/teamContent.js'
import { notifyPageMounted } from '../utils/pageMounted.js'

function getInitials(name) {
  return String(name || '')
    .replace(/^(Av\.|Atty\.|المحامي)\s*/i, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toLocaleUpperCase('tr-TR')
}

export default function Team() {
  const { locale, t, localizePath } = useLocale()

  useEffect(() => {
    notifyPageMounted()
  }, [locale])

  const content = useMemo(
    () => teamContent[locale] || teamContent.tr,
    [locale]
  )

  return (
    <div className="team-page">
      <AutoPageHeader />
      <Spacer size="md" />

      <section className="hay-section pt-60 pb-130">
        <div className="container container-2">
          <div className="section-heading text-center">
            <h4 className="sub-heading">{t.team.subtitle}</h4>
            <h2 className="section-title">{t.team.title}</h2>
          </div>

          {/* BÜRO TANITIMI */}
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="about-text text-center team-intro">
                {content.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* AVUKATLAR */}
          <div className="row g-4 justify-content-center team-grid">
            {content.lawyers.map((lawyer) => (
              <div key={lawyer.name} className="col-lg-4 col-md-6">
                <article className="team-card">
                  <div className="team-avatar">
                    <span>{getInitials(lawyer.name)}</span>
                    <i className="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div className="team-body">
                    <h3 className="team-name">{lawyer.name}</h3>
                    <span className="team-role">
                      {lawyer.role || t.team.roleLabel}
                    </span>
                    <p className="team-bio">{lawyer.bio || t.team.emptyBio}</p>
                  </div>
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
                {t.cta.contact}
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
