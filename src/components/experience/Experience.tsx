import React from 'react'

import Sections from '../_common/Sections'
import Pagination from '../_common/Pagination'
import Work from './Work'
import Stepper from './Stepper'
import {Path} from '../../utils/enums'

export default function Experience(): JSX.Element {
  return (
    <Sections
      firstSection={<Work />}
      secondSection={
        <section className="Section Section_color_violet Section_type_pagination">
          <h2 className="VisuallyHidden">Этапы</h2>
          <Stepper />
          <Pagination prevTo={Path.SKILLS} nextTo={Path.PORTFOLIO} />
        </section>
      }
    />
  )
}
