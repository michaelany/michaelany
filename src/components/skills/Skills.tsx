import React from 'react'
import ThumbUpIcon from '@material-ui/icons/CheckCircleTwoTone'
import SpeedIcon from '@material-ui/icons/SpeedTwoTone'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjectsTwoTone'
import BuildIcon from '@material-ui/icons/BuildTwoTone'
import AccountTreeIcon from '@material-ui/icons/AccountTreeTwoTone'
import BrushIcon from '@material-ui/icons/BrushTwoTone'
import DevicesOtherIcon from '@material-ui/icons/DevicesOtherTwoTone'
import AllInclusiveIcon from '@material-ui/icons/AllInclusiveTwoTone'
import PersonAddIcon from '@material-ui/icons/PersonAddTwoTone'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendlyTwoTone'
import CodeIcon from '@material-ui/icons/CodeTwoTone'
import MailIcon from '@material-ui/icons/MailTwoTone'
import LoopIcon from '@material-ui/icons/LoopTwoTone'
import PaletteIcon from '@material-ui/icons/PaletteTwoTone'

import Sections from '../_common/Sections'
import Info from '../_common/Info'
import Technologies from './Technologies'
import {Title} from '../../utils/enums'
import {IFeature} from '../../utils/types'

const features: IFeature[] = [
  {id: 1, label: 'Использую актуальные фреймворки, библиотеки и инструменты', Icon: BuildIcon},
  {id: 2, label: 'Выбираю простой и эффективный способ решения задачи', Icon: ThumbUpIcon},
  {id: 3, label: 'Пишу современный и быстро работающий код', Icon: SpeedIcon},
  {
    id: 4,
    label: 'Создаю модульную и оптимальную архитектуру для каждого проекта',
    Icon: AccountTreeIcon,
  },
  {id: 5, label: 'Имею в арсенале большое количество паттернов и приемов', Icon: CodeIcon},
  {id: 6, label: 'Строго соблюдаю единый стиль написания чистого кода', Icon: BrushIcon},
  {id: 7, label: 'Рефакторю, оптимизирую и тестирую', Icon: LoopIcon},
  {id: 8, label: 'Верстаю семантично, доступно, кроссбраузерно и pixel-perfect', Icon: PaletteIcon},
  {id: 9, label: 'Реализую адаптивный интерфейс', Icon: DevicesOtherIcon},
  {id: 10, label: 'Воплощаю собственные UI/UX идеи', Icon: EmojiObjectsIcon},
  {
    id: 11,
    label: 'Нахожусь в состоянии постоянного обучения и развития',
    Icon: AllInclusiveIcon,
  },
  {id: 12, label: 'Делаю код-ревью, занимаюсь обучением', Icon: ChildFriendlyIcon},
  {id: 13, label: 'Есть опыт верстки писем', Icon: MailIcon},
  {id: 14, label: 'Есть опыт проведения собеседований', Icon: PersonAddIcon},
]

const text: string =
  'Создаю веб-приложения, лендинги, многостраничные сайты и админки. Основной стек React + TypeScript + Redux'

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
