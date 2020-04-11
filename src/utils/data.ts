import everpointImg from '../assets/img/companies/everpoint.png'
import everpointImg2x from '../assets/img/companies/everpoint@2x.png'
import sevenGlyphsImg from '../assets/img/companies/7glyphs.png'
import sevenGlyphsImg2x from '../assets/img/companies/7glyphs@2x.png'
import tsftdImg from '../assets/img/companies/tsftd.png'
import tsftdImg2x from '../assets/img/companies/tsftd@2x.png'
import mvideoImg from '../assets/img/companies/mvideo.png'
import mvideoImg2x from '../assets/img/companies/mvideo@2x.png'
import maImg from '../assets/img/companies/ma.png'
import maImg2x from '../assets/img/companies/ma@2x.png'
import {ReactComponent as SevenGlyphsIcon} from '../assets/icons/7glyphs.svg'
import {ReactComponent as GitHubIcon} from '../assets/icons/github.svg'
import {ReactComponent as LinkedInIcon} from '../assets/icons/linkedin.svg'
import {ReactComponent as InstagramIcon} from '../assets/icons/instagram.svg'
import {ReactComponent as VKIcon} from '../assets/icons/vk.svg'
import {ReactComponent as FacebookIcon} from '../assets/icons/facebook.svg'
import {ReactComponent as TelegramIcon} from '../assets/icons/telegram.svg'
import {ReactComponent as SkypeIcon} from '../assets/icons/skype.svg'
import {Company} from './enums'
import {ISocialLink, IMap, ICompany} from './types'

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

export const COMPANIES: IMap<ICompany> = {
  MA: {
    title: Company.MA,
    logo: maImg,
    logo2x: maImg2x,
  },
  TSFTD: {
    title: Company.TSFTD,
    logo: tsftdImg,
    logo2x: tsftdImg2x,
  },
  SEVEN_GLYPHS: {
    title: Company.SEVEN_GLYPHS,
    logo: sevenGlyphsImg,
    logo2x: sevenGlyphsImg2x,
  },
  EVERPOINT: {
    title: Company.EVERPOINT,
    logo: everpointImg,
    logo2x: everpointImg2x,
  },
  MVIDEO: {
    title: Company.MVIDEO,
    logo: mvideoImg,
    logo2x: mvideoImg2x,
  },
}
