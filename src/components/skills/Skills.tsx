import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUpRounded'
import SpeedIcon from '@material-ui/icons/SpeedRounded'
import BuildIcon from '@material-ui/icons/BuildRounded'
import AccountTreeIcon from '@material-ui/icons/AccountTreeRounded'
import BrushIcon from '@material-ui/icons/BrushRounded'
import DevicesOtherIcon from '@material-ui/icons/DevicesOtherRounded'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserRounded'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendlyRounded'
import ListAltIcon from '@material-ui/icons/ListAltRounded'
import LoopIcon from '@material-ui/icons/LoopRounded'
import PaletteIcon from '@material-ui/icons/PaletteRounded'
import ExtensionIcon from '@material-ui/icons/ExtensionRounded'

import Sections from '../common/Sections'
import Info from '../common/Info'
import Technologies from './Technologies'
import {TECHNOLOGY_TITLES, TITLES} from '../../data/common'
import {Feature} from '../../utils/types'

const text: string =
  'Разрабатываю веб-приложения, лендинги, многостраничные сайты и админки. Основной стек - React + TypeScript + Redux.'

const features: Feature[] = [
  {
    label: 'Создаю надежный и правильно работающий интерфейс',
    Icon: VerifiedUserIcon,
    description:
      'Любые возможноые элементы интерфейса с удобным взаимодействием и продуманной логикой взаимодействия. от простых слайдеров и выпадающих. Кроссбраузерность, обрабатка всех возможных ошибок. ',
  },
  {
    label: 'Пишу современный и производительный код',
    Icon: SpeedIcon,
    description: `Использую стандарты ES6-ES11 + ${TECHNOLOGY_TITLES.babel}, ${TECHNOLOGY_TITLES.ts} 4, ${TECHNOLOGY_TITLES.react} Hooks. Оптимизирую тяжелые вычисления. Избегаю лишних операций и утечек памяти. Применяю техники повышения производительности.`,
  },
  {
    label: 'Выбираю простой и эффективный способ решения задачи',
    Icon: ThumbUpIcon,
    description:
      'Для любой задачи стараюсь найти эффективное и понятное решение. Знаю в каких случаях стоит использовать тот или иной метод, подход, библиотеку или инструмент. Код должен легко читаться.',
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
    label: 'Соблюдаю единый декларативный стиль написания кода',
    Icon: BrushIcon,
  },
  {
    label: 'Верстаю семантично, доступно, кроссбраузерно и pixel-perfect',
    Icon: PaletteIcon,
  },
  {label: 'Реализую адаптивный интерфейс и анимации', Icon: DevicesOtherIcon},
  {label: 'Рефакторю, оптимизирую и тестирую', Icon: LoopIcon},
  {label: 'Анализирую, планирую и декомпозирую', Icon: ListAltIcon},
  {label: 'Провожу код-ревью и занимаюсь обучением', Icon: ChildFriendlyIcon},
]

export default function Skills(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info
          type="skills"
          title={TITLES.skills}
          text={text}
          features={features}
        />
      }
      secondSection={<Technologies />}
    />
  )
}
