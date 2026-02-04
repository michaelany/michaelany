import {differenceInYears} from 'date-fns'
import {Link} from 'react-router-dom'
import {Link as MuiLink} from '@mui/material'

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
  VideocamRounded as VideocamIcon,
  TheaterComedyRounded as TheaterComedyIcon,
} from '@mui/icons-material'

import {Sections, Info} from '#components/common'
import {PROJECTS_COUNT} from '#data/projects'
import {TECHNOLOGY_TITLE, CONTACT_LINK} from '#data/common'
import {
  YEARS_OF_EXPERIENCE,
  TODAY,
  ROUTE,
  BLANK_LINK_PROPS,
} from '#utils/constants'
import Social from './Social'
import type {IFeature} from '#utils/types'

export default function About() {
  return (
    <Sections
      firstSection={
        <Info
          type="about"
          textValues={textValues}
          transComponents={transComponents}
          features={features}
        />
      }
      secondSection={<Social />}
    />
  )
}

const textValues = ['UI/UX', 'title.vlog', CONTACT_LINK.youTube.title]

const transComponents = [
  <strong />,
  <MuiLink component={Link} className="Link" to={ROUTE.portfolio} />,
  <MuiLink component={Link} className="Link Lowercase" to={ROUTE.vlog} />,
  <MuiLink
    {...BLANK_LINK_PROPS}
    className="Link"
    href={CONTACT_LINK.youTube.href}
  />,
]

const countriesVisited = [
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
  'Serbia',
  'Albania',
  'Bosnia & Herzegovina',
]

const features: IFeature[] = [
  {
    tKey: 'projects',
    Icon: AppsIcon,
    labelValues: [PROJECTS_COUNT],
    textValues: [PROJECTS_COUNT, 'title.portfolio'],
    links: [<MuiLink component={Link} className="Link" to={ROUTE.portfolio} />],
  },
  {
    tKey: 'position',
    Icon: SupervisorAccountIcon,
    links: [<MuiLink component={Link} className="Link" to={ROUTE.skills} />],
  },
  {
    tKey: 'experience',
    Icon: BusinessCenterIcon,
    labelValues: [YEARS_OF_EXPERIENCE],
    textValues: [13],
    links: [
      <MuiLink component={Link} className="Link" to={ROUTE.experience} />,
    ],
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
    links: [<MuiLink component={Link} className="Link" to={ROUTE.vlog} />],
  },
  {
    tKey: 'vlogger',
    Icon: VideocamIcon,
    labelValues: [CONTACT_LINK.youTube.title],
    textValues: ['Год назад', CONTACT_LINK.youTube.title],
    links: [
      <MuiLink component={Link} className="Link" to={ROUTE.vlog} />,
      <MuiLink
        {...BLANK_LINK_PROPS}
        className="Link"
        href={CONTACT_LINK.youTube.href}
      />,
    ],
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
    tKey: 'actor',
    Icon: TheaterComedyIcon,
  },
  {
    tKey: 'sport',
    Icon: DirectionsBikeIcon,
  },
  {
    tKey: 'travel',
    textValues: [countriesVisited.length],
    Icon: ExploreIcon,
  },
  {
    tKey: 'love',
    Icon: FavoriteIcon,
    textValues: [differenceInYears(TODAY, new Date(2013, 1))],
    links: [
      <MuiLink
        {...BLANK_LINK_PROPS}
        className="Link"
        href="https://instagram.com/kate_watermelon"
      />,
    ],
  },
  {
    tKey: 'coffee',
    Icon: LocalCafeIcon,
  },
]
