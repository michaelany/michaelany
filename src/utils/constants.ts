import {SwiperOptions} from 'swiper'

import {Path, Color, ProjectType, Map} from './types'
import {DURATIONS} from '../styles/theme'

interface Colors {
  ALTERNATE: Color
  WHITE: Color
  DEFAULT: Color
  BLUE: Color
  GREEN: Color
  GRASS: Color
  RED: Color
  YELLOW: Color
  VIOLET: Color
}

interface Paths {
  HOME: Path
  ABOUT: Path
  SKILLS: Path
  EXPERIENCE: Path
  PORTFOLIO: Path
  CONTACT: Path
}

interface ProjectTypes {
  APP: ProjectType
  SITE: ProjectType
  ADMIN: ProjectType
  LANDING: ProjectType
}

interface PROJECT_PATHS {
  PROXIMAL: string
  EMBP: string
  TMF: string
  LITE: string
  MELISSA: string
  FOODP: string
  FOOD: string
  SDS: string
  STRONG: string
  ROGUE: string
  TRUCKS: string
  SERVICES: string
  FCDC: string
  SAFFRON: string
  WHIP: string
  LAZYAZD: string
  LAZYAZ: string
  GLYPHS: string
  MSP: string
}

interface BlankLinkProps {
  target: string
  rel: string
}

export const TILT_SCALE: number = 1.05

export const COLORS: Colors = {
  ALTERNATE: 'alternate',
  WHITE: 'white',
  DEFAULT: 'default',
  BLUE: 'blue',
  GREEN: 'green',
  GRASS: 'grass',
  RED: 'red',
  YELLOW: 'yellow',
  VIOLET: 'violet',
}

export const PATHS: Paths = {
  HOME: '/',
  ABOUT: '/about',
  SKILLS: '/skills',
  EXPERIENCE: '/experience',
  PORTFOLIO: '/portfolio',
  CONTACT: '/contact',
}

export const BLANK_LINK_PROPS: BlankLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export const PROJECT_TYPES: ProjectTypes = {
  APP: 'app',
  SITE: 'site',
  ADMIN: 'admin',
  LANDING: 'landing',
}

export const PROJECT_PATHS: PROJECT_PATHS = {
  PROXIMAL: '/proximal-coffee',
  EMBP: '/arma-embp',
  TMF: '/tmf',
  LITE: '/7glyphs-lite',
  MELISSA: '/melissa-chalmers',
  FOODP: '/foodprint-portal',
  FOOD: '/foodprint',
  SDS: '/sds',
  STRONG: '/strongher',
  ROGUE: '/rogue-travel',
  TRUCKS: '/quarry-trucks',
  SERVICES: '/service-packages',
  FCDC: '/fcdc-dashboard',
  SAFFRON: '/12-saffron',
  WHIP: '/whip-around',
  LAZYAZD: '/lazyaz-dashboard',
  LAZYAZ: '/lazyaz',
  GLYPHS: '/7glyphs',
  MSP: '/msp',
}

export const PATH_COLORS: Map<Color> = {
  [PATHS.HOME]: COLORS.ALTERNATE,
  [PATHS.ABOUT]: COLORS.GREEN,
  [PATHS.SKILLS]: COLORS.BLUE,
  [PATHS.EXPERIENCE]: COLORS.VIOLET,
  [PATHS.PORTFOLIO]: COLORS.WHITE,
  [PATHS.CONTACT]: COLORS.WHITE,
  [PROJECT_PATHS.EMBP]: COLORS.BLUE,
  [PROJECT_PATHS.PROXIMAL]: COLORS.YELLOW,
  [PROJECT_PATHS.TMF]: COLORS.BLUE,
  [PROJECT_PATHS.LITE]: COLORS.GRASS,
  [PROJECT_PATHS.MELISSA]: COLORS.GREEN,
  [PROJECT_PATHS.FOODP]: COLORS.BLUE,
  [PROJECT_PATHS.FOOD]: COLORS.VIOLET,
  [PROJECT_PATHS.SDS]: COLORS.GRASS,
  [PROJECT_PATHS.STRONG]: COLORS.RED,
  [PROJECT_PATHS.ROGUE]: COLORS.VIOLET,
  [PROJECT_PATHS.TRUCKS]: COLORS.DEFAULT,
  [PROJECT_PATHS.SERVICES]: COLORS.GRASS,
  [PROJECT_PATHS.FCDC]: COLORS.DEFAULT,
  [PROJECT_PATHS.SAFFRON]: COLORS.YELLOW,
  [PROJECT_PATHS.WHIP]: COLORS.DEFAULT,
  [PROJECT_PATHS.LAZYAZD]: COLORS.DEFAULT,
  [PROJECT_PATHS.LAZYAZ]: COLORS.RED,
  [PROJECT_PATHS.GLYPHS]: COLORS.GRASS,
  [PROJECT_PATHS.MSP]: COLORS.BLUE,
}

export const SWIPER_OPTIONS: SwiperOptions = {
  grabCursor: true,
  loop: true,
  speed: DURATIONS.LONGER,
  autoplay: {
    delay: DURATIONS.LINGERING,
    disableOnInteraction: false,
  },
}
