import {useTranslation} from 'react-i18next'
import {Button} from '@material-ui/core'
import {
  VisibilityRounded as VisibilityIcon,
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
import {ReactComponent as SevenGlyphsIcon} from '../../assets/icons/7glyphs.svg'
import {ReactComponent as EverpointIcon} from '../../assets/icons/everpoint.svg'
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
  textValues?: (string | number)[]
  companyName: CompanyName
  types: ProjectType[]
  features: TKey[]
  url?: string
  details?: string
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
        {t(`${projectKey}.text`, textValues)}. {t('portfolio.developed')}{' '}
        {company.title}
      </p>
      <Features items={featureItems} />
      {(url || details) && (
        <div className="Actions Actions_center">
          {url && (
            <Animate className="ProjectDetails-Button" effect="bottom">
              <Button
                {...BLANK_LINK_PROPS}
                className="Button"
                component="a"
                endIcon={<VisibilityIcon />}
                href={url}
              >
                {t('other.see')}
              </Button>
            </Animate>
          )}
          {details && (
            <Animate className="ProjectDetails-Button" effect="bottom">
              <Button
                {...BLANK_LINK_PROPS}
                className="Button"
                component="a"
                endIcon={
                  companyName === 'everpoint' ? (
                    <EverpointIcon />
                  ) : (
                    <SevenGlyphsIcon width={16} height={16} />
                  )
                }
                href={details}
              >
                {t('other.more')}
              </Button>
            </Animate>
          )}
        </div>
      )}
    </section>
  )
}
