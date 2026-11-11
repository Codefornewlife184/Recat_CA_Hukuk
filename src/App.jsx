import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Team from './pages/Team.jsx'
import References from './pages/References.jsx'
import Articles from './pages/Articles.jsx'
import ArticleDetail from './pages/ArticleDetail.jsx'

import LegalPage from './pages/LegalPage.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Contact from './pages/Contact.jsx'

import {
  DEFAULT_LOCALE,
  getLocaleMeta,
  isSupportedLocale,
  localizePath,
} from './i18n/config.js'

import { LocaleProvider } from './i18n/LocaleContext.jsx'
import { notifyPageMounted } from './utils/pageMounted.js'
import TeamDetailPage from './pages/TeamDetailPage.jsx'

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      try {
        window.history.scrollRestoration = 'manual'
      } catch (e) {}
    }
  }, [])

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={`/${DEFAULT_LOCALE}`}
              replace
            />
          }
        />

        <Route
          path="/:locale/*"
          element={<LocalizedApp />}
        />

        <Route
          path="*"
          element={
            <Navigate
              to={`/${DEFAULT_LOCALE}`}
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

function LocalizedApp() {
  const { locale } = useParams()
  const location = useLocation()

  const activeLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE

  useEffect(() => {
    const meta = getLocaleMeta(activeLocale)

    document.documentElement.lang = meta.htmlLang
    document.documentElement.dir = meta.dir

    document.body.dir = meta.dir
    document.body.dataset.locale = activeLocale
  }, [activeLocale])

  if (locale !== activeLocale) {
    return (
      <Navigate
        to={localizePath(location.pathname, activeLocale)}
        replace
      />
    )
  }

  return (
    <LocaleProvider locale={activeLocale}>
      <RouterEffects />

      <Header />

      <Routes>
        <Route index element={<Home />} />

        <Route path="hakkimizda" element={<AboutUs />} />

        <Route path="kvkk" element={<LegalPage docKey="kvkk" />} />

        <Route
          path="cerez-politikasi"
          element={<LegalPage docKey="cerez" />}
        />

        <Route
          path="yasal-uyari"
          element={<LegalPage docKey="yasal" />}
        />

        {/* Ekibimiz Rotaları (Relative paths) */}
        <Route path="ekibimiz" element={<Team />} />
        <Route path="ekibimiz/:slug" element={<TeamDetailPage />} />

        <Route path="hizmetlerimiz" element={<Services />} />
        <Route path="hizmetlerimiz/:slug" element={<ServiceDetail />} />

        <Route path="referanslar" element={<References />} />
        <Route path="makaleler" element={<Articles />} />
        <Route path="makaleler/:slug" element={<ArticleDetail />} />

        <Route path="iletisim" element={<Contact />} />

        <Route
          path="*"
          element={
            <Navigate
              to={localizePath('/', activeLocale)}
              replace
            />
          }
        />
      </Routes>

      <Footer />
    </LocaleProvider>
  )
}

function RouterEffects() {
  const location = useLocation()

  useEffect(() => {
    const scrollTopAll = () => {
      try {
        const smoother =
          window.ScrollSmoother &&
          window.ScrollSmoother.get &&
          window.ScrollSmoother.get()

        if (smoother?.scrollTo) {
          try {
            smoother.scrollTo(0, true)
          } catch (e) {}
        }

        const html = document.documentElement
        const body = document.body

        if (html) html.scrollTop = 0
        if (body) body.scrollTop = 0

        try {
          window.scrollTo({
            top: 0,
            behavior: 'auto',
          })
        } catch (e) {
          window.scrollTo(0, 0)
        }

        const wrap =
          document.getElementById('antra-smooth-content') ||
          document.getElementById('antra-smooth-wrapper')

        if (wrap && typeof wrap.scrollTo === 'function') {
          wrap.scrollTo(0, 0)
        }
      } catch (e) {}
    }

    scrollTopAll()

    setTimeout(scrollTopAll, 60)
    setTimeout(scrollTopAll, 180)

    notifyPageMounted()

    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh()
    }
  }, [location])

  useEffect(() => {
    const isInternalNavigationLink = (anchor) => {
      if (!anchor) return false

      const href = anchor.getAttribute('href') || ''

      if (!href) return false

      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:')
      ) {
        return false
      }

      if (
        anchor.hasAttribute('download') ||
        anchor.target === '_blank'
      ) {
        return false
      }

      if (
        anchor.closest('.gallery-lightbox') ||
        anchor.classList.contains('venobox')
      ) {
        return false
      }

      try {
        const url = new URL(anchor.href, window.location.origin)
        return url.origin === window.location.origin
      } catch (e) {
        return false
      }
    }

    const scrollTopAll = () => {
      try {
        const smoother =
          window.ScrollSmoother &&
          window.ScrollSmoother.get &&
          window.ScrollSmoother.get()

        if (smoother?.scrollTo) {
          try {
            smoother.scrollTo(0, true)
          } catch (e) {}
        }

        const html = document.documentElement
        const body = document.body

        if (html) html.scrollTop = 0
        if (body) body.scrollTop = 0

        try {
          window.scrollTo({
            top: 0,
            behavior: 'auto',
          })
        } catch (e) {
          window.scrollTo(0, 0)
        }
      } catch (e) {}
    }

    const handleDocumentClick = (event) => {
      const anchor = event.target.closest('a')

      if (!isInternalNavigationLink(anchor)) {
        return
      }

      requestAnimationFrame(scrollTopAll)
      setTimeout(scrollTopAll, 80)
    }

    document.addEventListener('click', handleDocumentClick, true)

    return () =>
      document.removeEventListener('click', handleDocumentClick, true)
  }, [])

  return null
}
