import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { buildSearchIndex, searchSite } from '../utils/siteSearch.js'

export default function SiteSearch({ isOpen, onClose }) {
  const navigate = useNavigate()
  const { locale, t, localizePath } = useLocale()
  const inputRef = useRef(null)

  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const quickLinks = useMemo(() => {
    return buildSearchIndex(locale, localizePath)
      .filter((entry) => ['page', 'service', 'team'].includes(entry.kind))
      .slice(0, 8)
  }, [locale, localizePath])

  const results = useMemo(
    () => searchSite(query, locale, localizePath, 14),
    [locale, localizePath, query]
  )

  const visibleItems = query.trim() ? results : quickLinks

  useEffect(() => {
    if (!isOpen) {
      setQuery('')
      setActiveIndex(0)
      return
    }

    const timer = window.setTimeout(() => inputRef.current?.focus(), 80)

    return () => window.clearTimeout(timer)
  }, [isOpen])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  if (!isOpen || typeof document === 'undefined') {
    return null
  }

  const goTo = (path) => {
    onClose?.()
    navigate(path)
    try {
      window.scrollTo({ top: 0, behavior: 'auto' })
    } catch (error) {
      window.scrollTo(0, 0)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      onClose?.()
      return
    }

    if (!visibleItems.length) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((prev) => (prev + 1) % visibleItems.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      goTo(visibleItems[activeIndex]?.to || visibleItems[0]?.to)
    }
  }

  return createPortal(
    <>
      <style>{`
        .cah-site-search-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 12, 25, 0.76);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 1200;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: clamp(18px, 6vh, 56px) 16px 24px;
          overflow-y: auto;
        }

        .cah-site-search-panel {
          width: min(760px, 100%);
          background: linear-gradient(180deg, #fffdf8 0%, #ffffff 100%);
          border-radius: 26px;
          border: 1px solid rgba(204, 166, 69, 0.18);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.28);
          overflow: hidden;
        }

        .cah-site-search-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 24px 24px 12px;
        }

        .cah-site-search-head h3 {
          margin: 0 0 8px;
          color: #11233f;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.12;
        }

        .cah-site-search-head p {
          margin: 0;
          color: #60708b;
          font-size: 15px;
        }

        .cah-site-search-close {
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 50%;
          background: #11233f;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }

        .cah-site-search-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 24px 16px;
        }

        .cah-site-search-input {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          min-height: 66px;
          padding: 0 22px;
          border-radius: 999px;
          border: 1px solid rgba(17, 35, 63, 0.12);
          background: #fff;
        }

        .cah-site-search-input i {
          color: #cca645;
          font-size: 17px;
        }

        .cah-site-search-input input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #6f7d94;
          font-size: 16px;
          font-weight: 500;
        }

        .cah-site-search-input input::placeholder {
          color: #8a97ad;
          opacity: 1;
        }

        .cah-site-search-meta {
          padding: 0 24px 10px;
          color: #8a97ad;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }

        .cah-site-search-list {
          display: grid;
          gap: 10px;
          padding: 14px 24px 24px;
          max-height: min(60vh, 520px);
          overflow-y: auto;
        }

        .cah-site-search-item {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          padding: 14px 16px;
          border: 1px solid rgba(17, 35, 63, 0.08);
          border-radius: 18px;
          background: #fff;
          text-align: left;
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }

        .cah-site-search-item:hover,
        .cah-site-search-item.active {
          transform: translateY(-1px);
          border-color: rgba(204, 166, 69, 0.35);
          background: rgba(204, 166, 69, 0.06);
        }

        .cah-site-search-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: rgba(204, 166, 69, 0.12);
          color: #cca645;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 18px;
        }

        .cah-site-search-text {
          flex: 1;
          min-width: 0;
        }

        .cah-site-search-title {
          display: block;
          color: #11233fff;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.35;
        }

        .cah-site-search-subtitle {
          display: block;
          margin-top: 4px;
          color: #7a889f;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.35;
        }

        .cah-site-search-snippet {
          display: block;
          margin-top: 6px;
          color: #60708b;
          font-size: 13px;
        }

        .cah-site-search-arrow {
          color: #9aa7bb;
          font-size: 14px;
          flex-shrink: 0;
        }

        .cah-site-search-empty {
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(17, 35, 63, 0.04);
          color: #60708b;
        }

        .cah-site-search-foot {
          padding: 14px 24px 18px;
          background: #f8fafc;
          border-top: 1px solid rgba(17, 35, 63, 0.06);
          color: #7d8aa0;
          font-size: 12px;
        }

        @media (max-width: 767px) {
          .cah-site-search-head,
          .cah-site-search-row,
          .cah-site-search-meta,
          .cah-site-search-list,
          .cah-site-search-foot {
            padding-left: 16px;
            padding-right: 16px;
          }

          .cah-site-search-head {
            padding-top: 18px;
          }

          .cah-site-search-input {
            min-height: 58px;
            padding: 0 18px;
          }
        }
      `}</style>

      <div
        className="cah-site-search-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={t.search.title}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose?.()
          }
        }}
      >
        <div className="cah-site-search-panel">
          <div className="cah-site-search-head">
            <div>
              <h3>{t.search.title}</h3>
              <p>{t.search.helper}</p>
            </div>

            <button
              type="button"
              className="cah-site-search-close"
              aria-label={t.search.close}
              onClick={() => onClose?.()}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="cah-site-search-row">
            <div className="cah-site-search-input">
              <i className="fa-solid fa-magnifying-glass"></i>

              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.search.placeholder}
                aria-label={t.search.title}
              />
            </div>
          </div>

          <div className="cah-site-search-meta">
            {query.trim()
              ? `${results.length} ${t.search.resultsLabel}`
              : t.search.quickLinks}
          </div>

          <div className="cah-site-search-list">
            {visibleItems.length ? (
              visibleItems.map((entry, index) => (
                <button
                  key={entry.id}
                  type="button"
                  className={`cah-site-search-item ${index === activeIndex ? 'active' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => goTo(entry.to)}
                >
                  <span className="cah-site-search-icon">
                    <i
                      className={`fa-solid ${
                        entry.kind === 'team'
                          ? 'fa-user-tie'
                          : entry.kind === 'service' || entry.kind === 'section'
                            ? 'fa-scale-balanced'
                            : entry.kind === 'legal'
                              ? 'fa-shield-halved'
                              : 'fa-file-lines'
                      }`}
                    ></i>
                  </span>

                  <span className="cah-site-search-text">
                    <span className="cah-site-search-title">{entry.title}</span>
                    <span className="cah-site-search-subtitle">
                      {entry.kindLabel}
                      {entry.subtitle ? ` • ${entry.subtitle}` : ''}
                    </span>
                    {entry.snippet ? (
                      <span className="cah-site-search-snippet">{entry.snippet}</span>
                    ) : null}
                  </span>

                  <i className="fa-solid fa-chevron-right cah-site-search-arrow"></i>
                </button>
              ))
            ) : (
              <div className="cah-site-search-empty">{t.search.noResult}</div>
            )}
          </div>

          <div className="cah-site-search-foot">{t.search.tip}</div>
        </div>
      </div>
    </>,
    document.body
  )
}
