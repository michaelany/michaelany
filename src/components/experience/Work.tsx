import React from 'react'
import ScheduleIcon from '@material-ui/icons/ScheduleTwoTone'
import ExploreIcon from '@material-ui/icons/ExploreTwoTone'
import MyLocationIcon from '@material-ui/icons/MyLocationTwoTone'

import './Work.scss'
import Job from './Job'
import {COMPANIES} from '../../utils/data'
import {Title} from '../../utils/enums'
import {IJob} from '../../utils/types'

const jobs: IJob[] = [
  {
    company: {
      ...COMPANIES.TSFTD,
      color: 'red',
      href: 'http://www.tsft.ru',
    },
    positions: [
      {
        occupation: 'Тимлид фронтенд-разработки',
        duties: [
          'Разработка бизнес-логики приложений.',
          'Создание архитектуры приложений.',
          'Кроссбраузерная и адаптивная верстка.',
          'Работа с REST API.',
          'Рефакторинг и сопровождение кода.',
          'Разработка проектов с нуля.',
          'Поддержка проектов.',
          'Планирование, декомпозиция и оценка задач команды.',
          'Управление и развитие команды.',
          'Проведение код-ревью и собеседований.',
        ],
      },
      {
        occupation: 'Ведущий фронтенд-разработчик',
        duties: [
          'Разработка бизнес-логики приложений.',
          'Создание архитектуры приложений.',
          'Кроссбраузерная и адаптивная верстка.',
          'Работа с REST API.',
          'Рефакторинг и сопровождение кода.',
          'Разработка проектов с нуля.',
          'Поддержка проектов.',
          'Декомпозиция и оценка задач.',
        ],
      },
    ],
    features: [
      {label: 'Апрель 2018 - ...', Icon: ScheduleIcon},
      {label: 'Москва, Россия', Icon: ExploreIcon},
      {label: 'Офис', Icon: MyLocationIcon},
    ],
  },
  {
    company: {
      ...COMPANIES.SEVEN_GLYPHS,
      color: 'default',
      href: 'https://7glyphs.com',
    },
    positions: [
      {
        occupation: 'Ведущий фронтенд-разработчик',
        duties: [
          'Разработка бизнес-логики и сайтов.',
          'Создание архитектуры проектов.',
          'Кроссбраузерная и адаптивная верстка.',
          'Работа с REST API.',
          'Рефакторинг и сопровождение кода.',
          'Разработка проектов с нуля.',
          'Поддержка проектов.',
          'Декомпозиция и оценка задач.',
        ],
      },
    ],
    features: [
      {label: 'Апрель 2017 - апрель 2018', Icon: ScheduleIcon},
      {label: 'Окленд, Новая Зеландия', Icon: ExploreIcon},
      {label: 'Удаленно', Icon: MyLocationIcon},
    ],
  },
  {
    company: {
      ...COMPANIES.EVERPOINT,
      color: 'grass',
      href: 'https://www.everpoint.ru',
    },
    positions: [
      {
        occupation: 'Фронтенд-разработчик',
        duties: [
          'Разработка бизнес-логики компонентов приложения.',
          'Кроссбраузерная и адаптивная верстка.',
          'Работа с REST API.',
          'Рефакторинг и сопровождение кода.',
        ],
      },
      {
        occupation: 'Верстальщик',
        duties: [
          'Верстка страниц и компонентов приложения по макетам.',
          'Кроссбраузерная и адаптивная верстка.',
          'Написание логики интерфейсных элементов.',
          'Рефакторинг и сопровождение кода.',
        ],
      },
    ],
    features: [
      {label: 'Июль 2016 - апрель 2017', Icon: ScheduleIcon},
      {label: 'Москва, Россия', Icon: ExploreIcon},
      {label: 'Офис', Icon: MyLocationIcon},
    ],
  },
  {
    company: {
      ...COMPANIES.MVIDEO,
      color: 'red',
      href: 'https://www.mvideo.ru',
    },
    positions: [
      {
        occupation: 'Инженер технической поддержки',
        duties: [
          'Регистрация и обработка обращений в системах Service Desk.',
          'Решение проблем программного обеспечения и периферийного оборудования.',
          'Установка и настройка программного обеспечения и периферийного оборудования.',
          'Консультирование сотрудников по техническим вопросам.',
        ],
      },
    ],
    features: [
      {label: 'Октябрь 2008 - май 2010', Icon: ScheduleIcon},
      {
        label: 'Москва, Россия',
        Icon: ExploreIcon,
      },
      {label: 'Офис', Icon: MyLocationIcon},
    ],
  },
]

export default function Work(): JSX.Element {
  return (
    <section className="Section">
      <h1 className="Title Title_color_violet">{Title.EXPERIENCE}</h1>
      <p className="MainText">
        <b>
          Живу и работаю в Москве. Профессионально занимаюсь
          фронтенд-разработкой более 4 лет.
        </b>
      </p>
      <ul className="Work">
        {jobs.map(
          (job: IJob, index: number): JSX.Element => (
            <Job key={index} {...job} index={index} />
          )
        )}
      </ul>
    </section>
  )
}
