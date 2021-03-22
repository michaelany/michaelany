import React from 'react'
import ScheduleIcon from '@material-ui/icons/ScheduleRounded'
import ExploreIcon from '@material-ui/icons/ExploreRounded'
import MyLocationIcon from '@material-ui/icons/MyLocationRounded'
import DateRangeIcon from '@material-ui/icons/DateRangeRounded'

import './Work.scss'
import Animate, {EFFECT} from '../common/Animate'
import Job from './Job'
import {Job as JobInterface} from '../../utils/types'
import {TITLE, COMPANY, TECHNOLOGY_TITLE} from '../../data/common'
import {YEARS_OF_EXPERIENCE, CAREER_START_STRING} from '../../utils/constants'

const occupation = {
  lead: 'Тимлид фронтенд-разработки',
  senior: 'Ведущий фронтенд-разработчик',
  middle: 'Фронтенд разработчик',
  junior: 'Верстальщик',
  support: 'Инженер технической поддержки',
}

const jobs: JobInterface[] = [
  {
    current: true,
    company: COMPANY.tsftd,
    occupations: [occupation.lead, occupation.senior, occupation.middle],
    duties: [
      'Разработка бизнес-логики приложений',
      'Создание архитектуры приложений',
      'Кроссбраузерная и адаптивная верстка',
      'Работа с REST API',
      'Рефакторинг и сопровождение кода',
      'Разработка проектов с нуля',
      'Поддержка проектов',
      'Планирование, декомпозиция и оценка задач команды',
      'Управление и развитие команды',
      'Проведение код-ревью и собеседований',
    ],
    achievements: [
      'Успешно реализовал несколько масштабных проектов для крупных заказчиков',
      'Прошел путь от рядового разработчика до тимлида',
      'Изучил и применил на практике множество технологий и библиотек',
      `Помимо веб-приложений разрабатываю мобильное корпоративное приложение на ${TECHNOLOGY_TITLE.reactnative}`,
      'Периодически занимаюсь дизайном и прототипированием',
      'Разработал корпоративную программу стажировки',
      'Стал ментором и обучил несколько стажеров',
      'Провел десятки собеседований',
    ],
    features: [
      {label: 'апрель 2018 - ...', Icon: DateRangeIcon, time: true},
      {label: 'Москва, Россия', Icon: ExploreIcon},
      {label: 'офис', Icon: MyLocationIcon},
      {label: 'удаленно', Icon: MyLocationIcon},
      {label: 'полная занятость', Icon: ScheduleIcon},
    ],
  },
  {
    current: true,
    company: COMPANY.sevenGlyphs,
    occupations: [occupation.senior, occupation.middle],
    duties: [
      'Разработка бизнес-логики приложений и сайтов',
      'Создание архитектуры проектов',
      'Кроссбраузерная и адаптивная верстка',
      'Работа с REST API',
      'Рефакторинг и сопровождение кода',
      'Разработка проектов с нуля',
      'Поддержка проектов',
      'Декомпозиция и оценка задач',
    ],
    achievements: [
      'Успешно реализовал с нуля большое количество разноплановых зарубежных проектов',
      'Изучил и применил на практике множество технологий и библиотек',
      'Поставил личный рекорд скорости завершения полноценного проекта - 1 день',
      'Достиг высокого уровня автономности и организованности',
      'Прокачал английский, сотрудничая с иностранными заказчиками',
      'Получил множество лестных отзывов от коллег / заказчиков',
    ],
    features: [
      {label: 'апрель 2017 - ..', Icon: DateRangeIcon, time: true},
      {label: 'Окленд, Новая Зеландия', Icon: ExploreIcon},
      {label: 'удаленно', Icon: MyLocationIcon},
      {label: 'частичная занятость', Icon: ScheduleIcon},
    ],
  },
  {
    company: COMPANY.everpoint,
    occupations: [occupation.middle, occupation.junior],
    duties: [
      'Разработка бизнес-логики компонентов приложения',
      'Кроссбраузерная и адаптивная верстка',
      'Работа с REST API',
      'Рефакторинг и сопровождение кода',
    ],
    achievements: [
      'Успешно реализовал множество компонентов и разделов для крупного приложения',
      'Вырос от верстальщика до фронтенд-разработчика',
      `Хорошо прокачал ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react} и ${TECHNOLOGY_TITLE.css}`,
      'Развил навык работы в команде',
      'Посетил несколько конференций по разработке',
    ],
    features: [
      {
        label: `${CAREER_START_STRING} - апрель 2017`,
        Icon: DateRangeIcon,
        time: true,
      },
      {label: 'Москва, Россия', Icon: ExploreIcon},
      {label: 'офис', Icon: MyLocationIcon},
      {label: 'полная занятость', Icon: ScheduleIcon},
    ],
  },
  {
    company: COMPANY.mvideo,
    occupations: [occupation.support],
    duties: [
      'Регистрация и обработка обращений в системах Service Desk',
      'Решение проблем программного обеспечения и периферийного оборудования',
      'Установка и настройка программного обеспечения и периферийного оборудования',
      'Консультирование сотрудников по техническим вопросам',
    ],
    achievements: [
      'Обработал тысячи заявок',
      'Приобрел обширный опыт работы с софтом и железом',
      'Прокачал коммуникативные навыки',
    ],
    features: [
      {label: 'октябрь 2008 - май 2010', Icon: DateRangeIcon, time: true},
      {
        label: 'Москва, Россия',
        Icon: ExploreIcon,
      },
      {label: 'офис', Icon: MyLocationIcon},
      {label: 'полная занятость', Icon: ScheduleIcon},
    ],
  },
]

export default function Work(): JSX.Element {
  return (
    <section className="Section">
      <h1 className="Title">{TITLE.experience}</h1>
      <p className="MainText">
        Профессионально занимаюсь фронтенд-разработкой более{' '}
        {YEARS_OF_EXPERIENCE} лет. Работаю преимущественно удаленно.
      </p>
      <Animate el="ul" className="Work" effect={EFFECT.bottomSm}>
        {jobs.map((job: JobInterface, index: number) => (
          <Job key={index} {...job} index={index} />
        ))}
      </Animate>
    </section>
  )
}
