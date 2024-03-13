import {useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {useMediaQuery} from '@mui/material'

import {Animate, Sections, Section} from '#components/common'
import {ROUTE, QUERY_BREAKPOINT} from '#utils/constants'
import Work from './Work'
import Stepper from './Stepper'

export default function Experience() {
  const {t} = useTranslation()
  const md = useMediaQuery(QUERY_BREAKPOINT.md)
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <Sections
      firstSection={<Work />}
      secondSection={
        <Section
          colorful
          sectionRef={sectionRef}
          prevTo={ROUTE.skills}
          nextTo={ROUTE.portfolio}
        >
          <h2 className="VisuallyHidden">{t('experience.subtitle')}</h2>
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
