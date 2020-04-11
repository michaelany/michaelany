import React from 'react'

import Pagination from '../_common/Pagination'
import Projects from './Projects'
import {Title, Path} from '../../utils/enums'

export default function Portfolio(): JSX.Element {
  return (
    <section className="Section Section_type_single Section_type_pagination">
      <div>
        <h1 className="Title Title_color_white">{Title.PORTFOLIO}</h1>
        <Projects />
      </div>
      <Pagination wide prevTo={Path.EXPERIENCE} nextTo={Path.CONTACT} />
    </section>
  )
}
