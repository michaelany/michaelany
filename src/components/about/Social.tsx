import React from 'react'
import {isSafari} from 'react-device-detect'

import './Social.scss'
import meImg from '../../assets/img/pictures/me.png'
import meImg2x from '../../assets/img/pictures/me@2x.png'
import SocialLinks from '../_common/SocialLinks'
import Pagination from '../_common/Pagination'
import Copyright from '../_common/Copyright'
import Tilt from '../_common/Tilt'
import {PATHS, TILT_SCALE} from '../../utils/constants'
import {SocialLink, TiltOptions} from '../../utils/types'
import {CONTACT_LINKS} from '../../data/common'
import {DURATIONS} from '../../styles/theme'

const tiltOptions: TiltOptions = {
  max: isSafari ? 0 : 35,
  scale: TILT_SCALE,
  speed: DURATIONS.LONGEST,
}

const links: SocialLink[] = [
  CONTACT_LINKS.GIT_HUB,
  CONTACT_LINKS.LINKED_IN,
  CONTACT_LINKS.SEVEN_GLYPHS,
  CONTACT_LINKS.INSTAGRAM,
  CONTACT_LINKS.VK,
  CONTACT_LINKS.FACEBOOK,
]

export default function Social(): JSX.Element {
  return (
    <section className="Social Section Section_pagination Section_colorful">
      <h2 className="VisuallyHidden">Фото и социальные сети</h2>
      <div className="Social-Content">
        <Tilt component="figure" className="Social-Photo" options={tiltOptions}>
          <img
            className="Social-Img"
            src={meImg}
            srcSet={`${meImg2x} 2x`}
            alt="Michael Ananiev | vashstamp"
          />
        </Tilt>
        <SocialLinks about links={links} />
      </div>
      <Pagination prevTo={PATHS.HOME} nextTo={PATHS.SKILLS} />
      <Copyright />
    </section>
  )
}
