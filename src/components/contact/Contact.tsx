import {useTranslation, Trans} from 'react-i18next'

import {Sections, SocialLinks, Pagination, Copyright} from '../common'
import ContactForm from './ContactForm'
import Map from './Map'
import {BLANK_LINK_PROPS, ROUTE} from 'utils/constants'
import {SocialLink} from 'utils/types'
import {CONTACT_LINK} from 'data/common'

const links: SocialLink[] = [CONTACT_LINK.telegram, CONTACT_LINK.linkedIn]

const email = 'michael.any.dev@gmail.com'

const transComponents = [
  <strong />,
  // eslint-disable-next-line
  <a {...BLANK_LINK_PROPS} className="Link" href={`mailto:${email}`} />,
]

export default function Contact(): JSX.Element {
  const {t} = useTranslation()

  return (
    <Sections
      contact
      firstSection={
        <section className="Section Section_pagination">
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
