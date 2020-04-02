import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Tooltip from '@material-ui/core/Tooltip'

import './Work.scss'
import everpointImg from '../../assets/img/companies/everpoint.png'
import everpointImg2x from '../../assets/img/companies/everpoint@2x.png'
import sevenGlyphsImg from '../../assets/img/companies/7glyphs.png'
import sevenGlyphsImg2x from '../../assets/img/companies/7glyphs@2x.png'
import tsftdImg from '../../assets/img/companies/tsftd.png'
import tsftdImg2x from '../../assets/img/companies/tsftd@2x.png'
import {BLANK_LINK_PROPS} from '../../utils/data'
import {Title} from '../../utils/enums'

interface IJob {
  id: number
  occupation: string
  company: ICompany
  duties: string[]
  period: string
}

interface ICompany {
  title: string
  logo: string
  logo2x: string
  url: string
}

const jobs: IJob[] = [
  {
    id: 1,
    occupation: 'Верстальщик',
    company: {
      title: 'Everpoint',
      logo: everpointImg,
      logo2x: everpointImg2x,
      url: 'https://www.everpoint.ru',
    },
    duties: [
      'Верстка страниц и компонентов интерфейса.',
      'Кроссбраузерная и адаптивная верстка.',
      'Оптимизация сушествующей верстки.',
      'Рефакторинг кода.',
    ],
    period: 'июль 2016 - ноябрь 2016',
  },
  {
    id: 2,
    occupation: 'Разработчик',
    company: {
      title: '7 glyphs',
      logo: sevenGlyphsImg,
      logo2x: sevenGlyphsImg2x,
      url: 'https://7glyphs.com',
    },
    duties: [
      'Разработка клиентской бизнес-логики и компонентов систем',
      'Работа с REST API',
      'Проектирование архитектуры приложений',
      'Сопровождение кода',
      'Верстка страниц и компонентов интерфейса',
      'Адаптивная и кроссбраузерная верстка',
      'Учет затраченного времени на выполнение задач',
    ],
    period: 'апрель 2017 - настоящее время',
  },
  {
    id: 3,
    occupation: 'Ведущий разработчик',
    company: {
      title: 'Технософт Диджитал',
      logo: tsftdImg,
      logo2x: tsftdImg2x,
      url: 'http://www.tsft.ru',
    },
    duties: [
      'Разработка клиентской бизнес-логики и компонентов систем',
      'Работа с REST API',
      'Проектирование архитектуры приложений',
      'Сопровождение кода',
      'Верстка страниц и компонентов интерфейса',
      'Адаптивная и кроссбраузерная верстка',
      'Учет затраченного времени на выполнение задач',
    ],
    period: 'апрель 2017 - настоящее время',
  },
]

const renderJobs = (): JSX.Element[] =>
  jobs.map(
    ({id, occupation, company, duties, period}: IJob): JSX.Element => (
      <li key={id} className="Work-Job">
        <div className="Work-JobCaption">
          <Tooltip title={company.title} placement="right">
            <ButtonBase
              {...BLANK_LINK_PROPS}
              focusRipple
              component="a"
              href={company.url}
            >
              <img
                height={36}
                src={company.logo}
                srcSet={`${company.logo2x} 2x`}
                alt={company.title}
              />
            </ButtonBase>
          </Tooltip>
          <h3 className="Subtitle Subtitle_size_small">{occupation}</h3>
        </div>
        <ul className="Work-JobList">
          {duties.map(
            (duty: string, index: number): JSX.Element => (
              <li key={index}>{duty}</li>
            )
          )}
        </ul>
        <p className="Work-JobPeriod">{period}</p>
      </li>
    )
  )

export default function Work(): JSX.Element {
  return (
    <section className="Work Section">
      <h1 className="Title Title_color_violet">{Title.EXPERIENCE}</h1>
      <p className="MainText">
        <b>
          Живу и работаю в Москве. Профессионально занимаюсь
          фронтенд-разработкой более 4 лет.
        </b>
      </p>
      <ul>{renderJobs()}</ul>
    </section>
  )
}
