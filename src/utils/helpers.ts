import {DURATION} from '../styles/theme'

export const getListDelay = (order: number): number =>
  (order * DURATION.shorter) / 2
