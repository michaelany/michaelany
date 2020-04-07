import React from 'react'
import cn from 'classnames'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'

import './SocialLinks.scss'
import {BLANK_LINK_PROPS} from '../../utils/data'
import {ISocialLink} from '../../utils/types'

interface ISocialLinksProps {
  links: ISocialLink[]
  about?: boolean
}

export default function SocialLinks({
  links,
  about,
}: ISocialLinksProps): JSX.Element {
  return (
    <ul className={cn('SocialLinks', {SocialLinks_about: about})}>
      {links.map(
        ({title, href, Icon}: ISocialLink, index: number): JSX.Element => (
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
                className="Button Button_color_white"
                component="a"
                href={href}
                aria-label={title}
              >
                <Icon className="SocialLinks-ItemIcon" />
              </Fab>
            </Tooltip>
          </li>
        )
      )}
    </ul>
  )
}
