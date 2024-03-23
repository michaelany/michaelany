import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useMediaQuery} from '@mui/material'
import cn from 'clsx'

import './Social.scss'
import meNormalImg from '#assets/img/pictures/me-normal.jpg'
import meNormal2xImg from '#assets/img/pictures/me-normal@2x.jpg'
import meExcitedImg from '#assets/img/pictures/me-excited.jpg'
import meExcited2xImg from '#assets/img/pictures/me-excited@2x.jpg'
import {Section, Animate, SocialLinks, Tilt} from '#components/common'
import {ROUTE, QUERY_BREAKPOINT, DETECT} from '#utils/constants'
import {ISocialLink} from '#utils/types'
import {MY_NAME, CONTACT_LINK} from '#data/common'

export default function Social() {
  const {t} = useTranslation()

  return (
    <Section
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
        enable={!DETECT.safari}
        onMouseOver={handlePhotoOver}
        onMouseOut={handlePhotoOut}
      >
        <>
          <img
            className="Social-Image"
            width={imgSize}
            height={imgSize}
            src={meNormalImg}
            srcSet={`${meNormal2xImg} 2x`}
            alt={MY_NAME}
            loading="lazy"
          />
          <img
            className="Social-Image Social-Image_hidden"
            width={imgSize}
            height={imgSize}
            src={meExcitedImg}
            srcSet={`${meExcited2xImg} 2x`}
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
  //CONTACT_LINK.facebook,
  CONTACT_LINK.telegram,
  CONTACT_LINK.sevenGlyphs,
  CONTACT_LINK.instagram,
]

const imgSize = 320
