import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import InfoIcon from '@material-ui/icons/InfoOutlined'

import './Portfolio.scss'
import Pagination from '../_common/Pagination'
import Projects from './Projects'
import {PATHS} from '../../utils/constants'
import {TITLES} from '../../data/common'

export default function Portfolio(): JSX.Element {
  return (
    <section className="Portfolio Section Section_single Section_pagination">
      <div>
        <h1 className="Portfolio-Title Title">
          {TITLES.PORTFOLIO}{' '}
          <Tooltip
            title="Здесь представлены не все проекты, над которыми я работал, а только те, которые мне лично нравятся."
            placement="right"
            enterDelay={0}
          >
            <InfoIcon className="Portfolio-Info" />
          </Tooltip>
        </h1>
        <Projects />
      </div>
      <Pagination wide prevTo={PATHS.EXPERIENCE} nextTo={PATHS.CONTACT} />
    </section>
  )
}
