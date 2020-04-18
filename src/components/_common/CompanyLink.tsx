import React, {MouseEvent} from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Tooltip from '@material-ui/core/Tooltip'

import './CompanyLink.scss'
import {BLANK_LINK_PROPS} from '../../utils/constants'
import {Company as CompanyLinkProps} from '../../utils/types'

const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>): void => {
  e.stopPropagation()
}

export default function CompanyLink({
  title,
  color,
  href,
  logo,
  logo2x,
}: CompanyLinkProps): JSX.Element {
  return (
    <Tooltip title={title} placement="right">
      <ButtonBase
        {...BLANK_LINK_PROPS}
        focusRipple
        component="a"
        className={`CompanyLink ColorInteract ColorInteract_color_${color}`}
        href={href}
        onClick={handleLinkClick}
      >
        <img
          className="CompanyLink-Img"
          height={36}
          src={logo}
          srcSet={`${logo2x} 2x`}
          alt={title}
        />
      </ButtonBase>
    </Tooltip>
  )
}
