import {differenceInYears} from 'date-fns'
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'
import {Link as MuiLink} from '@mui/material'
import type {ReactNode} from 'react'

import './About.scss'
import {
  SurfingRounded as SurfingIcon,
  SchoolRounded as SchoolIcon,
  CoffeeMakerRounded as CoffeeMakerIcon,
  FavoriteRounded as FavoriteIcon,
  DashboardCustomizeRounded as DashboardCustomizeIcon,
  LogoDevRounded as LogoDevIcon,
  AutoStoriesRounded as AutoStoriesIcon,
  CodeRounded as CodeIcon,
  SquareFootRounded as SquareFootIcon,
  CenterFocusStrongRounded as CenterFocusStrongIcon,
  BusinessCenterRounded as BusinessCenterIcon,
  ExploreRounded as ExploreIcon,
  VideoCameraFrontRounded as VideoCameraFrontIcon,
  TheaterComedyRounded as TheaterComedyIcon,
  PersonPinCircleRounded as PersonPinCircleIcon,
  SportsEsportsRounded as SportsEsportsIcon,
} from '@mui/icons-material'

import {Sections, Info, Tooltip} from '#components/common'
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

interface ICountriesVisitedProps {
  children?: ReactNode
}

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

const CountriesVisited = ({children}: ICountriesVisitedProps) => {
  const {t} = useTranslation()

  return (
    <Tooltip
      slotProps={{
        tooltip: {
          sx: {
            maxWidth: 'none',
          },
        },
      }}
      title={
        <ul className="About-Countries">
          {countriesVisited.map(({key, flag}) => (
            <li key={key}>
              {flag} {t(`about.country.${key}`)}
            </li>
          ))}
        </ul>
      }
      enterDelay={0}
    >
      <MuiLink component="span" className="About-TooltipElement Link">
        {children}
      </MuiLink>
    </Tooltip>
  )
}

const textValues = ['UI/UX', 'title.blog', CONTACT_LINK.youTube.title]

const transComponents = [
  <strong />,
  <MuiLink component={Link} className="Link" to={ROUTE.portfolio} />,
  <MuiLink component={Link} className="Link Lowercase" to={ROUTE.blog} />,
  <MuiLink
    {...BLANK_LINK_PROPS}
    className="Link"
    href={CONTACT_LINK.youTube.href}
  />,
]

const countriesVisited = [
  {key: 'abkhazia', flag: '🏳️'},
  {key: 'albania', flag: '🇦🇱'},
  {key: 'australia', flag: '🇦🇺'},
  {key: 'belarus', flag: '🇧🇾'},
  {key: 'bosniaHerzegovina', flag: '🇧🇦'},
  {key: 'cyprus', flag: '🇨🇾'},
  {key: 'czechRepublic', flag: '🇨🇿'},
  {key: 'egypt', flag: '🇪🇬'},
  {key: 'france', flag: '🇫🇷'},
  {key: 'germany', flag: '🇩🇪'},
  {key: 'greece', flag: '🇬🇷'},
  {key: 'italy', flag: '🇮🇹'},
  {key: 'japan', flag: '🇯🇵'},
  {key: 'latvia', flag: '🇱🇻'},
  {key: 'maldives', flag: '🇲🇻'},
  {key: 'montenegro', flag: '🇲🇪'},
  {key: 'newZealand', flag: '🇳🇿'},
  {key: 'russianFederation', flag: '🇷🇺'},
  {key: 'serbia', flag: '🇷🇸'},
  {key: 'spain', flag: '🇪🇸'},
  {key: 'sriLanka', flag: '🇱🇰'},
  {key: 'thailand', flag: '🇹🇭'},
  {key: 'turkey', flag: '🇹🇷'},
  {key: 'ukraine', flag: '🇺🇦'},
  {key: 'vaticanCity', flag: '🇻🇦'},
]

const features: IFeature[] = [
  {
    tKey: 'projects',
    Icon: DashboardCustomizeIcon,
    labelValues: [PROJECTS_COUNT],
    textValues: ['title.portfolio'],
    links: [<MuiLink component={Link} className="Link" to={ROUTE.portfolio} />],
  },
  {
    tKey: 'position',
    Icon: CodeIcon,
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
    Icon: CenterFocusStrongIcon,
  },
  {
    tKey: 'programming',
    Icon: LogoDevIcon,
    textValues: [TECHNOLOGY_TITLE.js, TECHNOLOGY_TITLE.css],
    links: [<MuiLink component={Link} className="Link" to={ROUTE.blog} />],
  },
  {
    tKey: 'blogger',
    Icon: VideoCameraFrontIcon,
    labelValues: [CONTACT_LINK.youTube.title],
    textValues: [CONTACT_LINK.youTube.title],
    links: [
      <MuiLink component={Link} className="Link" to={ROUTE.blog} />,
      <MuiLink
        {...BLANK_LINK_PROPS}
        className="Link"
        href={CONTACT_LINK.youTube.href}
      />,
    ],
  },
  {
    tKey: 'growing',
    Icon: AutoStoriesIcon,
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
    textValues: [TECHNOLOGY_TITLE.js],
    links: [
      <MuiLink
        component={Link}
        className="Link"
        to={`${ROUTE.blog}/how-i-became-software-engineer`}
      />,
    ],
  },
  {
    tKey: 'geek',
    Icon: SportsEsportsIcon,
    textValues: ['digital', 'Nintendo', 'Mario', 'Zelda'],
    links: [
      <MuiLink
        component={Link}
        className="Link"
        to={`${ROUTE.blog}/my-dreamdesk`}
      />,
    ],
  },
  {
    tKey: 'sport',
    Icon: SurfingIcon,
  },
  {
    tKey: 'resident',
    Icon: PersonPinCircleIcon,
    textValues: [
      differenceInYears(TODAY, new Date(2023, 3)),
      'Software Engineer',
    ],
  },
  {
    tKey: 'travel',
    Icon: ExploreIcon,
    textValues: [countriesVisited.length],
    links: [<CountriesVisited />],
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
    Icon: CoffeeMakerIcon,
    textValues: ['Breville the Barista'],
  },
]
