import {useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {useMediaQuery} from '@material-ui/core'

import {Animate, Sections, Pagination, Copyright} from '@components/common'
import {ROUTE, QUERY_BREAKPOINT} from '@utils/constants'
import Work from './Work'
import Stepper from './Stepper'

export default function Experience() {
  const {t} = useTranslation()
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
          <h2 className="VisuallyHidden">{t('experience.subtitle')}</h2>
          <Animate
            effect={md ? undefined : 'right'}
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
