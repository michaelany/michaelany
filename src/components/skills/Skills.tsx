import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {Link as MuiLink, type ButtonBaseActions} from '@mui/material'
import {
  SpeedRounded as SpeedIcon,
  ConstructionRounded as ConstructionIcon,
  AccountTreeRounded as AccountTreeIcon,
  DevicesRounded as DevicesIcon,
  AutoFixHighRounded as AutoFixHighIcon,
  ViewQuiltRounded as ViewQuiltIcon,
  GroupsRounded as GroupsIcon,
  ChecklistRounded as ChecklistIcon,
  ScienceRounded as ScienceIcon,
  DesignServicesRounded as DesignServicesIcon,
  ExtensionRounded as ExtensionIcon,
  DnsRounded as DnsIcon,
  MovieRounded as MovieIcon,
  HubRounded as HubIcon,
  AnimationRounded as AnimationIcon,
  PermMediaRounded as PermMediaIcon,
  SmartToyRounded as SmartToyIcon,
  IntegrationInstructionsRounded as IntegrationInstructionsIcon,
  PublishedWithChangesRounded as PublishedWithChangesIcon,
  AssignmentTurnedInRounded as AssignmentTurnedInIcon,
} from '@mui/icons-material'

import {Sections, Info} from '#components/common'
import {scrollToView} from '#utils/helpers'
import {BLANK_LINK_PROPS, PROJECT_FILTERS, ROUTE} from '#utils/constants'
import {TECHNOLOGY_TITLE, TECHNOLOGY_GROUPS, CONTACT_LINK} from '#data/common'
import Technologies from './Technologies'
import type {IFeature, ITechnologyGroup, TKey} from '#utils/types'

export default function Skills() {
  const [expanded, setExpanded] = useState<TKey[]>(initialExpanded)
  const sectionRef = useRef<HTMLElement | null>(null)
  const firstTechnologyActionRef = useRef<ButtonBaseActions | null>(null)
  const featuresRef = useRef<IFeature[]>([
    {
      tKey: 'interface',
      Icon: ViewQuiltIcon,
      textValues: ['SEO'],
    },
    {
      tKey: 'performance',
      Icon: SpeedIcon,
      textValues: [
        'ES6-ES15',
        `${TECHNOLOGY_TITLE.ts} 6`,
        `${TECHNOLOGY_TITLE.react} 19 (Hooks)`,
        'Vue 3 (Composition API)',
        'CSS Grid',
      ],
    },
    {
      tKey: 'architecture',
      textValues: ['Feature-Sliced Design', 'SOLID'],
      Icon: AccountTreeIcon,
    },
    {
      tKey: 'code',
      Icon: AutoFixHighIcon,
      textValues: [
        TECHNOLOGY_TITLE.eslint,
        TECHNOLOGY_TITLE.prettier,
        'DRY',
        'KISS',
        'YAGNI',
      ],
    },
    {
      tKey: 'state',
      Icon: HubIcon,
      textValues: ['URL'],
    },
    {
      tKey: 'tools',
      Icon: ConstructionIcon,
      textValues: [TECHNOLOGY_TITLE.react],
      links: [
        <MuiLink
          component="button"
          className="Link"
          onClick={() => {
            setExpanded(
              TECHNOLOGY_GROUPS.map((group: ITechnologyGroup) => group.tKey)
            )
            scrollToView(sectionRef.current as HTMLElement)
            firstTechnologyActionRef.current?.focusVisible()
          }}
        />,
      ],
    },
    {
      tKey: 'patterns',
      Icon: ExtensionIcon,
    },
    {
      tKey: 'server',
      Icon: DnsIcon,
    },
    {
      tKey: 'markup',
      labelValues: ['pixel-perfect'],
      textValues: [TECHNOLOGY_TITLE.css, TECHNOLOGY_TITLE.html],
      Icon: DesignServicesIcon,
    },
    {
      tKey: 'responsive',
      Icon: DevicesIcon,
      textValues: ['desktop / mobile first'],
    },
    {
      tKey: 'animation',
      Icon: AnimationIcon,
      textValues: [
        TECHNOLOGY_TITLE.js,
        TECHNOLOGY_TITLE.css,
        TECHNOLOGY_TITLE.svg,
        'WebGL',
        TECHNOLOGY_TITLE.gsap,
        'Motion',
        'Three.js',
      ],
    },
    {
      tKey: 'media',
      Icon: PermMediaIcon,
      textValues: [TECHNOLOGY_TITLE.sketch, TECHNOLOGY_TITLE.figma],
    },
    {
      tKey: 'test',
      Icon: ScienceIcon,
      textValues: [
        'Vitest',
        'Playwright',
        'A/B',
        'Lighthouse score',
        'Core Web Vitals',
      ],
    },
    {
      tKey: 'ai',
      Icon: SmartToyIcon,
      labelValues: ['AI'],
      textValues: ['AI', 'Claude Code', 'Codex', 'MCP'],
    },
    {
      tKey: 'integrations',
      Icon: IntegrationInstructionsIcon,
      textValues: [
        'headless CMS',
        'SDK',
        'API',
        'Stripe',
        'Airwallex',
        'Strapi',
        'Firebase',
        'Amplitude',
        'Google',
      ],
    },
    {
      tKey: 'cicd',
      Icon: PublishedWithChangesIcon,
      labelValues: ['CI/CD'],
      textValues: [
        'CI/CD',
        'GitHub Actions',
        'Cloudflare',
        'Azure',
        'Vercel',
        'AWS',
      ],
    },
    {
      tKey: 'tasks',
      textValues: ['Kanban / Scrum', 'GTD'],
      Icon: ChecklistIcon,
    },
    {
      tKey: 'ownership',
      Icon: AssignmentTurnedInIcon,
    },
    {
      tKey: 'mentor',
      Icon: GroupsIcon,
    },
    {
      tKey: 'blog',
      labelValues: [CONTACT_LINK.youTube.title],
      Icon: MovieIcon,
    },
  ])

  return (
    <Sections
      firstSection={
        <Info
          type="skills"
          textValues={textValues}
          transComponents={transComponents}
          features={featuresRef.current}
        />
      }
      secondSection={
        <Technologies
          expanded={expanded}
          sectionRef={sectionRef}
          firstTechnologyActionRef={firstTechnologyActionRef}
          setExpanded={setExpanded}
        />
      }
    />
  )
}

const transComponents = [
  <MuiLink
    component={Link}
    className="Link"
    to={`${ROUTE.portfolio}#${PROJECT_FILTERS[1]}`}
  />,
  <MuiLink
    component={Link}
    className="Link"
    to={`${ROUTE.portfolio}#${PROJECT_FILTERS[2]}`}
  />,
  <MuiLink
    component={Link}
    className="Link"
    to={`${ROUTE.portfolio}#${PROJECT_FILTERS[3]}`}
  />,
  <MuiLink
    component={Link}
    className="Link"
    to={`${ROUTE.portfolio}#${PROJECT_FILTERS[4]}`}
  />,
  <strong />,
  <MuiLink
    {...BLANK_LINK_PROPS}
    className="Link"
    href={`${CONTACT_LINK.youTube.href}/videos`}
  />,
]

const textValues = [
  TECHNOLOGY_TITLE.ts,
  TECHNOLOGY_TITLE.react,
  TECHNOLOGY_TITLE.reactquery,
  TECHNOLOGY_TITLE.zustand,
  'Claude Code',
  'Codex',
  CONTACT_LINK.youTube.title,
  TECHNOLOGY_TITLE.fcpx,
]

const initialExpanded = [TECHNOLOGY_GROUPS[0].tKey]
