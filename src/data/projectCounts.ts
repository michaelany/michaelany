import {PROJECT_COLORS} from './contentColors'

export const PRIVATE_AND_OTHER_COMPANY_PROJECTS_COUNT = {
  goRentals: ['GO Rentals', 'TanGO', 'TanGO New'].length,
  sevenGlyphs: ['PCNZ', 'PCNZ Landing', 'Ted Manson Foundation', 'FCDC'].length,
  t1: ['Dinamo Promo', 'Inter RAO'].length + 2,
}

export const PROJECTS_COUNT = Object.values(
  PRIVATE_AND_OTHER_COMPANY_PROJECTS_COUNT
).reduce((sum, count) => sum + count, Object.keys(PROJECT_COLORS).length)
