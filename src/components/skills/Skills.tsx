import {useState, useRef} from 'react'
import {Link, ButtonBaseActions} from '@mui/material'
import {
  ThumbUpRounded as ThumbUpIcon,
  SpeedRounded as SpeedIcon,
  BuildRounded as BuildIcon,
  AccountTreeRounded as AccountTreeIcon,
  DevicesOtherRounded as DevicesOtherIcon,
  BrushRounded as BrushIcon,
  VerifiedUserRounded as VerifiedUserIcon,
  ChildFriendlyRounded as ChildFriendlyIcon,
  ListAltRounded as ListAltIcon,
  LoopRounded as LoopIcon,
  PaletteRounded as PaletteIcon,
  ExtensionRounded as ExtensionIcon,
} from '@mui/icons-material'

import {Sections, Info} from '@components/common'
import {scrollToView} from '@utils/helpers'
import {IFeature, ITechnologyGroup, TKey} from '@utils/types'
import {TECHNOLOGY_TITLE, TECHNOLOGY_GROUPS} from '@data/common'
import Technologies from './Technologies'

export default function Skills() {
  const [expanded, setExpanded] = useState<TKey[]>(initialExpanded)
  const sectionRef = useRef<HTMLElement>(null)
  const firstTechnologyActionRef = useRef<ButtonBaseActions>(null)
  const featuresRef = useRef<IFeature[]>([
    {
      tKey: 'interface',
      Icon: VerifiedUserIcon,
    },
    {
      tKey: 'performance',
      Icon: SpeedIcon,
      textValues: [
        'ES6-ES13',
        `${TECHNOLOGY_TITLE.ts} 5`,
        `${TECHNOLOGY_TITLE.react} Hooks`,
        'CSS Grid',
      ],
    },
    {
      tKey: 'efficient',
      Icon: ThumbUpIcon,
    },
    {
      tKey: 'markup',
      labelValues: ['Pixel Perfect'],
      textValues: ['🙂'],
      Icon: PaletteIcon,
    },
    {
      tKey: 'patterns',
      Icon: ExtensionIcon,
    },
    {
      tKey: 'modules',
      textValues: ['DRY', 'KISS'],
      Icon: AccountTreeIcon,
    },
    {
      tKey: 'tools',
      Icon: BuildIcon,
      Link: (
        <Link
          component="button"
          className="Link"
          onClick={() => {
            setExpanded(
              TECHNOLOGY_GROUPS.map((group: ITechnologyGroup) => group.tKey)
            )
            scrollToView(sectionRef.current as HTMLElement)
            firstTechnologyActionRef.current?.focusVisible()
          }}
        />
      ),
    },
    {
      tKey: 'responsive',
      Icon: DevicesOtherIcon,
      textValues: [
        'desktop / mobile first',
        TECHNOLOGY_TITLE.js,
        TECHNOLOGY_TITLE.css,
        TECHNOLOGY_TITLE.svg,
      ],
    },
    {
      tKey: 'code',
      Icon: BrushIcon,
      textValues: [TECHNOLOGY_TITLE.eslint, TECHNOLOGY_TITLE.prettier],
    },
    {
      tKey: 'test',
      Icon: LoopIcon,
    },
    {
      tKey: 'tasks',
      textValues: ['Kanban / Scrum', 'GTD'],
      Icon: ListAltIcon,
    },
    {
      tKey: 'mentor',
      Icon: ChildFriendlyIcon,
    },
  ])

  return (
    <Sections
      firstSection={
        <Info
          type="skills"
          textValues={textValues}
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

const textValues = [
  TECHNOLOGY_TITLE.ts,
  TECHNOLOGY_TITLE.react,
  TECHNOLOGY_TITLE.reactquery,
]

const initialExpanded = [TECHNOLOGY_GROUPS[0].tKey]
