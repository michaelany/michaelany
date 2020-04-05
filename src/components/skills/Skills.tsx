import React from 'react'
import ThumbUpIcon from '@material-ui/icons/CheckCircleTwoTone'
import SpeedIcon from '@material-ui/icons/SpeedTwoTone'
import BuildIcon from '@material-ui/icons/BuildTwoTone'
import AccountTreeIcon from '@material-ui/icons/AccountTreeTwoTone'
import BrushIcon from '@material-ui/icons/BrushTwoTone'
import DevicesOtherIcon from '@material-ui/icons/DevicesOtherTwoTone'
import PersonAddIcon from '@material-ui/icons/PersonAddTwoTone'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendlyTwoTone'
import ListAltIcon from '@material-ui/icons/ListAltTwoTone'
import LoopIcon from '@material-ui/icons/LoopTwoTone'
import PaletteIcon from '@material-ui/icons/PaletteTwoTone'
import ExtensionIcon from '@material-ui/icons/ExtensionTwoTone'

import Sections from '../_common/Sections'
import Info from '../_common/Info'
import Technologies from './Technologies'
import {Title} from '../../utils/enums'
import {IFeature} from '../../utils/types'

const text: string =
  'Создаю веб-приложения, лендинги, многостраничные сайты и админки. Основной стек - React + TypeScript + Redux.'

const features: IFeature[] = [
  {label: 'Пишу современный и быстро работающий код', Icon: SpeedIcon},
  {
    label: 'Выбираю простой и эффективный способ решения задачи',
    Icon: ThumbUpIcon,
  },
  {
    label: 'Имею в арсенале большое количество паттернов и приемов',
    Icon: BuildIcon,
  },
  {
    label: 'Создаю модульную и оптимальную архитектуру для каждого проекта',
    Icon: AccountTreeIcon,
  },
  {
    label: 'Использую актуальные фреймворки, библиотеки и инструменты',
    Icon: ExtensionIcon,
  },
  {
    label: 'Строго соблюдаю единый стиль написания чистого кода',
    Icon: BrushIcon,
  },
  {
    label: 'Верстаю семантично, доступно, кроссбраузерно и pixel-perfect',
    Icon: PaletteIcon,
  },
  {label: 'Реализую адаптивный интерфейс и анимации', Icon: DevicesOtherIcon},
  {label: 'Рефакторю, оптимизирую и тестирую', Icon: LoopIcon},
  {label: 'Анализирую, планирую и декомпозирую', Icon: ListAltIcon},
  {label: 'Делаю код-ревью и занимаюсь обучением', Icon: ChildFriendlyIcon},
  {label: 'Есть опыт проведения собеседований', Icon: PersonAddIcon},
]

const extraContent: string =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, dolores quae vitae sit sunt quasi facilis. Exercitationem provident, nulla laudantium earum aut quo non quisquam. Consequatur illo commodi deleniti, perspiciatis doloremque mollitia tempora, excepturi magni nisi similique nobis! Fugit, in architecto tempora quidem doloribus, commodi consequatur temporibus vel error voluptatem, porro iste minus? Dolor totam ipsum aspernatur quidem voluptas quis quo magnam veniam unde harum inventore dignissimos tenetur, odio id, tempora deserunt quos cupiditate ad earum. Et magnam deserunt laborum nostrum, itaque debitis. Quo laudantium ipsam placeat repudiandae sed provident deserunt nemo recusandae, praesentium, aliquam sit minima illum velit commodi.'

export default function Skills(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info
          color="blue"
          title={Title.SKILLS}
          text={text}
          features={features}
          extraContent={extraContent}
        />
      }
      secondSection={<Technologies />}
    />
  )
}
