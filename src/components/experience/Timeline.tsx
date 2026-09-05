import {useRef, useState} from 'react'
import {useTranslation, Trans} from 'react-i18next'
import {
  useMediaQuery,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Fab,
  Paper,
  Stack,
} from '@mui/material'
import {
  ArrowForwardRounded as ArrowForwardIcon,
  ArrowBackRounded as ArrowBackIcon,
  RefreshRounded as RefreshIcon,
} from '@mui/icons-material'

import './Timeline.scss'
import {Animate, Section} from '#components/common'
import {getPeriodDateTime, scrollToView, tPeriodPart} from '#utils/helpers'
import {CAREER_START_PARTS, QUERY_BREAKPOINT, ROUTE} from '#utils/constants'
import {COMPANY, CONTACT_LINK, FEATURE} from '#data/common'
import type {IPeriod} from '#utils/types'

interface IStep {
  period: IPeriod
  values?: (string | number)[]
}

export default function Timeline() {
  const {t} = useTranslation()
  const md = useMediaQuery(QUERY_BREAKPOINT.md)
  const sectionRef = useRef<HTMLElement | null>(null)
  const [step, changeStep] = useState<number>(steps.length - 1)

  const handleNext = () => changeStep(step + 1)

  const handleBack = () => changeStep(step - 1)

  const handleReset = () => {
    changeStep(0)
    scrollToView(sectionRef.current as HTMLElement)
  }

  return (
    <Section
      aside
      colorful
      sectionRef={sectionRef}
      prevTo={ROUTE.skills}
      nextTo={ROUTE.portfolio}
    >
      <Animate
        effect={md ? undefined : 'right'}
        duration={md ? undefined : 'longer'}
      >
        <Paper>
          <h2 className="Timeline-Title">{t('experience.subtitle')}</h2>
          <Stepper activeStep={step} orientation="vertical">
            {steps.map((item, index) => (
              <Step key={index}>
                <StepLabel>
                  <span className="Time">
                    <time dateTime={getPeriodDateTime(item.period.from)}>
                      {tPeriodPart(t, item.period.from)}
                    </time>
                    {item.period.to ? (
                      <>
                        {' — '}
                        <time dateTime={getPeriodDateTime(item.period.to)}>
                          {tPeriodPart(t, item.period.to)}
                        </time>
                      </>
                    ) : (
                      index === steps.length - 1 && ' — ...'
                    )}
                  </span>
                </StepLabel>
                <StepContent>
                  <p className="Timeline-Text">
                    <Trans
                      i18nKey={`experience.stepper.step${index + 1}`}
                      values={item.values}
                      components={transComponents}
                    />
                    .
                  </p>
                  <Stack>
                    <Fab
                      className="Timeline-Button"
                      size="medium"
                      aria-label={t('experience.back')}
                      disabled={step === 0}
                      onClick={handleBack}
                    >
                      <ArrowBackIcon className="Timeline-ButtonIcon" />
                    </Fab>
                    <Fab
                      className="Timeline-Button"
                      size="medium"
                      aria-label={t('experience.next')}
                      onClick={handleNext}
                    >
                      <ArrowForwardIcon className="Timeline-ButtonIcon" />
                    </Fab>
                  </Stack>
                </StepContent>
              </Step>
            ))}
            {step === steps.length && (
              <>
                <p className="Timeline-Text Timeline-Text_last">
                  {t('experience.continue')} ✌️...
                </p>
                <Fab
                  className="Timeline-Button"
                  size="medium"
                  aria-label={t('experience.refresh')}
                  onClick={handleReset}
                >
                  <RefreshIcon className="Timeline-ButtonIcon Timeline-ButtonIcon_refresh" />
                </Fab>
              </>
            )}
          </Stepper>
        </Paper>
      </Animate>
    </Section>
  )
}

const transComponents = [<strong />]

const steps: IStep[] = [
  {
    period: {
      from: {
        tKey: 'september',
        year: 2002,
      },
      to: {
        tKey: 'october',
        year: 2008,
      },
    },
    values: [COMPANY.mVideo.title],
  },
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
    values: [COMPANY.mVideo.title],
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
    values: [COMPANY.everpoint.title],
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
    values: [COMPANY.everpoint.title],
  },
  {
    period: {
      from: {
        tKey: 'november',
        year: 2016,
      },
    },
    values: [COMPANY.everpoint.title],
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
    values: [COMPANY.everpoint.title, COMPANY.sevenGlyphs.title],
  },
  {
    period: {
      from: {
        tKey: 'april',
        year: 2017,
      },
    },
    values: [
      COMPANY.sevenGlyphs.title,
      COMPANY.everpoint.title,
      COMPANY.sevenGlyphs.title,
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
    values: [COMPANY.sevenGlyphs.title],
  },
  {
    period: {
      from: {
        tKey: 'april',
        year: 2018,
      },
    },
    values: [COMPANY.sevenGlyphs.title, COMPANY.t1.title],
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
    values: [COMPANY.t1.title],
  },
  {
    period: {
      from: {
        tKey: 'january',
        year: 2019,
      },
    },
    values: [COMPANY.t1.title],
  },
  {
    period: {
      from: {
        tKey: 'january',
        year: 2019,
      },
      to: {
        tKey: 'february',
        year: 2020,
      },
    },
    values: [COMPANY.t1.title],
  },
  {
    period: {
      from: {
        tKey: 'february',
        year: 2020,
      },
    },
    values: [COMPANY.t1.title],
  },
  {
    period: {
      from: {
        tKey: 'february',
        year: 2020,
      },
      to: {
        tKey: 'march',
        year: 2021,
      },
    },
    values: [COMPANY.t1.title, COMPANY.sevenGlyphs.title],
  },
  {
    period: {
      from: {
        tKey: 'march',
        year: 2021,
      },
      to: {
        tKey: 'january',
        year: 2022,
      },
    },
    values: [FEATURE.appStore, FEATURE.googlePlay],
  },
  {
    period: {
      from: {
        tKey: 'january',
        year: 2022,
      },
    },
    values: [COMPANY.sevenGlyphs.title, COMPANY.t1.title],
  },
  {
    period: {
      from: {
        tKey: 'january',
        year: 2022,
      },
      to: {
        tKey: 'march',
        year: 2022,
      },
    },
    values: [COMPANY.sevenGlyphs.title, COMPANY.t1.title],
  },
  {
    period: {
      from: {
        tKey: 'march',
        year: 2022,
      },
      to: {
        tKey: 'april',
        year: 2023,
      },
    },
    values: [COMPANY.sevenGlyphs.title, CONTACT_LINK.youTube.title],
  },
  {
    period: {
      from: {
        tKey: 'april',
        year: 2023,
      },
      to: {
        tKey: 'march',
        year: 2024,
      },
    },
    values: [COMPANY.sevenGlyphs.title, CONTACT_LINK.youTube.title],
  },
  {
    period: {
      from: {
        tKey: 'march',
        year: 2024,
      },
      to: {
        tKey: 'june',
        year: 2024,
      },
    },
    values: [
      COMPANY.sevenGlyphs.title,
      COMPANY.goRentals.title,
      COMPANY.sevenGlyphs.title,
    ],
  },
  {
    period: {
      from: {
        tKey: 'june',
        year: 2024,
      },
    },
    values: [COMPANY.goRentals.title, 'Straight to Residence Visa'],
  },
]
