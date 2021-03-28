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
import {getProjectTypesString} from '../../utils/helpers'
import {BLANK_LINK_PROPS} from '../../utils/constants'
import {Feature, ProjectType, CompanyName} from '../../utils/types'
import {COMPANY} from '../../data/common'

interface ProjectDetailsProps {
  title: string
  companyName: CompanyName
  description: string
  types: ProjectType[]
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
  EventIcon,
]

export default function ProjectDetails({
  title,
  companyName,
  description,
  types,
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
  featureItems.push({
    label: getProjectTypesString(types),
    Icon: WebIcon,
  })
  const company = COMPANY[companyName]

  return (
    <section className="ProjectDetails Section">
      <div className="ProjectDetails-Block">
        <h1 className="Title Title_smallIndent">{title}</h1>
        <Company animated {...company} />
      </div>
      <p className="MainText">
        {description} Разработано в сотрудничестве с "{company.title}".
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
