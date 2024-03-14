import {useTranslation} from 'react-i18next'
import {Link} from '@mui/material'

import {
  CodeRounded as CodeIcon,
  EventRounded as EventIcon,
  PaletteRounded as PaletteIcon,
  GroupWorkRounded as GroupWorkIcon,
  BuildRounded as BuildIcon,
  StarRounded as StarIcon,
  CheckCircleRounded as CheckCircleIcon,
  WebRounded as WebIcon,
  PhoneIphone as PhoneIphoneIcon,
} from '@mui/icons-material'

import './ProjectDetails.scss'
import {Features, Company, Section} from '#components/common'
import {tProjectTypes} from '#utils/helpers'
import {IFeature} from '#utils/types'
import {COMPANY} from '#data/common'
import {BLANK_LINK_PROPS} from '#utils/constants'
import {IProject} from '#utils/types'
import ProjectActions from './ProjectActions'

interface IProjectDetailsProps {
  project: IProject
}

export default function ProjectDetails({project}: IProjectDetailsProps) {
  const {t} = useTranslation()

  const featureItems: IFeature[] = project.features.map((feature, index) => {
    const isTime = index === project.features.length - 1
    return {
      label:
        typeof feature === 'object'
          ? isTime
            ? `${t(`month.${feature.tKey}`)} ${feature.text}`
            : `${feature.text ? `${feature.text}, ` : ''}${
                feature.tKeys
                  ? feature.tKeys
                      .map((tKey) => t(`portfolio.feature.${tKey}`))
                      .join(', ')
                  : t(`portfolio.feature.${feature.tKey}`, {
                      replace: feature.values,
                    })
              }`
          : feature,
      Icon: featureIcons[index],
      time: isTime,
    }
  })
  featureItems.push({
    label: tProjectTypes(t, project.types, project.mobileApp),
    Icon: project.mobileApp ? PhoneIphoneIcon : WebIcon,
  })

  const projectKey = `portfolio.project.${project.name}`
  const company = COMPANY[project.companyName]

  return (
    <Section>
      <div className="ProjectDetails-Block">
        <h1 className="Title Title_smallIndent">
          {project.title ?? t(`${projectKey}.title`)}
        </h1>
        <Company animated {...company} />
      </div>
      <p className="MainText">
        {t(`${projectKey}.text`, {replace: project.textValues})}.{' '}
        {t('portfolio.developed')}{' '}
        <Link {...BLANK_LINK_PROPS} className="Link" href={company.href}>
          {company.title}
        </Link>
      </p>
      <Features items={featureItems} />
      <ProjectActions
        url={project.url}
        details={project.details}
        stores={project.stores}
        companyName={project.companyName}
      />
    </Section>
  )
}

const featureIcons = [
  CheckCircleIcon,
  GroupWorkIcon,
  CodeIcon,
  PaletteIcon,
  BuildIcon,
  StarIcon,
  EventIcon,
]
