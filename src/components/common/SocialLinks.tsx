import React from 'react'
import cn from 'clsx'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Fab from '@material-ui/core/Fab'

import './SocialLinks.scss'
import Animate, {EFFECT} from './Animate'
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
      {links.map(({title, href, Icon, size}: SocialLink, index: number) => (
        <Animate
          key={index}
          el="li"
          className="SocialLinks-Item"
          effect={EFFECT.zoomIn}
          delay={xs ? undefined : getListDelay(index)}
        >
          <Tooltip title={title}>
            <Fab
              {...BLANK_LINK_PROPS}
              component="a"
              className={cn('Button', about && 'Button_color_white')}
              href={href}
              aria-label={title}
            >
              <Icon
                className={`SocialLinks-Icon SocialLinks-Icon_size_${size}`}
              />
            </Fab>
          </Tooltip>
        </Animate>
      ))}
    </ul>
  )
}
