import scrollIntoView from 'smooth-scroll-into-view-if-needed'
import {TFunction} from 'react-i18next'

import {DURATION} from '../styles/theme'
import {ProjectType, PeriodPart, ProjectName} from './types'

export const getListDelay = (order: number): number =>
  (order * DURATION.shorter) / 2

export const tProjectTypes = (
  t: TFunction,
  types: ProjectType[],
  name?: ProjectName
): string => {
  if (name === 't1online') return t('portfolio.project.t1online.type')
  return types
    .map((type: ProjectType, index: number) => {
      const label = t(`portfolio.filter.${type}`)
      return index === 0 ? label : label.toLowerCase()
    })
    .join(', ')
}

export const tPeriodPart = (t: TFunction, periodPart: PeriodPart) =>
  `${t(`month.${periodPart.tKey}`)} ${periodPart.year}`

export const scrollToView = (el: HTMLElement): void => {
  scrollIntoView(el, {
    behavior: 'smooth',
    block: 'start',
  })
}
