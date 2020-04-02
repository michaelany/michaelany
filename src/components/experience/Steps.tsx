import React from 'react'

import Pagination from '../_common/Pagination'
import {Path} from '../../utils/enums'

export default function Steps(): JSX.Element {
  return (
    <section className="Steps Section Section_color_violet">
      <h2 className="VisuallyHidden">Степпер</h2>
      <Pagination prevTo={Path.SKILLS} nextTo={Path.PORTFOLIO} />
    </section>
  )
}
