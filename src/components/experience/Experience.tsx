import {useRef} from 'react'
import {useMediaQuery} from '@mui/material'

import {Animate, Sections, Section} from '#components/common'
import {ROUTE, QUERY_BREAKPOINT} from '#utils/constants'
import Work from './Work'
import Stepper from './Stepper'

export default function Experience() {
  const md = useMediaQuery(QUERY_BREAKPOINT.md)
  const sectionRef = useRef<HTMLElement | null>(null)

  return (
    <Sections
      firstSection={<Work />}
      secondSection={
        <Section
          aside
          colorful
          sectionRef={sectionRef}
          prevTo={ROUTE.skills}
          nextTo={ROUTE.portfolio}
        >
          <Animate
            effect={md ? undefined : 'right'}
            duration={md ? undefined : 'longer'}
          >
            <Stepper sectionRef={sectionRef} />
          </Animate>
        </Section>
      }
    />
  )
}
