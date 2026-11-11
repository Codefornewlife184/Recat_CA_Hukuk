import React from 'react'
import AutoPageHeader from '../components/AutoPageHeader'
import Spacer from '../components/Spacer'

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Av. Tarık Çakmak',
    role: 'Kurucu Avukat',
    image: '/assets/img/team/2.jpg',
    customClass: '',
    socials: {
      facebook: '#',
      instagram: '#',
      behance: '#',
      linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'Av. Mesut Enes Akbulut',
    role: 'Kurucu Avukat & Arabulucu',
    image: '/assets/img/team/2.jpg',
    customClass: 'item-1',
    
  },
  {
    id: 3,
    name: 'Av. Mesut Enes Akbulut',
    role: 'Kurucu Avukat & Arabulucu',
    image: '/assets/img/team/2.jpg',
    customClass: '',
  },
]

export default function Team() {
  return (
    <>
    <AutoPageHeader />
          <Spacer size="md" />
          <section className="team-section pt-130 pb-130">
      <div className="container container-2">
        <div
          className="row gy-5"
          data-masonry={JSON.stringify({ percentPosition: true })}
        >
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="col-lg-4 col-md-6">
              <div
                className={`team-item-2 ${member.customClass || ''}`.trim()}
              >
                <div className="team-thumb">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <a href="#!">{member.name}</a>
                  </h3>
                  <span>{member.role}</span>
                  <ul className="team-social">
                    {member.socials.facebook && (
                      <li>
                        <a href={member.socials.facebook} aria-label="Facebook">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                    )}
                    {member.socials.instagram && (
                      <li>
                        <a href={member.socials.instagram} aria-label="Instagram">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    )}
                    {member.socials.behance && (
                      <li>
                        <a href={member.socials.behance} aria-label="Behance">
                          <i className="fa-brands fa-behance"></i>
                        </a>
                      </li>
                    )}
                    {member.socials.linkedin && (
                      <li>
                        <a href={member.socials.linkedin} aria-label="LinkedIn">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
    
  )
}