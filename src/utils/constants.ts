import {differenceInYears, format} from 'date-fns'
import locale from 'date-fns/locale/en-US'

import {Route, Color} from './types'
import {BREAKPOINT} from 'styles/theme'

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

interface ProjectRoute {
  madfit: string
  madfitp: string
  vibe: string
  tradease: string
  t1online: string
  ninjal: string
  ninja: string
  celebration: string
  ally: string
  presentmep: string
  presentme: string
  presentmel: string
  dropdrone: string
  hatched: string
  uls: string
  proximal: string
  embp: string
  tmf: string
  lite: string
  melissa: string
  foodp: string
  food: string
  sds: string
  strong: string
  glyphs2: string
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

export const CAREER_START_DATE: Date = new Date(2016, 6)

export const CAREER_START_PARTS = format(CAREER_START_DATE, 'LLLL yyyy', {
  locale,
})
  .toLowerCase()
  .split(' ')

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

export const PROJECT_ROUTE: ProjectRoute = {
  madfit: '/madfit',
  madfitp: '/madfit-portal',
  vibe: '/vibe-media',
  tradease: '/tradease',
  t1online: '/t1-online',
  ninjal: '/road-ninja-landing',
  ninja: '/road-ninja',
  celebration: '/celebration',
  ally: '/ally',
  presentmel: '/present-me-landing',
  presentmep: '/present-me-portal',
  presentme: '/present-me',
  dropdrone: '/dropdrone',
  hatched: '/just-hatched',
  uls: '/uls',
  proximal: '/proximal-coffee',
  embp: '/arma-embp',
  tmf: '/tmf',
  lite: '/7glyphs-lite',
  melissa: '/melissa-chalmers',
  foodp: '/foodprint-portal',
  food: '/foodprint',
  sds: '/sds',
  strong: '/strongher',
  glyphs2: '/7glyphs-2',
  rogue: '/rogue-travel',
  trucks: '/quarry-trucks',
  services: '/service-packages',
  fcdc: '/fcdc-dashboard',
  saffron: '/saffron',
  whip: '/whip-around',
  lazyazd: '/lazyaz-dashboard',
  lazyaz: '/lazyaz',
  glyphs: '/7glyphs',
  msp: '/msp',
}

export const PATH_COLOR: Record<Route | string, Color> = {
  [ROUTE.home]: 'alternate',
  [ROUTE.about]: 'green',
  [ROUTE.skills]: 'blue',
  [ROUTE.experience]: 'violet',
  [ROUTE.portfolio]: 'white',
  [ROUTE.contact]: 'white',
  [PROJECT_ROUTE.madfit]: 'green',
  [PROJECT_ROUTE.madfitp]: 'green',
  [PROJECT_ROUTE.vibe]: 'yellow',
  [PROJECT_ROUTE.tradease]: 'red',
  [PROJECT_ROUTE.t1online]: 'blue',
  [PROJECT_ROUTE.ninjal]: 'red',
  [PROJECT_ROUTE.ninja]: 'red',
  [PROJECT_ROUTE.celebration]: 'violet',
  [PROJECT_ROUTE.ally]: 'default',
  [PROJECT_ROUTE.presentmel]: 'yellow',
  [PROJECT_ROUTE.presentmep]: 'yellow',
  [PROJECT_ROUTE.presentme]: 'yellow',
  [PROJECT_ROUTE.dropdrone]: 'default',
  [PROJECT_ROUTE.hatched]: 'yellow',
  [PROJECT_ROUTE.uls]: 'blue',
  [PROJECT_ROUTE.proximal]: 'yellow',
  [PROJECT_ROUTE.embp]: 'blue',
  [PROJECT_ROUTE.tmf]: 'blue',
  [PROJECT_ROUTE.lite]: 'grass',
  [PROJECT_ROUTE.melissa]: 'green',
  [PROJECT_ROUTE.foodp]: 'blue',
  [PROJECT_ROUTE.food]: 'violet',
  [PROJECT_ROUTE.sds]: 'green',
  [PROJECT_ROUTE.strong]: 'red',
  [PROJECT_ROUTE.glyphs2]: 'default',
  [PROJECT_ROUTE.rogue]: 'violet',
  [PROJECT_ROUTE.trucks]: 'yellow',
  [PROJECT_ROUTE.services]: 'grass',
  [PROJECT_ROUTE.fcdc]: 'blue',
  [PROJECT_ROUTE.saffron]: 'yellow',
  [PROJECT_ROUTE.whip]: 'default',
  [PROJECT_ROUTE.lazyazd]: 'default',
  [PROJECT_ROUTE.lazyaz]: 'red',
  [PROJECT_ROUTE.glyphs]: 'grass',
  [PROJECT_ROUTE.msp]: 'blue',
}

export const QUERY_BREAKPOINT: QueryBreakpoint = {
  xs: `(max-width: ${BREAKPOINT.xs}px)`,
  sm: `(max-width: ${BREAKPOINT.sm}px)`,
  md: `(max-width: ${BREAKPOINT.md}px)`,
  lg: `(max-width: ${BREAKPOINT.lg}px)`,
}

export const BLANK_LINK_PROPS: BlankLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}
