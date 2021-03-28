import {Link} from 'react-router-dom'
import {Grid, Button} from '@material-ui/core'
import {
  ChevronLeftRounded as ChevronLeftIcon,
  ChevronRightRounded as ChevronRightIcon,
} from '@material-ui/icons'

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
