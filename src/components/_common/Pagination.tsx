import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded'

import './Pagination.scss'
import {Path, Title} from '../../utils/enums'
import {IMap} from '../../utils/types'

interface IPaginationProps {
  prevTo?: Path
  nextTo?: Path
}

const titlesMap: IMap<Title> = {
  [Path.HOME]: Title.HOME,
  [Path.ABOUT]: Title.ABOUT,
  [Path.SKILLS]: Title.SKILLS,
  [Path.EXPERIENCE]: Title.EXPERIENCE,
  [Path.PORTFOLIO]: Title.PORTFOLIO,
  [Path.CONTACT]: Title.CONTACT,
}

export default function Pagination({prevTo, nextTo}: IPaginationProps): JSX.Element {
  return (
    <Grid container className="Pagination Actions" spacing={2} justify="center">
      {prevTo && (
        <Grid item xs={6}>
          <Button
            fullWidth
            className="Pagination-Link"
            component={Link}
            to={prevTo}
            variant="outlined"
            startIcon={<ChevronLeftIcon />}
          >
            {titlesMap[prevTo]}
          </Button>
        </Grid>
      )}
      {nextTo && (
        <Grid item xs={6}>
          <Button
            fullWidth
            className="Pagination-Link"
            component={Link}
            to={nextTo}
            variant="outlined"
            endIcon={<ChevronRightIcon />}
          >
            {titlesMap[nextTo]}
          </Button>
        </Grid>
      )}
    </Grid>
  )
}
