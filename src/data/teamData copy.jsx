import React from 'react'

export const TEAM_MEMBERS = [
  {
    id: 1,
    slug: 'tarik-cakmak',
    name: 'Av. Tarık Çakmak',
    role: 'Kurucu Avukat',
    image: '/assets/img/team/1.jpeg',
    description:
      '23 Mart 1997 doğumlu olan Av. Tarık Çakmak; ilk, orta ve lise eğitimini Bursa’da tamamladıktan sonra 2020 yılında Özyeğin Üniversitesi Hukuk Fakültesi’nden mezun olmuştur. 2021 yılının Aralık ayında avukatlık ruhsatını alarak mesleğe adım atmıştır.',
    email: 'tarik@cakmakakbuluthukuk.com',
    phone: '+90 (224) 000 00 00',
    phoneHref: 'tel:+902240000000',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    professionalInfo: {
      title: 'Uzmanlık ve Mesleki Deneyim',
      text: 'Mesleki faaliyetlerini ağırlıklı olarak Ticaret Hukuku, Şirketler Hukuku, İcra ve İflas Hukuku ve Ceza Hukuku alanlarında sürdüren Çakmak; yaşanan ihtilafların çözümü adına dava takibi ve yanı sıra hukuki danışmanlık hizmetleri sunmaktadır. Mesleğe başladığı tarihten itibaren kurucusu olduğu Çakmak & Akbulut Hukuk Bürosu bünyesinde serbest avukatlık yapmaktadır.',
      list: [
        'Ticaret Hukuku ve Şirketler Hukuku',
        'İcra ve İflas Hukuku',
        'Ceza Hukuku ve Soruşturma / Kovuşturma Süreçleri',
        'Dava Takibi ve Kurumsal Hukuki Danışmanlık',
      ],
    },
    expertise: {
      title: 'Yetkinlik & Uzmanlık Alanları',
      text: 'Kurumsal ve bireysel müvekkillerine dava takibi ve hukuki danışmanlık alanlarında profesyonel hizmet vermektedir.',
      skills: [
        { name: 'Ticaret & Şirketler Hukuku', percentage: 95 },
        { name: 'İcra ve İflas Hukuku', percentage: 90 },
        { name: 'Ceza Hukuku', percentage: 85 },
      ],
    },
  },
  {
    id: 2,
    slug: 'mesut-enes-akbulut',
    name: 'Av. Mesut Enes Akbulut',
    role: 'Kurucu Avukat & Arabulucu',
    image: '/assets/img/team/2.jpg',
    description:
      "23 Mart 1992 doğumlu Av. Mesut Enes Akbulut, temel eğitiminin ardından Liselere Giriş Sınavı'nda Türkiye 819'uncusu olarak dereceyle Fen Lisesi eğitimi almıştır. Lisans yerleştirme sınavlarında Sözel alanda Türkiye 31'inciliği ve Eşit Ağırlık alanında Türkiye 72'nciliği derecelerini elde ederek girdiği Hukuk Fakültesi'nden 2015 yılında mezun olmuştur.",
    email: 'mesut@cakmakakbuluthukuk.com',
    phone: '+90 (224) 000 00 00',
    phoneHref: 'tel:+902240000000',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    professionalInfo: {
      title: 'Uzmanlık ve Mesleki Deneyim',
      text: '2016 yılının Aralık ayında yasal stajını tamamlayarak Avukatlık Ruhsatını alan Akbulut, meslek hayatına kurduğu şahsi bürosunda başlamıştır. Kariyeri boyunca ağırlıklı olarak Ceza Hukuku ve İdare Hukuku alanlarında uzmanlaşan Akbulut, 2023 yılının başından itibaren de Adalet Bakanlığı bünyesinde zorunlu ve ihtiyari arabuluculuk faaliyetlerini aktif olarak sürdürmektedir. 2021 yılından bu yana kurucu ortaklarından biri olduğu Çakmak & Akbulut Hukuk Bürosu çatısı altında avukatlık, arabuluculuk ve hukuki danışmanlık hizmeti vermeye devam etmektedir.',
      list: [
        'Ceza Hukuku',
        'İdare Hukuku ve İdari Yargı Davaları',
        'Adalet Bakanlığı Zorunlu ve İhtiyari Arabuluculuk',
        'Hukuki Danışmanlık ve Uyuşmazlık Çözümü',
      ],
    },
    expertise: {
      title: 'Yetkinlik & Uzmanlık Alanları',
      text: 'Ceza, İdare ve Alternatif Uyuşmazlık Çözümü (Arabuluculuk) süreçlerinde uzmanlaşmıştır.',
      skills: [
        { name: 'Ceza Hukuku', percentage: 95 },
        { name: 'İdare Hukuku', percentage: 90 },
        { name: 'Arabuluculuk Hizmetleri', percentage: 95 },
      ],
    },
  },
]

export default function TeamDetail({ memberData }) {
  const member = memberData || TEAM_MEMBERS[0]

  return (
    <>
      <section className="team-details pt-140 pb-140 pin-section">
        <div className="container container-2">
          <div className="row pin-inner">
            <div className="col-lg-6">
              <div className="team-details-img pin-box">
                <img src={member.image} alt={member.name} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="team-details-content scroll-content">
                <h2 className="name">{member.name}</h2>
                <span className="prof">{member.role}</span>
                <p className="desc">{member.description}</p>

                <div className="team-details-contact">
                  <span>E-posta Adresi:</span>
                  <a className="mail" href={`mailto:${member.email}`}>
                    {member.email}
                  </a>
                  <a className="number" href={member.phoneHref || `tel:${member.phone}`}>
                    {member.phone}
                  </a>
                </div>

                {member.professionalInfo && (
                  <div className="team-details-info mb-0 mt-4">
                    <h3 className="details-title">{member.professionalInfo.title}</h3>
                    <p>{member.professionalInfo.text}</p>
                    <ul className="team-details-list">
                      {member.professionalInfo.list?.map((item, index) => (
                        <li key={index}>
                          <i className="fa-sharp fa-solid fa-circle-check me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.expertise && (
                  <div className="skill-item-wrap mt-4">
                    <h4 className="details-title">{member.expertise.title}</h4>
                    <p>{member.expertise.text}</p>
                    <div className="skills-items">
                      {member.expertise.skills?.map((skill, index) => (
                        <div key={index} className="skills-item fade-top mb-3">
                          <h4 className="title">{skill.name}</h4>
                          <div className="progress" style={{ height: '10px' }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${skill.percentage}%`,
                                backgroundColor: '#cca645',
                              }}
                            >
                              <span>{skill.percentage}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .team-details-content .name {
          color: #cca645 !important;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .team-details-content .prof {
          color: #ffffff;
          font-size: 16px;
          display: block;
          margin-bottom: 20px;
        }

        .team-details-list li i {
          color: #cca645 !important;
        }
      `}</style>
    </>
  )
}