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
import {TECHNOLOGY_TITLE, TITLE} from '../../data/common'
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
    textValue: PROJECTS.length + 3,
    link: {
      tKey: 'title.portfolio',
      component: <Link className="Link" to={ROUTE.portfolio} />,
    },
  },
  {
    tKey: 'experience',
    Icon: BusinessCenterIcon,
    labelValue: YEARS_OF_EXPERIENCE,
    link: {
      tKey: 'title.experience',
      component: <Link className="Link" to={ROUTE.experience} />,
    },
  },
  {
    tKey: 'experience',
    Icon: SupervisorAccountIcon,
    link: {
      tKey: 'title.skills',
      component: <Link className="Link" to={ROUTE.skills} />,
    },
  },
  {
    tKey: 'organizing',
    Icon: GroupWorkIcon,
  },
  {
    tKey: 'programming',
    Icon: CodeIcon,
    textValue: `${TECHNOLOGY_TITLE.js} и ${TECHNOLOGY_TITLE.css}`,
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
    Icon: SchoolIcon,
  },
  {
    tKey: 'sport',
    Icon: DirectionsBikeIcon,
  },
  {
    tKey: 'travel',
    Icon: ExploreIcon,
  },
  {
    tKey: 'love',
    Icon: FavoriteIcon,
    textValue: differenceInYears(TODAY, new Date(2013, 1)),
    link: {
      text: 'Она',
      component: (
        // eslint-disable-next-line
        <a
          {...BLANK_LINK_PROPS}
          className="Link"
          href="https://www.instagram.com/kate_watermelon"
        />
      ),
    },
  },
  {
    tKey: 'coffee',
    Icon: LocalCafeIcon,
  },
]

export default function About(): JSX.Element {
  return (
    <Sections
      firstSection={<Info type="about" features={features} />}
      secondSection={<Social />}
    />
  )
}
