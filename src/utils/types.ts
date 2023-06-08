import {ReactNode, FunctionComponent, SVGProps} from 'react'
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
  | 'right'
  | 'bottom'
  | 'left'
  | 'zoomIn'
  | 'zoomInSm'
  | 'zoomOut'
  | 'zoomOutSm'

export type CompanyName = 't1' | 'sevenGlyphs' | 'everpoint' | 'mvideo'

export type ProjectType = 'app' | 'site' | 'landing' | 'admin'

export type ProjectName =
  | 'vconline'
  | 'vconlinel'
  | 'madfit'
  | 'madfitp'
  | 'vibe'
  | 'tradease'
  | 't1online'
  | 'ninjal'
  | 'ninja'
  | 'celebration'
  | 'ally'
  | 'presentmel'
  | 'presentmep'
  | 'presentme'
  | 'dropdrone'
  | 'hatched'
  | 'uls'
  | 'proximal'
  | 'embp'
  | 'tmf'
  | 'lite'
  | 'melissa'
  | 'foodp'
  | 'food'
  | 'sds'
  | 'strong'
  | 'glyphs2'
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

export type TKey = string | TKeyObject

export interface TKeyObject {
  tKey?: string
  tKeys?: string[]
  values?: (string | number)[]
  text?: string | number
}

export interface SocialLink {
  title: string
  href: string
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
  size: 'xs' | 'sm' | 'md' | 'lg'
}

export interface Feature {
  Icon: (props: SvgIconProps) => JSX.Element
  label?: string
  time?: boolean
  tKey?: TKey
  labelValues?: (string | number)[]
  textValues?: (string | number)[]
  Link?: ReactNode
}

export interface Technology {
  disabled?: boolean
  name: string
  label: string
  color: Color
  href: string
}

export interface TechnologyGroup {
  tKey: TKey
  technologies: Technology[]
}

export interface Company {
  title: string
  color: Color
  images: any[]
  href: string
}

export interface PeriodPart {
  tKey: string
  year: number | string
}

export interface Period {
  from: PeriodPart
  to?: PeriodPart
}

export interface JobFeature {
  tKey?: string
  period?: Period
  Icon: (props: SvgIconProps) => JSX.Element
  disabled?: boolean
}

export interface Job {
  current?: boolean
  company: Company
  occupations: TKey[]
  duties: TKey[]
  achievements: TKey[]
  features: JobFeature[]
}

export interface ProjectImages {
  logo: any[]
  desktop?: any[][]
  mobile?: any[][]
}

export interface Project {
  private?: boolean
  name: ProjectName
  title?: string
  textValues?: (string | number)[]
  types: ProjectType[]
  companyName: CompanyName
  url?: string
  details?: string
  stores?: string[]
  features: TKey[]
  images: ProjectImages
}

export interface Width {
  lg: boolean
  md: boolean
  sm: boolean
}
