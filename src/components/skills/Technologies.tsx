import {useTranslation} from 'react-i18next'
import type {Dispatch, SetStateAction, RefObject} from 'react'
import {
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  type ButtonBaseActions,
} from '@mui/material'
import {ExpandMoreRounded as ExpandMoreIcon} from '@mui/icons-material'

import './Technologies.scss'
import {Animate, Section, ExpandAction} from '#components/common'
import {TECHNOLOGY_GROUPS} from '#data/technologies'
import {ROUTE, QUERY_BREAKPOINT} from '#utils/constants'
import TechnologyList from './TechnologyList'
import type {TKey} from '#utils/types'

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
      setExpanded((state: TKey[]) =>
        state.includes(tKey)
          ? state.filter(item => item !== tKey)
          : [...state, tKey]
      )

  const isAllExpanded = expanded.length === TECHNOLOGY_GROUPS.length

  const handleExpandAll = () =>
    setExpanded(isAllExpanded ? [] : TECHNOLOGY_GROUPS.map(group => group.tKey))

  return (
    <Section
      aside
      colorful
      sectionRef={sectionRef}
      prevTo={ROUTE.about}
      nextTo={ROUTE.experience}
    >
      <h2 className="VisuallyHidden">{t('skills.subtitle')}</h2>
      <div>
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
        <ExpandAction
          isWhite
          type="second"
          expanded={isAllExpanded}
          onToggle={handleExpandAll}
        />
      </div>
    </Section>
  )
}
