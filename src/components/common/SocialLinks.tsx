import React from 'react'
import cn from 'classnames'
import Fab from '@material-ui/core/Fab'

import './SocialLinks.scss'
import Tooltip from './Tooltip'
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
      {links.map(({title, href, Icon, size}: SocialLink, index: number) => (
        <li key={index} className="SocialLinks-Item">
          <Tooltip title={title}>
            <Fab
              {...BLANK_LINK_PROPS}
              component="a"
              className={cn('Button', {Button_color_white: about})}
              href={href}
              aria-label={title}
            >
              <Icon
                className={`SocialLinks-Icon SocialLinks-Icon_size_${size}`}
              />
            </Fab>
          </Tooltip>
        </li>
      ))}
    </ul>
  )
}
