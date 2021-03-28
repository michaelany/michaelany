import React, {Dispatch, SetStateAction, RefObject} from 'react'

import {
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ButtonBaseActions,
} from '@material-ui/core'
import {ExpandMoreRounded as ExpandMoreIcon} from '@material-ui/icons'

import './Technologies.scss'
import {Animate, Pagination, Copyright} from '../common'
import {TECHNOLOGY_GROUPS} from '../../data/common'
import TechnologyList from './TechnologyList'
import {ROUTE, QUERY_BREAKPOINT} from '../../utils/constants'
import {TechnologyGroup} from '../../utils/types'

interface TechnologiesProps {
  expanded: string[]
  sectionRef: RefObject<HTMLElement>
  firstTechnologyActionRef: RefObject<ButtonBaseActions>
  setExpanded: Dispatch<SetStateAction<string[]>>
}

export default function Technologies({
  expanded,
  sectionRef,
  firstTechnologyActionRef,
  setExpanded,
}: TechnologiesProps): JSX.Element {
  const md: boolean = useMediaQuery(QUERY_BREAKPOINT.md)

  const handleExpand = (title: string): (() => void) => () =>
    setExpanded((expanded: string[]) =>
      expanded.includes(title)
        ? expanded.filter((item) => item !== title)
        : [...expanded, title]
    )

  return (
    <section
      className="Technologies Section Section_pagination Section_colorful"
      ref={sectionRef}
    >
      <h2 className="VisuallyHidden">Технологии</h2>
      <Animate
        el="ul"
        className="Technologies-Groups"
        effect={md ? undefined : 'rightSm'}
        duration={md ? undefined : 'longer'}
      >
        {TECHNOLOGY_GROUPS.map((group: TechnologyGroup, index: number) => (
          <Accordion
            key={index}
            component="li"
            expanded={expanded.includes(group.title)}
            onChange={handleExpand(group.title)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3 className="Technologies-Title">{group.title}</h3>
            </AccordionSummary>
            <AccordionDetails>
              <TechnologyList
                technologies={group.technologies}
                firstTechnologyActionRef={
                  index === 0 ? firstTechnologyActionRef : undefined
                }
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Animate>
      <Pagination prevTo={ROUTE.about} nextTo={ROUTE.experience} />
      <Copyright />
    </section>
  )
}
