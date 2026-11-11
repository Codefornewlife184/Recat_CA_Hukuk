import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LOCALE_META, SUPPORTED_LOCALES } from '../i18n/config.js'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { getPrimaryPhone, getWhatsappUrl, siteInfo } from '../data/siteInfo.js'
import { getServices } from '../data/servicesContent.js'
import SiteSearch from './SiteSearch.jsx'

const BASE_NAV = [
  { key: 'home', path: '/' },
  {
    key: 'corporate',
    path: '/hakkimizda',
    children: [
      { key: 'about', path: '/hakkimizda' },
      { key: 'kvkk', path: '/kvkk' },
      { key: 'cookiePolicy', path: '/cerez-politikasi' },
      { key: 'legalNotice', path: '/yasal-uyari' },
    ],
  },
  { key: 'team', path: '/ekibimiz' },
  { key: 'services', path: '/hizmetlerimiz' },
  { key: 'references', path: '/referanslar' },
  { key: 'articles', path: '/makaleler' },
  { key: 'contact', path: '/iletisim' },
]

export default function Header() {
  const { locale, t, localizePath } = useLocale()
  const location = useLocation()
  const services = useMemo(() => getServices(locale), [locale])
  const primaryPhone = getPrimaryPhone()

  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileLangOpen, setMobileLangOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null)

  const currentLocalizedPath = `${location.pathname}${location.search}${location.hash}`

  const navItems = useMemo(
    () =>
      BASE_NAV.map((item) =>
        item.key === 'services'
          ? {
              ...item,
              children: services.map((service) => ({
                key: service.slug,
                label: service.title,
                path: `/hizmetlerimiz/${service.slug}`,
              })),
            }
          : item
      ),
    [services]
  )
  const toTitleCase = (value = '') => {
    const currentLocale = locale === 'ar' ? 'ar' : locale === 'en' ? 'en-US' : 'tr-TR'

    return String(value)
      .trim()
      .toLocaleLowerCase(currentLocale)
      .split(/\s+/)
      .map((word) => {
        if (!word) return ''
        return word.charAt(0).toLocaleUpperCase(currentLocale) + word.slice(1)
      })
      .join(' ')
  }

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      window.scrollTo(0, 0)
    }
  }

  const closeAllOverlays = () => {
    setSearchOpen(false)
    setMobileMenuOpen(false)
    setMobileLangOpen(false)
    setExpandedMobileMenu(null)
    document.body.style.overflow = ''
    document.body.classList.remove('cah-overlay-open')
  }

  const openMobileMenu = () => {
    setMobileMenuOpen(true)
    document.body.style.overflow = 'hidden'
    document.body.classList.add('cah-overlay-open')
  }

  const openSearch = () => {
    setSearchOpen(true)
    setMobileMenuOpen(false)
    setMobileLangOpen(false)
    setExpandedMobileMenu(null)
    document.body.style.overflow = 'hidden'
    document.body.classList.add('cah-overlay-open')
  }

  const toggleMobileSubmenu = (key) => {
    setExpandedMobileMenu((prev) => (prev === key ? null : key))
  }

  useEffect(() => {
    closeAllOverlays()
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18)
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeAllOverlays()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
      document.body.classList.remove('cah-overlay-open')
    }
  }, [])

  return (
    <>
      <style>{`
        .cah-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          padding-top: 12px;
          padding-bottom: 12px;
          z-index: 1100;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          background: ${isScrolled ? 'rgba(12, 27, 51, 0.95)' : 'rgba(12, 27, 51, 0.38)'};
          backdrop-filter: blur(12px);
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
        }

        .cah-header-inner {
          display: grid;
          grid-template-columns: minmax(300px, 1.05fr) minmax(0, 1.12fr) auto;
          align-items: center;
          gap: 24px;
          min-height: 112px;
          width: 100%;
          padding: 14px clamp(24px, 4vw, 68px);
          transition: min-height 0.25s ease, padding 0.25s ease;
        }

        .cah-logo img {
          width: auto;
          max-width: 100%;
          height: ${isScrolled ? '78px' : '92px'};
          object-fit: contain;
          transition: height 0.25s ease;
        }

        .cah-nav {
          display: flex;
          justify-content: flex-start;
          padding-left: clamp(10px, vw, 26px);
        }

        .cah-nav > ul {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: clamp(14px, 1vw, 24px);
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .cah-nav li {
          position: relative;
        }

        .cah-nav a,
        .cah-nav button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          text-decoration: none;
          background: transparent;
          border: 0;
          font-size: 16px;
          font-weight: 600;
          padding: 12px 0;
          transition: color 0.2s ease;
        }

        .cah-nav-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .cah-nav-caret {
          font-size: 12px;
          opacity: 0.88;
          transform: translateY(1px);
        }

        .cah-nav a:hover,
        .cah-nav button:hover,
        .cah-nav a.active {
          color: #cca645;
        }

        .cah-submenu {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 260px;
          max-width: 700px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
          padding: 16px;
          border-radius: 22px;
          background: #fff;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
        }

        .cah-submenu.services-grid {
          width: min(760px, 82vw);
          grid-template-columns: 1fr 1fr;
        }

        .cah-nav li:hover > .cah-submenu {
          opacity: 1;
          visibility: visible;
        }

        .cah-submenu a {
          color: #11233f;
          border-radius: 12px;
          padding: 10px 12px;
          line-height: 1.35;
        }

        .cah-submenu a:hover {
          background: rgba(204, 166, 69, 0.1);
          color: #b88d23;
        }

        .cah-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: flex-end;
          position: relative;
          margin-left: 8px;
        }

        .cah-action,
        .cah-language-button,
        .cah-mobile-trigger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          min-width: 42px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid #cca645;
          background: #cca645;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .cah-action:hover,
        .cah-language-button:hover,
        .cah-mobile-trigger:hover {
          background: #b88d23;
          border-color: #b88d23;
          color: #fff;
          transform: translateY(-1px);
        }

        .cah-whatsapp {
          background: #cca645 !important;
          border-color: #cca645 !important;
        }

        .cah-whatsapp:hover {
          background: #b88d23;
        }

        .cah-language {
          position: relative;
        }

        .cah-language-menu {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          width: 180px;
          padding: 10px;
          padding-top:10px;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.22);
          opacity: 0;
          visibility: hidden;
        }

        .cah-language:hover .cah-language-menu {
          opacity: 1;
          visibility: visible;
        }

        .cah-language-menu a {
          display: flex;
          justify-content: space-between;
          color: #11233f;
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 12px;
          font-weight: 600;
        }

        .cah-language-menu a.active,
        .cah-language-menu a:hover {
          background: rgba(204, 166, 69, 0.1);
          color: #b88d23;
        }

        .cah-mobile-trigger {
          display: none;
        }

        .cah-mobile-lang {
          display: none;
          position: relative;
        }

        .cah-mobile-lang-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          width: 184px;
          padding: 10px;
          border-radius: 18px;
          background: rgba(12, 27, 51, 0.96);
          border: 1px solid rgba(204, 166, 69, 0.2);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
        }

        .cah-mobile-lang-menu a {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 38px;
          border-radius: 12px;
          text-decoration: none;
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          font-size: 13px;
          font-weight: 700;
        }

        .cah-mobile-lang-menu a.active {
          background: #cca645;
        }

        .cah-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 12, 25, 0.7);
          backdrop-filter: blur(5px);
          z-index: 1200;
        }

        .cah-search-close {
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 50%;
          background: #11233f;
          color: #fff;
        }

        .cah-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(420px, 100vw);
          padding: 24px 20px;
          background: #0f2340;
          z-index: 1210;
          overflow-y: auto;
        }

        .cah-drawer-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .cah-drawer-head img {
          height: 72px;
          width: auto;
        }

        .cah-drawer-nav,
        .cah-drawer-panel {
          display: grid;
          gap: 10px;
        }

        .cah-drawer-link,
        .cah-drawer-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 14px 16px;
          border-radius: 16px;
          border: 0;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.04);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }

        .cah-drawer-toggle.is-open {
          background: linear-gradient(135deg, rgba(204, 166, 69, 0.18), rgba(255, 255, 255, 0.06));
          border-color: rgba(204, 166, 69, 0.22);
          color: #f4d988;
        }

        .cah-drawer-panel {
          padding: 12px;
          border-left: 1px solid rgba(204, 166, 69, 0.22);
          margin-left: 8px;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(204, 166, 69, 0.07));
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }

        .cah-drawer-panel .cah-drawer-link {
          background: #cca645;
          border: 1px solid rgba(204, 166, 69, 0.12);
          color: #0f234f !important;
          font-weight: 500;
          border-radius: 14px;
        }

        .cah-drawer-contact {
          display: grid;
          gap: 10px;
          margin-top: 22px;
          padding-top: 22px;
          border-top: 1px solid rgba(204, 166, 69, 0.2);
        }

        .cah-drawer-contact a {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          text-decoration: none;
        }

        .cah-mobile-languages {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 18px;
        }

        .cah-mobile-languages a {
          text-align: center;
          padding: 10px 0;
          border-radius: 12px;
          text-decoration: none;
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }

        .cah-mobile-languages a.active {
          background: #cca645;
        }

        @media (max-width: 1399px) {
          .cah-header-inner {
            min-height: 104px;
            grid-template-columns: auto 1fr auto;
            padding: 14px 20px;
          }

          .cah-nav,
          .cah-desktop-only {
            display: none;
          }

          .cah-mobile-trigger {
            display: inline-flex;
          }

          .cah-mobile-lang {
            display: inline-flex;
          }

          .cah-logo img {
            height: 84px !important;
          }

          .cah-whatsapp {
            display: none !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1399px) {
          .cah-header {
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .cah-header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 92px;
            gap: 16px;
            padding: 12px clamp(18px, 3vw, 28px);
          }

          .cah-logo {
            flex: 0 0 auto;
            min-width: 0;
          }

          .cah-logo img {
            height: 72px !important;
            max-width: min(100%, 420px);
          }

          .cah-actions {
            flex: 0 0 auto;
            margin-left: auto;
            gap: 10px;
            justify-content: flex-end;
          }

          .cah-mobile-lang {
            display: inline-flex;
            position: relative;
          }

          .cah-action,
          .cah-language-button,
          .cah-mobile-trigger {
            height: 40px;
            min-width: 40px;
            padding: 0 12px;
          }
        }

        @media (max-width: 767px) {
          .cah-header {
            margin-bottom: 50px !important;
          }

          .cah-header-inner {
            min-height: auto;
            grid-template-columns: minmax(0, 1fr);
            justify-items: center;
            gap: 12px;
            padding: 14px 14px 12px;
          }

          .cah-logo {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .cah-logo img {
            height: 78px !important;
          }

          .cah-actions {
            width: 100%;
            justify-content: center;
            gap: 10px;
            margin-left: 0;
          }

          .cah-action,
          .cah-language-button,
          .cah-mobile-trigger {
            height: 42px;
            min-width: 42px;
            padding: 0 12px;
          }

          .cah-mobile-lang-menu {
            width: 168px;
            right: auto;
            left: 50%;
            transform: translateX(-50%);
          }

          .cah-whatsapp {
            display: none !important;
          }

          .cah-actions .cah-whatsapp,
          .cah-actions .cah-desktop-only {
            display: none !important;
          }
        }
      `}</style>

      <header className="cah-header">
        <div className="cah-header-inner">
          <div className="cah-logo">
            <Link to={localizePath('/')} onClick={scrollToTop}>
              <img src="/assets/img/logo/logomo.png" alt={siteInfo.brand} />
            </Link>
          </div>

          <nav className="cah-nav" aria-label="Primary">
            <ul>
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link to={localizePath(item.path)} onClick={scrollToTop}>
                    <span className="cah-nav-label">
                      {t.nav[item.key]}
                      {item.children?.length ? (
                        <i className="fa-solid fa-chevron-down cah-nav-caret"></i>
                      ) : null}
                    </span>
                  </Link>

                  {item.children?.length ? (
                    <div
                      className={`cah-submenu ${
                        item.key === 'services' ? 'services-grid' : ''
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          to={localizePath(child.path)}
                          onClick={scrollToTop}
                        >
                          {item.key === 'services'
                            ? toTitleCase(child.label || t.nav[child.key])
                            : child.label || t.nav[child.key]}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="cah-actions">
            <a
              href={primaryPhone.href}
              className="cah-action cah-desktop-only"
              aria-label={t.cta.callUs}
            >
              <i className="fa-solid fa-phone"></i>
            </a>
            <a
              href={`mailto:${siteInfo.email.toLowerCase()}`}
              className="cah-action cah-desktop-only"
              aria-label={t.contact.emailLabel}
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="cah-action cah-whatsapp cah-desktop-only"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <div className="cah-language cah-desktop-only">
              <button type="button" className="cah-language-button">
                <i className="fa-solid fa-globe"></i>&nbsp;
                <span>{LOCALE_META[locale]?.label}</span>
              </button>
              <div className="cah-language-menu">
                {SUPPORTED_LOCALES.map((languageCode) => (
                  <Link
                    key={languageCode}
                    to={localizePath(currentLocalizedPath, languageCode)}
                    className={locale === languageCode ? 'active' : ''}
                    onClick={scrollToTop}
                  >
                    <span>{LOCALE_META[languageCode].label}</span>
                    <span>{LOCALE_META[languageCode].languageName}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="cah-mobile-lang">
              <button
                type="button"
                className="cah-language-button"
                aria-label="Dil sec"
                onClick={() => setMobileLangOpen((prev) => !prev)}
              >
                <i className="fa-solid fa-globe"></i>&nbsp;
                <span>{LOCALE_META[locale]?.label}</span>
              </button>

              {mobileLangOpen ? (
                <div className="cah-mobile-lang-menu">
                  {SUPPORTED_LOCALES.map((languageCode) => (
                    <Link
                      key={languageCode}
                      to={localizePath(currentLocalizedPath, languageCode)}
                      className={locale === languageCode ? 'active' : ''}
                      onClick={closeAllOverlays}
                    >
                      {LOCALE_META[languageCode].label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <button
              type="button"
              className="cah-action cah-search-trigger"
              aria-label={t.search.title}
              onClick={openSearch}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <button
              type="button"
              className="cah-mobile-trigger"
              aria-label="Menu"
              onClick={openMobileMenu}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      <SiteSearch isOpen={searchOpen} onClose={closeAllOverlays} />

      {mobileMenuOpen ? (
        <>
          <div className="cah-drawer-overlay" onClick={closeAllOverlays}></div>
          <aside className="cah-drawer">
            <div className="cah-drawer-head">
              <Link to={localizePath('/')} onClick={closeAllOverlays}>
                <img src="/assets/img/logo/logomo.png" alt={siteInfo.brand} />
              </Link>
              <button
                type="button"
                className="cah-search-close"
                onClick={closeAllOverlays}
                aria-label={t.search.close}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <nav className="cah-drawer-nav">
              <Link className="cah-drawer-link" to={localizePath('/')} onClick={closeAllOverlays}>
                {t.nav.home}
              </Link>

              <button
                type="button"
                className={`cah-drawer-toggle ${
                  expandedMobileMenu === 'corporate' ? 'is-open' : ''
                }`}
                onClick={() => toggleMobileSubmenu('corporate')}
              >
                <span>{t.nav.corporate}</span>
                <i className={`fa-solid fa-chevron-${expandedMobileMenu === 'corporate' ? 'up' : 'down'}`}></i>
              </button>
              {expandedMobileMenu === 'corporate' ? (
                <div className="cah-drawer-panel">
                  <Link className="cah-drawer-link" to={localizePath('/hakkimizda')} onClick={closeAllOverlays}>{t.nav.about}</Link>
                  <Link className="cah-drawer-link" to={localizePath('/kvkk')} onClick={closeAllOverlays}>{t.nav.kvkk}</Link>
                  <Link className="cah-drawer-link" to={localizePath('/cerez-politikasi')} onClick={closeAllOverlays}>{t.nav.cookiePolicy}</Link>
                  <Link className="cah-drawer-link" to={localizePath('/yasal-uyari')} onClick={closeAllOverlays}>{t.nav.legalNotice}</Link>
                </div>
              ) : null}

              <Link className="cah-drawer-link" to={localizePath('/ekibimiz')} onClick={closeAllOverlays}>
                {t.nav.team}
              </Link>

              <button
                type="button"
                className={`cah-drawer-toggle ${
                  expandedMobileMenu === 'services' ? 'is-open' : ''
                }`}
                onClick={() => toggleMobileSubmenu('services')}
              >
                <span>{t.nav.services}</span>
                <i className={`fa-solid fa-chevron-${expandedMobileMenu === 'services' ? 'up' : 'down'}`}></i>
              </button>
              {expandedMobileMenu === 'services' ? (
                <div className="cah-drawer-panel">
                  <Link className="cah-drawer-link" to={localizePath('/hizmetlerimiz')} onClick={closeAllOverlays}>
                    {t.cta.allServices}
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      className="cah-drawer-link"
                      to={localizePath(`/hizmetlerimiz/${service.slug}`)}
                      onClick={closeAllOverlays}
                    >
                      {toTitleCase(service.title)}
                    </Link>
                  ))}
                </div>
              ) : null}

              <Link className="cah-drawer-link" to={localizePath('/referanslar')} onClick={closeAllOverlays}>
                {t.nav.references}
              </Link>
              <Link className="cah-drawer-link" to={localizePath('/makaleler')} onClick={closeAllOverlays}>
                {t.nav.articles}
              </Link>
              <Link className="cah-drawer-link" to={localizePath('/iletisim')} onClick={closeAllOverlays}>
                {t.nav.contact}
              </Link>
            </nav>

            <div className="cah-drawer-contact">
              {(siteInfo.phones || []).map((phone) => (
                <a key={phone.href} href={phone.href}>
                  <i className="fa-solid fa-phone"></i>
                  <span>{phone.display}</span>
                </a>
              ))}

              <a href={`mailto:${siteInfo.email.toLowerCase()}`}>
                <i className="fa-solid fa-envelope"></i>
                <span>{siteInfo.email.toLowerCase()}</span>
              </a>
            </div>

            <div className="cah-mobile-languages">
              {SUPPORTED_LOCALES.map((languageCode) => (
                <Link
                  key={languageCode}
                  to={localizePath(currentLocalizedPath, languageCode)}
                  className={locale === languageCode ? 'active' : ''}
                  onClick={closeAllOverlays}
                >
                  &nbsp;{LOCALE_META[languageCode].label}
                </Link>
              ))}
            </div>
          </aside>
        </>
      ) : null}
    </>
  )
}
