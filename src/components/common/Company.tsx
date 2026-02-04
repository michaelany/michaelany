import cn from 'clsx'
import {ButtonBase} from '@mui/material'
import type {MouseEvent} from 'react'

import './Company.scss'
import {BLANK_LINK_PROPS} from '#utils/constants'
import Tooltip from './Tooltip'
import type {ICompany} from '#utils/types'

interface ICompanyProps extends ICompany {
  animated?: boolean
}

export default function Company({
  animated,
  title,
  color,
  href,
  images,
}: ICompanyProps) {
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
          className="Company-Image"
          src={images[0]}
          srcSet={`${images[1]} 2x`}
          alt={title}
          loading="lazy"
        />
      </ButtonBase>
    </Tooltip>
  )
}

const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
  e.stopPropagation()
}
