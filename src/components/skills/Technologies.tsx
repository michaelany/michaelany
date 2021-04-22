import {Dispatch, SetStateAction, RefObject} from 'react'
import {useTranslation} from 'react-i18next'

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
import {TechnologyGroup, TKey} from '../../utils/types'

interface TechnologiesProps {
  expanded: TKey[]
  sectionRef: RefObject<HTMLElement>
  firstTechnologyActionRef: RefObject<ButtonBaseActions>
  setExpanded: Dispatch<SetStateAction<TKey[]>>
}

export default function Technologies({
  expanded,
  sectionRef,
  firstTechnologyActionRef,
  setExpanded,
}: TechnologiesProps): JSX.Element {
  const {t} = useTranslation()
  const md: boolean = useMediaQuery(QUERY_BREAKPOINT.md)

  const handleExpand = (tKey: TKey): (() => void) => () =>
    setExpanded((expanded: TKey[]) =>
      expanded.includes(tKey)
        ? expanded.filter((item) => item !== tKey)
        : [...expanded, tKey]
    )

  return (
    <section
      className="Technologies Section Section_pagination Section_colorful"
      ref={sectionRef}
    >
      <h2 className="VisuallyHidden">{t('skills.subtitle')}</h2>
      <Animate
        el="ul"
        className="Technologies-Groups"
        effect={md ? undefined : 'right'}
        duration={md ? undefined : 'longer'}
      >
        {TECHNOLOGY_GROUPS.map((group: TechnologyGroup, index: number) => (
          <Accordion
            key={group.tKey as string}
            component="li"
            expanded={expanded.includes(group.tKey)}
            onChange={handleExpand(group.tKey)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3 className="Technologies-Title">
                {t(`skills.technologyGroup.${group.tKey}`)}
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <TechnologyList
                t={t}
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
