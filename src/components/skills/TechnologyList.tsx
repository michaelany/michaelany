import {RefObject} from 'react'
import {TFunction} from 'i18next'
import cn from 'clsx'
import {Grid, ButtonBase, ButtonBaseActions} from '@mui/material'

import './TechnologyList.scss'
import {Tooltip} from '@components/common'
import {BLANK_LINK_PROPS} from '@utils/constants'
import {ITechnology} from '@utils/types'

interface ITechnologyListProps {
  t: TFunction
  technologies: ITechnology[]
  firstTechnologyActionRef?: RefObject<ButtonBaseActions>
}

export default function TechnologyList({
  t,
  technologies,
  firstTechnologyActionRef,
}: ITechnologyListProps) {
  return (
    <Grid container component="ul">
      {technologies.map(({label, name, color, href, disabled}, index) => (
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
          <Tooltip title={`${disabled ? `${t('skills.learn')} ` : ''}${label}`}>
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
      ))}
    </Grid>
  )
}
