import {ReactComponent as SevenGlyphsIcon} from '../assets/icons/7glyphs.svg'
import {ReactComponent as GitHubIcon} from '../assets/icons/github.svg'
import {ReactComponent as LinkedInIcon} from '../assets/icons/linkedin.svg'
import {ReactComponent as TwitterIcon} from '../assets/icons/twitter.svg'
import {ReactComponent as InstagramIcon} from '../assets/icons/instagram.svg'
import {ReactComponent as VKIcon} from '../assets/icons/vk.svg'
import {ISocialLink} from './types'

interface IBlankLinkProps {
  target: string
  rel: string
}

export const BLANK_LINK_PROPS: IBlankLinkProps = {target: '_blank', rel: 'noopener noreferrer'}

export const SOCIAL_LINKS: ISocialLink[] = [
  {id: 1, title: 'GitHub', href: 'https://github.com/vashstamp', Icon: GitHubIcon},
  {id: 2, title: 'LinkedIn', href: 'https://www.linkedin.com/mclananiev', Icon: LinkedInIcon},
  {id: 3, title: '7glyphs website', href: 'https://7glyphs.com/agency/team', Icon: SevenGlyphsIcon},
  {id: 4, title: 'Instagram', href: 'https://www.instagram.com/mclananiev/', Icon: InstagramIcon},
  {id: 5, title: 'VK', href: 'https://vk.com/mclananiev', Icon: VKIcon},
  {id: 6, title: 'Twitter', href: 'https://twitter.com/Michael74844231', Icon: TwitterIcon},
]
