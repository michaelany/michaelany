import React from 'react'
import cn from 'clsx'
import {useMediaQuery, Fab} from '@material-ui/core'

import './SocialLinks.scss'
import Animate from './Animate'
import Tooltip from './Tooltip'
import {getListDelay} from '../../utils/helpers'
import {BLANK_LINK_PROPS, QUERY_BREAKPOINT} from '../../utils/constants'
import {SocialLink} from '../../utils/types'

interface SocialLinksProps {
  links: SocialLink[]
  about?: boolean
}

export default function SocialLinks({
  links,
  about,
}: SocialLinksProps): JSX.Element {
  const xs: boolean = useMediaQuery(QUERY_BREAKPOINT.xs)

  return (
    <ul className={cn('SocialLinks', about && 'SocialLinks_about')}>
      {links.map(({Icon, ...link}: SocialLink, index: number) => (
        <Animate
          key={index}
          el="li"
          className="SocialLinks-Item"
          effect="zoomIn"
          delay={xs ? undefined : getListDelay(index)}
        >
          <Tooltip title={link.title}>
            <Fab
              {...BLANK_LINK_PROPS}
              component="a"
              className={cn('Button', about && 'Button_color_white')}
              href={link.href}
              aria-label={link.title}
            >
              <Icon
                className={`SocialLinks-Icon SocialLinks-Icon_size_${link.size}`}
              />
            </Fab>
          </Tooltip>
        </Animate>
      ))}
    </ul>
  )
}
