import {useTranslation} from 'react-i18next'
import {
  CodeRounded as CodeIcon,
  EventRounded as EventIcon,
  PaletteRounded as PaletteIcon,
  GroupWorkRounded as GroupWorkIcon,
  BuildRounded as BuildIcon,
  StarRounded as StarIcon,
  CheckCircleRounded as CheckCircleIcon,
  WebRounded as WebIcon,
} from '@material-ui/icons'

import './ProjectDetails.scss'
import {Features, Company} from '../common'
import ProjectActions from './ProjectActions'
import {tProjectTypes} from '../../utils/helpers'
import {
  ProjectName,
  Feature,
  ProjectType,
  CompanyName,
  Company as CompanyInterface,
  TKey,
} from '../../utils/types'
import {COMPANY} from '../../data/common'
import {BLANK_LINK_PROPS} from '../../utils/constants'

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

const featureIcons = [
  CheckCircleIcon,
  GroupWorkIcon,
  CodeIcon,
  PaletteIcon,
  BuildIcon,
  StarIcon,
  EventIcon,
]

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
}: ProjectDetailsProps): JSX.Element {
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

  const projectKey: string = `portfolio.project.${name}`
  const company: CompanyInterface = COMPANY[companyName]

  return (
    <section className="ProjectDetails Section">
      <div className="ProjectDetails-Block">
        <h1 className="Title Title_smallIndent">
          {title ?? t(`${projectKey}.title`)}
        </h1>
        <Company animated {...company} />
      </div>
      <p className="MainText">
        {t(`${projectKey}.text`, textValues)}. {t('portfolio.developed')}{' '}
        <a {...BLANK_LINK_PROPS} className="Link" href={company.href}>
          {company.title}
        </a>
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
