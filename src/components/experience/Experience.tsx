import React, {useRef} from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import {Animate} from '../common'
import Sections from '../common/Sections'
import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import Work from './Work'
import Stepper from './Stepper'
import {ROUTE, QUERY_BREAKPOINT} from '../../utils/constants'

export default function Experience(): JSX.Element {
  const md: boolean = useMediaQuery(QUERY_BREAKPOINT.md)
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <Sections
      firstSection={<Work />}
      secondSection={
        <section
          ref={sectionRef}
          className="Section Section_pagination Section_colorful"
        >
          <h2 className="VisuallyHidden">Этапы</h2>
          <Animate
            effect={md ? undefined : 'rightSm'}
            duration={md ? undefined : 'longer'}
          >
            <Stepper sectionRef={sectionRef} />
          </Animate>
          <Pagination prevTo={ROUTE.skills} nextTo={ROUTE.portfolio} />
          <Copyright />
        </section>
      }
    />
  )
}
