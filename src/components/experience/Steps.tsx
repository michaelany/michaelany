import React from 'react'

import Pagination from '../_common/Pagination'
import Stepper from './Stepper'
import {Path} from '../../utils/enums'

export default function Steps(): JSX.Element {
  return (
    <section className="Steps Section Section_color_violet Section_type_pagination">
      <h2 className="VisuallyHidden">Этапы</h2>
      <Stepper />
      <Pagination prevTo={Path.SKILLS} nextTo={Path.PORTFOLIO} />
    </section>
  )
}
