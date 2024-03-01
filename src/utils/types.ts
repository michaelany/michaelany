import {ReactNode, FunctionComponent, SVGProps} from 'react'
import {SvgIcon} from '@mui/material'

type TSvgIcon = typeof SvgIcon

export type TRoute =
  | '/'
  | '/about'
  | '/skills'
  | '/experience'
  | '/portfolio'
  | '/vlog'
  | '/contact'

export type TColor =
  | 'alternate'
  | 'white'
  | 'default'
  | 'blue'
  | 'green'
  | 'grass'
  | 'red'
  | 'yellow'
  | 'violet'

export type TEffect =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'zoomIn'
  | 'zoomInSm'
  | 'zoomOut'
  | 'zoomOutSm'

export type TCompanyName = 't1' | 'sevenGlyphs' | 'everpoint' | 'mvideo'

export type TProjectType = 'app' | 'site' | 'landing' | 'admin'

export type TProjectName =
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

export interface ISocialLink {
  title: string
  href: string
  Icon: FunctionComponent<SVGProps<SVGSVGElement>> | TSvgIcon
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export interface IFeature {
  Icon: TSvgIcon
  label?: string
  time?: boolean
  tKey?: TKey
  labelValues?: (string | number)[]
  textValues?: (string | number)[]
  Link?: ReactNode
}

export interface ITechnology {
  disabled?: boolean
  name: string
  label: string
  color: TColor
  href: string
}

export interface ITechnologyGroup {
  tKey: TKey
  technologies: ITechnology[]
}

export interface ICompany {
  title: string
  color: TColor
  images: any[]
  href: string
}

export interface IPeriodPart {
  tKey: string
  year: number | string
}

export interface IPeriod {
  from: IPeriodPart
  to?: IPeriodPart
}

export interface IJobFeature {
  tKey?: string
  period?: IPeriod
  Icon: TSvgIcon
  disabled?: boolean
}

export interface IJob {
  current?: boolean
  company: ICompany
  occupations: TKey[]
  duties: TKey[]
  achievements: TKey[]
  features: IJobFeature[]
}

export interface IProjectImages {
  logo: any[]
  desktop?: any[][]
  mobile?: any[][]
}

export interface IProject {
  private?: boolean
  mobileApp?: boolean
  name: TProjectName
  title?: string
  textValues?: (string | number)[]
  types: TProjectType[]
  companyName: TCompanyName
  url?: string
  details?: string
  stores?: string[]
  features: TKey[]
  images: IProjectImages
}

export interface IWidth {
  lg: boolean
  md: boolean
  sm: boolean
}
