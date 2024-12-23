import scrollIntoView from 'smooth-scroll-into-view-if-needed'
import {TFunction} from 'i18next'

import {DURATION} from '#styles/theme'
import {TProjectType, IPeriodPart, IWidth} from './types'

export const importImg = (path: string): string => `/src/assets/img/${path}`

export const getListDelay = (order: number): number =>
  (order * DURATION.shorter) / 2

export const getGridAnimationDelay = (index: number, width: IWidth): number => {
  if (width.sm) return 0
  const divider = width.md ? 2 : width.lg ? 3 : 4
  return getListDelay(index % divider)
}

export const tProjectTypes = (
  t: TFunction,
  types: TProjectType[],
  mobileApp?: boolean
): string => {
  if (mobileApp) return t('portfolio.mobileApp')
  return types
    .map((type: TProjectType, index: number) => {
      const label = t(`portfolio.filter.${type}`)
      return index === 0 ? label : label.toLowerCase()
    })
    .join(', ')
}

export const tPeriodPart = (t: TFunction, periodPart: IPeriodPart): string =>
  `${t(`month.${periodPart.tKey}`)} ${periodPart.year}`

export const scrollToView = (el: HTMLElement) =>
  scrollIntoView(el, {
    behavior: 'smooth',
    block: 'start',
  })
