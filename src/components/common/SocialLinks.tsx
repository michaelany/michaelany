import cn from 'clsx'
import {useMediaQuery, Fab} from '@mui/material'

import './SocialLinks.scss'
import {getListDelay} from '#utils/helpers'
import {BLANK_LINK_PROPS, QUERY_BREAKPOINT} from '#utils/constants'
import {ISocialLink} from '#utils/types'
import Animate from './Animate'
import Tooltip from './Tooltip'

interface ISocialLinksProps {
  links: ISocialLink[]
  about?: boolean
}

export default function SocialLinks({links, about}: ISocialLinksProps) {
  const xs = useMediaQuery(QUERY_BREAKPOINT.xs)

  return (
    <ul className={cn('SocialLinks', about && 'SocialLinks_about')}>
      {links.map(({Icon, ...link}, index) => (
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
