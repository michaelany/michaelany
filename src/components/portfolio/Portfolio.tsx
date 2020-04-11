import React from 'react'

import Pagination from '../_common/Pagination'
import Projects from './Projects'
import {TITLES, PATHS} from '../../utils/data'

export default function Portfolio(): JSX.Element {
  return (
    <section className="Section Section_type_single Section_type_pagination">
      <div>
        <h1 className="Title Title_color_white">{TITLES.PORTFOLIO}</h1>
        <Projects />
      </div>
      <Pagination wide prevTo={PATHS.EXPERIENCE} nextTo={PATHS.CONTACT} />
    </section>
  )
}
