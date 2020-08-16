import React from 'react'
import EcoIcon from '@material-ui/icons/EcoRounded'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBikeRounded'
import SchoolIcon from '@material-ui/icons/SchoolRounded'
import PublicIcon from '@material-ui/icons/PublicRounded'
import LocalCafeIcon from '@material-ui/icons/LocalCafeRounded'
import FavoriteIcon from '@material-ui/icons/FavoriteRounded'
import AppsIcon from '@material-ui/icons/AppsRounded'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccountRounded'
import AllInclusiveIcon from '@material-ui/icons/AllInclusiveRounded'
import CodeIcon from '@material-ui/icons/CodeRounded'
import SquareFootIcon from '@material-ui/icons/SquareFootRounded'
import GroupWorkIcon from '@material-ui/icons/GroupWorkRounded'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterRounded'
import ExploreIcon from '@material-ui/icons/ExploreRounded'

import Sections from '../common/Sections'
import Info from '../common/Info'
import Social from './Social'
import {TITLES} from '../../data/common'
import {YEARS_OF_EXPERIENCE} from '../../utils/constants'
import {Feature} from '../../utils/types'

const text: string =
  'Занимаюсь фронтенд-разработкой. Создаю проекты любой сложности с нуля. Воплощаю в жизнь UI/UX идеи.'

const features: Feature[] = [
  {label: 'Реализовал большое количество проектов', Icon: AppsIcon},
  {
    label: `Профессиональный опыт разработки ${YEARS_OF_EXPERIENCE}+ лет`,
    Icon: BusinessCenterIcon,
  },
  {
    label: 'Ведущий разработчик и ментор',
    Icon: SupervisorAccountIcon,
  },
  {label: 'Организованный и автономный', Icon: GroupWorkIcon},
  {
    label: 'Интересуюсь веб-разработкой и программированием',
    Icon: CodeIcon,
  },
  {
    label: 'Нахожусь в состоянии постоянного обучения и развития',
    Icon: AllInclusiveIcon,
  },
  {label: 'Склонный к перфекционизму', Icon: SquareFootIcon},
  {label: 'Два высших образования', Icon: SchoolIcon},
  {label: 'Веду здоровый образ жизни', Icon: EcoIcon},
  {label: 'Занимаюсь спортом', Icon: DirectionsBikeIcon},
  {label: 'Люблю путешествовать', Icon: ExploreIcon},
  {label: 'Счастливый муж', Icon: FavoriteIcon},
  {label: 'Космополит', Icon: PublicIcon},
  {label: 'Кофеман', Icon: LocalCafeIcon},
]

export default function About(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info
          title={TITLES.about}
          text={text}
          features={features}
          extra={<p>!!!</p>}
        />
      }
      secondSection={<Social />}
    />
  )
}
