import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded'

import './Pagination.scss'
import Animate, {EFFECTS} from './Animate'
import {PATHS} from '../../utils/constants'
import {Path, Map} from '../../utils/types'
import {TITLES} from '../../data/common'
import {DURATIONS} from '../../styles/theme'

interface PaginationProps {
  prevTo?: Path
  nextTo?: Path
}

const pathTitles: Map<string> = {
  [PATHS.home]: TITLES.home,
  [PATHS.about]: TITLES.about,
  [PATHS.skills]: TITLES.skills,
  [PATHS.experience]: TITLES.experience,
  [PATHS.portfolio]: TITLES.portfolio,
  [PATHS.contact]: TITLES.contact,
}

export default function Pagination({
  prevTo,
  nextTo,
}: PaginationProps): JSX.Element {
  return (
    <div className="Pagination Actions">
      <Grid container className="Pagination-Links" spacing={2} justify="center">
        {prevTo && (
          <Grid item xs={12} sm={6}>
            <Animate
              effect={EFFECTS.rightSm}
              delay={nextTo ? DURATIONS.short : undefined}
            >
              <Button
                fullWidth
                className="Pagination-Link"
                component={Link}
                to={prevTo}
                variant="outlined"
                startIcon={<ChevronLeftIcon />}
              >
                {pathTitles[prevTo]}
              </Button>
            </Animate>
          </Grid>
        )}
        {nextTo && (
          <Grid item xs={12} sm={6}>
            <Animate effect={EFFECTS.leftSm}>
              <Button
                fullWidth
                className="Pagination-Link"
                component={Link}
                to={nextTo}
                variant="outlined"
                endIcon={<ChevronRightIcon />}
              >
                {pathTitles[nextTo]}
              </Button>
            </Animate>
          </Grid>
        )}
      </Grid>
    </div>
  )
}
