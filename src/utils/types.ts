import {SVGProps, FC} from 'react'
import {SvgIconProps} from '@material-ui/core'

export type Route =
  | '/'
  | '/about'
  | '/skills'
  | '/experience'
  | '/portfolio'
  | '/contact'

export type Color =
  | 'alternate'
  | 'white'
  | 'default'
  | 'blue'
  | 'green'
  | 'grass'
  | 'red'
  | 'yellow'
  | 'violet'

export type Effect =
  | 'top'
  | 'topSm'
  | 'right'
  | 'rightSm'
  | 'bottom'
  | 'bottomSm'
  | 'left'
  | 'leftSm'
  | 'zoomIn'
  | 'zoomInSm'
  | 'zoomOut'
  | 'zoomOutSm'

export type CompanyName = 'tsftd' | 'sevenGlyphs' | 'everpoint' | 'mvideo'

export type ProjectType = 'app' | 'site' | 'admin' | 'landing'

export type ProjectName =
  | 'proximal'
  | 'embp'
  | 'tmf'
  | 'lite'
  | 'melissa'
  | 'foodp'
  | 'food'
  | 'sds'
  | 'strong'
  | 'rogue'
  | 'trucks'
  | 'services'
  | 'fcdc'
  | 'saffron'
  | 'whip'
  | 'lazyazd'
  | 'lazyaz'
  | 'glyphs'
  | 'msp'

export interface Map<T> {
  [key: string]: T
}

export interface SocialLink {
  title: string
  href: string
  Icon: FC<SVGProps<SVGSVGElement>>
  size: 'xs' | 'sm' | 'md' | 'lg'
}

export interface Feature {
  label: string
  time?: boolean
  description?: string | JSX.Element
  Icon: (props: SvgIconProps) => JSX.Element
  disabled?: boolean
}

export interface Technology {
  disabled?: boolean
  name: string
  label: string
  color: Color
  href: string
}

export interface TechnologyGroup {
  title: string
  technologies: Technology[]
}

export interface Company {
  title: string
  color: Color
  images: string[]
  href: string
}

export interface Job {
  current?: boolean
  company: Company
  occupations: string[]
  duties: string[]
  achievements: string[]
  features: Feature[]
}

export interface Project {
  title: string
  name: ProjectName
  description: string
  type: ProjectType
  companyName: CompanyName
  href?: string
  features: string[]
  images: {
    desktop?: string[][]
    mobile?: string[][]
  }
}

export interface TiltOptions {
  reverse?: boolean
  reset?: boolean
  max?: number
  scale?: number
  speed?: number
}

export interface Width {
  lg: boolean
  md: boolean
  sm: boolean
}
