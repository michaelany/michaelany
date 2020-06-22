import React from 'react'

import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import TypistTitle from '../common/TypistTitle'
import Projects from './Projects'
import {PATHS} from '../../utils/constants'
import {TITLES} from '../../data/common'

export default function Portfolio(): JSX.Element {
  return (
    <section className="Section Section_single Section_pagination">
      <div>
        <TypistTitle title={TITLES.portfolio} />
        <Projects />
      </div>
      <Pagination prevTo={PATHS.experience} nextTo={PATHS.contact} />
      <Copyright />
    </section>
  )
}
