import React from 'react'

import './Social.scss'
import meImg from '../../assets/img/pictures/me.png'
import meImg2x from '../../assets/img/pictures/me@2x.png'
import SocialLinks from '../_common/SocialLinks'
import Pagination from '../_common/Pagination'
import {CONTACT_LINKS} from '../../utils/data'
import {Path} from '../../utils/enums'
import {ISocialLink} from '../../utils/types'

const imgSize: number = 320

const links: ISocialLink[] = [
  CONTACT_LINKS.GIT_HUB,
  CONTACT_LINKS.LINKED_IN,
  CONTACT_LINKS.SEVEN_GLYPHS,
  CONTACT_LINKS.INSTAGRAM,
  CONTACT_LINKS.VK,
  CONTACT_LINKS.FACEBOOK,
]

export default function Social(): JSX.Element {
  return (
    <section className="Social Section Section_type_pagination Section_color_green">
      <h2 className="VisuallyHidden">Фото и социальные сети</h2>
      <div className="Social-Content">
        <div className="Social-Photo">
          <img
            width={imgSize}
            height={imgSize}
            src={meImg}
            srcSet={`${meImg2x} 2x`}
            alt="Michael Ananiev | vashstamp"
          />
        </div>
        <SocialLinks about links={links} />
      </div>
      <Pagination prevTo={Path.HOME} nextTo={Path.SKILLS} />
    </section>
  )
}
