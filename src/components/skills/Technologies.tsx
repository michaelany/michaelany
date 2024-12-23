import {Dispatch, SetStateAction, RefObject} from 'react'
import {useTranslation} from 'react-i18next'

import {
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ButtonBaseActions,
} from '@mui/material'
import {ExpandMoreRounded as ExpandMoreIcon} from '@mui/icons-material'

import './Technologies.scss'
import {Animate, Section} from '#components/common'
import {TECHNOLOGY_GROUPS} from '#data/common'
import {ROUTE, QUERY_BREAKPOINT} from '#utils/constants'
import {TKey} from '#utils/types'
import TechnologyList from './TechnologyList'

interface ITechnologiesProps {
  expanded: TKey[]
  sectionRef: RefObject<HTMLElement | null>
  firstTechnologyActionRef: RefObject<ButtonBaseActions | null>
  setExpanded: Dispatch<SetStateAction<TKey[]>>
}

export default function Technologies({
  expanded,
  sectionRef,
  firstTechnologyActionRef,
  setExpanded,
}: ITechnologiesProps) {
  const {t} = useTranslation()
  const md = useMediaQuery(QUERY_BREAKPOINT.md)

  const handleExpand =
    (tKey: TKey): (() => void) =>
    () =>
      setExpanded((expanded: TKey[]) =>
        expanded.includes(tKey)
          ? expanded.filter((item) => item !== tKey)
          : [...expanded, tKey]
      )

  return (
    <Section
      aside
      colorful
      sectionRef={sectionRef}
      prevTo={ROUTE.about}
      nextTo={ROUTE.experience}
    >
      <h2 className="VisuallyHidden">{t('skills.subtitle')}</h2>
      <Animate
        el="ul"
        className="Technologies-Groups"
        effect={md ? undefined : 'right'}
        duration={md ? undefined : 'longer'}
      >
        {TECHNOLOGY_GROUPS.map((group, index) => (
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
                technologies={group.technologies}
                firstTechnologyActionRef={
                  index === 0 ? firstTechnologyActionRef : undefined
                }
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Animate>
    </Section>
  )
}
