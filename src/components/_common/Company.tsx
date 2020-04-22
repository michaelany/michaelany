import React, {MouseEvent} from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Tooltip from '@material-ui/core/Tooltip'

import './Company.scss'
import {BLANK_LINK_PROPS} from '../../utils/constants'
import {Company as CompanyProps} from '../../utils/types'

const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>): void => {
  e.stopPropagation()
}

export default function Company({
  title,
  color,
  href,
  logo,
  logo2x,
}: CompanyProps): JSX.Element {
  return (
    <Tooltip title={title}>
      <ButtonBase
        {...BLANK_LINK_PROPS}
        focusRipple
        component="a"
        className={`Company ColorInteract ColorInteract_color_${color}`}
        href={href}
        onClick={handleLinkClick}
      >
        <img
          className="Company-Img"
          height={36}
          src={logo}
          srcSet={`${logo2x} 2x`}
          alt={title}
        />
      </ButtonBase>
    </Tooltip>
  )
}
