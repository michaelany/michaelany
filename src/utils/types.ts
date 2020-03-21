import {SVGProps, FC} from 'react'
import {SvgIconProps} from '@material-ui/core/SvgIcon'

export interface IMap<T> {
  [key: string]: T
}

export interface ISocialLink {
  id: number
  title: string
  href: string
  Icon: FC<SVGProps<SVGSVGElement>>
}

export interface IFeature {
  id: number
  label: string
  Icon: (props: SvgIconProps) => JSX.Element
}

export interface ITechnology {
  id: number
  isNew?: boolean
  type: string
  label: string
  color: Color
  href: string
}

export type Color = 'default' | 'blue' | 'green' | 'grass' | 'red' | 'yellow' | 'violet'

export type ColorProp = 'BLUE' | 'GREEN' | 'GRASS' | 'RED' | 'YELLOW' | 'VIOLET'
