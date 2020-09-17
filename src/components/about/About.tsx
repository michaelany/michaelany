import React from 'react'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBikeRounded'
import SchoolIcon from '@material-ui/icons/SchoolRounded'
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
  {
    label: 'Реализовал большое количество проектов',
    Icon: AppsIcon,
    description:
      'В моем послужном списке около 30(??) зарубежных и отечественных коммерческих проектов - от лендингов до крупных веб-приложений. Некоторые из них представлены в Портфолио(??).',
  },
  {
    label: `Профессиональный опыт разработки ${YEARS_OF_EXPERIENCE}+ лет`,
    Icon: BusinessCenterIcon,
    description: `Первый сайт сделал в 13 лет. Менее чем за ${
      YEARS_OF_EXPERIENCE + 1
    } лет прошел путь от верстальщика до тимлида фронтед-разработки. Более подробно с моим опытом работы можно ознакомится на странице Опыт(??)`,
  },
  {
    label: 'Ведущий разработчик и ментор',
    Icon: SupervisorAccountIcon,
    description:
      'Разрабатываю проекты с нуля, проектирую архитектуру, пишу бизнес-логику, верстаю, рефакторю и поддерживаю код. Планирую и оцениваю задачи команды, провожу код-ревью и обучаю.',
  },
  {
    label: 'Организованный и автономный',
    Icon: GroupWorkIcon,
    description:
      'Большинство проектов сделаны мною самостоятельно. Мне нравится брать на себя всю фронтенд часть проекта от обсуждения концепции до финальной реализации и поддержки на продакшне.',
  },
  {
    label: 'Интересуюсь веб-разработкой и программированием',
    Icon: CodeIcon,
    description:
      'Сейчас почти все время я посвящаю разработке проектов и попутному изучению веб-технологий. В свободное время планирую выпустить несколько библиотек и запустить блог.',
  },
  {
    label: 'Нахожусь в состоянии постоянного обучения и развития',
    Icon: AllInclusiveIcon,
  },
  {label: 'Склонный к перфекционизму', Icon: SquareFootIcon},
  {label: 'Два высших образования', Icon: SchoolIcon},
  {label: 'Занимаюсь спортом', Icon: DirectionsBikeIcon},
  {label: 'Люблю путешествовать', Icon: ExploreIcon},
  {label: 'Счастливый муж', Icon: FavoriteIcon},
  {label: 'Кофеман', Icon: LocalCafeIcon},
]

export default function About(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info title={TITLES.about} text={text} features={features} />
      }
      secondSection={<Social />}
    />
  )
}
