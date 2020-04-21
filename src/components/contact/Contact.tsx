import React from 'react'

import Sections from '../_common/Sections'
import SocialLinks from '../_common/SocialLinks'
import Pagination from '../_common/Pagination'
import ContactForm from './ContactForm'
import Map from './Map'
import {BLANK_LINK_PROPS, PATHS} from '../../utils/constants'
import {SocialLink} from '../../utils/types'
import {TITLES, CONTACT_LINKS} from '../../data/common'

const links: SocialLink[] = [
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
        <section className="Section Section_pagination">
          <div>
            <h1 className="Title">{TITLES.CONTACT}</h1>
            <p className="MainText MainText_dark">
              Вам нужна моя помощь или у вас есть ко мне вопросы? Напишите мне
              на{' '}
              <a
                {...BLANK_LINK_PROPS}
                className="Link"
                href="mailto:mclananiev@gmail.com"
              >
                mclananiev@gmail.com
              </a>{' '}
              или воспользуйтесь формой ниже.
            </p>
            <ContactForm />
          </div>
          <SocialLinks links={links} />
          <Pagination prevTo={PATHS.PORTFOLIO} />
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
