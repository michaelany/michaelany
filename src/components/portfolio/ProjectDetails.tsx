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
  TKey,
} from '../../utils/types'
import {COMPANY} from '../../data/common'

interface ProjectDetailsProps {
  name: ProjectName
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
            ? `${t(
                `${isTime ? 'month' : 'portfolio.feature'}.${feature.tKey}`
              )}${feature.value ? `${isTime ? '' : ','} ${feature.value}` : ''}`
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

  const tProject = `portfolio.project.${name}`
  const company = COMPANY[companyName]

  return (
    <section className="ProjectDetails Section">
      <div className="ProjectDetails-Block">
        <h1 className="Title Title_smallIndent">{t(`${tProject}.title`)}</h1>
        <Company animated {...company} />
      </div>
      <p className="MainText">
        {t(`${tProject}.text`)}. {t('portfolio.developed')} "{company.title}"
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
