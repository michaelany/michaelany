import React from 'react'
import ViewQuiltIcon from '@material-ui/icons/ViewQuiltTwoTone'
import EcoIcon from '@material-ui/icons/EcoTwoTone'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBikeTwoTone'
import SchoolIcon from '@material-ui/icons/SchoolTwoTone'
import PublicIcon from '@material-ui/icons/PublicTwoTone'
import LocalCafeIcon from '@material-ui/icons/LocalCafeTwoTone'
import FavoriteIcon from '@material-ui/icons/FavoriteTwoTone'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfiedTwoTone'
import StarIcon from '@material-ui/icons/StarTwoTone'
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevicesTwoTone'
import AppsIcon from '@material-ui/icons/AppsTwoTone'
import VideogameAssetIcon from '@material-ui/icons/VideogameAssetTwoTone'
import KeyboardIcon from '@material-ui/icons/KeyboardTwoTone'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccountTwoTone'

import Sections from '../_common/Sections'
import Info from '../_common/Info'
import Social from './Social'
import {Title} from '../../utils/enums'
import {IFeature} from '../../utils/types'

const features: IFeature[] = [
  {id: 1, label: 'Создаю интерфейсы для людей', Icon: ImportantDevicesIcon},
  {id: 2, label: 'Программирую и верстаю', Icon: KeyboardIcon},
  {id: 3, label: 'Реализовал 30 коммерческих проектов', Icon: AppsIcon},
  {id: 4, label: 'Склонный к перфекционизму', Icon: ViewQuiltIcon},
  {id: 5, label: 'Разработка как хобби', Icon: VideogameAssetIcon},
  {id: 6, label: 'Являюсь ведущим разработчиком', Icon: SupervisorAccountIcon},
  {id: 7, label: 'Имею два высших образования', Icon: SchoolIcon},
  {id: 8, label: 'Веду здоровый образ жизни', Icon: EcoIcon},
  {id: 9, label: 'Занимаюсь спортом', Icon: DirectionsBikeIcon},
  {id: 10, label: 'Люблю путешествовать', Icon: PublicIcon},
  {id: 11, label: 'Дружелюбный и коммуникабельный', Icon: SentimentSatisfiedIcon},
  {id: 12, label: 'Счастлив в браке', Icon: FavoriteIcon},
  {id: 13, label: 'Кофеман', Icon: LocalCafeIcon},
  {id: 14, label: 'Стремлюсь к совершенству', Icon: StarIcon},
]

const text: string = 'Живу и работаю в Москве. Профессионально занимаюсь веб-разработкой'

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
