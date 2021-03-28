import cn from 'clsx'
import {Grid} from '@material-ui/core'

import './Sections.scss'

interface SectionsProps {
  contact?: boolean
  firstSection: any
  secondSection: JSX.Element
}

export default function Sections({
  contact,
  firstSection,
  secondSection,
}: SectionsProps): JSX.Element {
  return (
    <Grid container className="Sections" spacing={0}>
      <Grid item xs={12} lg={6}>
        {firstSection}
      </Grid>
      <Grid item className={cn(!contact && 'Sections-Animated')} xs={12} lg={6}>
        {secondSection}
      </Grid>
    </Grid>
  )
}
