import React from 'react'
import {differenceInYears} from 'date-fns'
import {Link} from 'react-router-dom'
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
import PROJECTS from '../../data/projects'
import {TECHNOLOGY_TITLES, TITLES} from '../../data/common'
import {
  YEARS_OF_EXPERIENCE,
  TODAY,
  PATHS,
  BLANK_LINK_PROPS,
} from '../../utils/constants'
import {Feature} from '../../utils/types'

const features: Feature[] = [
  {
    label: 'Реализовал большое количество проектов',
    Icon: AppsIcon,
    description: (
      <>
        В моем послужном списке около {PROJECTS.length + 3} зарубежных и
        отечественных коммерческих проектов - от лендингов до крупных
        веб-приложений. Некоторые из них представлены в{' '}
        <Link className="Link" to={PATHS.portfolio}>
          {TITLES.portfolio}
        </Link>
        .
      </>
    ),
  },
  {
    label: `Профессиональный опыт разработки ${YEARS_OF_EXPERIENCE} лет`,
    Icon: BusinessCenterIcon,
    description: (
      <>
        Первый сайт сделал в 13 лет. Прошел путь от верстальщика до тимлида
        фронтенд-разработки. Работаю в крупной отечественной и новозеландской ИТ
        компаниях. Подробнее на странице{' '}
        <Link className="Link" to={PATHS.experience}>
          {TITLES.experience}
        </Link>
        .
      </>
    ),
  },
  {
    label: 'Ведущий разработчик и ментор',
    Icon: SupervisorAccountIcon,
    description: (
      <>
        Разрабатываю проекты с нуля, пишу бизнес-логику, верстаю, оптимизирую и
        поддерживаю код. Планирую и оцениваю задачи, провожу код-ревью и обучаю.
        Более подробно в{' '}
        <Link className="Link" to={PATHS.skills}>
          {TITLES.skills}
        </Link>
        .
      </>
    ),
  },
  {
    label: 'Организованный и автономный',
    Icon: GroupWorkIcon,
    description:
      'Большинство проектов я сделал самостоятельно. Мне нравится брать на себя всю фронтенд часть проекта от обсуждения концепции до финальной реализации и поддержки на продакшне.',
  },
  {
    label: 'Интересуюсь веб-разработкой и программированием',
    Icon: CodeIcon,
    description: `Я люблю программирование, а фронтенд является моим основным хобби. В свободное время планирую выпустить несколько ${TECHNOLOGY_TITLES.js}-библиотек и запустить собственный блог по фронтенду.`,
  },
  {
    label: 'Нахожусь в состоянии постоянного обучения и развития',
    Icon: AllInclusiveIcon,
    description:
      'Регулярно "затачиваю пилу", изучаю документации, статьи, курсы, книги и доклады по веб-разработке. В постоянном поиске новых технологий и инструментов повышения эффективности.',
  },
  {
    label: 'Склонный к перфекционизму',
    Icon: SquareFootIcon,
    description:
      'Высокое качество - мой главный принцип. В каждый проект я вкладываю всего себя. Однако, сила дедлайна и опыт помогают мне сосредоточиться на скорости и конечном результате.',
  },
  {
    label: 'Два высших образования',
    Icon: SchoolIcon,
    description:
      'Окончил "Российский технологический университет" и "Всероссийский государственный институт кинематографии". Учеба в последнем очень хорошо прокачала мои гибкие навыки.',
  },
  {
    label: 'Занимаюсь спортом',
    Icon: DirectionsBikeIcon,
    description:
      'Физические нагрузки особенно актуальны для разработчика. Каждый день я посвящаю время бегу, калистенике или катанию на велосипеде. Этим летом также увлекся сапсерфингом.',
  },
  {
    label: 'Люблю путешествовать',
    Icon: ExploreIcon,
    description:
      'Посетили с любимой более 15 стран. Больше всего поразили Япония и Новая Зеландия. Совершил туристический поход на "Перевал Дятлова" и остался жив после встречи с уральским медведем ☺.',
  },
  {
    label: 'Счастливый муж',
    Icon: FavoriteIcon,
    description: (
      <>
        <a
          {...BLANK_LINK_PROPS}
          className="Link"
          href="https://www.instagram.com/kate_watermelon"
        >
          Она
        </a>{' '}
        - мой главный источник вдохновения и лучший друг. Мы вместе уже более{' '}
        {differenceInYears(TODAY, new Date(2013, 1))} лет. Кстати, когда-то я
        разработал мобильное веб-приложение для предложения ей руки и сердца ☺.
      </>
    ),
  },
  {
    label: 'Кофеман',
    Icon: LocalCafeIcon,
    description:
      'Известно, что "программист - это человек, превращающий кофе в код". Свой рабочий день я начинаю с кружечки ароматного кофе. Также после поездки в Японию полюбил чай матчу.',
  },
]

export default function About(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info
          type="about"
          title={TITLES.about}
          text="Занимаюсь фронтенд-разработкой. Создаю проекты любой сложности с нуля. Воплощаю в жизнь UI/UX идеи."
          features={features}
        />
      }
      secondSection={<Social />}
    />
  )
}
