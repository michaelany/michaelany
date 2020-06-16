import React from 'react'

import Sections from '../common/Sections'
import SocialLinks from '../common/SocialLinks'
import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import ContactForm from './ContactForm'
import Map from './Map'
import {BLANK_LINK_PROPS, PATHS} from '../../utils/constants'
import {SocialLink} from '../../utils/types'
import {TITLES, CONTACT_LINKS} from '../../data/common'

const links: SocialLink[] = [
  CONTACT_LINKS.telegram,
  CONTACT_LINKS.skype,
  CONTACT_LINKS.linkedIn,
  CONTACT_LINKS.vk,
  CONTACT_LINKS.facebook,
]

export default function Contact(): JSX.Element {
  return (
    <Sections
      contact
      firstSection={
        <section className="Section Section_pagination">
          <div>
            <h1 className="Title">{TITLES.contact}</h1>
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
          <Pagination prevTo={PATHS.portfolio} />
          <Copyright />
        </section>
      }
      secondSection={<Map />}
    />
  )
}
