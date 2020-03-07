interface ITitlesMap {
  [key: string]: Title
}

export enum Route {
  HOME = '/',
  ABOUT = '/about',
  SKILLS = '/skills',
  EXPERIENCE = '/experience',
  PORTFOLIO = '/portfolio',
  CONTACT = '/contact',
}

export enum Title {
  HOME = 'Главная',
  ABOUT = 'Обо мне',
  SKILLS = 'Навыки',
  EXPERIENCE = 'Опыт',
  PORTFOLIO = 'Портфолио',
  CONTACT = 'Контакты',
}

export const TITLES_MAP: ITitlesMap = {
  [Route.HOME]: Title.HOME,
  [Route.ABOUT]: Title.ABOUT,
  [Route.SKILLS]: Title.SKILLS,
  [Route.EXPERIENCE]: Title.EXPERIENCE,
  [Route.PORTFOLIO]: Title.PORTFOLIO,
  [Route.CONTACT]: Title.CONTACT,
}
