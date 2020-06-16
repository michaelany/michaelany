import React from 'react'

import './Social.scss'
import meImg from '../../assets/img/pictures/me.png'
import meImg2x from '../../assets/img/pictures/me@2x.png'
import SocialLinks from '../common/SocialLinks'
import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import Tilt from '../common/Tilt'
import {DETECTED, PATHS, TILT_SCALE} from '../../utils/constants'
import {SocialLink, TiltOptions} from '../../utils/types'
import {CONTACT_LINKS} from '../../data/common'
import {DURATIONS} from '../../styles/theme'

const tiltOptions: TiltOptions = {
  max: DETECTED.safari ? 0 : 35,
  scale: TILT_SCALE,
  speed: DURATIONS.longest,
}

const links: SocialLink[] = [
  CONTACT_LINKS.gitHub,
  CONTACT_LINKS.linkedIn,
  CONTACT_LINKS.sevenGlyphs,
  CONTACT_LINKS.instagram,
  CONTACT_LINKS.vk,
  CONTACT_LINKS.facebook,
]

export default function Social(): JSX.Element {
  return (
    <section className="Social Section Section_pagination Section_colorful FadeInRight">
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
      <Pagination prevTo={PATHS.home} nextTo={PATHS.skills} />
      <Copyright />
    </section>
  )
}
