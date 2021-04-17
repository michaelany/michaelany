import {useMediaQuery} from '@material-ui/core'

import './Social.scss'
import meNormalImg from '../../assets/img/pictures/me-normal.png'
import meNormalImg2x from '../../assets/img/pictures/me-normal@2x.png'
import meExcitedImg from '../../assets/img/pictures/me-excited.png'
import meExcitedImg2x from '../../assets/img/pictures/me-excited@2x.png'
import {Animate, SocialLinks, Pagination, Copyright, Tilt} from '../common'
import {
  DETECT,
  ROUTE,
  TILT_SCALE,
  QUERY_BREAKPOINT,
} from '../../utils/constants'
import {SocialLink, TiltOptions} from '../../utils/types'
import {CONTACT_LINK} from '../../data/common'
import {DURATION} from '../../styles/theme'

const tiltOptions: TiltOptions = {
  max: DETECT.safari ? 0 : 35,
  scale: TILT_SCALE,
  speed: DURATION.longest,
}

const links: SocialLink[] = [
  CONTACT_LINK.gitHub,
  CONTACT_LINK.linkedIn,
  CONTACT_LINK.instagram,
  CONTACT_LINK.facebook,
  CONTACT_LINK.vk,
  CONTACT_LINK.sevenGlyphs,
]

const myName: string = 'Michael Any'
const imgSize: number = 320

export default function Social(): JSX.Element {
  const md: boolean = useMediaQuery(QUERY_BREAKPOINT.md)

  return (
    <section className="Social Section Section_pagination Section_colorful FadeInRight">
      <h2 className="VisuallyHidden">Фото и социальные сети</h2>
      <div className="Social-Content">
        <Animate
          className="Social-PhotoWrapper"
          effect={md ? undefined : 'zoomOut'}
          duration={md ? undefined : 'longer'}
        >
          <Tilt el="figure" className="Social-Photo" options={tiltOptions}>
            <>
              <img
                className="Social-Img"
                width={imgSize}
                height={imgSize}
                src={meNormalImg}
                srcSet={`${meNormalImg2x} 2x`}
                alt={myName}
              />
              <img
                className="Social-Img Social-Img_hidden"
                width={imgSize}
                height={imgSize}
                src={meExcitedImg}
                srcSet={`${meExcitedImg2x} 2x`}
                alt={myName}
              />
            </>
          </Tilt>
        </Animate>
        <SocialLinks about links={links} />
      </div>
      <Pagination prevTo={ROUTE.home} nextTo={ROUTE.skills} />
      <Copyright />
    </section>
  )
}
