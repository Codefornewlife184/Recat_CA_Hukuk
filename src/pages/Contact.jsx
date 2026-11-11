import React, { useEffect } from 'react'
import AutoPageHeader from '../components/AutoPageHeader.jsx'
import Spacer from '../components/Spacer.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { getWhatsappUrl, siteInfo } from '../data/siteInfo.js'
import { notifyPageMounted } from '../utils/pageMounted.js'
import { usePageSeo } from '../utils/seo.js'

const CONTACT_IMAGE = '/assets/img/law/iletisim.webp'

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.9130932511753!2d28.97581529205341!3d40.210996094589916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1557abcf0e73%3A0x1c4ae50c28aa1591!2zw4dha21hayAmIEFrYnVsdXQgSHVrdWsgdmUgRGFuxLHFn21hbmzEsWs!5e0!3m2!1str!2str!4v1793950941727!5m2!1str!2str'

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="35" height="35" aria-hidden="true" focusable="false">
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="35" height="35" aria-hidden="true" focusable="false">
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="35" height="35" aria-hidden="true" focusable="false">
      <rect
        x="3"
        y="5.5"
        width="18"
        height="13"
        rx="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 7.5l8 5.5 8-5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="35" height="35" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7.5V12l3.2 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function renderTitle(text, highlight) {
  if (!text) return null
  if (!highlight) return text

  const index = text
    .toLocaleLowerCase('tr-TR')
    .indexOf(highlight.toLocaleLowerCase('tr-TR'))

  if (index === -1) return text

  return (
    <>
      {text.slice(0, index)}
      <span className="contact-title-accent">
        {text.slice(index, index + highlight.length)}
      </span>
      {text.slice(index + highlight.length)}
    </>
  )
}

export default function Contact({ showHeader = true }) {
  const { locale, t } = useLocale()
  const addressText = siteInfo.addressFull[locale] || siteInfo.addressFull.tr
  const phoneItems = siteInfo.phones || []

  usePageSeo({
    locale,
    pathname: '/iletisim',
    title: showHeader ? t.pageMeta.contact : undefined,
    description: showHeader
      ? locale === 'en'
        ? `Contact ${siteInfo.brandEn} by phone or e-mail for legal support in Bursa.`
        : locale === 'ar'
          ? `تواصلوا مع ${siteInfo.brandAr} عبر الهاتف أو البريد الإلكتروني للحصول على دعم قانوني في بورصة.`
          : `${siteInfo.brand} ile Bursa'da hukuki destek icin telefon veya e-posta uzerinden iletisime gecebilirsiniz.`
      : undefined,
  })

  useEffect(() => {
    notifyPageMounted()
  }, [locale])

  return (
    <div className="contact-page">
      {showHeader ? <AutoPageHeader /> : null}
      {showHeader ? <Spacer size="md" /> : null}

      <section className="contact-section">
        <div className="container container-2">
          <div className="contact-head">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-dot" aria-hidden="true"></span>
              {t.contact.title}
            </span>

            <h2 className="contact-title">
              {renderTitle(
                t.contact.subtitle,
                t.contact.subtitleHighlight
              )}
            </h2>
          </div>

          <div className="contact-cards">
            <article className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">
                <PinIcon />
              </span>
              <div className="contact-card-body">
                <span className="contact-card-label" style={{ fontFamily: 'Poppins, sans-serif !important' }}>
                  {t.contact.addressLabel}
                </span>
                <p className="contact-card-value">{addressText}</p>
                <p className="contact-card-value contact-card-value-muted">
                  {siteInfo.address[locale] || siteInfo.address.tr}
                </p>
              </div>
            </article>

            <article className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">
                <PhoneIcon />
              </span>
              <div className="contact-card-body">
                <span className="contact-card-label" style={{ fontFamily: 'Poppins, sans-serif !important' }}>
                  {t.contact.phoneLabel}
                </span>
                {phoneItems.map((phone) => (
                  <p key={phone.href} className="contact-card-value">
                    <a href={phone.href}>{phone.display}</a>
                  </p>
                ))}
              </div>
            </article>

            <article className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">
                <MailIcon />
              </span>
              <div className="contact-card-body">
                <span className="contact-card-label" style={{ fontFamily: 'Poppins, sans-serif !important' }}>
                  {t.contact.emailLabel}
                </span>
                <p className="contact-card-value">
                  <a href={`mailto:${siteInfo.email.toLowerCase()}`}>{siteInfo.email.toLowerCase()}</a>
                </p>
              </div>
            </article>

            <article className="contact-card">
              <span className="contact-card-icon" aria-hidden="true">
                <ClockIcon />
              </span>
              <div className="contact-card-body">
                <span className="contact-card-label" style={{ fontFamily: 'Poppins, sans-serif !important' }}>
                  {t.contact.hoursLabel}
                </span>
                <p className="contact-card-value">{t.contact.hours}</p>
              </div>
            </article>
          </div>

          <div className="contact-layout">
            <figure className="contact-figure">
              <img
                src={CONTACT_IMAGE}
                alt={`${siteInfo.brand} ${t.contact.title}`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.parentElement.style.display = 'none'
                }}
              />
            </figure>

            <div className="contact-form-wrap">
              <form
                action="/mail.php"
                method="post"
                id="ajax_contact"
                className="contact-form"
              >
                <input type="hidden" name="locale" value={locale} />
                <div className="contact-form-grid">
                  <div className="contact-field">
                    <label className="contact-field-label" htmlFor="fullname">
                      {t.contact.form.name} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="form-control"
                      placeholder={t.contact.form.namePh}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label className="contact-field-label" htmlFor="phone">
                      {t.contact.form.phone} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder={t.contact.form.phonePh}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label className="contact-field-label" htmlFor="email">
                      {t.contact.form.email} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder={t.contact.form.emailPh}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label className="contact-field-label" htmlFor="service">
                      {t.contact.form.subject} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="service"
                      name="service"
                      className="form-control"
                      placeholder={t.contact.form.subjectPh}
                      required
                    />
                  </div>

                  <div className="contact-field contact-field-full">
                    <label className="contact-field-label" htmlFor="message">
                      {t.contact.form.message} <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      cols="30"
                      rows="6"
                      className="form-control contact-textarea"
                      placeholder={t.contact.form.messagePh}
                      required
                    ></textarea>
                  </div>
                </div>

                <div
                  id="form-messages"
                  className="alert contact-form-message"
                  role="alert"
                  style={{ display: 'none' }}
                ></div>

                <div className="contact-submit">
                  <button id="submit" className="contact-submit-btn" type="submit">
                    <span>{t.contact.form.submit}</span>
                    <span className="contact-submit-icon" aria-hidden="true">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map" aria-label={t.contact.addressLabel}>
        <iframe
          className="contact-map-frame"
          src={MAP_EMBED_URL}
          title={`${siteInfo.brand} ${t.contact.addressLabel}`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>

      <style>{`
        /* SERT KURAL: Tüm etiket fontlarını kesin olarak Poppins yapar */
        .contact-page span.contact-card-label {
          font-family: 'Poppins', sans-serif !important;
        }

        .contact-page .contact-section {
          padding: 40px 0 130px;
          background-color: #f5f5f3;
        }

        .contact-page .contact-head {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
          margin: 0 auto 64px;
        }

        .contact-page .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 20px;
          margin-bottom: 28px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #121758;
          background-color: #ffffff;
          border: 1px solid rgba(11, 27, 51, 0.12);
          border-radius: 999px;
        }

        .contact-page .contact-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #caa05c;
        }

        .contact-page .contact-title {
          margin: 0;
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: -0.02em;
          color: #121758;
          text-wrap: balance;
        }

        .contact-page .contact-title-accent {
          color: #caa05c;
        }

        .contact-page .contact-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-bottom: 72px;
        }

        .contact-page .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 22px;
          padding: 30px 32px;
          background-color: #ffffff;
          border: 1px solid #e9e9e4;
          border-radius: 24px;
          transition: border-color 0.25s ease;
        }

        .contact-page .contact-card:hover {
          border-color: rgba(202, 160, 92, 0.55);
        }

        .contact-page .contact-card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background-color: #121758;
          color: #caa05c;
        }

        .contact-page .contact-card-body {
          min-width: 0;
        }

        .contact-page .contact-card-label {
          display: block;
          margin-bottom: 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #121758;
          font-family: 'Poppins', sans-serif !important;
        }

        .contact-page .contact-card-value {
          margin: 0 0 6px;
          font-size: 16px;
          line-height: 1.6;
          color: #121758;
        }

        .contact-page .contact-card-value:last-child {
          margin-bottom: 0;
        }

        .contact-page .contact-card-value-muted {
          font-size: 15px;
          color: #6b7280;
        }

        .contact-page .contact-card-value a {
          color: inherit;
          transition: color 0.25s ease;
        }

        .contact-page .contact-card-value a:hover,
        .contact-page .contact-card-value a:focus-visible {
          color: #caa05c;
        }

        .contact-page .contact-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 64px;
          align-items: start;
        }

        .contact-page .contact-form-wrap {
          padding-top: 4px;
        }

        .contact-page .contact-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px 24px;
        }

        .contact-page .contact-field-full {
          grid-column: 1 / -1;
        }

        .contact-page .contact-field-label {
          display: block;
          margin-bottom: 10px;
          font-size: 14px;
          font-weight: 700;
          color: #121758;
        }

        .contact-page .contact-field-label span {
          color: #caa05c;
        }

        .contact-page .contact-form-wrap .form-control {
          width: 100%;
          height: 56px;
          padding: 0 24px;
          font-size: 15px;
          color: #121758;
          background-color: #ffffff;
          border: 1px solid #e4e4e0;
          border-radius: 999px;
          box-shadow: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .contact-page .contact-form-wrap textarea.form-control {
          height: auto;
          min-height: 170px;
          padding: 20px 24px;
          line-height: 1.6;
          border-radius: 28px;
          resize: vertical;
        }

        .contact-page .contact-form-wrap .form-control::placeholder {
          color: #a2a6ad;
        }

        .contact-page .contact-form-wrap .form-control:focus {
          outline: none;
          border-color: #caa05c;
          box-shadow: 0 0 0 3px rgba(202, 160, 92, 0.16);
        }

        .contact-page .contact-submit {
          display: flex;
          width: 100%;
          margin-top: 32px;
        }

        .contact-page .contact-form-message {
          margin-top: 20px;
          margin-bottom: -6px;
          padding: 16px 20px;
          border-radius: 18px;
          border: 1px solid transparent;
          font-size: 15px;
          line-height: 1.6;
          font-weight: 500;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .contact-page .contact-form-message.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-page .contact-form-message.alert-success {
          color: #0f5132;
          background: #e7f6ee;
          border-color: rgba(55, 160, 112, 0.28);
        }

        .contact-page .contact-form-message.alert-danger {
          color: #842029;
          background: #fbe9eb;
          border-color: rgba(187, 68, 88, 0.25);
        }

        .contact-page .contact-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          width: 100%;
          padding: 8px 8px 8px 30px;
          font-size: 15px;
          font-weight: 600;
          color: #121758;
          background-color: #ffffff;
          border: 1px solid #e4e4e0;
          border-radius: 999px;
          cursor: pointer;
          transition: border-color 0.25s ease, color 0.25s ease;
        }

        .contact-page .contact-submit-btn:hover,
        .contact-page .contact-submit-btn:focus-visible {
          background-color: #121758;
        }

        .contact-page .contact-submit-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #caa05c;
          color: #ffffff;
          font-size: 14px;
          transition: transform 0.3s ease;
        }

        .contact-page .contact-submit-icon i {
          transform: rotate(-45deg);
        }

        .contact-page .contact-submit-btn:hover,
        .contact-page .contact-submit-btn:focus-visible {
          border-color: #caa05c;
          color: #caa05c;
        }

        .contact-page .contact-submit-btn:hover .contact-submit-icon,
        .contact-page .contact-submit-btn:focus-visible .contact-submit-icon {
          transform: translateX(4px);
        }

        .contact-page .contact-figure {
          margin: 0;
          overflow: hidden;
          border-radius: 28px;
        }

        .contact-page .contact-figure img {
          display: block;
          width: 100%;
          min-height: 545px;
          object-fit: cover;
        }

        .contact-page .contact-map {
          position: relative;
          width: 100%;
          line-height: 0;
          border-top: 3px solid #caa05c;
          background-color: #121758;
        }

        .contact-page .contact-map-frame {
          display: block;
          width: 100%;
          height: 500px;
          border: 0;
          filter: grayscale(0.15) contrast(1.02);
        }

        @media (max-width: 991px) {
          .contact-page .contact-section {
            padding: 20px 0 90px;
          }

          .contact-page .contact-head {
            margin-bottom: 44px;
          }

          .contact-page .contact-cards {
            gap: 18px;
            margin-bottom: 48px;
          }

          .contact-page .contact-card {
            padding: 24px;
            gap: 18px;
          }

          .contact-page .contact-card-icon {
            width: 50px;
            height: 50px;
          }

          .contact-page .contact-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 44px;
          }

          .contact-page .contact-figure img {
            min-height: 320px;
          }

          .contact-page .contact-map-frame {
            height: 545px;
          }
        }

        @media (max-width: 575px) {
          .contact-page .contact-cards {
            grid-template-columns: minmax(0, 1fr);
          }

          .contact-page .contact-card {
            padding: 22px;
          }

          .contact-page .contact-form-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
          }

          .contact-page .contact-form-wrap .form-control {
            height: 52px;
            padding: 0 20px;
          }

          .contact-page .contact-submit-btn {
            padding-left: 24px;
          }

          .contact-page .contact-form-message {
            margin-top: 18px;
            padding: 14px 16px;
            font-size: 14px;
          }

          .contact-page .contact-map-frame {
            height: 360px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-page .contact-card,
          .contact-page .contact-submit-btn,
          .contact-page .contact-submit-icon,
          .contact-page .contact-form-wrap .form-control {
            transition: none;
          }
        }
      `}</style>
    </div>
  )
}
