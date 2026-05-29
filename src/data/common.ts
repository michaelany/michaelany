import {YouTube as YouTubeIcon} from '@mui/icons-material'

import {publicImg} from '#utils/helpers'
import SevenGlyphsIcon from '#assets/icons/7glyphs.svg?react'
import GitHubIcon from '#assets/icons/github.svg?react'
import LinkedInIcon from '#assets/icons/linkedin.svg?react'
import InstagramIcon from '#assets/icons/instagram.svg?react'
import DuolingoIcon from '#assets/icons/duolingo.svg?react'
import FacebookIcon from '#assets/icons/facebook.svg?react'
import TelegramIcon from '#assets/icons/telegram.svg?react'
import type {ISocialLink, ICompany} from '#utils/types'

interface IContactLink {
  gitHub: ISocialLink
  linkedIn: ISocialLink
  sevenGlyphs: ISocialLink
  youTube: ISocialLink
  instagram: ISocialLink
  facebook: ISocialLink
  telegram: ISocialLink
  duolingo: ISocialLink
}

interface ICompanyData {
  goRentals: ICompany
  sevenGlyphs: ICompany
  t1: ICompany
  everpoint: ICompany
  mVideo: ICompany
}

export const MY_NAME = 'Michael Any'

export const COMPANY: ICompanyData = {
  goRentals: {
    title: 'GO Rentals',
    name: 'goRentals',
    images: [
      publicImg('companies/gorentals.png'),
      publicImg('companies/gorentals@2x.png'),
    ],
    color: 'red',
    href: 'https://gorentals.co.nz',
  },
  sevenGlyphs: {
    title: '7 glyphs',
    name: 'sevenGlyphs',
    images: [
      publicImg('companies/7glyphs.png'),
      publicImg('companies/7glyphs@2x.png'),
    ],
    color: 'default',
    href: 'https://7glyphs.com',
  },
  t1: {
    title: 'T1 Consulting',
    name: 't1',
    images: [publicImg('companies/t1.png'), publicImg('companies/t1@2x.png')],
    color: 'blue',
    href: 'http://t1-consulting.ru',
  },
  everpoint: {
    title: 'Everpoint',
    name: 'everpoint',
    images: [
      publicImg('companies/everpoint.png'),
      publicImg('companies/everpoint@2x.png'),
    ],
    color: 'grass',
    href: 'https://everpoint.ru',
  },
  mVideo: {
    title: 'M.Video',
    name: 'mVideo',
    images: [
      publicImg('companies/mvideo.png'),
      publicImg('companies/mvideo@2x.png'),
    ],
    color: 'red',
    href: 'https://mvideo.ru',
  },
}

export const CONTACT_LINK: IContactLink = {
  gitHub: {
    title: 'GitHub',
    href: 'https://github.com/michaelany',
    Icon: GitHubIcon,
    size: 'lg',
  },
  linkedIn: {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/michaelany',
    Icon: LinkedInIcon,
    size: 'sm',
  },
  telegram: {
    title: 'Telegram',
    href: 'https://t.me/michaelany',
    Icon: TelegramIcon,
    size: 'md',
  },
  youTube: {
    title: 'YouTube',
    href: 'https://youtube.com/@michaelany',
    Icon: YouTubeIcon,
    size: 'xl',
  },
  instagram: {
    title: 'Instagram',
    href: 'https://instagram.com/anymichael',
    Icon: InstagramIcon,
    size: 'md',
  },
  facebook: {
    title: 'Facebook',
    href: 'https://facebook.com/michaelany.fb',
    Icon: FacebookIcon,
    size: 'sm',
  },
  sevenGlyphs: {
    title: `${COMPANY.sevenGlyphs.title} Team`,
    href: 'https://7glyphs.com/agency/team',
    Icon: SevenGlyphsIcon,
    size: 'xs',
  },
  duolingo: {
    title: 'Duolingo',
    href: 'https://duolingo.com/profile/michael.any',
    Icon: DuolingoIcon,
    size: 'md',
  },
}

export const FEATURE = {
  rest: 'REST API',
  keycloak: 'Keycloak',
  socket: 'WebSocket',
}
