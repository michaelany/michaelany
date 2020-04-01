import React from 'react'

import './Social.scss'
import meImg from '../../assets/img/pictures/me.png'
import meImg2x from '../../assets/img/pictures/me@2x.png'
import SocialLinks from '../_common/SocialLinks'
import Pagination from '../_common/Pagination'
import {SOCIAL_LINKS} from '../../utils/data'
import {Path} from '../../utils/enums'

const imgSize: number = 320

export default function Social(): JSX.Element {
  return (
    <section className="Social Section Section_type_pagination Section_backgroundColor_green">
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
        <SocialLinks links={SOCIAL_LINKS} />
      </div>
      <Pagination prevTo={Path.HOME} nextTo={Path.SKILLS} />
    </section>
  )
}
