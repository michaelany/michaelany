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
import {TECHNOLOGY_TITLE, TITLE} from '../../data/common'
import {Feature} from '../../utils/types'

const features: Feature[] = [
  {
    label: 'Создаю надежный и правильно работающий интерфейс',
    Icon: VerifiedUserIcon,
    description:
      'Реализую систему всех возможных элементов интерфейса с удобным взаимодействием и продуманной бизнес-логикой. Забочусь о кроссбраузерности, безопасности и обрабатываю возможные ошибки.',
  },
  {
    label: 'Пишу современный и производительный код',
    Icon: SpeedIcon,
    description: `Использую стандарты ES6-ES11 + ${TECHNOLOGY_TITLE.babel}, ${TECHNOLOGY_TITLE.ts} 4, ${TECHNOLOGY_TITLE.react} Hooks... Оптимизирую тяжелые вычисления. Избегаю лишних операций и утечек памяти. Применяю техники повышения производительности.`,
  },
  {
    label: 'Выбираю простой и эффективный способ решения задачи',
    Icon: ThumbUpIcon,
    description:
      'Для любой задачи стараюсь найти оптимальное и понятное решение. Знаю в каких случаях стоит использовать тот или иной метод, паттерн, библиотеку или инструмент.',
  },
  {
    label: 'Имею в арсенале большое количество паттернов и приемов',
    Icon: ExtensionIcon,
    description:
      'Модуль, фабрика, синглтон, наблюдатель, примесь, декоратор, каррирование, мемоизация, делегирование, виртуализация, ленивая загрузка, деструктуризация, async / await...',
  },
  {
    label: 'Создаю модульную и удобную архитектуру для каждого проекта',
    Icon: AccountTreeIcon,
  },
  {
    label: 'Использую актуальные фреймворки, библиотеки и инструменты',
    Icon: BuildIcon,
  },
  {
    label: 'Соблюдаю единый стиль написания кода',
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
          title={TITLE.skills}
          text="Разрабатываю веб-приложения, лендинги, многостраничные сайты и админки. Основной стек - React + TypeScript + Redux."
          features={features}
        />
      }
      secondSection={<Technologies />}
    />
  )
}
