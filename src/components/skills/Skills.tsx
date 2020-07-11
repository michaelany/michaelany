import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircleRounded'
import SpeedIcon from '@material-ui/icons/SpeedRounded'
import BuildIcon from '@material-ui/icons/BuildRounded'
import AccountTreeIcon from '@material-ui/icons/AccountTreeRounded'
import BrushIcon from '@material-ui/icons/BrushRounded'
import DevicesOtherIcon from '@material-ui/icons/DevicesOtherRounded'
import PersonAddIcon from '@material-ui/icons/PersonAddRounded'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendlyRounded'
import ListAltIcon from '@material-ui/icons/ListAltRounded'
import LoopIcon from '@material-ui/icons/LoopRounded'
import PaletteIcon from '@material-ui/icons/PaletteRounded'
import ExtensionIcon from '@material-ui/icons/ExtensionRounded'

import Sections from '../common/Sections'
import Info from '../common/Info'
import Technologies from './Technologies'
import {TITLES} from '../../data/common'
import {Feature} from '../../utils/types'

const text: string =
  'Создаю веб-приложения, лендинги, многостраничные сайты и админки. Основной стек - React + TypeScript + Redux.'

const features: Feature[] = [
  {label: 'Пишу современный и быстро работающий код', Icon: SpeedIcon},
  {
    label: 'Выбираю простой и эффективный способ решения задачи',
    Icon: CheckCircleIcon,
  },
  {
    label: 'Имею в арсенале большое количество паттернов и приемов',
    Icon: ExtensionIcon,
  },
  {
    label: 'Создаю модульную и оптимальную архитектуру для каждого проекта',
    Icon: AccountTreeIcon,
  },
  {
    label: 'Использую актуальные фреймворки, библиотеки и инструменты',
    Icon: BuildIcon,
  },
  {
    label: 'Строго соблюдаю единый стиль написания кода',
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

const extra: Array<JSX.Element | string> = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, dolores quae vitae sit sunt quasi facilis. Exercitationem provident, nulla laudantium earum aut quo non quisquam. Consequatur illo commodi deleniti, perspiciatis doloremque mollitia tempora, excepturi magni nisi similique nobis! Fugit, in architecto tempora quidem doloribus, commodi consequatur temporibus vel error voluptatem, porro iste minus? Dolor totam ipsum aspernatur quidem voluptas quis quo magnam veniam unde harum inventore dignissimos tenetur, odio id, tempora deserunt quos cupiditate ad earum. Et magnam deserunt laborum nostrum, itaque debitis. Quo laudantium ipsam placeat repudiandae sed provident deserunt nemo recusandae, praesentium, aliquam sit minima illum velit commodi.',
]

export default function Skills(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info
          title={TITLES.skills}
          text={text}
          features={features}
          extra={extra}
        />
      }
      secondSection={<Technologies />}
    />
  )
}
