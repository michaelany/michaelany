import {Sections, SocialLinks, Pagination, Copyright} from '../common'
import ContactForm from './ContactForm'
import Map from './Map'
import {BLANK_LINK_PROPS, ROUTE} from '../../utils/constants'
import {SocialLink} from '../../utils/types'
import {TITLE, CONTACT_LINK} from '../../data/common'

const links: SocialLink[] = [
  CONTACT_LINK.telegram,
  CONTACT_LINK.linkedIn,
  CONTACT_LINK.instagram,
  CONTACT_LINK.facebook,
  CONTACT_LINK.vk,
]

const email: string = 'michael.any.dev@gmail.com'

export default function Contact(): JSX.Element {
  return (
    <Sections
      contact
      firstSection={
        <section className="Section Section_pagination">
          <div>
            <h1 className="Title">{TITLE.contact}</h1>
            <p className="MainText MainText_dark">
              Нужна моя <strong>помощь</strong> или есть ко мне{' '}
              <strong>предложение</strong> ? Пишите на почту{' '}
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
