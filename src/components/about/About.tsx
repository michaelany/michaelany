import {differenceInYears} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  DirectionsBikeRounded as DirectionsBikeIcon,
  SchoolRounded as SchoolIcon,
  LocalCafeRounded as LocalCafeIcon,
  FavoriteRounded as FavoriteIcon,
  AppsRounded as AppsIcon,
  SupervisorAccountRounded as SupervisorAccountIcon,
  AllInclusiveRounded as AllInclusiveIcon,
  CodeRounded as CodeIcon,
  SquareFootRounded as SquareFootIcon,
  GroupWorkRounded as GroupWorkIcon,
  BusinessCenterRounded as BusinessCenterIcon,
  ExploreRounded as ExploreIcon,
} from '@material-ui/icons'

import {Sections, Info} from '../common'
import Social from './Social'
import PROJECTS from '../../data/projects'
import {TECHNOLOGY_TITLE} from '../../data/common'
import {
  YEARS_OF_EXPERIENCE,
  TODAY,
  ROUTE,
  BLANK_LINK_PROPS,
} from '../../utils/constants'
import {Feature} from '../../utils/types'

const features: Feature[] = [
  {
    tKey: 'projects',
    Icon: AppsIcon,
    textValues: [PROJECTS.length + 3, 'title.portfolio'],
    Link: <Link className="Link" to={ROUTE.portfolio} />,
  },
  {
    tKey: 'position',
    Icon: SupervisorAccountIcon,
    Link: <Link className="Link" to={ROUTE.skills} />,
  },
  {
    tKey: 'experience',
    Icon: BusinessCenterIcon,
    labelValues: [YEARS_OF_EXPERIENCE],
    Link: <Link className="Link" to={ROUTE.experience} />,
  },
  {
    tKey: 'organizing',
    Icon: GroupWorkIcon,
  },
  {
    tKey: 'programming',
    Icon: CodeIcon,
    textValues: [TECHNOLOGY_TITLE.js, TECHNOLOGY_TITLE.css],
  },
  {
    tKey: 'growing',
    Icon: AllInclusiveIcon,
  },
  {
    tKey: 'perfect',
    Icon: SquareFootIcon,
  },
  {
    tKey: 'education',
    textValues: ['🙂'],
    Icon: SchoolIcon,
  },
  {
    tKey: 'sport',
    Icon: DirectionsBikeIcon,
  },
  {
    tKey: 'travel',
    textValues: [15, '🙂'],
    Icon: ExploreIcon,
  },
  {
    tKey: 'love',
    Icon: FavoriteIcon,
    textValues: [differenceInYears(TODAY, new Date(2013, 1)), '🙂'],
    Link: (
      // eslint-disable-next-line
      <a
        {...BLANK_LINK_PROPS}
        className="Link"
        href="https://www.instagram.com/kate_watermelon"
      />
    ),
  },
  {
    tKey: 'coffee',
    textValues: ['🙂'],
    Icon: LocalCafeIcon,
  },
]

export default function About(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info type="about" textValues={['UI/UX']} features={features} />
      }
      secondSection={<Social />}
    />
  )
}
