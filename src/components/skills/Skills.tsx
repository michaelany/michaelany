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
import {Feature, TechnologyGroup} from '../../utils/types'
import {TECHNOLOGY_TITLE, TECHNOLOGY_GROUPS} from '../../data/common'

const initialExpanded = [TECHNOLOGY_GROUPS[0].tKey]

export default function Skills(): JSX.Element {
  const [expanded, setExpanded] = useState<string[]>(initialExpanded)
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
        textValue: `${TECHNOLOGY_TITLE.ts} 4, ${TECHNOLOGY_TITLE.react} Hooks, CSS`,
      },
      {
        tKey: 'efficient',
        Icon: ThumbUpIcon,
      },
      {
        tKey: 'markup',
        Icon: PaletteIcon,
      },
      {
        tKey: 'patterns',
        Icon: ExtensionIcon,
      },
      {
        tKey: 'modules',
        Icon: AccountTreeIcon,
      },
      {
        tKey: 'tools',
        Icon: BuildIcon,
        link: {
          text: 'основных',
          component: (
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
      },
      {
        tKey: 'responsive',
        Icon: DevicesOtherIcon,
        textValue: `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.css} и ${TECHNOLOGY_TITLE.svg}`,
      },
      {
        tKey: 'code',
        Icon: BrushIcon,
        textValue: `${TECHNOLOGY_TITLE.eslint} и ${TECHNOLOGY_TITLE.prettier}`,
      },
      {
        tKey: 'test',
        Icon: LoopIcon,
        description: '.',
      },
      {
        tKey: 'tasks',
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
        <Info
          type="skills"
          textValue={`${TECHNOLOGY_TITLE.ts} + ${TECHNOLOGY_TITLE.react} + ${TECHNOLOGY_TITLE.redux}`}
          features={features}
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
