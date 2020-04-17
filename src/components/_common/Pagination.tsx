import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded'

import './Pagination.scss'
import {PATHS} from '../../utils/constants'
import {Path, Map} from '../../utils/types'
import {TITLES} from '../../data/common'

interface PaginationProps {
  wide?: boolean
  prevTo?: Path
  nextTo?: Path
}

const pathTitles: Map<string> = {
  [PATHS.HOME]: TITLES.HOME,
  [PATHS.ABOUT]: TITLES.ABOUT,
  [PATHS.SKILLS]: TITLES.SKILLS,
  [PATHS.EXPERIENCE]: TITLES.EXPERIENCE,
  [PATHS.PORTFOLIO]: TITLES.PORTFOLIO,
  [PATHS.CONTACT]: TITLES.CONTACT,
}

export default function Pagination({
  wide,
  prevTo,
  nextTo,
}: PaginationProps): JSX.Element {
  const xs = wide ? 3 : 6
  return (
    <Grid container className="Pagination Actions" spacing={2} justify="center">
      {prevTo && (
        <Grid item xs={xs}>
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
        </Grid>
      )}
      {nextTo && (
        <Grid item xs={xs}>
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
        </Grid>
      )}
    </Grid>
  )
}
