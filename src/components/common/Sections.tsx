import {Grid} from '@material-ui/core'

import './Sections.scss'

interface SectionsProps {
  contact?: boolean
  firstSection: JSX.Element
  secondSection: JSX.Element
}

export default function Sections({
  contact,
  firstSection,
  secondSection,
}: SectionsProps): JSX.Element {
  const notContact: boolean = !contact

  return (
    <Grid container className="Sections" spacing={0}>
      <Grid
        item
        className={notContact ? 'Sections-SectionWrapper' : undefined}
        xs={12}
        lg={6}
      >
        {firstSection}
      </Grid>
      <Grid
        item
        className={
          notContact ? 'Sections-SectionWrapper Sections-Animated' : undefined
        }
        xs={12}
        lg={6}
      >
        {secondSection}
      </Grid>
    </Grid>
  )
}
