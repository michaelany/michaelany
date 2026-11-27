import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useMediaQuery} from '@mui/material'
import cn from 'clsx'

import './Social.scss'
import meNormalImg from '#assets/images/me-normal.webp'
import meNormal2xImg from '#assets/images/me-normal@2x.webp'
import meExcitedImg from '#assets/images/me-excited.webp'
import meExcited2xImg from '#assets/images/me-excited@2x.webp'
import {Section, Animate, SocialLinks, Tilt} from '#components/common'
import {ROUTE, QUERY_BREAKPOINT} from '#utils/constants'
import {MY_NAME, CONTACT_LINK} from '#data/common'
import type {ISocialLink} from '#utils/types'

export default function Social() {
  const {t} = useTranslation()

  return (
    <Section
      aside
      colorful
      className="FadeInRight"
      prevTo={ROUTE.home}
      nextTo={ROUTE.skills}
    >
      <h2 className="VisuallyHidden">{t('about.subtitle')}</h2>
      <div className="Social-Content">
        <Photo />
        <SocialLinks about links={links} />
      </div>
    </Section>
  )
}

const Photo = () => {
  const [hovered, setHovered] = useState(false)
  const md = useMediaQuery(QUERY_BREAKPOINT.md)

  const handlePhotoOver = () => {
    setHovered(true)
  }

  const handlePhotoOut = () => {
    setHovered(false)
  }

  return (
    <Animate
      className={cn(
        'Social-PhotoWrapper',
        hovered && 'Social-PhotoWrapper_hovered'
      )}
      effect={md ? undefined : 'zoomOut'}
      duration={md ? undefined : 'longer'}
    >
      <Tilt
        el="figure"
        className="Social-Photo"
        onMouseOver={handlePhotoOver}
        onMouseOut={handlePhotoOut}
      >
        <>
          <img
            className="Social-Image"
            width={imgSize}
            height={imgSize}
            src={meNormalImg}
            srcSet={`${meNormalImg} ${imgSize}w, ${meNormal2xImg} ${imgSize * 2}w`}
            sizes={imgSizes}
            alt={MY_NAME}
            loading="lazy"
          />
          <img
            className="Social-Image Social-Image_hidden"
            width={imgSize}
            height={imgSize}
            src={meExcitedImg}
            srcSet={`${meExcitedImg} ${imgSize}w, ${meExcited2xImg} ${imgSize * 2}w`}
            sizes={imgSizes}
            alt={MY_NAME}
            loading="lazy"
          />
        </>
      </Tilt>
    </Animate>
  )
}

const links: ISocialLink[] = [
  CONTACT_LINK.gitHub,
  CONTACT_LINK.youTube,
  CONTACT_LINK.linkedIn,
  CONTACT_LINK.telegram,
  CONTACT_LINK.airbnb,
  CONTACT_LINK.instagram,
]

const imgSize = 320
const imgSizes = '(max-width: 20rem) 100vw, 20rem'
