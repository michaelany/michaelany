import React from 'react'
import {Link} from 'react-router-dom'
import ThumbUpIcon from '@material-ui/icons/CheckCircleRounded'
import SpeedIcon from '@material-ui/icons/SpeedRounded'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjectsRounded'
import BuildIcon from '@material-ui/icons/BuildRounded'
import AccountTreeIcon from '@material-ui/icons/AccountTreeRounded'
import BrushIcon from '@material-ui/icons/BrushRounded'
import DevicesOtherIcon from '@material-ui/icons/DevicesOtherRounded'
import AllInclusiveIcon from '@material-ui/icons/AllInclusiveRounded'
import ViewQuiltIcon from '@material-ui/icons/ViewQuiltRounded'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccountRounded'
import PersonAddIcon from '@material-ui/icons/PersonAddRounded'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendlyRounded'
import EcoIcon from '@material-ui/icons/EcoRounded'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBikeRounded'
import SchoolIcon from '@material-ui/icons/SchoolRounded'
import PublicIcon from '@material-ui/icons/PublicRounded'
import LocalCafeIcon from '@material-ui/icons/LocalCafeRounded'
import PaletteIcon from '@material-ui/icons/PaletteRounded'

import Sections from '../_common/Sections'
import Info from '../_common/Info'
import Social from './Social'
import {Title, Route} from '../../utils/enums'
import {IFeature} from '../../utils/types'

const features: IFeature[] = [
  {id: 1, label: 'Выбираю простой и эффективный способ решения задачи', Icon: ThumbUpIcon},
  {id: 2, label: 'Пишу современный и быстро работающий код', Icon: SpeedIcon},
  {id: 3, label: 'Создаю модульную и оптимальную архитектуру для каждого проекта', Icon: AccountTreeIcon},
  {id: 4, label: 'Имею в арсенале большое количество паттернов и приемов', Icon: BuildIcon},
  {id: 5, label: 'Строго соблюдаю единый стиль написания чистого кода', Icon: BrushIcon},
  {id: 6, label: 'Верстаю семантично, доступно, кроссбраузерно и pixel-perfect', Icon: PaletteIcon},
  {id: 7, label: 'Реализую адаптивный интерфейс', Icon: DevicesOtherIcon},
  {id: 8, label: 'Воплощаю собственные UI/UX идеи', Icon: EmojiObjectsIcon},
  {
    id: 9,
    label: 'Нахожусь в состоянии постоянного обучения и развития',
    Icon: AllInclusiveIcon,
  },
  {id: 10, label: 'Являюсь ведущим разработчиком на проектах', Icon: SupervisorAccountIcon},
  {id: 11, label: 'Делаю код-ревью и занимаюсь обучением', Icon: ChildFriendlyIcon},
  {id: 12, label: 'Есть опыт проведения собеседований', Icon: PersonAddIcon},
  {id: 13, label: 'Люблю путешествовать', Icon: PublicIcon},
  {id: 14, label: 'Веду здоровый образ жизни', Icon: EcoIcon},
  {id: 15, label: 'Занимаюсь спортом', Icon: DirectionsBikeIcon},
  {id: 16, label: 'Имею два высших образования', Icon: SchoolIcon},
  {id: 17, label: 'Склонный к перфекционизму', Icon: ViewQuiltIcon},
  {id: 18, label: 'Кофеман', Icon: LocalCafeIcon},
]
const mainFeatures: IFeature[] = features.slice(0, 10)
const extraFeatures: IFeature[] = features.slice(10)

export default function About(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info
          title={Title.ABOUT}
          mainText="Живу и работаю в Москве. Профессионально занимаюсь веб-разработкой четыре года"
          textContent={
            <>
              Я фронтенд инженер и UI разработчик. Мне нравится создавать простые, красивые и удобные{' '}
              <Link className="Link Link_color_green" to={Route.PORTFOLIO}>
                одностраничные приложения
              </Link>
              ,{' '}
              <Link className="Link Link_color_green" to={Route.PORTFOLIO}>
                лендинги
              </Link>
              ,{' '}
              <Link className="Link Link_color_green" to={Route.PORTFOLIO}>
                многостраничные сайты
              </Link>{' '}
              и{' '}
              <Link className="Link Link_color_green" to={Route.PORTFOLIO}>
                админки
              </Link>
              .
            </>
          }
          features={mainFeatures}
          extraFeatures={extraFeatures}
          color="green"
        />
      }
      secondSection={<Social />}
    />
  )
}
