import {YouTube as YouTubeIcon} from '@mui/icons-material'

import {publicImg} from '#utils/helpers'
import SevenGlyphsIcon from '#assets/icons/7glyphs.svg?react'
import GitHubIcon from '#assets/icons/github.svg?react'
import LinkedInIcon from '#assets/icons/linkedin.svg?react'
import InstagramIcon from '#assets/icons/instagram.svg?react'
import FacebookIcon from '#assets/icons/facebook.svg?react'
import TelegramIcon from '#assets/icons/telegram.svg?react'
import AirbnbIcon from '#assets/icons/airbnb.svg?react'
import type {ISocialLink, ICompany} from '#utils/types'

interface IContactLink {
  gitHub: ISocialLink
  linkedIn: ISocialLink
  sevenGlyphs: ISocialLink
  youTube: ISocialLink
  instagram: ISocialLink
  facebook: ISocialLink
  telegram: ISocialLink
  airbnb: ISocialLink
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
    image: publicImg('companies/gorentals.svg'),
    color: 'red',
    href: 'https://gorentals.co.nz',
  },
  sevenGlyphs: {
    title: '7 glyphs',
    name: 'sevenGlyphs',
    image: publicImg('companies/7glyphs.svg'),
    color: 'neutral',
    href: 'https://7glyphs.com',
  },
  t1: {
    title: 'T1',
    name: 't1',
    image: publicImg('companies/t1.svg'),
    color: 'blue',
    href: 'https://t1.ru',
  },
  everpoint: {
    title: 'Everpoint',
    name: 'everpoint',
    image: publicImg('companies/everpoint.svg'),
    color: 'grass',
    href: 'https://everpoint.ru',
  },
  mVideo: {
    title: 'M.Video',
    name: 'mVideo',
    image: publicImg('companies/mvideo.svg'),
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
    href: 'https://www.instagram.com/anymichael/tagged',
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
  airbnb: {
    title: 'Airbnb',
    href: 'https://www.airbnb.co.nz/users/profile/1496122520349253877',
    Icon: AirbnbIcon,
    size: 'lg',
  },
}

export const FEATURE = {
  rest: 'REST API',
  socket: 'WebSocket',
  seo: 'SEO',
  mcp: 'MCP',
  ab: 'A/B',
  headlessCms: 'headless CMS',
  pixelPerfect: 'pixel-perfect',
  pwa: 'PWA',
  reduxThunk: 'Redux Thunk',
  reduxToolkit: 'Redux Toolkit',
  appStore: 'App Store',
  googlePlay: 'Google Play',
  ffmpeg: 'FFmpeg',
  nintendoAmiibo: 'Nintendo amiibo',
}
