import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { useLocale } from '../i18n/LocaleContext.jsx'

export default function NewHeroSlider({ items }) {
  const { t, localizePath, locale } = useLocale()
  const slides = items || [
    {
      bg: '/assets/img/law/hero-3.webp',
      k: 'trust',
      title: t.hero.slide1Title,
      desc: t.hero.slide1Desc,
    },
    {
      bg: '/assets/img/law/hero-1.webp',
      k: 'support',
      title: t.hero.slide2Title,
      desc: t.hero.slide2Desc,
    },
  ]
  return (
    <section className="hero-modern">
      <Swiper
        className="hero-modern-swiper"
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.k || i}>
            <div className="hero-modern-slide" style={{ backgroundImage: `url("${s.bg}")` }}>
              <div className="hero-modern-overlay" />
              <div className="hero-modern-inner">
                <div className="hero-modern-left">
                  <span className="badge">{t.hero.badge}</span>
                  <h2 className="title">{s.title}</h2>
                  <p className="desc">{s.desc}</p>
                  <a href={localizePath('/iletisim')} className="tl-primary-btn white-btn">{t.cta.contactLong} <span className="icon"><i className="fa-regular fa-arrow-right" /></span></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
