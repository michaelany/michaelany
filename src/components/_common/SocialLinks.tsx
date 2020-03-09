import React, {ElementType} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'

import './SocialLinks.scss'
import {ISocialLink} from '../../utils/types'
import {THEME} from '../../styles/theme'

interface ISocialLinksProps {
  links: ISocialLink[]
}

const StyledFab: ElementType = withStyles({
  root: {
    color: THEME.COLOR.TEXT,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: THEME.COLOR.LIGHT_GREY,
    },
  },
})(Fab)

export default function SocialLinks({links}: ISocialLinksProps) {
  return (
    <ul className="SocialLinks">
      {links.map(({id, title, href, Icon}: ISocialLink, index: number) => (
        <li key={id} className="SocialLinks-Item">
          <Tooltip
            title={title}
            enterDelay={THEME.DURATION.MEDIUM}
            placement={index === 0 ? 'left' : index === links.length - 1 ? 'right' : 'bottom'}
          >
            <StyledFab component="a" href={href} target="_blank" rel="noopener" aria-label={title}>
              <Icon />
            </StyledFab>
          </Tooltip>
        </li>
      ))}
    </ul>
  )
}
