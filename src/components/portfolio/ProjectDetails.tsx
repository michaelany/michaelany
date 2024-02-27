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
} from '@mui/icons-material'

import './ProjectDetails.scss'
import {Features, Company} from '@components/common'
import {tProjectTypes} from '@utils/helpers'
import {
  ProjectName,
  Feature,
  ProjectType,
  CompanyName,
  TKey,
} from '@utils/types'
import {COMPANY} from '@data/common'
import {BLANK_LINK_PROPS} from '@utils/constants'
import ProjectActions from './ProjectActions'

interface ProjectDetailsProps {
  name: ProjectName
  title?: string
  textValues?: (string | number)[]
  companyName: CompanyName
  types: ProjectType[]
  features: TKey[]
  url?: string
  details?: string
  stores?: string[]
  href?: string
}

export default function ProjectDetails({
  name,
  title,
  textValues,
  companyName,
  types,
  features,
  url,
  details,
  stores,
}: ProjectDetailsProps) {
  const {t} = useTranslation()

  const featureItems: Feature[] = features.map(
    (feature: TKey, index: number) => {
      const isTime = index === features.length - 1
      return {
        label:
          typeof feature === 'object'
            ? isTime
              ? `${t(`month.${feature.tKey}`)} ${feature.text}`
              : `${feature.text ? `${feature.text}, ` : ''}${
                  feature.tKeys
                    ? feature.tKeys
                        .map((tKey: string) => t(`portfolio.feature.${tKey}`))
                        .join(', ')
                    : t(`portfolio.feature.${feature.tKey}`, feature.values)
                }`
            : feature,
        Icon: featureIcons[index],
        time: isTime,
      }
    }
  )
  featureItems.push({
    label: tProjectTypes(t, types, name),
    Icon: WebIcon,
  })

  const projectKey = `portfolio.project.${name}`
  const company = COMPANY[companyName]

  return (
    <section className="Section">
      <div className="ProjectDetails-Block">
        <h1 className="Title Title_smallIndent">
          {title ?? t(`${projectKey}.title`)}
        </h1>
        <Company animated {...company} />
      </div>
      <p className="MainText">
        {t(`${projectKey}.text`, textValues)}. {t('portfolio.developed')}{' '}
        <Link {...BLANK_LINK_PROPS} className="Link" href={company.href}>
          {company.title}
        </Link>
      </p>
      <Features items={featureItems} />
      <ProjectActions
        url={url}
        details={details}
        stores={stores}
        companyName={companyName}
      />
    </section>
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
