import React, {ElementType} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'

import './SocialLinks.scss'
import {BLANK_LINK_PROPS} from '../../utils/data'
import {ISocialLink} from '../../utils/types'
import {THEME} from '../../styles/theme'

interface ISocialLinksProps {
  links: ISocialLink[]
}

const SocialLink: ElementType = withStyles({
  root: {
    color: THEME.COLOR.TEXT,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: THEME.COLOR.LIGHT_GREY,
    },
  },
})(Fab)

export default function SocialLinks({links}: ISocialLinksProps): JSX.Element {
  return (
    <ul className="SocialLinks">
      {links.map(
        ({id, title, href, Icon}: ISocialLink, index: number): JSX.Element => (
          <li key={id} className="SocialLinks-Item">
            <Tooltip
              title={title}
              enterDelay={THEME.DURATION.MEDIUM}
              placement={index === 0 ? 'left' : index === links.length - 1 ? 'right' : 'bottom'}
            >
              <SocialLink {...BLANK_LINK_PROPS} component="a" href={href} aria-label={title}>
                <Icon />
              </SocialLink>
            </Tooltip>
          </li>
        )
      )}
    </ul>
  )
}
