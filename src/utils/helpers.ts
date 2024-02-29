import scrollIntoView from 'smooth-scroll-into-view-if-needed'
import {TFunction} from 'i18next'

import {DURATION} from '@styles/theme'
import {TProjectType, IPeriodPart, TProjectName} from './types'

export const importImg = (path: string): string =>
  new URL(`/src/assets/img/${path}`, import.meta.url).href

export const getListDelay = (order: number): number =>
  (order * DURATION.shorter) / 2

export const tProjectTypes = (
  t: TFunction,
  types: TProjectType[],
  name?: TProjectName
): string => {
  if (name === 't1online') return t('portfolio.project.t1online.type')
  return types
    .map((type: TProjectType, index: number) => {
      const label = t(`portfolio.filter.${type}`)
      return index === 0 ? label : label.toLowerCase()
    })
    .join(', ')
}

export const tPeriodPart = (t: TFunction, periodPart: IPeriodPart): string =>
  `${t(`month.${periodPart.tKey}`)} ${periodPart.year}`

export const scrollToView = (el: HTMLElement) => {
  scrollIntoView(el, {
    behavior: 'smooth',
    block: 'start',
  })
}
