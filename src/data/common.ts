import {ReactComponent as SevenGlyphsIcon} from '../assets/icons/7glyphs.svg'
import {ReactComponent as GitHubIcon} from '../assets/icons/github.svg'
import {ReactComponent as LinkedInIcon} from '../assets/icons/linkedin.svg'
import {ReactComponent as InstagramIcon} from '../assets/icons/instagram.svg'
import {ReactComponent as VKIcon} from '../assets/icons/vk.svg'
import {ReactComponent as FacebookIcon} from '../assets/icons/facebook.svg'
import {ReactComponent as TelegramIcon} from '../assets/icons/telegram.svg'
import {ReactComponent as SkypeIcon} from '../assets/icons/skype.svg'
import {SocialLink, Company} from '../utils/types'

interface Titles {
  HOME: string
  ABOUT: string
  SKILLS: string
  EXPERIENCE: string
  PORTFOLIO: string
  CONTACT: string
}

interface CompanyTitles {
  MVIDEO: string
  EVERPOINT: string
  SEVEN_GLYPHS: string
  TSFTD: string
}

interface ContactLinks {
  GIT_HUB: SocialLink
  LINKED_IN: SocialLink
  SEVEN_GLYPHS: SocialLink
  INSTAGRAM: SocialLink
  VK: SocialLink
  FACEBOOK: SocialLink
  TELEGRAM: SocialLink
  SKYPE: SocialLink
}

interface Companies {
  TSFTD: Company
  SEVEN_GLYPHS: Company
  EVERPOINT: Company
  MVIDEO: Company
}

interface TechnologyTitles {
  JS: string
  TS: string
  REACT: string
  REDUX: string
  MOBX: string
  PREACT: string
  VUE: string
  SVELTE: string
  APOLLO: string
  JQUERY: string
  HTML: string
  SVG: string
  JSX: string
  PUG: string
  HANDLEBARS: string
  MARKDOWN: string
  BLADE: string
  CSS: string
  BEM: string
  SASS: string
  MUI: string
  MODULES: string
  STYLED: string
  REACTSTRAP: string
  ANT: string
  MATERIALIZE: string
  BOOTSTRAP: string
  SEMANTIC: string
  EMAILS: string
  NPM: string
  YARN: string
  WEBPACK: string
  GULP: string
  PARCEL: string
  CRA: string
  GATSBY: string
  NEXT: string
  NUXT: string
  GIT: string
  BABEL: string
  PRETTIER: string
  ESLINT: string
  STORYBOOK: string
  BIT: string
  JEST: string
  MOCHA: string
  VSCODE: string
  ITERM: string
  DEVTOOLS: string
  ZEPLIN: string
  SKETCH: string
  FIGMA: string
  PHOTOSHOP: string
  OPTIM: string
  MAC: string
  NODE: string
  MONGO: string
  MYSQL: string
  PHP: string
  LARAVEL: string
}

interface ProjectTypeLabels {
  APP: string
  SITE: string
  ADMIN: string
  LANDING: string
}

export const TITLES: Titles = {
  HOME: 'Главная',
  ABOUT: 'Обо мне',
  SKILLS: 'Навыки',
  EXPERIENCE: 'Опыт',
  PORTFOLIO: 'Портфолио',
  CONTACT: 'Контакты',
}

export const COMPANY_TITLES: CompanyTitles = {
  MVIDEO: 'М.Видео',
  EVERPOINT: 'Эверпоинт',
  SEVEN_GLYPHS: '7 glyphs Ltd.',
  TSFTD: 'ТехноСофт Диджитал',
}

export const CONTACT_LINKS: ContactLinks = {
  GIT_HUB: {
    title: 'GitHub',
    href: 'https://github.com/vashstamp',
    Icon: GitHubIcon,
    size: 'lg',
  },
  LINKED_IN: {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/mclananiev',
    Icon: LinkedInIcon,
    size: 'sm',
  },
  SEVEN_GLYPHS: {
    title: `${COMPANY_TITLES.SEVEN_GLYPHS} Team`,
    href: 'https://7glyphs.com/agency/team',
    Icon: SevenGlyphsIcon,
    size: 'xs',
  },
  INSTAGRAM: {
    title: 'Instagram',
    href: 'https://www.instagram.com/mclananiev/',
    Icon: InstagramIcon,
    size: 'md',
  },
  VK: {
    title: 'VK',
    href: 'https://vk.com/mclananiev',
    Icon: VKIcon,
    size: 'md',
  },
  FACEBOOK: {
    title: 'Facebook',
    href: 'https://www.facebook.com/mclananiev',
    Icon: FacebookIcon,
    size: 'sm',
  },
  TELEGRAM: {
    title: 'Telegram',
    href: 'https://t.me/mclananiev',
    Icon: TelegramIcon,
    size: 'md',
  },
  SKYPE: {
    title: 'Skype',
    href: 'skype:live:bd80acb1b9083867?chat',
    Icon: SkypeIcon,
    size: 'md',
  },
}

export const COMPANIES: Companies = {
  TSFTD: {
    title: COMPANY_TITLES.TSFTD,
    images: [
      require('../assets/img/companies/tsftd.png'),
      require('../assets/img/companies/tsftd@2x.png'),
    ],
    color: 'red',
    href: 'http://www.tsft.ru',
  },
  SEVEN_GLYPHS: {
    title: COMPANY_TITLES.SEVEN_GLYPHS,
    images: [
      require('../assets/img/companies/7glyphs.png'),
      require('../assets/img/companies/7glyphs@2x.png'),
    ],
    color: 'default',
    href: 'https://7glyphs.com',
  },
  EVERPOINT: {
    title: COMPANY_TITLES.EVERPOINT,
    images: [
      require('../assets/img/companies/everpoint.png'),
      require('../assets/img/companies/everpoint@2x.png'),
    ],
    color: 'grass',
    href: 'https://www.everpoint.ru',
  },
  MVIDEO: {
    title: COMPANY_TITLES.MVIDEO,
    images: [
      require('../assets/img/companies/mvideo.png'),
      require('../assets/img/companies/mvideo@2x.png'),
    ],
    color: 'red',
    href: 'https://www.mvideo.ru',
  },
}

export const TECHNOLOGY_TITLES: TechnologyTitles = {
  JS: 'JavaScript',
  TS: 'TypeScript',
  REACT: 'React',
  REDUX: 'Redux',
  MOBX: 'MobX',
  PREACT: 'Preact',
  VUE: 'Vue.js',
  SVELTE: 'Svelte',
  APOLLO: 'Apollo Client',
  JQUERY: 'jQuery',
  HTML: 'HTML',
  SVG: 'SVG',
  JSX: 'JSX',
  PUG: 'Pug',
  HANDLEBARS: 'Handlebars',
  MARKDOWN: 'Markdown',
  BLADE: 'Blade',
  CSS: 'CSS',
  BEM: 'BEM',
  SASS: 'Sass',
  MUI: 'Material-UI',
  MODULES: 'CSS Modules',
  STYLED: 'styled-components',
  REACTSTRAP: 'reactstrap',
  ANT: 'Ant Design',
  MATERIALIZE: 'Materialize',
  BOOTSTRAP: 'Bootstrap',
  SEMANTIC: 'Semantic UI',
  EMAILS: 'Foundation for Emails',
  NPM: 'NPM',
  YARN: 'Yarn',
  WEBPACK: 'webpack',
  GULP: 'Gulp',
  PARCEL: 'Parcel',
  CRA: 'Create React App',
  GATSBY: 'Gatsby',
  NEXT: 'Next.js',
  NUXT: 'Nuxt.js',
  GIT: 'Git',
  BABEL: 'Babel',
  PRETTIER: 'Prettier',
  ESLINT: 'ESLint',
  STORYBOOK: 'Storybook',
  BIT: 'Bit',
  JEST: 'Jest',
  MOCHA: 'Mocha',
  VSCODE: 'Visual Studio Code',
  ITERM: 'iTerm2',
  DEVTOOLS: 'Chrome DevTools',
  ZEPLIN: 'Zeplin',
  SKETCH: 'Sketch',
  FIGMA: 'Figma',
  PHOTOSHOP: 'Photoshop',
  OPTIM: 'ImageOptim',
  MAC: 'macOS Catalina',
  NODE: 'Node.js',
  MONGO: 'MongoDB',
  MYSQL: 'MySQL',
  PHP: 'PHP',
  LARAVEL: 'Laravel',
}

export const PROJECT_TYPE_LABELS: ProjectTypeLabels = {
  APP: 'Приложение',
  SITE: 'Сайт',
  ADMIN: 'Админка',
  LANDING: 'Лендинг',
}
