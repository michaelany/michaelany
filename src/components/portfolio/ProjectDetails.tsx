import React from 'react'
import {Button} from '@material-ui/core'
import {OpenInNewRounded as OpenInNewIcon} from '@material-ui/icons'

import './ProjectDetails.scss'
import {Animate, Features, Company} from '../common'
import {BLANK_LINK_PROPS} from '../../utils/constants'
import {Feature, Company as CompanyInterface} from '../../utils/types'

interface ProjectDetailsProps {
  title: string
  company: CompanyInterface
  description: string
  features: Feature[]
  href?: string
}

export default function ProjectDetails({
  title,
  company,
  description,
  features,
  href,
}: ProjectDetailsProps): JSX.Element {
  return (
    <section className="ProjectDetails Section">
      <div className="ProjectDetails-Block">
        <h1 className="Title Title_smallIndent">{title}</h1>
        <Company animated {...company} />
      </div>
      <p className="MainText">
        {description} Разработано в компании "{company.title}".
      </p>
      <Features items={features} />
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
