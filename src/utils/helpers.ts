import {DURATIONS} from '../styles/theme'

export const getListDelay = (order: number): number =>
  (order * DURATIONS.shorter) / 2
