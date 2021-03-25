import React, {MouseEvent} from 'react'
import cn from 'clsx'
import {ButtonBase} from '@material-ui/core'

import './Company.scss'
import Tooltip from './Tooltip'
import {BLANK_LINK_PROPS} from '../../utils/constants'
import {Company as CompanyInterface} from '../../utils/types'

interface CompanyProps extends CompanyInterface {
  animated?: boolean
}

const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>): void => {
  e.stopPropagation()
}

export default function Company({
  animated,
  title,
  color,
  href,
  images,
}: CompanyProps): JSX.Element {
  return (
    <Tooltip title={title}>
      <ButtonBase
        {...BLANK_LINK_PROPS}
        focusRipple
        component="a"
        className={cn(
          'Company',
          animated && 'Company_animated',
          `ColorInteract ColorInteract_color_${color}`
        )}
        href={href}
        onClick={handleLinkClick}
      >
        <img
          className="Company-Img"
          src={images[0]}
          srcSet={`${images[1]} 2x`}
          alt={title}
        />
      </ButtonBase>
    </Tooltip>
  )
}
