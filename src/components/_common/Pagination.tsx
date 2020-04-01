import React, {ElementType} from 'react'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded'

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

const Container = withStyles({
  root: {
    marginTop: 40,
  },
})(Grid)

const PaginationButton: ElementType = withStyles({
  root: {
    color: 'white',
    borderColor: 'white',
  },
})(Button)

export default function Pagination({prevTo, nextTo}: IPaginationProps): JSX.Element {
  return (
    <Container container spacing={2} justify="center">
      {prevTo && (
        <Grid item xs={6}>
          <PaginationButton
            fullWidth
            component={Link}
            to={prevTo}
            variant="outlined"
            startIcon={<ChevronLeftIcon />}
          >
            {titlesMap[prevTo]}
          </PaginationButton>
        </Grid>
      )}
      {nextTo && (
        <Grid item xs={6}>
          <PaginationButton
            fullWidth
            component={Link}
            to={nextTo}
            variant="outlined"
            endIcon={<ChevronRightIcon />}
          >
            {titlesMap[nextTo]}
          </PaginationButton>
        </Grid>
      )}
    </Container>
  )
}
