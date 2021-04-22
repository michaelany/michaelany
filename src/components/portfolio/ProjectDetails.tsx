import {useTranslation} from 'react-i18next'
import {Button} from '@material-ui/core'
import {
  OpenInNewRounded as OpenInNewIcon,
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
import {Animate, Features, Company} from '../common'
import {tProjectTypes} from '../../utils/helpers'
import {BLANK_LINK_PROPS} from '../../utils/constants'
import {
  ProjectName,
  Feature,
  ProjectType,
  CompanyName,
  Company as CompanyInterface,
  TKey,
} from '../../utils/types'
import {COMPANY} from '../../data/common'

interface ProjectDetailsProps {
  name: ProjectName
  title?: string
  textValue?: string
  companyName: CompanyName
  types: ProjectType[]
  features: TKey[]
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
  textValue,
  companyName,
  types,
  features,
  href,
}: ProjectDetailsProps): JSX.Element {
  const {t} = useTranslation()

  const featureItems: Feature[] = features.map(
    (feature: TKey, index: number) => {
      const isTime = index === features.length - 1
      return {
        label:
          typeof feature === 'object'
            ? isTime
              ? `${t(`month.${feature.tKey}`)} ${feature.value}`
              : `${feature.value ? `${feature.value}, ` : ''}${
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
    label: tProjectTypes(t, types),
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
        {t(`${projectKey}.text`, textValue && {textValue})}.{' '}
        {t('portfolio.developed')} "{company.title}"
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
            {t('common.more')}
          </Button>
        </Animate>
      )}
    </section>
  )
}
