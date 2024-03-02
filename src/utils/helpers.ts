import scrollIntoView from 'smooth-scroll-into-view-if-needed'
import {TFunction} from 'i18next'
import {differenceInDays, differenceInMonths} from 'date-fns'

import {DURATION} from '@styles/theme'
import {TProjectType, IPeriodPart, IWidth, TLng} from './types'

export const importImg = (path: string): string =>
  new URL(`/src/assets/img/${path}`, import.meta.url).href

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

export const scrollToView = (el: HTMLElement) => {
  scrollIntoView(el, {
    behavior: 'smooth',
    block: 'start',
  })
}

export const getTimeSince = (date: Date, lng: TLng): string => {
  const currentDate = new Date()
  const days = differenceInDays(currentDate, date)
  const months = differenceInMonths(currentDate, date)
  const ruLng = lng === 'ru'
  if (months >= 12) {
    const years = months / 12
    return ruLng
      ? `${Math.floor(years)} год${Math.floor(years) % 10 === 1 && Math.floor(years) !== 11 ? '' : Math.floor(years) % 10 === 2 && Math.floor(years) !== 12 ? 'а' : 'ов'} назад`
      : `${Math.floor(years)} year${Math.floor(years) > 1 ? 's' : ''} ago`
  } else if (months > 0) {
    const russianMonthsEnding =
      months === 1 ? 'месяц' : months < 5 ? 'месяца' : 'месяцев'
    return ruLng
      ? `${months} ${russianMonthsEnding} назад`
      : `${months} month${months > 1 ? 's' : ''} ago`
  } else if (days > 0) {
    const russianDaysEnding = days === 1 ? 'день' : days < 5 ? 'дня' : 'дней'
    return ruLng
      ? `${days} ${russianDaysEnding} назад`
      : `${days} day${days > 1 ? 's' : ''} ago`
  } else return ruLng ? 'Сегодня' : 'Today'
}
