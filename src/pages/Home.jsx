import React from 'react'
import NewHeroSlider from '../components/NewHeroSlider.jsx'
import AboutUs from './AboutUs.jsx'
import Services from './Services.jsx'
import References from './References.jsx'
import Contact from './Contact.jsx'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { usePageSeo } from '../utils/seo.js'

export default function Home() {
  const { locale } = useLocale()

  usePageSeo({
    locale,
    pathname: '/',
    title: locale === 'en' ? 'Law Firm in Bursa' : locale === 'ar' ? 'مكتب محاماة في بورصة' : 'Bursa Avukatlık Bürosu',
    description:
      locale === 'en'
        ? 'Cakmak Akbulut Law Firm provides legal support in Bursa in Turkish, English and Arabic.'
        : locale === 'ar'
          ? 'يقدم مكتب تشاكماك أكبولوت للمحاماة دعماً قانونياً في بورصة باللغات التركية والإنجليزية والعربية.'
          : 'Çakmak & Akbulut Hukuk, Bursa merkezli olarak Türkçe, İngilizce ve Arapça hukuki destek sunar.',
  })

  return (
    <div id="antra-smooth-wrapper">
      <div id="antra-smooth-content" className="home-page">
        <NewHeroSlider />
        <AboutUs showHeader={false} />
        <Services showHeader={false} />
        <References showHeader={false} />
        <Contact showHeader={false} />
      </div>
    </div>
  )
}
