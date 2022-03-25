import {useState, useRef, useMemo} from 'react'
import {Link, ButtonBaseActions} from '@material-ui/core'
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
} from '@material-ui/icons'

import {Sections, Info} from '../common'
import Technologies from './Technologies'
import {scrollToView} from '../../utils/helpers'
import {Feature, TechnologyGroup, TKey} from '../../utils/types'
import {TECHNOLOGY_TITLE, TECHNOLOGY_GROUPS} from '../../data/common'

const textValues: string[] = [
  TECHNOLOGY_TITLE.ts,
  TECHNOLOGY_TITLE.react,
  TECHNOLOGY_TITLE.reactquery,
]

const initialExpanded = [TECHNOLOGY_GROUPS[0].tKey]

export default function Skills(): JSX.Element {
  const [expanded, setExpanded] = useState<TKey[]>(initialExpanded)
  const sectionRef = useRef<HTMLElement>(null)
  const firstTechnologyActionRef = useRef<ButtonBaseActions>(null)

  const features: Feature[] = useMemo(
    () => [
      {
        tKey: 'interface',
        Icon: VerifiedUserIcon,
      },
      {
        tKey: 'performance',
        Icon: SpeedIcon,
        textValues: [
          'ES6-ES11',
          `${TECHNOLOGY_TITLE.ts} 4`,
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
            onClick={(): void => {
              setExpanded(
                TECHNOLOGY_GROUPS.map((group: TechnologyGroup) => group.tKey)
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
        description: '.',
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
    ],
    []
  )

  return (
    <Sections
      firstSection={
        <Info type="skills" textValues={textValues} features={features} />
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
