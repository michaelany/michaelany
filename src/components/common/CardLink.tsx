import {useMemo, type ReactNode} from 'react'
import {Link} from 'react-router-dom'
import {ButtonBase} from '@mui/material'

import './CardLink.scss'
import Animate from './Animate'
import Panel from './Panel'
import Tilt from './Tilt'
import {IS_MOBILE_DEVICE, RANDOM_EFFECTS} from '#utils/constants'
import {getGridAnimationDelay} from '#utils/helpers'
import type {IWidth, TColor} from '#utils/types'

interface ICardLinkProps {
  children: ReactNode
  to: string
  title: string
  color: TColor
  index: number
  width: IWidth
  viewClassName: string
  logo?: ReactNode
}

export default function CardLink({
  children,
  to,
  title,
  color,
  index,
  width,
  viewClassName,
  logo,
}: ICardLinkProps) {
  const effect = useMemo(
    () =>
      width.sm ? undefined : RANDOM_EFFECTS[Math.floor(Math.random() * 4)],
    [width.sm]
  )

  return (
    <li>
      <Animate
        className={IS_MOBILE_DEVICE ? 'CardLink-Tilt' : undefined}
        effect={effect}
        delay={getGridAnimationDelay(index, width)}
      >
        <Tilt className="CardLink-Tilt">
          <ButtonBase
            className={`CardLink ColorInteract ColorInteract_color_${color}`}
            focusRipple
            component={Link}
            to={to}
          >
            <Panel className={`CardLink-View ${viewClassName}`} />
            <div className="CardLink-Content">
              {logo}
              <h3 className="CardLink-Title">{title}</h3>
              {children}
            </div>
          </ButtonBase>
        </Tilt>
      </Animate>
    </li>
  )
}
