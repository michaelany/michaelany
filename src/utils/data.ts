import {ReactComponent as SevenGlyphsIcon} from '../assets/icons/7glyphs.svg'
import {ReactComponent as GitHubIcon} from '../assets/icons/github.svg'
import {ReactComponent as LinkedInIcon} from '../assets/icons/linkedin.svg'
import {ReactComponent as TwitterIcon} from '../assets/icons/twitter.svg'
import {ReactComponent as InstagramIcon} from '../assets/icons/instagram.svg'
import {ReactComponent as VKIcon} from '../assets/icons/vk.svg'
import {Company} from './enums'
import {ISocialLink} from './types'

interface IBlankLinkProps {
  target: string
  rel: string
}

export const BLANK_LINK_PROPS: IBlankLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export const SOCIAL_LINKS: ISocialLink[] = [
  {title: 'GitHub', href: 'https://github.com/vashstamp', Icon: GitHubIcon},
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/mclananiev',
    Icon: LinkedInIcon,
  },
  {
    title: `${Company.SEVEN_GLYPHS} Team`,
    href: 'https://7glyphs.com/agency/team',
    Icon: SevenGlyphsIcon,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/mclananiev/',
    Icon: InstagramIcon,
  },
  {title: 'VK', href: 'https://vk.com/mclananiev', Icon: VKIcon},
  {
    title: 'Twitter',
    href: 'https://twitter.com/Michael74844231',
    Icon: TwitterIcon,
  },
]
