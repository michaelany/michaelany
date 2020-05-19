import React, {useState} from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Fab from '@material-ui/core/Fab'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardRounded'
import ArrowBackIcon from '@material-ui/icons/ArrowBackRounded'
import RefreshIcon from '@material-ui/icons/RefreshRounded'

import './Stepper.scss'
import {COMPANY_TITLES, TECHNOLOGY_TITLES} from '../../data/common'

interface Step {
  label: string
  text: string | JSX.Element
}

const steps: Step[] = [
  {
    label: 'Октябрь 2008 - май 2010',
    text: (
      <span>
        Работал <strong>инженером технической поддержки</strong> в компании "
        {COMPANY_TITLES.MVIDEO}".
      </span>
    ),
  },
  {
    label: 'Май 2010 - июнь 2014',
    text: 'Вел деятельность не связанную с информационными технологиями.',
  },
  {
    label: 'Июнь 2014 - июль 2016',
    text:
      'Параллельно с учебой в институте создавал пет-проекты в процессе обучения веб-разработке.',
  },
  {
    label: 'Июль 2016',
    text: (
      <span>
        Выполнил тестовое задание для интервью (написал таймер на{' '}
        {TECHNOLOGY_TITLES.JS} + ООП + {TECHNOLOGY_TITLES.CSS}). Прошел
        интервью. Выполнил заключительное задание (сверстал адаптивную страницу
        по макету, используя {TECHNOLOGY_TITLES.SASS} +{' '}
        {TECHNOLOGY_TITLES.HANDLEBARS}). Был приглашен на работу{' '}
        <strong>верстальщиком</strong> в компанию "{COMPANY_TITLES.EVERPOINT}".
      </span>
    ),
  },
  {
    label: 'Июль 2016 - ноябрь 2016',
    text: (
      <span>
        Работал <strong>верстальщиком</strong> в компании "
        {COMPANY_TITLES.EVERPOINT}
        ".
      </span>
    ),
  },
  {
    label: 'Ноябрь 2016',
    text: (
      <span>
        В результате успешной работы получил повышение до{' '}
        <strong>фронтенд-разработчика</strong> в компании "
        {COMPANY_TITLES.EVERPOINT}
        ".
      </span>
    ),
  },
  {
    label: 'Ноябрь 2016 - апрель 2017',
    text: (
      <span>
        Работал <strong>фронтенд-разработчиком</strong> в компании "
        {COMPANY_TITLES.EVERPOINT}". В свободное время делал коммерческий проект
        (переписывал сайт c {TECHNOLOGY_TITLES.JQUERY} на{' '}
        {TECHNOLOGY_TITLES.REACT}) для компании "{COMPANY_TITLES.SEVEN_GLYPHS}".
      </span>
    ),
  },
  {
    label: 'Апрель 2017',
    text: (
      <span>
        В результате успешной реализации проекта был приглашен в компанию "
        {COMPANY_TITLES.SEVEN_GLYPHS}" на должность{' '}
        <strong>ведущего фронтенд-разработчика</strong> на более выгодных
        условиях. Принял решение перейти из "{COMPANY_TITLES.EVERPOINT}" в "
        {COMPANY_TITLES.SEVEN_GLYPHS}".
      </span>
    ),
  },
  {
    label: 'Апрель 2017 - апрель 2018',
    text: (
      <span>
        Работал удаленно <strong>ведущим фронтенд-разработчиком</strong> в
        компании "{COMPANY_TITLES.SEVEN_GLYPHS}".
      </span>
    ),
  },
  {
    label: 'Апрель 2018',
    text: (
      <span>
        Захотелось сменить удаленный режим работы. Договорился с "
        {COMPANY_TITLES.SEVEN_GLYPHS}" о продолжении сотрудничества по проектам
        в режиме неполного рабочего дня. Прошел собеседование и устроился в
        компанию "{COMPANY_TITLES.TSFTD}" на должность{' '}
        <strong>ведущего фронтенд-разработчика</strong>.
      </span>
    ),
  },
  {
    label: 'Апрель 2018 - январь 2019',
    text: (
      <span>
        Работал <strong>ведущим фронтенд-разработчиком</strong> в компании "
        {COMPANY_TITLES.TSFTD}". В свободное время продолжаю сотрудничество по
        проектам с "{COMPANY_TITLES.SEVEN_GLYPHS}"
      </span>
    ),
  },
  {
    label: 'Январь 2019',
    text: (
      <span>
        В результате успешной работы получил повышение до{' '}
        <strong>тимлида фронтенд-разработки</strong> в компании "
        {COMPANY_TITLES.TSFTD}
        ". Проводил собеседования, разработал стажерскую программу, сформировал
        команду из трех человек.
      </span>
    ),
  },
  {
    label: 'Январь 2019 - ...',
    text: (
      <span>
        Работаю <strong>тимлидом фронтенд-разработки</strong> в компании "
        {COMPANY_TITLES.TSFTD}".
      </span>
    ),
  },
]

export default function VerticalLinearStepper(): JSX.Element {
  const [step, changeStep] = useState<number>(0)

  const handleNext = (): void => {
    changeStep(step + 1)
  }

  const handleBack = (): void => {
    changeStep(step - 1)
  }

  const handleReset = (): void => {
    changeStep(0)
  }

  return (
    <Stepper className="Stepper" activeStep={step} orientation="vertical">
      {steps.map(({label, text}: Step, index: number) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
          <StepContent>
            <p className="Stepper-Text">{text}</p>
            <div className="Stepper-Actions">
              <Fab
                className="Stepper-Button"
                size="medium"
                aria-label="Вперед"
                onClick={handleNext}
              >
                <ArrowForwardIcon className="Stepper-ButtonIcon" />
              </Fab>
              <Fab
                className="Stepper-Button"
                size="medium"
                aria-label="Назад"
                disabled={step === 0}
                onClick={handleBack}
              >
                <ArrowBackIcon className="Stepper-ButtonIcon" />
              </Fab>
            </div>
          </StepContent>
        </Step>
      ))}
      {step === steps.length && (
        <>
          <p className="Stepper-Text">
            Продолжение следует... Таков мой <strong>опыт работы</strong> в
            ключевых этапах на данный момент.
          </p>
          <Fab
            className="Stepper-Button"
            size="medium"
            aria-label="Обновить"
            onClick={handleReset}
          >
            <RefreshIcon className="Stepper-ButtonIcon Stepper-ButtonIcon_refresh" />
          </Fab>
        </>
      )}
    </Stepper>
  )
}
