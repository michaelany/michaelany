import {ReactComponent as SevenGlyphsIcon} from '../assets/icons/7glyphs.svg'
import {ReactComponent as GitHubIcon} from '../assets/icons/github.svg'
import {ReactComponent as LinkedInIcon} from '../assets/icons/linkedin.svg'
import {ReactComponent as InstagramIcon} from '../assets/icons/instagram.svg'
import {ReactComponent as VKIcon} from '../assets/icons/vk.svg'
import {ReactComponent as FacebookIcon} from '../assets/icons/facebook.svg'
import {ReactComponent as TelegramIcon} from '../assets/icons/telegram.svg'
import {ReactComponent as SkypeIcon} from '../assets/icons/skype.svg'
import {SocialLink, Company} from '../utils/types'

interface Title {
  home: string
  about: string
  skills: string
  experience: string
  portfolio: string
  contact: string
}

interface CompanyTitle {
  mvideo: string
  everpoint: string
  sevenGlyphs: string
  tsftd: string
}

interface ContactLink {
  gitHub: SocialLink
  linkedIn: SocialLink
  sevenGlyphs: SocialLink
  instagram: SocialLink
  vk: SocialLink
  facebook: SocialLink
  telegram: SocialLink
  skype: SocialLink
}

interface CompanyInterface {
  tsftd: Company
  sevenGlyphs: Company
  everpoint: Company
  mvideo: Company
}

interface ProjectTypeLabel {
  app: string
  site: string
  admin: string
  landing: string
}

export const TITLES: Title = {
  home: 'Главная',
  about: 'Обо мне',
  skills: 'Навыки',
  experience: 'Опыт',
  portfolio: 'Портфолио',
  contact: 'Контакты',
}

export const COMPANY_TITLE: CompanyTitle = {
  mvideo: 'М.Видео',
  everpoint: 'Эверпоинт',
  sevenGlyphs: '7 glyphs Ltd.',
  tsftd: 'ТехноСофт Диджитал',
}

export const CONTACT_LINK: ContactLink = {
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
    title: `${COMPANY_TITLE.sevenGlyphs} Team`,
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
    title: 'VK',
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

export const COMPANY: CompanyInterface = {
  tsftd: {
    title: COMPANY_TITLE.tsftd,
    images: [
      require('../assets/img/companies/tsftd.png'),
      require('../assets/img/companies/tsftd@2x.png'),
    ],
    color: 'red',
    href: 'http://www.tsft.ru',
  },
  sevenGlyphs: {
    title: COMPANY_TITLE.sevenGlyphs,
    images: [
      require('../assets/img/companies/7glyphs.png'),
      require('../assets/img/companies/7glyphs@2x.png'),
    ],
    color: 'default',
    href: 'https://7glyphs.com',
  },
  everpoint: {
    title: COMPANY_TITLE.everpoint,
    images: [
      require('../assets/img/companies/everpoint.png'),
      require('../assets/img/companies/everpoint@2x.png'),
    ],
    color: 'grass',
    href: 'https://www.everpoint.ru',
  },
  mvideo: {
    title: COMPANY_TITLE.mvideo,
    images: [
      require('../assets/img/companies/mvideo.png'),
      require('../assets/img/companies/mvideo@2x.png'),
    ],
    color: 'red',
    href: 'https://www.mvideo.ru',
  },
}

export const PROJECT_TYPE_LABEL: ProjectTypeLabel = {
  app: 'Приложение',
  site: 'Сайт',
  admin: 'Админка',
  landing: 'Лендинг',
}

export const TECHNOLOGY_TITLE = {
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
  html: 'HTML',
  svg: 'SVG',
  jsx: 'JSX',
  pug: 'Pug',
  handlebars: 'Handlebars',
  markdown: 'Markdown',
  blade: 'Blade',
  css: 'CSS',
  bem: 'BEM',
  sass: 'Sass',
  modules: 'CSS Modules',
  styled: 'styled-components',
  mui: 'Material-UI',
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
  gatsby: 'Gatsby',
  next: 'Next.js',
  nuxt: 'Nuxt.js',
  git: 'Git',
  babel: 'Babel',
  prettier: 'Prettier',
  eslint: 'ESLint',
  jest: 'Jest',
  vscode: 'Visual Studio Code',
  item: 'iTerm2',
  devtools: 'Chrome DevTools',
  zeplin: 'Zeplin',
  sketch: 'Sketch',
  figma: 'Figma',
  photoshop: 'Photoshop',
  optim: 'ImageOptim',
  flow: 'Flow',
  parallels: 'Parallels Desktop',
  mac: 'macOS Catalina',
  node: 'Node.js',
  mongo: 'MongoDB',
  mysql: 'MySQL',
  php: 'PHP',
  laravel: 'Laravel',
}
