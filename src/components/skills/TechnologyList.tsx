import {RefObject} from 'react'
import {Grid, ButtonBase, ButtonBaseActions} from '@mui/material'

import './TechnologyList.scss'
import {Tooltip} from '#components/common'
import {BLANK_LINK_PROPS} from '#utils/constants'
import {ITechnology} from '#utils/types'

interface ITechnologyListProps {
  technologies: ITechnology[]
  firstTechnologyActionRef?: RefObject<ButtonBaseActions>
}

export default function TechnologyList({
  technologies,
  firstTechnologyActionRef,
}: ITechnologyListProps) {
  return (
    <Grid container component="ul">
      {technologies.map((technology, index) => (
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
          <Tooltip title={technology.label}>
            <ButtonBase
              {...BLANK_LINK_PROPS}
              focusRipple
              component="a"
              className={`Technologies-Item ColorInteract ColorInteract_color_${technology.color}`}
              href={technology.href}
              aria-label={technology.label}
              action={index === 0 ? firstTechnologyActionRef : undefined}
            >
              <img
                className="Technologies-Image"
                width={100}
                height={100}
                src={technology.images[0]}
                srcSet={`${technology.images[1]} 2x`}
                alt={technology.label}
              />
            </ButtonBase>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  )
}
