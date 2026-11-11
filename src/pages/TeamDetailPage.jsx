import React from 'react'
import { useParams } from 'react-router-dom'
import AutoPageHeader from '../components/AutoPageHeader'
import Spacer from '../components/Spacer'
import { useLocale } from '../i18n/LocaleContext.jsx'
import TeamDetail, { TEAM_MEMBERS } from '../data/teamData.jsx'
import { usePageSeo } from '../utils/seo.js'

export default function TeamDetailPage() {
  const { slug } = useParams()
  const { locale } = useLocale()
  const member = TEAM_MEMBERS.find((m) => m.slug === slug) || TEAM_MEMBERS[0]
  const description =
    member.description?.[locale] || member.description?.tr || member.description

  usePageSeo({
    locale,
    pathname: `/ekibimiz/${member.slug}`,
    title: member.name,
    description,
  })

  return (
    <>
      <AutoPageHeader />
      <Spacer size="md" />
      <TeamDetail memberData={member} />
    </>
  )
}
