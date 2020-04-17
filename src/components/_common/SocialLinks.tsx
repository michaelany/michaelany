import React from 'react'
import cn from 'classnames'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'

import './SocialLinks.scss'
import {BLANK_LINK_PROPS} from '../../utils/constants'
import {SocialLink} from '../../utils/types'

interface SocialLinksProps {
  links: SocialLink[]
  about?: boolean
}

export default function SocialLinks({
  links,
  about,
}: SocialLinksProps): JSX.Element {
  return (
    <ul className={cn('SocialLinks', {SocialLinks_about: about})}>
      {links.map(
        ({title, href, Icon}: SocialLink, index: number): JSX.Element => (
          <li key={index} className="SocialLinks-Item">
            <Tooltip
              title={title}
              placement={
                about && index === 0
                  ? 'left'
                  : about && index === links.length - 1
                  ? 'right'
                  : 'bottom'
              }
            >
              <Fab
                {...BLANK_LINK_PROPS}
                component="a"
                className={cn('Button', {Button_color_white: about})}
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
