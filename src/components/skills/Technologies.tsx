import React, {Dispatch, SetStateAction, RefObject} from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ButtonBase, {ButtonBaseActions} from '@material-ui/core/ButtonBase'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Technologies.scss'
import Animate, {EFFECT} from '../common/Animate'
import Pagination from '../common/Pagination'
import Copyright from '../common/Copyright'
import Tooltip from '../common/Tooltip'
import {TECHNOLOGY_GROUPS} from '../../data/common'
import {ROUTE, BLANK_LINK_PROPS, QUERY_BREAKPOINT} from '../../utils/constants'
import {Technology, TechnologyGroup} from '../../utils/types'
import {DURATION} from '../../styles/theme'

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
          <Tooltip title={label}>
            <ButtonBase
              {...BLANK_LINK_PROPS}
              focusRipple
              component="a"
              className={`Technologies-Item ColorInteract ColorInteract_color_${color}`}
              href={href}
              aria-label={label}
              action={index === 0 ? firstTechnologyActionRef : undefined}
              disabled={disabled}
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
        effect={md ? EFFECT.bottomSm : EFFECT.rightSm}
        duration={md ? undefined : DURATION.longer}
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
