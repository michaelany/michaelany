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
  home: string
  about: string
  skills: string
  experience: string
  portfolio: string
  contact: string
}

interface CompanyTitles {
  mvideo: string
  everpoint: string
  sevenGlyphs: string
  tsftd: string
}

interface ContactLinks {
  gitHub: SocialLink
  linkedIn: SocialLink
  sevenGlyphs: SocialLink
  instagram: SocialLink
  vk: SocialLink
  facebook: SocialLink
  telegram: SocialLink
  skype: SocialLink
}

interface Companies {
  tsftd: Company
  sevenGlyphs: Company
  everpoint: Company
  mvideo: Company
}

interface TechnologyTitles {
  js: string
  ts: string
  react: string
  redux: string
  mobx: string
  preact: string
  vue: string
  svelte: string
  apollo: string
  jquery: string
  html: string
  svg: string
  jsx: string
  pug: string
  handlebars: string
  markdown: string
  blade: string
  css: string
  bem: string
  sass: string
  mui: string
  modules: string
  styled: string
  reactstrap: string
  ant: string
  materialize: string
  bootstrap: string
  semantic: string
  emails: string
  npm: string
  yarn: string
  webpack: string
  gulp: string
  parcel: string
  cra: string
  gatsby: string
  next: string
  nuxt: string
  git: string
  babel: string
  prettier: string
  eslint: string
  storybook: string
  bit: string
  jest: string
  mocha: string
  vscode: string
  item: string
  devtools: string
  zeplin: string
  sketch: string
  figma: string
  photoshop: string
  optim: string
  mac: string
  node: string
  mongo: string
  mysql: string
  php: string
  laravel: string
}

interface ProjectTypeLabels {
  app: string
  site: string
  admin: string
  landing: string
}

export const TITLES: Titles = {
  home: 'Главная',
  about: 'Обо мне',
  skills: 'Навыки',
  experience: 'Опыт',
  portfolio: 'Портфолио',
  contact: 'Контакты',
}

export const COMPANY_TITLES: CompanyTitles = {
  mvideo: 'М.Видео',
  everpoint: 'Эверпоинт',
  sevenGlyphs: '7 glyphs Ltd.',
  tsftd: 'ТехноСофт Диджитал',
}

export const CONTACT_LINKS: ContactLinks = {
  gitHub: {
    title: 'GitHub',
    href: 'https://github.com/vashstamp',
    Icon: GitHubIcon,
    size: 'lg',
  },
  linkedIn: {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/mclananiev',
    Icon: LinkedInIcon,
    size: 'sm',
  },
  sevenGlyphs: {
    title: `${COMPANY_TITLES.sevenGlyphs} Team`,
    href: 'https://7glyphs.com/agency/team',
    Icon: SevenGlyphsIcon,
    size: 'xs',
  },
  instagram: {
    title: 'Instagram',
    href: 'https://www.instagram.com/mclananiev/',
    Icon: InstagramIcon,
    size: 'md',
  },
  vk: {
    title: 'vk',
    href: 'https://vk.com/mclananiev',
    Icon: VKIcon,
    size: 'md',
  },
  facebook: {
    title: 'Facebook',
    href: 'https://www.facebook.com/mclananiev',
    Icon: FacebookIcon,
    size: 'sm',
  },
  telegram: {
    title: 'Telegram',
    href: 'https://t.me/mclananiev',
    Icon: TelegramIcon,
    size: 'md',
  },
  skype: {
    title: 'Skype',
    href: 'skype:live:bd80acb1b9083867?chat',
    Icon: SkypeIcon,
    size: 'md',
  },
}

export const COMPANIES: Companies = {
  tsftd: {
    title: COMPANY_TITLES.tsftd,
    images: [
      require('../assets/img/companies/tsftd.png'),
      require('../assets/img/companies/tsftd@2x.png'),
    ],
    color: 'red',
    href: 'http://www.tsft.ru',
  },
  sevenGlyphs: {
    title: COMPANY_TITLES.sevenGlyphs,
    images: [
      require('../assets/img/companies/7glyphs.png'),
      require('../assets/img/companies/7glyphs@2x.png'),
    ],
    color: 'default',
    href: 'https://7glyphs.com',
  },
  everpoint: {
    title: COMPANY_TITLES.everpoint,
    images: [
      require('../assets/img/companies/everpoint.png'),
      require('../assets/img/companies/everpoint@2x.png'),
    ],
    color: 'grass',
    href: 'https://www.everpoint.ru',
  },
  mvideo: {
    title: COMPANY_TITLES.mvideo,
    images: [
      require('../assets/img/companies/mvideo.png'),
      require('../assets/img/companies/mvideo@2x.png'),
    ],
    color: 'red',
    href: 'https://www.mvideo.ru',
  },
}

export const TECHNOLOGY_TITLES: TechnologyTitles = {
  js: 'JavaScript',
  ts: 'TypeScript',
  react: 'React',
  redux: 'Redux',
  mobx: 'MobX',
  preact: 'Preact',
  vue: 'Vue.js',
  svelte: 'Svelte',
  apollo: 'Apollo Client',
  jquery: 'jQuery',
  html: 'html',
  svg: 'svg',
  jsx: 'jsx',
  pug: 'Pug',
  handlebars: 'Handlebars',
  markdown: 'Markdown',
  blade: 'Blade',
  css: 'css',
  bem: 'bem',
  sass: 'Sass',
  mui: 'Material-UI',
  modules: 'css Modules',
  styled: 'styled-components',
  reactstrap: 'reactstrap',
  ant: 'Ant Design',
  materialize: 'Materialize',
  bootstrap: 'Bootstrap',
  semantic: 'Semantic UI',
  emails: 'Foundation for Emails',
  npm: 'npm',
  yarn: 'Yarn',
  webpack: 'webpack',
  gulp: 'Gulp',
  parcel: 'Parcel',
  cra: 'Create React App',
  gatsby: 'Gatsby',
  next: 'Next.js',
  nuxt: 'Nuxt.js',
  git: 'Git',
  babel: 'Babel',
  prettier: 'Prettier',
  eslint: 'ESLint',
  storybook: 'Storybook',
  bit: 'Bit',
  jest: 'Jest',
  mocha: 'Mocha',
  vscode: 'Visual Studio Code',
  item: 'iTerm2',
  devtools: 'Chrome DevTools',
  zeplin: 'Zeplin',
  sketch: 'Sketch',
  figma: 'Figma',
  photoshop: 'Photoshop',
  optim: 'ImageOptim',
  mac: 'macOS Catalina',
  node: 'Node.js',
  mongo: 'MongoDB',
  mysql: 'MySQL',
  php: 'php',
  laravel: 'Laravel',
}

export const PROJECT_TYPE_LABELS: ProjectTypeLabels = {
  app: 'Приложение',
  site: 'Сайт',
  admin: 'Админка',
  landing: 'Лендинг',
}
