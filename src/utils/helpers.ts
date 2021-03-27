import scrollIntoView from 'smooth-scroll-into-view-if-needed'

import {DURATION} from '../styles/theme'
import {PROJECT_TYPE_LABEL} from '../data/common'
import {ProjectType} from './types'

export const getListDelay = (order: number): number =>
  (order * DURATION.shorter) / 2

export const getProjectTypesString = (types: ProjectType[]): string =>
  types
    .map((type: ProjectType, index: number) => {
      const label = PROJECT_TYPE_LABEL[type]
      return index === 0 ? label : label.toLowerCase()
    })
    .join(', ')

export const scrollToView = (el: HTMLElement): void => {
  scrollIntoView(el, {
    behavior: 'smooth',
    block: 'start',
  })
}
