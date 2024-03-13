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
import {
  TProjectName,
  IFeature,
  TProjectType,
  TCompanyName,
  TKey,
} from '#utils/types'
import {COMPANY} from '#data/common'
import {BLANK_LINK_PROPS} from '#utils/constants'
import ProjectActions from './ProjectActions'

interface IProjectDetailsProps {
  mobileApp?: boolean
  name: TProjectName
  title?: string
  textValues?: (string | number)[]
  companyName: TCompanyName
  types: TProjectType[]
  features: TKey[]
  url?: string
  details?: string
  stores?: string[]
  href?: string
}

export default function ProjectDetails({
  mobileApp,
  name,
  title,
  textValues,
  companyName,
  types,
  features,
  url,
  details,
  stores,
}: IProjectDetailsProps) {
  const {t} = useTranslation()

  const featureItems: IFeature[] = features.map((feature, index) => {
    const isTime = index === features.length - 1
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
    label: tProjectTypes(t, types, mobileApp),
    Icon: mobileApp ? PhoneIphoneIcon : WebIcon,
  })

  const projectKey = `portfolio.project.${name}`
  const company = COMPANY[companyName]

  return (
    <Section>
      <div className="ProjectDetails-Block">
        <h1 className="Title Title_smallIndent">
          {title ?? t(`${projectKey}.title`)}
        </h1>
        <Company animated {...company} />
      </div>
      <p className="MainText">
        {t(`${projectKey}.text`, {replace: textValues})}.{' '}
        {t('portfolio.developed')}{' '}
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
