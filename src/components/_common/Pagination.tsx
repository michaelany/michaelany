import React, {ElementType} from 'react'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded'

import {Route, Title} from '../../utils/enums'
import {IMap} from '../../utils/types'

interface IPaginationProps {
  prevTo: Route
  nextTo: Route
}

const TITLES_MAP: IMap<Title> = {
  [Route.HOME]: Title.HOME,
  [Route.ABOUT]: Title.ABOUT,
  [Route.SKILLS]: Title.SKILLS,
  [Route.EXPERIENCE]: Title.EXPERIENCE,
  [Route.PORTFOLIO]: Title.PORTFOLIO,
  [Route.CONTACT]: Title.CONTACT,
}

const StyledButton: ElementType = withStyles({
  root: {
    color: 'white',
    borderColor: 'white',
  },
})(Button)

export default function Pagination({prevTo, nextTo}: IPaginationProps): JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <StyledButton fullWidth component={Link} to={prevTo} variant="outlined" startIcon={<ChevronLeftIcon />}>
          {TITLES_MAP[prevTo]}
        </StyledButton>
      </Grid>
      <Grid item xs={6}>
        <StyledButton fullWidth component={Link} to={nextTo} variant="outlined" endIcon={<ChevronRightIcon />}>
          {TITLES_MAP[nextTo]}
        </StyledButton>
      </Grid>
    </Grid>
  )
}
