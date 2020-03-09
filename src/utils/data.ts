import {ReactComponent as SevenGlyphsIcon} from '../assets/icons/7glyphs.svg'
import {ReactComponent as GitHubIcon} from '../assets/icons/github.svg'
import {ReactComponent as LinkedInIcon} from '../assets/icons/linkedin.svg'
import {ReactComponent as TwitterIcon} from '../assets/icons/twitter.svg'
import {ReactComponent as InstagramIcon} from '../assets/icons/instagram.svg'
import {ReactComponent as VKIcon} from '../assets/icons/vk.svg'
import {ISocialLink} from './types'

export const SOCIAL_LINKS: ISocialLink[] = [
  {id: 1, title: '7glyphs website', href: 'https://7glyphs.com/agency/team', Icon: SevenGlyphsIcon},
  {id: 2, title: 'GitHub', href: 'https://github.com/vashstamp', Icon: GitHubIcon},
  {id: 3, title: 'LinkedIn', href: 'https://www.linkedin.com/mclananiev', Icon: LinkedInIcon},
  {id: 4, title: 'Twitter', href: 'https://twitter.com/Michael74844231', Icon: TwitterIcon},
  {id: 5, title: 'Instagram', href: 'https://www.instagram.com/mclananiev/', Icon: InstagramIcon},
  {id: 6, title: 'VK', href: 'https://vk.com/mclananiev', Icon: VKIcon},
]
