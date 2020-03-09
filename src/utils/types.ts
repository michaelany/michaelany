import {SVGProps, FC} from 'react'
import {SvgIconProps} from '@material-ui/core/SvgIcon'

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

export type Color = 'blue' | 'green' | 'grass' | 'red' | 'yellow' | 'violet'

export type ColorProp = 'BLUE' | 'GREEN' | 'GRASS' | 'RED' | 'YELLOW' | 'VIOLET'
