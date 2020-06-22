import {SVGProps, FC} from 'react'
import {SvgIconProps} from '@material-ui/core/SvgIcon'

export type Path =
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
  | 'fadeInTop'
  | 'fadeInTopSm'
  | 'fadeInRight'
  | 'fadeInRightSm'
  | 'fadeInBottom'
  | 'fadeInBottomSm'
  | 'fadeInLeft'
  | 'fadeInLeftSm'
  | 'fadeInZoomIn'
  | 'fadeInZoomInSm'
  | 'fadeInZoomOut'
  | 'fadeInZoomOutSm'

export type ProjectType = 'app' | 'site' | 'admin' | 'landing'

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
  Icon: (props: SvgIconProps) => JSX.Element
}

export interface Technology {
  disabled?: boolean
  name: string
  label: string
  color: Color
  href: string
}

export interface Company {
  title: string
  color: Color
  images: string[]
  href: string
}

export interface Position {
  occupation: string
  duties: string[]
}

export interface Job {
  company: Company
  positions: Position[]
  features: Feature[]
}

export interface Project {
  title: string
  name: string
  description: string
  type: ProjectType
  color: Color
  company: Company
  path: string
  href?: string
  features: Feature[]
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
