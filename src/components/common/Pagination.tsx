import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Grid, Button} from '@material-ui/core'
import {
  ChevronLeftRounded as ChevronLeftIcon,
  ChevronRightRounded as ChevronRightIcon,
} from '@material-ui/icons'

import './Pagination.scss'
import {ROUTE} from '@utils/constants'
import {Route} from '@utils/types'

interface PaginationProps {
  prevTo?: Route
  nextTo?: Route
}

export default function Pagination({prevTo, nextTo}: PaginationProps) {
  const {t} = useTranslation()

  return (
    <div className="Pagination Actions">
      <Grid
        container
        className="Pagination-Links"
        spacing={2}
        justifyContent="center"
      >
        {prevTo && (
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              className="Pagination-Link"
              component={Link}
              to={prevTo}
              startIcon={<ChevronLeftIcon />}
            >
              {t(`title.${pathKeys[prevTo]}`)}
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
              {t(`title.${pathKeys[nextTo]}`)}
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

const pathKeys: Record<string, string> = {
  [ROUTE.home]: 'home',
  [ROUTE.about]: 'about',
  [ROUTE.skills]: 'skills',
  [ROUTE.experience]: 'experience',
  [ROUTE.portfolio]: 'portfolio',
  [ROUTE.contact]: 'contact',
}
