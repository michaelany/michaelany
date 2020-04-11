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
  | 'default'
  | 'blue'
  | 'green'
  | 'grass'
  | 'red'
  | 'yellow'
  | 'violet'

export type ProjectType = 'app' | 'site' | 'admin' | 'landing'

export interface IMap<T> {
  [key: string]: T
}

export interface ISocialLink {
  title: string
  href: string
  Icon: FC<SVGProps<SVGSVGElement>>
}

export interface IFeature {
  label: string
  Icon: (props: SvgIconProps) => JSX.Element
}

export interface ITechnology {
  disabled?: boolean
  type: string
  label: string
  color: Color
  href: string
}

export interface ICompany {
  title: string
  color?: Color
  logo: string
  logo2x: string
  href?: string
}

export interface IPosition {
  occupation: string
  duties: string[]
}

export interface IJob {
  company: ICompany
  positions: IPosition[]
  features: IFeature[]
}

export interface IProject {
  title: string
  name: string
  type: ProjectType
  color: Color
  company: ICompany
  href: string
}
