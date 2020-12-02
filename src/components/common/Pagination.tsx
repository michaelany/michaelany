import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded'

import './Pagination.scss'
import {ROUTE} from '../../utils/constants'
import {Route, Map} from '../../utils/types'
import {TITLE} from '../../data/common'

interface PaginationProps {
  prevTo?: Route
  nextTo?: Route
}

const pathTitles: Map<string> = {
  [ROUTE.home]: TITLE.home,
  [ROUTE.about]: TITLE.about,
  [ROUTE.skills]: TITLE.skills,
  [ROUTE.experience]: TITLE.experience,
  [ROUTE.portfolio]: TITLE.portfolio,
  [ROUTE.contact]: TITLE.contact,
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
          <Grid item xs={12} sm={6}>
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
    </div>
  )
}
