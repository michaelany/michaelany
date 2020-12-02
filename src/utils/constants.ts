import {SwiperOptions} from 'swiper'
import {TypistProps} from 'react-typist'
import {differenceInYears, format} from 'date-fns'
import locale from 'date-fns/locale/ru'

import {Route, Color, ProjectType, Map} from './types'
import {DURATION, BREAKPOINT} from '../styles/theme'

interface Detect {
  mobile: boolean
  safari: boolean
}

interface ColorInterface {
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

interface RouteInterface {
  home: Route
  about: Route
  skills: Route
  experience: Route
  portfolio: Route
  contact: Route
}

interface QueryBreakpoint {
  xs: string
  sm: string
  md: string
  lg: string
}

interface ProjectTypeInterface {
  app: ProjectType
  site: ProjectType
  admin: ProjectType
  landing: ProjectType
}

interface ProjectRoute {
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

export const ROOT: HTMLElement = document.getElementById('root') as HTMLElement

export const DETECT: Detect = {
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

export const TODAY: Date = new Date()

export const YEARS_OF_EXPERIENCE: number =
  differenceInYears(TODAY, CAREER_START_DATE) + 1

export const COLOR: ColorInterface = {
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

export const ROUTE: RouteInterface = {
  home: '/',
  about: '/about',
  skills: '/skills',
  experience: '/experience',
  portfolio: '/portfolio',
  contact: '/contact',
}

export const QUERY_BREAKPOINT: QueryBreakpoint = {
  xs: `(max-width: ${BREAKPOINT.xs}px)`,
  sm: `(max-width: ${BREAKPOINT.sm}px)`,
  md: `(max-width: ${BREAKPOINT.md}px)`,
  lg: `(max-width: ${BREAKPOINT.lg}px)`,
}

export const PROJECT_TYPE: ProjectTypeInterface = {
  app: 'app',
  site: 'site',
  admin: 'admin',
  landing: 'landing',
}

export const PROJECT_ROUTE: ProjectRoute = {
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

export const PATH_COLOR: Map<Color> = {
  [ROUTE.home]: COLOR.alternate,
  [ROUTE.about]: COLOR.green,
  [ROUTE.skills]: COLOR.blue,
  [ROUTE.experience]: COLOR.violet,
  [ROUTE.portfolio]: COLOR.white,
  [ROUTE.contact]: COLOR.white,
  [PROJECT_ROUTE.embp]: COLOR.blue,
  [PROJECT_ROUTE.proximal]: COLOR.yellow,
  [PROJECT_ROUTE.tmf]: COLOR.blue,
  [PROJECT_ROUTE.lite]: COLOR.grass,
  [PROJECT_ROUTE.mellissa]: COLOR.green,
  [PROJECT_ROUTE.foodp]: COLOR.blue,
  [PROJECT_ROUTE.food]: COLOR.violet,
  [PROJECT_ROUTE.sds]: COLOR.grass,
  [PROJECT_ROUTE.strong]: COLOR.red,
  [PROJECT_ROUTE.rogue]: COLOR.violet,
  [PROJECT_ROUTE.trucks]: COLOR.default,
  [PROJECT_ROUTE.services]: COLOR.grass,
  [PROJECT_ROUTE.fcdc]: COLOR.default,
  [PROJECT_ROUTE.saffron]: COLOR.yellow,
  [PROJECT_ROUTE.whip]: COLOR.default,
  [PROJECT_ROUTE.lazyazd]: COLOR.default,
  [PROJECT_ROUTE.lazyaz]: COLOR.red,
  [PROJECT_ROUTE.glyphs]: COLOR.grass,
  [PROJECT_ROUTE.msp]: COLOR.blue,
}

export const BLANK_LINK_PROPS: BlankLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export const SWIPER_OPTIONS: SwiperOptions = {
  grabCursor: true,
  loop: true,
  speed: DURATION.longer,
  loopedSlides: 3,
  autoplay: {
    delay: DURATION.lingering,
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
