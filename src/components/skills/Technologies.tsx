import React, {Dispatch, SetStateAction, RefObject} from 'react'
import cn from 'clsx'
import {
  useMediaQuery,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ButtonBase,
  ButtonBaseActions,
} from '@material-ui/core'
import {ExpandMoreRounded as ExpandMoreIcon} from '@material-ui/icons'

import './Technologies.scss'
import {Animate, Pagination, Copyright, Tooltip} from '../common'
import {TECHNOLOGY_GROUPS} from '../../data/common'
import {ROUTE, BLANK_LINK_PROPS, QUERY_BREAKPOINT} from '../../utils/constants'
import {Technology, TechnologyGroup} from '../../utils/types'

interface TechnologiesProps {
  expanded: string[]
  sectionRef: RefObject<HTMLElement>
  firstTechnologyActionRef: RefObject<ButtonBaseActions>
  setExpanded: Dispatch<SetStateAction<string[]>>
}

interface TechnologyListProps {
  technologies: Technology[]
  firstTechnologyActionRef?: RefObject<ButtonBaseActions>
}

const TechnologyList = ({
  technologies,
  firstTechnologyActionRef,
}: TechnologyListProps): JSX.Element => (
  <Grid container component="ul">
    {technologies.map(
      ({label, name, color, href, disabled}: Technology, index: number) => (
        <Grid
          key={index}
          item
          component="li"
          xs={6}
          sm={4}
          md={3}
          lg={4}
          xl={3}
        >
          <Tooltip title={`${disabled ? 'Изучаю ' : ''}${label}`}>
            <ButtonBase
              {...BLANK_LINK_PROPS}
              focusRipple
              component="a"
              className={cn(
                `Technologies-Item ColorInteract ColorInteract_color_${color}`,
                disabled && 'Technologies-Item_disabled'
              )}
              href={href}
              aria-label={label}
              action={index === 0 ? firstTechnologyActionRef : undefined}
            >
              <div
                className={`Technologies-ItemContent Technologies-ItemContent_name_${name}`}
              />
            </ButtonBase>
          </Tooltip>
        </Grid>
      )
    )}
  </Grid>
)

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
        className="Technologies-List"
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
