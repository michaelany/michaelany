import {SwiperOptions} from 'swiper'
import {differenceInYears, format} from 'date-fns'
import locale from 'date-fns/locale/ru'

import {Route, Color, ProjectType, Map} from './types'
import {DURATION, BREAKPOINT} from '../styles/theme'

interface Detect {
  mobile: boolean
  safari: boolean
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
  [ROUTE.home]: 'alternate',
  [ROUTE.about]: 'green',
  [ROUTE.skills]: 'blue',
  [ROUTE.experience]: 'violet',
  [ROUTE.portfolio]: 'white',
  [ROUTE.contact]: 'white',
  [PROJECT_ROUTE.embp]: 'blue',
  [PROJECT_ROUTE.proximal]: 'yellow',
  [PROJECT_ROUTE.tmf]: 'blue',
  [PROJECT_ROUTE.lite]: 'grass',
  [PROJECT_ROUTE.mellissa]: 'green',
  [PROJECT_ROUTE.foodp]: 'blue',
  [PROJECT_ROUTE.food]: 'violet',
  [PROJECT_ROUTE.sds]: 'grass',
  [PROJECT_ROUTE.strong]: 'red',
  [PROJECT_ROUTE.rogue]: 'violet',
  [PROJECT_ROUTE.trucks]: 'default',
  [PROJECT_ROUTE.services]: 'grass',
  [PROJECT_ROUTE.fcdc]: 'default',
  [PROJECT_ROUTE.saffron]: 'yellow',
  [PROJECT_ROUTE.whip]: 'default',
  [PROJECT_ROUTE.lazyazd]: 'default',
  [PROJECT_ROUTE.lazyaz]: 'red',
  [PROJECT_ROUTE.glyphs]: 'grass',
  [PROJECT_ROUTE.msp]: 'blue',
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
