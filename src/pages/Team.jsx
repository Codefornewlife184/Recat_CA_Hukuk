import React from 'react'
import { useNavigate } from 'react-router-dom'
import AutoPageHeader from '../components/AutoPageHeader'
import Spacer from '../components/Spacer'
import { useLocale } from '../i18n/LocaleContext.jsx'
import { TEAM_MEMBERS } from '../data/teamData.jsx'
import { usePageSeo } from '../utils/seo.js'

export default function Team() {
  const { locale, localizePath } = useLocale()
  const navigate = useNavigate()
  const founders = TEAM_MEMBERS.slice(0, 2)
  const middleMember = TEAM_MEMBERS[2]
  const bottomMembers = TEAM_MEMBERS.slice(3, 5)

  usePageSeo({
    locale,
    pathname: '/ekibimiz',
    title: locale === 'en' ? 'Our Team' : locale === 'ar' ? 'فريقنا' : 'Ekibimiz',
    description:
      locale === 'en'
        ? 'Meet the founding attorneys of Cakmak Akbulut Law Firm.'
        : locale === 'ar'
          ? 'تعرّفوا على المحامين المؤسسين في مكتب تشاكماك أكبولوت للمحاماة.'
          : 'Çakmak Akbulut Hukuk kurucu avukatlarini yakindan taniyin.',
  })

  return (
    <>
      <AutoPageHeader />
      <Spacer size="md" />

      <section className="team-section pt-130 pb-130">
        <div className="container container-2">
          <div className="team-layout">
            <div className="row g-4 justify-content-center">
              {founders.map((member) => {
                const role = member.role?.[locale] || member.role?.tr || member.role

                return (
                  <div key={member.slug} className="col-lg-6 col-md-6">
                    <div className="team-item-2">
                      <div
                        className="team-thumb"
                        onClick={() => navigate(localizePath(`/ekibimiz/${member.slug}`))}
                        style={{ cursor: 'pointer' }}
                      >
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="team-content mb-3">
                        <h3 className="title">
                          <span
                            onClick={() => navigate(localizePath(`/ekibimiz/${member.slug}`))}
                            style={{ cursor: 'pointer' }}
                          >
                            {member.name}
                          </span>
                        </h3>
                        <span>{role}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {middleMember ? (
              <div className="row g-4 justify-content-center team-middle-row">
                <div className="col-lg-6 col-md-8">
                  <div className="team-item-2 team-item-centered">
                    <div
                      className="team-thumb"
                      onClick={() => navigate(localizePath(`/ekibimiz/${middleMember.slug}`))}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={middleMember.image} alt={middleMember.name} />
                    </div>
                    <div className="team-content mb-3">
                      <h3 className="title">
                        <span
                          onClick={() => navigate(localizePath(`/ekibimiz/${middleMember.slug}`))}
                          style={{ cursor: 'pointer' }}
                        >
                          {middleMember.name}
                        </span>
                      </h3>
                      <span>
                        {middleMember.role?.[locale] || middleMember.role?.tr || middleMember.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="row g-4 justify-content-center">
              {bottomMembers.map((member) => {
                const role = member.role?.[locale] || member.role?.tr || member.role

                return (
                  <div key={member.slug} className="col-lg-6 col-md-6">
                    <div className="team-item-2">
                      <div
                        className="team-thumb"
                        onClick={() => navigate(localizePath(`/ekibimiz/${member.slug}`))}
                        style={{ cursor: 'pointer' }}
                      >
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="team-content mb-3">
                        <h3 className="title">
                          <span
                            onClick={() => navigate(localizePath(`/ekibimiz/${member.slug}`))}
                            style={{ cursor: 'pointer' }}
                          >
                            {member.name}
                          </span>
                        </h3>
                        <span>{role}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .team-layout {
          display: grid;
          gap: 42px;
        }

        .team-middle-row {
          margin-top: -4px;
        }

        /* Kart kapsayıcı yüksekliği */
        .team-item-2 .team-thumb {
          height: 720px !important;
          position: relative !important;
          border-radius: 24px !important;
          overflow: hidden !important;
          background-color: #0b1b33 !important;
        }

        .team-item-2 .team-thumb img {
          width: 100% !important;
          height: 100% !important;
        }

        /* Tarık Bey (1.jpeg - Dikey Fotoğraf) Ayarı */
        .team-item-2 .team-thumb img[src*="1.jpeg"],
        .team-item-2 .team-thumb img[src*="tarik"] {
          object-fit: cover !important;
          object-position: center 20% !important;
        }

        /* Mesut Bey (2.jpg - Yatay Fotoğraf) Ayarı */
        .team-item-2 .team-thumb img[src*="2.jpg"],
        .team-item-2 .team-thumb img[src*="mesut"] {
          object-fit: cover !important;
          object-position: center center !important;
        }

        .team-item-2 .team-content {
          margin-top: 20px !important;
        }

        /* SADECE İSİMLER 40px YAPILDI */
        .team-item-2 .team-content .title span,
        .team-item-2 .team-content h3.title span {
          color: #cca645 !important;
          font-size: 40px !important;
          font-weight: 700 !important;
          transition: color 0.3s ease !important;
          display: inline-block;
          cursor: pointer;
        }

        .team-item-2 .team-content .title span:hover {
          color: #ffffff !important;
        }

        /* UNVANLAR (ROL) KORUNDU */
        .team-item-2 .team-content span {
          color: #fff !important;
          font-size: 15px !important;
          font-weight: 600 !important;
          display: block !important;
          margin-top: -50px !important;
          margin-bottom: 50px !important;
          letter-spacing: 0.5px;
        }

        @media (max-width: 991px) {
          .team-layout {
            gap: 28px;
          }

          .team-middle-row {
            margin-top: 0;
          }

          .team-item-2 .team-thumb {
            height: 620px !important;
          }

          .team-item-2 .team-content .title span,
          .team-item-2 .team-content h3.title span {
            font-size: 34px !important;
          }
        }

        @media (max-width: 767px) {
          .team-item-2 .team-thumb {
            height: 480px !important;
          }

          .team-item-2 .team-content .title span,
          .team-item-2 .team-content h3.title span {
            font-size: 28px !important;
          }

          .team-item-2 .team-content span {
            margin-top: -34px !important;
            margin-bottom: 34px !important;
          }
        }
      `}</style>
    </>
  )
}
