import {differenceInYears, format} from 'date-fns'

import {BREAKPOINT} from '#styles/theme'
import PROJECTS from '#data/projects'
import VIDEOS from '#data/videos'
import {TRoute, TColor, TProjectFilter, TEffect} from './types'

interface IDetect {
  mobile: boolean
  safari: boolean
}

interface IRoute {
  home: TRoute
  about: TRoute
  skills: TRoute
  experience: TRoute
  portfolio: TRoute
  vlog: TRoute
  contact: TRoute
}

interface IQueryBreakpoint {
  xs: string
  sm: string
  md: string
  lg: string
}

interface IBlankLinkProps {
  target: string
  rel: string
}

export const ROOT = document.getElementById('root') as HTMLElement

export const DETECT: IDetect = {
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

export const CAREER_START_DATE = new Date(2016, 6)

export const CAREER_START_PARTS = format(CAREER_START_DATE, 'LLLL yyyy')
  .toLowerCase()
  .split(' ')

export const TODAY = new Date()

export const YEARS_OF_EXPERIENCE =
  differenceInYears(TODAY, CAREER_START_DATE) + 1

export const ROUTE: IRoute = {
  home: '/',
  about: '/about',
  skills: '/skills',
  experience: '/experience',
  portfolio: '/portfolio',
  vlog: '/vlog',
  contact: '/contact',
}

export const PROJECT_FILTERS: TProjectFilter[] = [
  'all',
  'app',
  'site',
  'landing',
  'admin',
]

export const PATH_COLOR: Record<TRoute | string, TColor> = {
  [ROUTE.home]: 'alternate',
  [ROUTE.about]: 'green',
  [ROUTE.skills]: 'blue',
  [ROUTE.experience]: 'violet',
  ...Object.fromEntries(
    PROJECTS.map((project) => [`/${project.name}`, project.color])
  ),
}

export const PATH_BACKGROUND_COLOR: Record<TRoute | string, TColor> = {
  [ROUTE.portfolio]: 'blue',
  [ROUTE.vlog]: 'red',
  [ROUTE.contact]: 'green',
  ...Object.fromEntries(VIDEOS.map((video) => [`/${video.name}`, video.color])),
}

export const QUERY_BREAKPOINT: IQueryBreakpoint = {
  xs: `(max-width: ${BREAKPOINT.xs}px)`,
  sm: `(max-width: ${BREAKPOINT.sm}px)`,
  md: `(max-width: ${BREAKPOINT.md}px)`,
  lg: `(max-width: ${BREAKPOINT.lg}px)`,
}

export const BLANK_LINK_PROPS: IBlankLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export const RANDOM_EFFECTS: TEffect[] = ['top', 'right', 'bottom', 'left']

export const IS_NEW_YEAR_MODE = import.meta.env.VITE_NEW_YEAR_MODE === 'true'

console.log(
  'import.meta.env.VITE_NEW_YEAR_MODE',
  typeof import.meta.env.VITE_NEW_YEAR_MODE
)
