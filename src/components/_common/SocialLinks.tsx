import React from 'react'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'

import './SocialLinks.scss'
import {BLANK_LINK_PROPS} from '../../utils/data'
import {ISocialLink} from '../../utils/types'

interface ISocialLinksProps {
  links: ISocialLink[]
}

export default function SocialLinks({links}: ISocialLinksProps): JSX.Element {
  return (
    <ul className="SocialLinks">
      {links.map(
        ({title, href, Icon}: ISocialLink, index: number): JSX.Element => (
          <li key={index} className="SocialLinks-Item">
            <Tooltip
              title={title}
              placement={
                index === 0
                  ? 'left'
                  : index === links.length - 1
                  ? 'right'
                  : 'bottom'
              }
            >
              <Fab
                {...BLANK_LINK_PROPS}
                className="SocialLinks-Link"
                component="a"
                href={href}
                aria-label={title}
              >
                <Icon />
              </Fab>
            </Tooltip>
          </li>
        )
      )}
    </ul>
  )
}
