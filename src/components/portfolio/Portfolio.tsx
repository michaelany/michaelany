import React from 'react'

import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import Projects from './Projects'
import {PATHS} from '../../utils/constants'
import {TITLES} from '../../data/common'

export default function Portfolio(): JSX.Element {
  return (
    <section className="Section Section_single Section_pagination">
      <div>
        <h1 className="Title">{TITLES.portfolio}</h1>
        <Projects />
      </div>
      <Pagination prevTo={PATHS.experience} nextTo={PATHS.contact} />
      <Copyright />
    </section>
  )
}
