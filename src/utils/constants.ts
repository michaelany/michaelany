import {SwiperOptions} from 'swiper'
import {TypistProps} from 'react-typist'
import {differenceInYears, format} from 'date-fns'
import locale from 'date-fns/locale/ru'

import {Path, Color, ProjectType, Map} from './types'
import {DURATIONS} from '../styles/theme'

interface Detected {
  mobile: boolean
  safari: boolean
}

interface Colors {
  alternate: Color
  white: Color
  default: Color
  blue: Color
  green: Color
  grass: Color
  red: Color
  yellow: Color
  violet: Color
}

interface Paths {
  home: Path
  about: Path
  skills: Path
  experience: Path
  portfolio: Path
  contact: Path
}

interface ProjectTypes {
  app: ProjectType
  site: ProjectType
  admin: ProjectType
  landing: ProjectType
}

interface ProjectPaths {
  proximal: string
  embp: string
  tmf: string
  lite: string
  mellissa: string
  foodp: string
  food: string
  sds: string
  strong: string
  rogue: string
  trucks: string
  services: string
  fcdc: string
  saffron: string
  whip: string
  lazyazd: string
  lazyaz: string
  glyphs: string
  msp: string
}

interface BlankLinkProps {
  target: string
  rel: string
}

export const DETECTED: Detected = {
  mobile: [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ].some((device: RegExp) => navigator.userAgent.match(device)),
  safari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
}

export const TILT_SCALE: number = 1.05

export const CAREER_START_DATE: Date = new Date(2016, 6)

export const CAREER_START_STRING = format(CAREER_START_DATE, 'LLLL yyyy', {
  locale,
})

console.log(CAREER_START_STRING)

export const YEARS_OF_EXPERIENCE: number = differenceInYears(
  new Date(),
  CAREER_START_DATE
)

export const COLORS: Colors = {
  alternate: 'alternate',
  white: 'white',
  default: 'default',
  blue: 'blue',
  green: 'green',
  grass: 'grass',
  red: 'red',
  yellow: 'yellow',
  violet: 'violet',
}

export const PATHS: Paths = {
  home: '/',
  about: '/about',
  skills: '/skills',
  experience: '/experience',
  portfolio: '/portfolio',
  contact: '/contact',
}

export const BLANK_LINK_PROPS: BlankLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export const PROJECT_TYPES: ProjectTypes = {
  app: 'app',
  site: 'site',
  admin: 'admin',
  landing: 'landing',
}

export const PROJECT_PATHS: ProjectPaths = {
  proximal: '/proximal-coffee',
  embp: '/arma-embp',
  tmf: '/tmf',
  lite: '/7glyphs-lite',
  mellissa: '/melissa-chalmers',
  foodp: '/foodprint-portal',
  food: '/foodprint',
  sds: '/sds',
  strong: '/strongher',
  rogue: '/rogue-travel',
  trucks: '/quarry-trucks',
  services: '/service-packages',
  fcdc: '/fcdc-dashboard',
  saffron: '/12-saffron',
  whip: '/whip-around',
  lazyazd: '/lazyaz-dashboard',
  lazyaz: '/lazyaz',
  glyphs: '/7glyphs',
  msp: '/msp',
}

export const PATH_COLORS: Map<Color> = {
  [PATHS.home]: COLORS.alternate,
  [PATHS.about]: COLORS.green,
  [PATHS.skills]: COLORS.blue,
  [PATHS.experience]: COLORS.violet,
  [PATHS.portfolio]: COLORS.white,
  [PATHS.contact]: COLORS.white,
  [PROJECT_PATHS.embp]: COLORS.blue,
  [PROJECT_PATHS.proximal]: COLORS.yellow,
  [PROJECT_PATHS.tmf]: COLORS.blue,
  [PROJECT_PATHS.lite]: COLORS.grass,
  [PROJECT_PATHS.mellissa]: COLORS.green,
  [PROJECT_PATHS.foodp]: COLORS.blue,
  [PROJECT_PATHS.food]: COLORS.violet,
  [PROJECT_PATHS.sds]: COLORS.grass,
  [PROJECT_PATHS.strong]: COLORS.red,
  [PROJECT_PATHS.rogue]: COLORS.violet,
  [PROJECT_PATHS.trucks]: COLORS.default,
  [PROJECT_PATHS.services]: COLORS.grass,
  [PROJECT_PATHS.fcdc]: COLORS.default,
  [PROJECT_PATHS.saffron]: COLORS.yellow,
  [PROJECT_PATHS.whip]: COLORS.default,
  [PROJECT_PATHS.lazyazd]: COLORS.default,
  [PROJECT_PATHS.lazyaz]: COLORS.red,
  [PROJECT_PATHS.glyphs]: COLORS.grass,
  [PROJECT_PATHS.msp]: COLORS.blue,
}

export const SWIPER_OPTIONS: SwiperOptions = {
  grabCursor: true,
  loop: true,
  speed: DURATIONS.longer,
  loopedSlides: 3,
  autoplay: {
    delay: DURATIONS.lingering,
    disableOnInteraction: false,
  },
}

export const TYPIST_PROPS: TypistProps = {
  avgTypingDelay: 70,
  stdTypingDelay: 25,
  cursor: {
    show: false,
  },
}
