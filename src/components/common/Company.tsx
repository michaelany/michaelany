import {MouseEvent} from 'react'
import cn from 'clsx'
import {ButtonBase} from '@mui/material'

import './Company.scss'
import {BLANK_LINK_PROPS} from '@utils/constants'
import {Company as CompanyInterface} from '@utils/types'
import Tooltip from './Tooltip'

interface CompanyProps extends CompanyInterface {
  animated?: boolean
}

export default function Company({
  animated,
  title,
  color,
  href,
  images,
}: CompanyProps) {
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

const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
  e.stopPropagation()
}
