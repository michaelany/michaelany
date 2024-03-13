import {useTranslation, Trans} from 'react-i18next'
import {Link} from '@mui/material'

import {Sections, SocialLinks, Section} from '#components/common'
import {BLANK_LINK_PROPS, ROUTE} from '#utils/constants'
import {ISocialLink} from '#utils/types'
import {CONTACT_LINK} from '#data/common'
import ContactForm from './ContactForm'
import Map from './Map'

export default function Contact() {
  const {t} = useTranslation()

  return (
    <Sections
      contact
      firstSection={
        <Section prevTo={ROUTE.vlog}>
          <div>
            <h1 className="Title">{t('title.contact')}</h1>
            <p className="MainText MainText_dark">
              <Trans
                i18nKey="contact.text.part1"
                components={transComponents}
              />
              ?<br />
              <Trans
                i18nKey="contact.text.part2"
                components={transComponents}
              />
              ?<br />
              <Trans
                i18nKey="contact.text.part3"
                values={[email]}
                components={transComponents}
              />
              :
            </p>
            <ContactForm />
            <SocialLinks links={links} />
          </div>
        </Section>
      }
      secondSection={<Map />}
    />
  )
}

const links: ISocialLink[] = [
  CONTACT_LINK.telegram,
  CONTACT_LINK.linkedIn,
  CONTACT_LINK.instagram,
  //CONTACT_LINK.facebook,
]

const email = 'michaelany.it@gmail.com'

const transComponents = [
  <strong />,
  <Link {...BLANK_LINK_PROPS} className="Link" href={`mailto:${email}`} />,
]
