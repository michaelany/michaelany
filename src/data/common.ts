import {importImg} from '@utils/helpers'
import {ReactComponent as SevenGlyphsIcon} from '@assets/icons/7glyphs.svg'
import {ReactComponent as GitHubIcon} from '@assets/icons/github.svg'
import {ReactComponent as LinkedInIcon} from '@assets/icons/linkedin.svg'
import {ReactComponent as InstagramIcon} from '@assets/icons/instagram.svg'
import {ReactComponent as VKIcon} from '@assets/icons/vk.svg'
import {ReactComponent as FacebookIcon} from '@assets/icons/facebook.svg'
import {ReactComponent as TelegramIcon} from '@assets/icons/telegram.svg'
import {SocialLink, Company, TechnologyGroup} from '@utils/types'

interface CompanyTitle {
  mvideo: string
  everpoint: string
  sevenGlyphs: string
  t1: string
}

interface ContactLink {
  gitHub: SocialLink
  linkedIn: SocialLink
  sevenGlyphs: SocialLink
  instagram: SocialLink
  vk: SocialLink
  facebook: SocialLink
  telegram: SocialLink
}

interface CompanyInterface {
  sevenGlyphs: Company
  t1: Company
  everpoint: Company
  mvideo: Company
}

export const MY_NAME = 'Michael Any'

export const COMPANY_TITLE: CompanyTitle = {
  mvideo: 'M.Video',
  everpoint: 'Everpoint',
  sevenGlyphs: '7 glyphs Ltd.',
  t1: 'T1 Consulting',
}

export const CONTACT_LINK: ContactLink = {
  gitHub: {
    title: 'GitHub',
    href: 'https://github.com/michaelany',
    Icon: GitHubIcon,
    size: 'lg',
  },
  linkedIn: {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/michaelany',
    Icon: LinkedInIcon,
    size: 'sm',
  },
  telegram: {
    title: 'Telegram',
    href: 'https://t.me/michaelany',
    Icon: TelegramIcon,
    size: 'md',
  },
  instagram: {
    title: 'Instagram',
    href: 'https://instagram.com/anymichael',
    Icon: InstagramIcon,
    size: 'md',
  },
  facebook: {
    title: 'Facebook',
    href: 'https://www.facebook.com/michaelany.fb',
    Icon: FacebookIcon,
    size: 'sm',
  },
  sevenGlyphs: {
    title: `${COMPANY_TITLE.sevenGlyphs} Team`,
    href: 'https://7glyphs.com/agency/team',
    Icon: SevenGlyphsIcon,
    size: 'xs',
  },
  vk: {
    title: 'VK',
    href: 'https://vk.com/michaelany',
    Icon: VKIcon,
    size: 'md',
  },
}

export const COMPANY: CompanyInterface = {
  sevenGlyphs: {
    title: COMPANY_TITLE.sevenGlyphs,
    images: [
      importImg('companies/7glyphs.png'),
      importImg('companies/7glyphs@2x.png'),
    ],
    color: 'default',
    href: 'https://7glyphs.com',
  },
  t1: {
    title: COMPANY_TITLE.t1,
    images: [importImg('companies/t1.png'), importImg('companies/t1@2x.png')],
    color: 'blue',
    href: 'http://www.t1-consulting.ru',
  },
  everpoint: {
    title: COMPANY_TITLE.everpoint,
    images: [
      importImg('companies/everpoint.png'),
      importImg('companies/everpoint@2x.png'),
    ],
    color: 'grass',
    href: 'https://www.everpoint.ru',
  },
  mvideo: {
    title: COMPANY_TITLE.mvideo,
    images: [
      importImg('companies/mvideo.png'),
      importImg('companies/mvideo@2x.png'),
    ],
    color: 'red',
    href: 'https://www.mvideo.ru',
  },
}

export const FEATURE = {
  rest: 'REST API',
  stripe: 'Stripe',
  keycloak: 'Keycloak',
  docker: 'Docker',
  socket: 'WebSocket',
}

export const TECHNOLOGY_TITLE = {
  js: 'JavaScript',
  ts: 'TypeScript',
  react: 'React',
  reactquery: 'React Query',
  redux: 'Redux',
  zustand: 'Zustand',
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
  sass: 'Sass',
  less: 'Less',
  modules: 'CSS Modules',
  bem: 'BEM',
  styled: 'styled-components',
  mui: 'Material-UI',
  ant: 'Ant Design',
  reactstrap: 'reactstrap',
  materialize: 'Materialize',
  bootstrap: 'Bootstrap',
  semantic: 'Semantic UI',
  gsap: 'GreenSock',
  emails: 'Foundation for Emails',
  npm: 'npm',
  yarn: 'Yarn',
  vite: 'Vite',
  webpack: 'webpack',
  gulp: 'Gulp',
  gatsby: 'Gatsby',
  next: 'Next.js',
  git: 'Git',
  babel: 'Babel',
  prettier: 'Prettier',
  eslint: 'ESLint',
  storybook: 'Storybook',
  jest: 'Jest',
  item: 'iTerm2',
  vscode: 'Visual Studio Code',
  phpstorm: 'PhpStorm',
  devtools: 'Chrome DevTools',
  zeplin: 'Zeplin',
  sketch: 'Sketch',
  figma: 'Figma',
  photoshop: 'Photoshop',
  optim: 'ImageOptim',
  paw: 'Paw',
  clickup: 'ClickUp',
  macos: 'macOS Ventura',
  reactnative: 'React Native',
  expo: 'Expo',
  node: 'Node.js',
  mongo: 'MongoDB',
  mysql: 'MySQL',
  php: 'PHP',
  laravel: 'Laravel',
  docker: 'Docker',
  mac: "Apple MacBook Pro 16'' (M1 Pro)",
  ipad: "Apple iPad Pro 12.9'' (M1)",
  keyboard: 'Keychron K3 (Red Switch)',
  mouse: 'Logitech MX Master 3S For Mac',
  trackpad: 'Apple Magic Trackpad 2',
  airpods: 'Apple AirPods Pro',
  glasses: 'Qukan W1',
  mascot: 'LEGO Star Wars Stormtrooper',
}

export const MAIN_TECHNOLOGY_LINK = {
  react: 'https://reactjs.org',
  mui: 'https://material-ui.com',
}

export const TECHNOLOGY_GROUPS: TechnologyGroup[] = [
  {
    tKey: 'logic',
    technologies: [
      {
        name: 'js',
        label: TECHNOLOGY_TITLE.js,
        color: 'yellow',
        href: 'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
      },
      {
        name: 'ts',
        label: TECHNOLOGY_TITLE.ts,
        color: 'blue',
        href: 'https://www.typescriptlang.org',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.react,
        color: 'blue',
        href: MAIN_TECHNOLOGY_LINK.react,
      },
      {
        name: 'reactquery',
        label: TECHNOLOGY_TITLE.reactquery,
        color: 'red',
        href: 'https://react-query.tanstack.com',
      },
      {
        name: 'redux',
        label: TECHNOLOGY_TITLE.redux,
        color: 'violet',
        href: 'https://redux.js.org',
      },
      {
        name: 'zustand',
        label: TECHNOLOGY_TITLE.zustand,
        color: 'yellow',
        href: 'https://zustand-demo.pmnd.rs',
      },
      {
        name: 'mobx',
        label: TECHNOLOGY_TITLE.mobx,
        color: 'red',
        href: 'https://mobx.js.org',
      },
      {
        name: 'preact',
        label: TECHNOLOGY_TITLE.preact,
        color: 'violet',
        href: 'https://preactjs.com',
      },
      {
        name: 'vue',
        label: TECHNOLOGY_TITLE.vue,
        color: 'grass',
        href: 'https://vuejs.org',
      },
      {
        name: 'svelte',
        label: TECHNOLOGY_TITLE.svelte,
        color: 'red',
        href: 'https://svelte.dev',
      },
      {
        name: 'apollo',
        label: TECHNOLOGY_TITLE.apollo,
        color: 'blue',
        href: 'https://www.apollographql.com/docs/react',
      },
      {
        name: 'jquery',
        label: TECHNOLOGY_TITLE.jquery,
        color: 'blue',
        href: 'https://jquery.com',
      },
    ],
  },
  {
    tKey: 'markup',
    technologies: [
      {
        name: 'html',
        label: TECHNOLOGY_TITLE.html,
        color: 'red',
        href: 'https://html.spec.whatwg.org/multipage',
      },
      {
        name: 'svg',
        label: TECHNOLOGY_TITLE.svg,
        color: 'yellow',
        href: 'https://www.w3.org/Graphics/svg',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.jsx,
        color: 'blue',
        href: 'https://reactjs.org/docs/introducing-jsx.html',
      },
      {
        name: 'pug',
        label: TECHNOLOGY_TITLE.pug,
        color: 'yellow',
        href: 'https://pugjs.org/api/getting-started.html',
      },
      {
        name: 'handlebars',
        label: TECHNOLOGY_TITLE.handlebars,
        color: 'default',
        href: 'https://handlebarsjs.com',
      },
      {
        name: 'markdown',
        label: TECHNOLOGY_TITLE.markdown,
        color: 'default',
        href: 'https://daringfireball.net/projects/markdown',
      },
      {
        name: 'laravel',
        label: TECHNOLOGY_TITLE.blade,
        color: 'red',
        href: 'https://laravel.com/docs/5.6/blade#introduction',
      },
    ],
  },
  {
    tKey: 'styles',
    technologies: [
      {
        name: 'css',
        label: TECHNOLOGY_TITLE.css,
        color: 'blue',
        href: 'https://www.w3.org/style/css',
      },
      {
        name: 'sass',
        label: TECHNOLOGY_TITLE.sass,
        color: 'red',
        href: 'https://sass-lang.com',
      },
      {
        name: 'less',
        label: TECHNOLOGY_TITLE.less,
        color: 'blue',
        href: 'https://lesscss.org',
      },
      {
        name: 'modules',
        label: TECHNOLOGY_TITLE.modules,
        color: 'default',
        href: 'https://github.com/css-modules/css-modules',
      },
      {
        name: 'bem',
        label: TECHNOLOGY_TITLE.bem,
        color: 'default',
        href: 'https://bem.info',
      },
      {
        name: 'styled',
        label: TECHNOLOGY_TITLE.styled,
        color: 'red',
        href: 'https://styled-components.com',
      },
      {
        name: 'mui',
        label: TECHNOLOGY_TITLE.mui,
        color: 'blue',
        href: MAIN_TECHNOLOGY_LINK.mui,
      },
      {
        name: 'ant',
        label: TECHNOLOGY_TITLE.ant,
        color: 'blue',
        href: 'https://ant.design',
      },
      {
        name: 'reactstrap',
        label: TECHNOLOGY_TITLE.reactstrap,
        color: 'default',
        href: 'https://reactstrap.github.io/',
      },
      {
        name: 'materialize',
        label: TECHNOLOGY_TITLE.materialize,
        color: 'red',
        href: 'https://materializecss.com',
      },
      {
        name: 'bootstrap',
        label: TECHNOLOGY_TITLE.bootstrap,
        color: 'violet',
        href: 'https://getbootstrap.com',
      },
      {
        name: 'semantic',
        label: TECHNOLOGY_TITLE.semantic,
        color: 'green',
        href: 'https://semantic-ui.com',
      },
      {
        name: 'gsap',
        label: TECHNOLOGY_TITLE.gsap,
        color: 'grass',
        href: 'https://greensock.com',
      },
      {
        name: 'emails',
        label: TECHNOLOGY_TITLE.emails,
        color: 'red',
        href: 'https://get.foundation/emails.html',
      },
    ],
  },
  {
    tKey: 'tools',
    technologies: [
      {
        name: 'git',
        label: TECHNOLOGY_TITLE.git,
        color: 'red',
        href: 'https://git-scm.com',
      },
      {
        name: 'npm',
        label: TECHNOLOGY_TITLE.npm,
        color: 'red',
        href: 'https://www.npmjs.com',
      },
      {
        name: 'yarn',
        label: TECHNOLOGY_TITLE.yarn,
        color: 'blue',
        href: 'https://yarnpkg.com',
      },
      {
        name: 'vite',
        label: TECHNOLOGY_TITLE.vite,
        color: 'violet',
        href: 'https://vitejs.dev',
      },
      {
        name: 'webpack',
        label: TECHNOLOGY_TITLE.webpack,
        color: 'blue',
        href: 'https://webpack.js.org',
      },
      {
        name: 'gulp',
        label: TECHNOLOGY_TITLE.gulp,
        color: 'red',
        href: 'https://gulpjs.com',
      },
      {
        name: 'babel',
        label: TECHNOLOGY_TITLE.babel,
        color: 'yellow',
        href: 'https://babeljs.io',
      },
      {
        name: 'prettier',
        label: TECHNOLOGY_TITLE.prettier,
        color: 'default',
        href: 'https://prettier.io',
      },
      {
        name: 'eslint',
        label: TECHNOLOGY_TITLE.eslint,
        color: 'violet',
        href: 'https://eslint.org',
      },
      {
        name: 'next',
        label: TECHNOLOGY_TITLE.next,
        color: 'default',
        href: 'https://nextjs.org',
      },
      {
        name: 'gatsby',
        label: TECHNOLOGY_TITLE.gatsby,
        color: 'violet',
        href: 'https://www.gatsbyjs.org',
      },
      {
        name: 'storybook',
        label: TECHNOLOGY_TITLE.storybook,
        color: 'red',
        href: 'https://storybook.js.org',
      },
      {
        name: 'jest',
        label: TECHNOLOGY_TITLE.jest,
        color: 'red',
        href: 'https://jestjs.io',
      },
    ],
  },
  {
    tKey: 'misc',
    technologies: [
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.reactnative,
        color: 'blue',
        href: 'https://reactnative.dev',
      },
      {
        name: 'expo',
        label: TECHNOLOGY_TITLE.expo,
        color: 'default',
        href: 'https://expo.dev',
      },
      {
        name: 'node',
        label: TECHNOLOGY_TITLE.node,
        color: 'grass',
        href: 'https://nodejs.org',
      },
      {
        name: 'mongo',
        label: TECHNOLOGY_TITLE.mongo,
        color: 'grass',
        href: 'https://www.mongodb.com',
      },
      {
        name: 'mysql',
        label: TECHNOLOGY_TITLE.mysql,
        color: 'blue',
        href: 'https://www.mysql.com',
      },
      {
        name: 'php',
        label: TECHNOLOGY_TITLE.php,
        color: 'violet',
        href: 'https://www.php.net',
      },
      {
        name: 'laravel',
        label: TECHNOLOGY_TITLE.laravel,
        color: 'red',
        href: 'https://laravel.com',
      },
      {
        name: 'docker',
        label: TECHNOLOGY_TITLE.docker,
        color: 'blue',
        href: 'https://www.docker.com',
      },
    ],
  },
  {
    tKey: 'software',
    technologies: [
      {
        name: 'iterm',
        label: TECHNOLOGY_TITLE.item,
        color: 'grass',
        href: 'https://iterm2.com',
      },
      {
        name: 'vscode',
        label: TECHNOLOGY_TITLE.vscode,
        color: 'blue',
        href: 'https://code.visualstudio.com',
      },
      {
        name: 'phpstorm',
        label: TECHNOLOGY_TITLE.phpstorm,
        color: 'violet',
        href: 'https://www.jetbrains.com/phpstorm',
      },
      {
        name: 'devtools',
        label: TECHNOLOGY_TITLE.devtools,
        color: 'default',
        href: 'https://developers.google.com/web/tools/chrome-devtools',
      },
      {
        name: 'zeplin',
        label: TECHNOLOGY_TITLE.zeplin,
        color: 'yellow',
        href: 'https://zeplin.io',
      },
      {
        name: 'sketch',
        label: TECHNOLOGY_TITLE.sketch,
        color: 'yellow',
        href: 'https://www.sketch.com',
      },
      {
        name: 'figma',
        label: TECHNOLOGY_TITLE.figma,
        color: 'red',
        href: 'https://www.figma.com/',
      },
      {
        name: 'photoshop',
        label: TECHNOLOGY_TITLE.photoshop,
        color: 'blue',
        href: 'https://www.adobe.com/ru/products/photoshop.html',
      },
      {
        name: 'optim',
        label: TECHNOLOGY_TITLE.optim,
        color: 'default',
        href: 'https://imageoptim.com',
      },
      {
        name: 'paw',
        label: TECHNOLOGY_TITLE.paw,
        color: 'blue',
        href: 'https://paw.cloud',
      },
      {
        name: 'clickup',
        label: TECHNOLOGY_TITLE.clickup,
        color: 'violet',
        href: 'https://clickup.com',
      },
      {
        name: 'macos',
        label: TECHNOLOGY_TITLE.macos,
        color: 'yellow',
        href: 'https://www.apple.com/macos/ventura',
      },
    ],
  },
  {
    tKey: 'hardware',
    technologies: [
      {
        name: 'mac',
        label: TECHNOLOGY_TITLE.mac,
        color: 'default',
        href: 'https://www.apple.com/macbook-pro-14-and-16',
      },
      {
        name: 'ipad',
        label: TECHNOLOGY_TITLE.ipad,
        color: 'default',
        href: 'https://www.apple.com/ipad-pro',
      },
      {
        name: 'keyboard',
        label: TECHNOLOGY_TITLE.keyboard,
        color: 'red',
        href: 'https://www.keychron.com/collections/low-profile-keyboard-collection/products/keychron-k3-wireless-mechanical-keyboard?variant=32220198928473',
      },
      {
        name: 'mouse',
        label: TECHNOLOGY_TITLE.mouse,
        color: 'default',
        href: 'https://www.logitech.com/en-us/products/mice/mx-master-3s-mac-bluetooth-mouse.910-006570',
      },
      {
        name: 'trackpad',
        label: TECHNOLOGY_TITLE.trackpad,
        color: 'default',
        href: 'https://www.apple.com/shop/product/MMMP3AM/A/magic-trackpad-black-multi-touch-surface?fnode=6244f8b1f93720dfd5ea27c7c6e8ae7aab984968920761941d8af235417cb2ecf95cc816a20ac8709c677b86759bd3bb248762be9a693b327b17cc88e10d74233ac00f76840a93cf8835235a616513bda2e56a178ed07b255334dbff47fca7f0',
      },
      {
        name: 'airpods',
        label: TECHNOLOGY_TITLE.airpods,
        color: 'default',
        href: 'https://www.apple.com/airpods-pro',
      },
      {
        name: 'glasses',
        label: TECHNOLOGY_TITLE.glasses,
        color: 'default',
        href: 'https://www.aliexpress.com/item/32969115946.html?spm=a2g0o.seodetail.topbuy.1.9ff6269dwNxZiN',
      },
      {
        name: 'mascot',
        label: TECHNOLOGY_TITLE.mascot,
        color: 'default',
        href: 'https://media.entertainmentearth.com/assets/images/cfa66064858142faaa7f0cc9cbaa8c98lg.jpg',
      },
    ],
  },
]
