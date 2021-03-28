import {useState, RefObject} from 'react'
import {
  Stepper as MuiStepper,
  Step,
  StepLabel,
  StepContent,
  Fab,
} from '@material-ui/core'
import {
  ArrowForwardRounded as ArrowForwardIcon,
  ArrowBackRounded as ArrowBackIcon,
  RefreshRounded as RefreshIcon,
} from '@material-ui/icons'

import './Stepper.scss'
import {scrollToView} from '../../utils/helpers'
import {CAREER_START_STRING} from '../../utils/constants'
import {COMPANY_TITLE} from '../../data/common'

interface StepperProps {
  sectionRef: RefObject<HTMLElement>
}

interface StepInterface {
  label: string
  text: string | JSX.Element
}

const steps: StepInterface[] = [
  {
    label: 'Октябрь 2008 - май 2010',
    text: (
      <span>
        Работал <strong>инженером технической поддержки</strong> в компании "
        {COMPANY_TITLE.mvideo}"
      </span>
    ),
  },
  {
    label: 'Май 2010 - июнь 2014',
    text: 'Расширял кругозор в других сферах деятельности',
  },
  {
    label: `Июнь 2014 - ${CAREER_START_STRING}`,
    text:
      'Параллельно с учебой в институте создавал пет-проекты в процессе обучения веб-разработке',
  },
  {
    label: CAREER_START_STRING,
    text: (
      <span>
        Прошел интервью. Выполнил тестовые задания и был приглашен на работу{' '}
        <strong>верстальщиком</strong> в компанию "{COMPANY_TITLE.everpoint}"
      </span>
    ),
  },
  {
    label: `${CAREER_START_STRING} - ноябрь 2016`,
    text: (
      <span>
        Работал <strong>верстальщиком</strong> в компании "
        {COMPANY_TITLE.everpoint}"
      </span>
    ),
  },
  {
    label: 'Ноябрь 2016',
    text: (
      <span>
        В результате успешной работы получил повышение до{' '}
        <strong>фронтенд-разработчика</strong> в компании "
        {COMPANY_TITLE.everpoint}
        ".
      </span>
    ),
  },
  {
    label: 'Ноябрь 2016 - апрель 2017',
    text: (
      <span>
        Работал <strong>фронтенд-разработчиком</strong> в компании "
        {COMPANY_TITLE.everpoint}". В свободное время делал коммерческий проект
        для компании "{COMPANY_TITLE.sevenGlyphs}"
      </span>
    ),
  },
  {
    label: 'Апрель 2017',
    text: (
      <span>
        В результате успешного завершения проекта был приглашен в компанию "
        {COMPANY_TITLE.sevenGlyphs}" на должность{' '}
        <strong>фронтенд-разработчика</strong>. Принял решение перейти из "
        {COMPANY_TITLE.everpoint}" в "{COMPANY_TITLE.sevenGlyphs}"
      </span>
    ),
  },
  {
    label: 'Апрель 2017 - апрель 2018',
    text: (
      <span>
        Работал <strong>фронтенд-разработчиком</strong> в компании "
        {COMPANY_TITLE.sevenGlyphs}"
      </span>
    ),
  },
  {
    label: 'Апрель 2018',
    text: (
      <span>
        Договорился с "{COMPANY_TITLE.sevenGlyphs}" о продолжении сотрудничества
        по проектам в режиме частичной занятости. Прошел собеседование и
        устроился в компанию "{COMPANY_TITLE.tsftd}" на должность{' '}
        <strong>фронтенд-разработчика</strong>
      </span>
    ),
  },
  {
    label: 'Апрель 2018 - август 2018',
    text: (
      <span>
        Работал <strong>фронтенд-разработчиком</strong> в компании "
        {COMPANY_TITLE.tsftd}".
      </span>
    ),
  },
  {
    label: 'Август 2018',
    text: (
      <span>
        В результате успешной работы получил повышение до{' '}
        <strong>ведущего фронтенд-разработчика</strong> в компании "
        {COMPANY_TITLE.tsftd}
        ".
      </span>
    ),
  },
  {
    label: 'Август 2018 - январь 2019',
    text: (
      <span>
        Работал <strong>ведущим фронтенд-разработчиком</strong> в компании "
        {COMPANY_TITLE.tsftd}".
      </span>
    ),
  },
  {
    label: 'Январь 2019',
    text: (
      <span>
        Получил повышение до <strong>тимлида фронтенд-разработки</strong> в
        компании "{COMPANY_TITLE.tsftd}".
      </span>
    ),
  },
  {
    label: 'Январь 2019 - ...',
    text: (
      <span>
        Работаю <strong>тимлидом фронтенд-разработки</strong> в компании "
        {COMPANY_TITLE.tsftd}". Продолжаю сотрудничество по проектам с "
        {COMPANY_TITLE.sevenGlyphs}".
      </span>
    ),
  },
]

export default function Stepper({sectionRef}: StepperProps): JSX.Element {
  const [step, changeStep] = useState<number>(0)

  const handleNext = (): void => {
    changeStep(step + 1)
  }

  const handleBack = (): void => {
    changeStep(step - 1)
  }

  const handleReset = (): void => {
    changeStep(0)
    scrollToView(sectionRef.current as HTMLElement)
  }

  return (
    <MuiStepper className="Stepper" activeStep={step} orientation="vertical">
      {steps.map((item: StepInterface, index: number) => (
        <Step key={index}>
          <StepLabel>
            <time className="Stepper-Time">{item.label}</time>
          </StepLabel>
          <StepContent>
            <p className="Stepper-Text">{item.text}</p>
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
          <p className="Stepper-Text Stepper-Text_last">
            Кто знает, что там впереди?
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
    </MuiStepper>
  )
}
