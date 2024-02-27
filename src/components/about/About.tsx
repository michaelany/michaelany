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
} from '@mui/icons-material'

import {Sections, Info} from '@components/common'
import {PROJECTS_COUNT} from '@data/projects'
import {TECHNOLOGY_TITLE, CONTACT_LINK} from '@data/common'
import {
  YEARS_OF_EXPERIENCE,
  TODAY,
  ROUTE,
  BLANK_LINK_PROPS,
} from '@utils/constants'
import {Feature} from '@utils/types'
import Social from './Social'

export default function About() {
  return (
    <Sections
      firstSection={
        <Info type="about" textValues={textValues} features={features} />
      }
      secondSection={<Social />}
    />
  )
}

const textValues: string[] = ['UI/UX']

const countriesVisited: string[] = [
  'New Zealand',
  'Japan',
  'Russian Federation',
  'Ukraine',
  'Belarus',
  'Abkhazia',
  'Turkey',
  'Maldives',
  'Greece',
  'Czech Republic',
  'Egypt',
  'Germany',
  'Sri Lanka',
  'Thailand',
  'Italy',
  'Vatican City',
  'France',
  'Spain',
  'Cyprus',
  'Latvia',
  'Montenegro',
  'Albania',
  'Bosnia & Herzegovina',
]

const features: Feature[] = [
  {
    tKey: 'projects',
    Icon: AppsIcon,
    labelValues: [PROJECTS_COUNT],
    textValues: [PROJECTS_COUNT, 'title.portfolio'],
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
    textValues: [13],
    Link: <Link className="Link" to={ROUTE.experience} />,
  },
  {
    tKey: 'organizing',
    Icon: GroupWorkIcon,
  },
  {
    tKey: 'programming',
    Icon: CodeIcon,
    textValues: [
      TECHNOLOGY_TITLE.js,
      TECHNOLOGY_TITLE.css,
      CONTACT_LINK.youTube.title,
    ],
    Link: (
      <a
        {...BLANK_LINK_PROPS}
        className="Link"
        href={CONTACT_LINK.youTube.href}
      />
    ),
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
    textValues: [countriesVisited.length, '🙂'],
    Icon: ExploreIcon,
  },
  {
    tKey: 'love',
    Icon: FavoriteIcon,
    textValues: [differenceInYears(TODAY, new Date(2013, 1)), '🙂'],
    Link: (
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
