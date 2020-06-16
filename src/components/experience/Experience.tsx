import React from 'react'

import Sections from '../common/Sections'
import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import Work from './Work'
import Stepper from './Stepper'
import {PATHS} from '../../utils/constants'

export default function Experience(): JSX.Element {
  return (
    <Sections
      firstSection={<Work />}
      secondSection={
        <section className="Section Section_pagination Section_colorful">
          <h2 className="VisuallyHidden">Этапы</h2>
          <Stepper />
          <Pagination prevTo={PATHS.skills} nextTo={PATHS.portfolio} />
          <Copyright />
        </section>
      }
    />
  )
}
