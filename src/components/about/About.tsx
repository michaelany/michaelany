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
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterRounded'

import Sections from '../common/Sections'
import Info from '../common/Info'
import Social from './Social'
import {TITLES} from '../../data/common'
import {Feature} from '../../utils/types'

const text: string =
  'Живу и дышу фронтендом. Разрабатываю проекты любой сложности с нуля. Воплощаю в жизнь UI/UX идеи.'

const features: Feature[] = [
  {label: 'Реализовал большое количество проектов', Icon: AppsIcon},
  {
    label: 'Являюсь ведущим разработчиком и ментором',
    Icon: SupervisorAccountIcon,
  },
  {
    label: 'Интересуюсь веб-разработкой и программированием',
    Icon: CodeIcon,
  },
  {
    label: 'Нахожусь в состоянии постоянного обучения и развития',
    Icon: AllInclusiveIcon,
  },
  {label: 'Организованный и автономный', Icon: BusinessCenterIcon},
  {label: 'Склонный к перфекционизму', Icon: SquareFootIcon},
  {label: 'Имею два высших образования', Icon: SchoolIcon},
  {label: 'Веду здоровый образ жизни', Icon: EcoIcon},
  {label: 'Занимаюсь спортом', Icon: DirectionsBikeIcon},
  {label: 'Люблю путешествовать', Icon: PublicIcon},
  {label: 'Счастлив в браке', Icon: FavoriteIcon},
  {label: 'Кофеман', Icon: LocalCafeIcon},
]

const extra: string =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, dolores quae vitae sit sunt quasi facilis. Exercitationem provident, nulla laudantium earum aut quo non quisquam. Consequatur illo commodi deleniti, perspiciatis doloremque mollitia tempora, excepturi magni nisi similique nobis! Fugit, in architecto tempora quidem doloribus, commodi consequatur temporibus vel error voluptatem, porro iste minus? Dolor totam ipsum aspernatur quidem voluptas quis quo magnam veniam unde harum inventore dignissimos tenetur, odio id, tempora deserunt quos cupiditate ad earum. Et magnam deserunt laborum nostrum, itaque debitis. Quo laudantium ipsam placeat repudiandae sed provident deserunt nemo recusandae, praesentium, aliquam sit minima illum velit commodi.'

export default function About(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info
          title={TITLES.ABOUT}
          text={text}
          features={features}
          extra={extra}
        />
      }
      secondSection={<Social />}
    />
  )
}
