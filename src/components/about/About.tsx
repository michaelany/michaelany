import React from 'react'
import EcoIcon from '@material-ui/icons/EcoTwoTone'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBikeTwoTone'
import SchoolIcon from '@material-ui/icons/SchoolTwoTone'
import PublicIcon from '@material-ui/icons/PublicTwoTone'
import LocalCafeIcon from '@material-ui/icons/LocalCafeTwoTone'
import FavoriteIcon from '@material-ui/icons/FavoriteTwoTone'
import AppsIcon from '@material-ui/icons/AppsTwoTone'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccountTwoTone'
import AllInclusiveIcon from '@material-ui/icons/AllInclusiveTwoTone'
import CodeIcon from '@material-ui/icons/CodeTwoTone'
import SquareFootIcon from '@material-ui/icons/SquareFootTwoTone'
import BookIcon from '@material-ui/icons/BookTwoTone'
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltTwoTone'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterTwoTone'

import Sections from '../_common/Sections'
import Info from '../_common/Info'
import Social from './Social'
import {Title} from '../../utils/enums'
import {IFeature} from '../../utils/types'

const text: string =
  'Живу и дышу фронтендом. Разрабатываю проекты любой сложности с нуля. Воплощаю в жизнь UI/UX идеи.'

const features: IFeature[] = [
  {id: 1, label: 'Реализовал большое количество проектов', Icon: AppsIcon},
  {id: 2, label: 'Являюсь ведущим разработчиком и ментором', Icon: SupervisorAccountIcon},
  {
    id: 3,
    label: 'Интересуюсь веб-разработкой и программированием',
    Icon: CodeIcon,
  },
  {
    id: 4,
    label: 'Нахожусь в состоянии постоянного обучения и развития',
    Icon: AllInclusiveIcon,
  },
  {id: 5, label: 'Организованный и автономный', Icon: BusinessCenterIcon},
  {id: 6, label: 'Склонный к перфекционизму', Icon: SquareFootIcon},
  {id: 7, label: 'Дружелюбный и коммуникабельный', Icon: SentimentSatisfiedAltIcon},
  {id: 8, label: 'Имею два высших образования', Icon: SchoolIcon},
  {id: 9, label: 'Веду здоровый образ жизни', Icon: EcoIcon},
  {id: 10, label: 'Занимаюсь спортом', Icon: DirectionsBikeIcon},
  {id: 11, label: 'Люблю путешествовать', Icon: PublicIcon},
  {id: 12, label: 'Люблю читать', Icon: BookIcon},
  {id: 13, label: 'Счастлив в браке', Icon: FavoriteIcon},
  {id: 14, label: 'Кофеман', Icon: LocalCafeIcon},
]

const extraContent: string =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, dolores quae vitae sit sunt quasi facilis. Exercitationem provident, nulla laudantium earum aut quo non quisquam. Consequatur illo commodi deleniti, perspiciatis doloremque mollitia tempora, excepturi magni nisi similique nobis! Fugit, in architecto tempora quidem doloribus, commodi consequatur temporibus vel error voluptatem, porro iste minus? Dolor totam ipsum aspernatur quidem voluptas quis quo magnam veniam unde harum inventore dignissimos tenetur, odio id, tempora deserunt quos cupiditate ad earum. Et magnam deserunt laborum nostrum, itaque debitis. Quo laudantium ipsam placeat repudiandae sed provident deserunt nemo recusandae, praesentium, aliquam sit minima illum velit commodi.'

export default function About(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info
          color="green"
          title={Title.ABOUT}
          text={text}
          features={features}
          extraContent={extraContent}
        />
      }
      secondSection={<Social />}
    />
  )
}
