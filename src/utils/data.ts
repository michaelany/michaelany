import {ReactComponent as SevenGlyphsIcon} from '../assets/icons/7glyphs.svg'
import {ReactComponent as GitHubIcon} from '../assets/icons/github.svg'
import {ReactComponent as LinkedInIcon} from '../assets/icons/linkedin.svg'
import {ReactComponent as InstagramIcon} from '../assets/icons/instagram.svg'
import {ReactComponent as VKIcon} from '../assets/icons/vk.svg'
import {ReactComponent as FacebookIcon} from '../assets/icons/facebook.svg'
import {ReactComponent as TelegramIcon} from '../assets/icons/telegram.svg'
import {ReactComponent as SkypeIcon} from '../assets/icons/skype.svg'
import {Company} from './enums'
import {ISocialLink, IMap} from './types'

interface IBlankLinkProps {
  target: string
  rel: string
}

export const BLANK_LINK_PROPS: IBlankLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export const CONTACT_LINKS: IMap<ISocialLink> = {
  GIT_HUB: {
    title: 'GitHub',
    href: 'https://github.com/vashstamp',
    Icon: GitHubIcon,
  },
  LINKED_IN: {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/mclananiev',
    Icon: LinkedInIcon,
  },
  SEVEN_GLYPHS: {
    title: `${Company.SEVEN_GLYPHS} Team`,
    href: 'https://7glyphs.com/agency/team',
    Icon: SevenGlyphsIcon,
  },
  INSTAGRAM: {
    title: 'Instagram',
    href: 'https://www.instagram.com/mclananiev/',
    Icon: InstagramIcon,
  },
  VK: {title: 'VK', href: 'https://vk.com/mclananiev', Icon: VKIcon},
  FACEBOOK: {
    title: 'Facebook',
    href: 'https://www.facebook.com/mclananiev',
    Icon: FacebookIcon,
  },
  TELEGRAM: {
    title: 'Telegram',
    href: 'https://t.me/mclananiev',
    Icon: TelegramIcon,
  },
  SKYPE: {
    title: 'Skype',
    href: 'skype:live:bd80acb1b9083867?chat',
    Icon: SkypeIcon,
  },
}
