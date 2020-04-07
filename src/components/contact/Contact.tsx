import React from 'react'

import Sections from '../_common/Sections'
import SocialLinks from '../_common/SocialLinks'
import Pagination from '../_common/Pagination'
import ContactForm from './ContactForm'
import Map from './Map'
import {CONTACT_LINKS} from '../../utils/data'
import {Path, Title} from '../../utils/enums'
import {ISocialLink} from '../../utils/types'

const links: ISocialLink[] = [
  CONTACT_LINKS.TELEGRAM,
  CONTACT_LINKS.SKYPE,
  CONTACT_LINKS.LINKED_IN,
  CONTACT_LINKS.VK,
  CONTACT_LINKS.FACEBOOK,
]

export default function Contact(): JSX.Element {
  return (
    <Sections
      firstSection={
        <section className="Section Section_type_pagination">
          <div>
            <h1 className="Title Title_color_white">{Title.CONTACT}</h1>
            <p className="MainText MainText_light">
              Вам нужна моя помощь или у вас есть ко мне вопросы? Напишите мне
              на{' '}
              <a className="Link" href="mailto:mclananiev@gmail.com">
                mclananiev@gmail.com
              </a>{' '}
              или воспользуйтесь формой ниже.
            </p>
            <ContactForm />
          </div>
          <SocialLinks links={links} />
          <Pagination prevTo={Path.PORTFOLIO} />
        </section>
      }
      secondSection={
        <div className="Sections-Map">
          <Map />
        </div>
      }
    />
  )
}
