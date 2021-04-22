import {useState, RefObject} from 'react'
import {useTranslation, Trans} from 'react-i18next'
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
import {scrollToView, tPeriodPart} from '../../utils/helpers'
import {CAREER_START_PARTS} from '../../utils/constants'
import {Period} from '../../utils/types'
import {COMPANY_TITLE} from '../../data/common'

interface StepperProps {
  sectionRef: RefObject<HTMLElement>
}

interface StepInterface {
  period: Period
  values?: string[]
}

const steps: StepInterface[] = [
  {
    period: {
      from: {
        tKey: 'october',
        year: 2008,
      },
      to: {
        tKey: 'may',
        year: 2010,
      },
    },
    values: [COMPANY_TITLE.mvideo],
  },
  {
    period: {
      from: {
        tKey: 'may',
        year: 2010,
      },
      to: {
        tKey: 'june',
        year: 2014,
      },
    },
  },
  {
    period: {
      from: {
        tKey: 'june',
        year: 2014,
      },
      to: {
        tKey: CAREER_START_PARTS[0],
        year: CAREER_START_PARTS[1],
      },
    },
  },
  {
    period: {
      from: {
        tKey: CAREER_START_PARTS[0],
        year: CAREER_START_PARTS[1],
      },
    },
    values: [COMPANY_TITLE.everpoint],
  },
  {
    period: {
      from: {
        tKey: CAREER_START_PARTS[0],
        year: CAREER_START_PARTS[1],
      },
      to: {
        tKey: 'november',
        year: 2016,
      },
    },
    values: [COMPANY_TITLE.everpoint],
  },
  {
    period: {
      from: {
        tKey: 'november',
        year: 2016,
      },
    },
    values: [COMPANY_TITLE.everpoint],
  },
  {
    period: {
      from: {
        tKey: 'november',
        year: 2016,
      },
      to: {
        tKey: 'april',
        year: 2017,
      },
    },
    values: [COMPANY_TITLE.everpoint, COMPANY_TITLE.sevenGlyphs],
  },
  {
    period: {
      from: {
        tKey: 'april',
        year: 2017,
      },
    },
    values: [
      COMPANY_TITLE.sevenGlyphs,
      COMPANY_TITLE.everpoint,
      COMPANY_TITLE.sevenGlyphs,
    ],
  },
  {
    period: {
      from: {
        tKey: 'april',
        year: 2017,
      },
      to: {
        tKey: 'april',
        year: 2018,
      },
    },
    values: [COMPANY_TITLE.sevenGlyphs],
  },
  {
    period: {
      from: {
        tKey: 'april',
        year: 2018,
      },
    },
    values: [COMPANY_TITLE.sevenGlyphs, COMPANY_TITLE.t1],
  },
  {
    period: {
      from: {
        tKey: 'april',
        year: 2018,
      },
      to: {
        tKey: 'january',
        year: 2019,
      },
    },
    values: [COMPANY_TITLE.t1],
  },
  {
    period: {
      from: {
        tKey: 'january',
        year: 2019,
      },
    },
    values: [COMPANY_TITLE.t1],
  },
  {
    period: {
      from: {
        tKey: 'january',
        year: 2019,
      },
    },
    values: [COMPANY_TITLE.t1, COMPANY_TITLE.sevenGlyphs],
  },
]

const transComponents = {strong: <strong />}

export default function Stepper({sectionRef}: StepperProps): JSX.Element {
  const {t} = useTranslation()
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
            <time className="Time">
              {tPeriodPart(t, item.period.from)}
              {item.period.to
                ? ` - ${tPeriodPart(t, item.period.to)}`
                : index === steps.length - 1 && ' - ...'}
            </time>
          </StepLabel>
          <StepContent>
            <p className="Stepper-Text">
              <Trans
                i18nKey={`experience.stepper.step${index + 1}`}
                values={item.values}
                components={transComponents}
              />
            </p>
            <div className="Stepper-Actions">
              <Fab
                className="Stepper-Button"
                size="medium"
                aria-label={t('experience.next')}
                onClick={handleNext}
              >
                <ArrowForwardIcon className="Stepper-ButtonIcon" />
              </Fab>
              <Fab
                className="Stepper-Button"
                size="medium"
                aria-label={t('experience.back')}
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
            {t('experience.continue')}...
          </p>
          <Fab
            className="Stepper-Button"
            size="medium"
            aria-label={t('experience.refresh')}
            onClick={handleReset}
          >
            <RefreshIcon className="Stepper-ButtonIcon Stepper-ButtonIcon_refresh" />
          </Fab>
        </>
      )}
    </MuiStepper>
  )
}
