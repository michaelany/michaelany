import React from 'react'
import Button from '@material-ui/core/Button'
import OpenInNewIcon from '@material-ui/icons/OpenInNewRounded'

import './ProjectDetails.scss'
import TypistTitle from '../common/TypistTitle'
import Features from '../common/Features'
import Company from '../common/Company'
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
        <TypistTitle smallIndent title={title} />
        <Company {...company} />
      </div>
      <p className="MainText">
        <b>
          {description} Разработано в компании "{company.title}".
        </b>
      </p>
      <Features items={features} />
      {href && (
        <div className="Actions Actions_center">
          <Button
            {...BLANK_LINK_PROPS}
            className="Button"
            component="a"
            variant="contained"
            endIcon={<OpenInNewIcon />}
            href={href}
          >
            Подробнее
          </Button>
        </div>
      )}
    </section>
  )
}
