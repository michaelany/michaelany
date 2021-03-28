import {RefObject} from 'react'
import cn from 'clsx'
import {Grid, ButtonBase, ButtonBaseActions} from '@material-ui/core'

import './TechnologyList.scss'
import {Tooltip} from '../common'
import {BLANK_LINK_PROPS} from '../../utils/constants'
import {Technology} from '../../utils/types'

interface TechnologyListProps {
  technologies: Technology[]
  firstTechnologyActionRef?: RefObject<ButtonBaseActions>
}

export default function TechnologyList({
  technologies,
  firstTechnologyActionRef,
}: TechnologyListProps) {
  return (
    <Grid container component="ul">
      {technologies.map(
        ({label, name, color, href, disabled}: Technology, index: number) => (
          <Grid
            key={index}
            item
            component="li"
            xs={6}
            sm={4}
            md={3}
            lg={4}
            xl={3}
          >
            <Tooltip title={`${disabled ? 'Изучаю ' : ''}${label}`}>
              <ButtonBase
                {...BLANK_LINK_PROPS}
                focusRipple
                component="a"
                className={cn(
                  `Technologies-Item ColorInteract ColorInteract_color_${color}`,
                  disabled && 'Technologies-Item_disabled'
                )}
                href={href}
                aria-label={label}
                action={index === 0 ? firstTechnologyActionRef : undefined}
              >
                <div
                  className={`Technologies-ItemContent Technologies-ItemContent_name_${name}`}
                />
              </ButtonBase>
            </Tooltip>
          </Grid>
        )
      )}
    </Grid>
  )
}
