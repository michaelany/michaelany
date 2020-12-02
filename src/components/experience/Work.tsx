import React from 'react'
import ScheduleIcon from '@material-ui/icons/ScheduleRounded'
import ExploreIcon from '@material-ui/icons/ExploreRounded'
import MyLocationIcon from '@material-ui/icons/MyLocationRounded'

import './Work.scss'
import TypistTitle from '../common/TypistTitle'
import Animate, {EFFECTS} from '../common/Animate'
import Job from './Job'
import {Job as JobInterface} from '../../utils/types'
import {TITLES, COMPANIES} from '../../data/common'
import {YEARS_OF_EXPERIENCE, CAREER_START_STRING} from '../../utils/constants'

const jobs: JobInterface[] = [
  {
    company: COMPANIES.tsftd,
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
          'Проведение код-ревью.',
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
      {label: 'апрель 2018 - ...', Icon: ScheduleIcon, time: true},
      {label: 'Москва, Россия', Icon: ExploreIcon},
      {label: 'офис', Icon: MyLocationIcon},
    ],
  },
  {
    company: COMPANIES.sevenGlyphs,
    positions: [
      {
        occupation: 'Ведущий фронтенд-разработчик',
        duties: [
          'Разработка бизнес-логики приложений и сайтов.',
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
      {label: 'апрель 2017 - апрель 2018', Icon: ScheduleIcon, time: true},
      {label: 'Окленд, Новая Зеландия', Icon: ExploreIcon},
      {label: 'удаленно', Icon: MyLocationIcon},
    ],
  },
  {
    company: COMPANIES.everpoint,
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
      {
        label: `${CAREER_START_STRING} - апрель 2017`,
        Icon: ScheduleIcon,
        time: true,
      },
      {label: 'Москва, Россия', Icon: ExploreIcon},
      {label: 'офис', Icon: MyLocationIcon},
    ],
  },
  {
    company: COMPANIES.mvideo,
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
      {label: 'октябрь 2008 - май 2010', Icon: ScheduleIcon, time: true},
      {
        label: 'Москва, Россия',
        Icon: ExploreIcon,
      },
      {label: 'офис', Icon: MyLocationIcon},
    ],
  },
]

export default function Work(): JSX.Element {
  return (
    <section className="Section">
      <TypistTitle title={TITLES.experience} />
      <p className="MainText">
        Живу в Москве. Работаю преимущественно удаленно. Профессионально
        занимаюсь фронтенд-разработкой более {YEARS_OF_EXPERIENCE} лет.
      </p>
      <Animate el="ul" className="Work" effect={EFFECTS.bottomSm}>
        {jobs.map((job: JobInterface, index: number) => (
          <Job key={index} {...job} index={index} />
        ))}
      </Animate>
    </section>
  )
}
