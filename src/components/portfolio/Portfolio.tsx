import React from 'react'

import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import TypistTitle from '../common/TypistTitle'
import Projects from './Projects'
import {ROUTE} from '../../utils/constants'
import {TITLE} from '../../data/common'

export default function Portfolio(): JSX.Element {
  return (
    <section className="Section Section_single Section_pagination">
      <div>
        <TypistTitle title={TITLE.portfolio} />
        <Projects />
      </div>
      <Pagination prevTo={ROUTE.experience} nextTo={ROUTE.contact} />
      <Copyright />
    </section>
  )
}
