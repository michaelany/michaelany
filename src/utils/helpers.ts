import scrollIntoView from 'smooth-scroll-into-view-if-needed'

import {DURATION} from '../styles/theme'

export const getListDelay = (order: number): number =>
  (order * DURATION.shorter) / 2

export const scrollToView = (el: HTMLElement): void => {
  scrollIntoView(el, {
    behavior: 'smooth',
    block: 'start',
  })
}
