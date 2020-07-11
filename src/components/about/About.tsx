import React from 'react'
import {Link} from 'react-router-dom'
import EcoIcon from '@material-ui/icons/EcoRounded'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBikeRounded'
import SchoolIcon from '@material-ui/icons/SchoolRounded'
import PublicIcon from '@material-ui/icons/PublicRounded'
import LocalCafeIcon from '@material-ui/icons/LocalCafeRounded'
import FavoriteIcon from '@material-ui/icons/FavoriteRounded'
import AppsIcon from '@material-ui/icons/AppsRounded'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccountRounded'
import AllInclusiveIcon from '@material-ui/icons/AllInclusiveRounded'
import CodeIcon from '@material-ui/icons/CodeRounded'
import SquareFootIcon from '@material-ui/icons/SquareFootRounded'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterRounded'

import Sections from '../common/Sections'
import Info from '../common/Info'
import Social from './Social'
import {TITLES, TECHNOLOGY_TITLES} from '../../data/common'
import {Feature} from '../../utils/types'
import {BLANK_LINK_PROPS, PATHS} from '../../utils/constants'

const text: string =
  'Живу и дышу фронтендом. Разрабатываю проекты любой сложности с нуля. Воплощаю в жизнь UI/UX идеи.'

const features: Feature[] = [
  {label: 'Реализовал большое количество проектов', Icon: AppsIcon},
  {
    label: 'Являюсь ведущим разработчиком и ментором',
    Icon: SupervisorAccountIcon,
  },
  {
    label: 'Интересуюсь веб-разработкой и программированием',
    Icon: CodeIcon,
  },
  {
    label: 'Нахожусь в состоянии постоянного обучения и развития',
    Icon: AllInclusiveIcon,
  },
  {label: 'Организованный и автономный', Icon: BusinessCenterIcon},
  {label: 'Склонный к перфекционизму', Icon: SquareFootIcon},
  {label: 'Имею два высших образования', Icon: SchoolIcon},
  {label: 'Веду здоровый образ жизни', Icon: EcoIcon},
  {label: 'Занимаюсь спортом', Icon: DirectionsBikeIcon},
  {label: 'Люблю путешествовать', Icon: PublicIcon},
  {label: 'Счастлив в браке', Icon: FavoriteIcon},
  {label: 'Кофеман', Icon: LocalCafeIcon},
]

const extra: Array<JSX.Element | string> = [
  <span>
    Мое первое знакомство с веб-разработкой состоялось в 2003 году, когда мне
    было 13 лет. Купив из любопытства книгу{' '}
    <a
      {...BLANK_LINK_PROPS}
      className="Link"
      href="https://books.google.ru/books/about/HTML_%D0%AD%D0%BA%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81_%D0%BA%D1%83%D1%80%D1%81.html?id=N1rrIqCiimwC&redir_esc=y"
    >
      "HTML. Экспресс-курс"
    </a>{' '}
    и проштудировав ее, я создал свой первый сайт-презентацию для домашнего
    задания по информатике (вместо PowerPoint). Это был довольно большой проект
    на чистом {TECHNOLOGY_TITLES.html} без {TECHNOLOGY_TITLES.css} и{' '}
    {TECHNOLOGY_TITLES.js}, единственная интерактивность которого заключалась в
    ссылках и встроенных подсказках через аттрибуты title. Мне это очень
    понравилось, но вскоре на некоторое время я отвлекся на другие занятия.
  </span>,
  `Далее был поиск себя в различных областях. Во время учебы в университете (МГУПИ) я снова обратился к вебу и на этот раз выучил ${TECHNOLOGY_TITLES.css}, поверстал. После окончания института у меня был выбор - продолжать изучать веб-разработку (нацелился на ${TECHNOLOGY_TITLES.js} и ${TECHNOLOGY_TITLES.php}) или попробовать поступить на второе высшее в институт кинематографии (я также очень любил кино).`,
  <span>
    Поступил во ВГИК на второе высшее. Однако спустя год учебы в институте
    кинематографии ко мне снова вернулся (и уже не покидал) жгучий интерес к
    веб-технологиям. Я очень удивился и загорелся, когда узнал как все двинулось
    вперед и развивается - фреймворки, SPA, новые стандарты, типизация, системы
    сборки и контроля версий, методологии, анимации, препроцессоры, флексы и
    т.д. (c технологиями и инструментами, освоенные мной на данный момент можно
    ознакомиться на странице{' '}
    <Link className="Link" to={PATHS.skills}>
      "{TITLES.skills}"
    </Link>
    ). Это превратилось в хобби. Но уже очень скоро мое новое увлечение стало
    все больше меня занимать. Все свободное время я уделял самостоятельному
    углубленному изучению {TECHNOLOGY_TITLES.html}, {TECHNOLOGY_TITLES.css} и{' '}
    {TECHNOLOGY_TITLES.js} (курсы, книги, онлайн-учебники, документации,
    справочники и статьи). Особенно хочу отметить{' '}
    <a
      {...BLANK_LINK_PROPS}
      className="Link"
      href="https://learn.javascript.ru"
    >
      "Современный учебник JavaScript"
    </a>{' '}
    Ильи Кантора, который я от корки до корки изучил по несколько раз и выполнил
    все задания (спасибо Илье за самый качественный ресурс по{' '}
    {TECHNOLOGY_TITLES.js}!). На третьем курсе я окончательно решил стать
    профессиональным фронтенд-разработчиком и устроился на первую работу
    верстальщиком / начинающим фронтенд-разработчиком (про мой дальнейший
    профессиональный опыт можно узнать на странице{' '}
    <Link className="Link" to={PATHS.experience}>
      "{TITLES.experience}"
    </Link>
    ).
  </span>,
  'Помимо всего прочего люблю путешествовать с любимой девушкой по миру. За последние два года успели побывать в Таиланде, Париже, Риге, на Крите, в Афинах, Барселоне, Кисловодске, а также совершили пеший поход на Перевал Дятлова.',
]

export default function About(): JSX.Element {
  return (
    <Sections
      firstSection={
        <Info
          title={TITLES.about}
          text={text}
          features={features}
          extra={extra}
        />
      }
      secondSection={<Social />}
    />
  )
}
