import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useMediaQuery} from '@mui/material'
import cn from 'clsx'

import './Social.scss'
import meNormalImg from '@assets/img/pictures/me-normal.jpg'
import meNormalImg2x from '@assets/img/pictures/me-normal@2x.jpg'
import meExcitedImg from '@assets/img/pictures/me-excited.jpg'
import meExcitedImg2x from '@assets/img/pictures/me-excited@2x.jpg'
import {
  Animate,
  SocialLinks,
  Pagination,
  Copyright,
  Tilt,
} from '@components/common'
import {ROUTE, QUERY_BREAKPOINT, DETECT} from '@utils/constants'
import {SocialLink} from '@utils/types'
import {MY_NAME, CONTACT_LINK} from '@data/common'

export default function Social() {
  const {t} = useTranslation()

  return (
    <section className="Section Section_pagination Section_colorful FadeInRight">
      <h2 className="VisuallyHidden">{t('about.subtitle')}</h2>
      <div className="Social-Content">
        <Photo />
        <SocialLinks about links={links} />
      </div>
      <Pagination prevTo={ROUTE.home} nextTo={ROUTE.skills} />
      <Copyright />
    </section>
  )
}

const Photo = () => {
  const [hovered, setHovered] = useState<boolean>(false)
  const md: boolean = useMediaQuery(QUERY_BREAKPOINT.md)

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
            className="Social-Img"
            width={imgSize}
            height={imgSize}
            src={meNormalImg}
            srcSet={`${meNormalImg2x} 2x`}
            alt={MY_NAME}
          />
          <img
            className="Social-Img Social-Img_hidden"
            width={imgSize}
            height={imgSize}
            src={meExcitedImg}
            srcSet={`${meExcitedImg2x} 2x`}
            alt={MY_NAME}
          />
        </>
      </Tilt>
    </Animate>
  )
}

const links: SocialLink[] = [
  CONTACT_LINK.gitHub,
  CONTACT_LINK.linkedIn,
  CONTACT_LINK.youTube,
  CONTACT_LINK.instagram,
  //CONTACT_LINK.facebook,
  CONTACT_LINK.telegram,
  CONTACT_LINK.sevenGlyphs,
]

const imgSize = 320
