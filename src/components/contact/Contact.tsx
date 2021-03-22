import React from 'react'

import Sections from '../common/Sections'
import SocialLinks from '../common/SocialLinks'
import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import ContactForm from './ContactForm'
import Map from './Map'
import {BLANK_LINK_PROPS, ROUTE} from '../../utils/constants'
import {SocialLink} from '../../utils/types'
import {TITLE, CONTACT_LINK} from '../../data/common'

const links: SocialLink[] = [
  CONTACT_LINK.telegram,
  CONTACT_LINK.skype,
  CONTACT_LINK.linkedIn,
  CONTACT_LINK.vk,
  CONTACT_LINK.facebook,
]

const email: string = 'mclananiev@gmail.com'

export default function Contact(): JSX.Element {
  return (
    <Sections
      contact
      firstSection={
        <section className="Section Section_pagination">
          <div>
            <h1 className="Title">{TITLE.contact}</h1>
            <p className="MainText MainText_dark">
              Вам нужна моя помощь или у вас есть ко мне вопросы? Напишите мне
              на{' '}
              <a
                {...BLANK_LINK_PROPS}
                className="Link"
                href={`mailto:${email}`}
              >
                {email}
              </a>{' '}
              или воспользуйтесь формой:
            </p>
            <ContactForm />
          </div>
          <SocialLinks links={links} />
          <Pagination prevTo={ROUTE.portfolio} />
          <Copyright />
        </section>
      }
      secondSection={<Map />}
    />
  )
}
