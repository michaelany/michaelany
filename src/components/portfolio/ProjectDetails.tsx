import React from 'react'
import {Button} from '@material-ui/core'
import {
  OpenInNewRounded as OpenInNewIcon,
  CodeRounded as CodeIcon,
  EventRounded as EventIcon,
  PaletteRounded as PaletteIcon,
  WebRounded as WebIcon,
  GroupWorkRounded as GroupWorkIcon,
  BuildRounded as BuildIcon,
  StarRounded as StarIcon,
  CheckCircleRounded as CheckCircleIcon,
} from '@material-ui/icons'

import './ProjectDetails.scss'
import {Animate, Features, Company} from '../common'
import {BLANK_LINK_PROPS} from '../../utils/constants'
import {Feature, CompanyName} from '../../utils/types'
import {COMPANY} from '../../data/common'

interface ProjectDetailsProps {
  title: string
  companyName: CompanyName
  description: string
  features: string[]
  href?: string
}

const featureIcons = [
  CheckCircleIcon,
  GroupWorkIcon,
  CodeIcon,
  PaletteIcon,
  BuildIcon,
  StarIcon,
  WebIcon,
  EventIcon,
]

export default function ProjectDetails({
  title,
  companyName,
  description,
  features,
  href,
}: ProjectDetailsProps): JSX.Element {
  const featureItems: Feature[] = features.map(
    (feature: string, index: number) => ({
      label: feature,
      Icon: featureIcons[index],
      time: index === features.length - 1,
    })
  )
  const company = COMPANY[companyName]

  return (
    <section className="ProjectDetails Section">
      <div className="ProjectDetails-Block">
        <h1 className="Title Title_smallIndent">{title}</h1>
        <Company animated {...company} />
      </div>
      <p className="MainText">
        {description} Разработано в компании "{company.title}".
      </p>
      <Features items={featureItems} />
      {href && (
        <Animate className="Actions Actions_center" effect="bottom">
          <Button
            {...BLANK_LINK_PROPS}
            className="Button"
            component="a"
            endIcon={<OpenInNewIcon />}
            href={href}
          >
            Подробнее
          </Button>
        </Animate>
      )}
    </section>
  )
}
