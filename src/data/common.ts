import {YouTube as YouTubeIcon} from '@mui/icons-material'

import {publicImg} from '#utils/helpers'
import SevenGlyphsIcon from '#assets/icons/7glyphs.svg?react'
import GitHubIcon from '#assets/icons/github.svg?react'
import LinkedInIcon from '#assets/icons/linkedin.svg?react'
import InstagramIcon from '#assets/icons/instagram.svg?react'
import VKIcon from '#assets/icons/vk.svg?react'
import DuolingoIcon from '#assets/icons/duolingo.svg?react'
import FacebookIcon from '#assets/icons/facebook.svg?react'
import TelegramIcon from '#assets/icons/telegram.svg?react'
import {
  ISocialLink,
  ICompany,
  ITechnologyGroup,
  ITechnology,
} from '#utils/types'

interface IContactLink {
  gitHub: ISocialLink
  linkedIn: ISocialLink
  sevenGlyphs: ISocialLink
  youTube: ISocialLink
  instagram: ISocialLink
  vk: ISocialLink
  facebook: ISocialLink
  telegram: ISocialLink
  duolingo: ISocialLink
}

interface ICompanyData {
  goRentals: ICompany
  sevenGlyphs: ICompany
  t1: ICompany
  everpoint: ICompany
  mVideo: ICompany
}

export const MY_NAME = 'Michael Any'

export const COMPANY: ICompanyData = {
  goRentals: {
    title: 'GO Rentals',
    name: 'goRentals',
    images: [
      publicImg('companies/gorentals'),
      publicImg('companies/gorentals@2x.png'),
    ],
    color: 'red',
    href: 'https://gorentals.co.nz',
  },
  sevenGlyphs: {
    title: '7 glyphs',
    name: 'sevenGlyphs',
    images: [
      publicImg('companies/7glyphs.png'),
      publicImg('companies/7glyphs@2x.png'),
    ],
    color: 'default',
    href: 'https://7glyphs.com',
  },
  t1: {
    title: 'T1 Consulting',
    name: 't1',
    images: [publicImg('companies/t1.png'), publicImg('companies/t1@2x.png')],
    color: 'blue',
    href: 'http://t1-consulting.ru',
  },
  everpoint: {
    title: 'Everpoint',
    name: 'everpoint',
    images: [
      publicImg('companies/everpoint.png'),
      publicImg('companies/everpoint@2x.png'),
    ],
    color: 'grass',
    href: 'https://everpoint.ru',
  },
  mVideo: {
    title: 'M.Video',
    name: 'mVideo',
    images: [
      publicImg('companies/mvideo.png'),
      publicImg('companies/mvideo@2x.png'),
    ],
    color: 'red',
    href: 'https://mvideo.ru',
  },
}

export const CONTACT_LINK: IContactLink = {
  gitHub: {
    title: 'GitHub',
    href: 'https://github.com/michaelany',
    Icon: GitHubIcon,
    size: 'lg',
  },
  linkedIn: {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/michaelany',
    Icon: LinkedInIcon,
    size: 'sm',
  },
  telegram: {
    title: 'Telegram',
    href: 'https://t.me/michaelany',
    Icon: TelegramIcon,
    size: 'md',
  },
  youTube: {
    title: 'YouTube',
    href: 'https://youtube.com/@michaelany',
    Icon: YouTubeIcon,
    size: 'xl',
  },
  instagram: {
    title: 'Instagram',
    href: 'https://instagram.com/anymichael',
    Icon: InstagramIcon,
    size: 'md',
  },
  facebook: {
    title: 'Facebook',
    href: 'https://facebook.com/michaelany.fb',
    Icon: FacebookIcon,
    size: 'sm',
  },
  sevenGlyphs: {
    title: `${COMPANY.sevenGlyphs.title} Team`,
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
  duolingo: {
    title: 'Duolingo',
    href: 'https://duolingo.com/profile/michael.any',
    Icon: DuolingoIcon,
    size: 'md',
  },
}

export const FEATURE = {
  rest: 'REST API',
  keycloak: 'Keycloak',
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
  mui: 'Material UI',
  ant: 'Ant Design',
  tailwind: 'Tailwind CSS',
  bulma: 'Bulma',
  materialize: 'Materialize',
  bootstrap: 'Bootstrap',
  semantic: 'Semantic UI',
  npm: 'npm',
  pnpm: 'pnpm',
  yarn: 'Yarn',
  vite: 'Vite',
  webpack: 'webpack',
  gulp: 'Gulp',
  gatsby: 'Gatsby',
  gsap: 'GSAP',
  next: 'Next.js',
  nuxt: 'Nuxt',
  git: 'Git',
  babel: 'Babel',
  prettier: 'Prettier',
  eslint: 'ESLint',
  storybook: 'Storybook',
  jest: 'Jest',
  cypress: 'Cypress',
  iterm: 'iTerm2',
  vscode: 'Visual Studio Code',
  phpstorm: 'PhpStorm',
  devtools: 'Chrome DevTools',
  zeplin: 'Zeplin',
  sketch: 'Sketch',
  figma: 'Figma',
  photoshop: 'Photoshop',
  optim: 'ImageOptim',
  browserstack: 'BrowserStack',
  azure: 'Azure',
  paw: 'RapidAPI',
  clickup: 'ClickUp',
  jira: 'Jira',
  notes: 'Notes',
  fcpx: 'Final Cut Pro',
  macos: 'macOS Sequoia',
  gpt: 'ChatGPT',
  reactnative: 'React Native',
  expo: 'Expo',
  node: 'Node.js',
  wordpress: 'WordPress',
  strapi: 'Strapi',
  mongo: 'MongoDB',
  mysql: 'MySQL',
  php: 'PHP',
  laravel: 'Laravel',
  docker: 'Docker',
  stripe: 'Stripe',
  epidemic: 'Epidemic Sound',
  mac: "Apple MacBook Pro 16'' (M1 Pro)",
  ipad: "Apple iPad Pro 12.9'' (M1)",
  keyboard: 'Keychron K3 (Red Switch)',
  mouse: 'Logitech MX Master 3S For Mac',
  trackpad: 'Apple Magic Trackpad 2',
  airpods: 'Apple AirPods Pro (2nd generation)',
  dock: 'OWC Thunderbolt Dock',
  mic: 'Rode NT-USB+',
  iphone: 'iPhone 14 Pro',
  gopro: 'GoPro HERO 11',
  glasses: 'Qukan W1',
  mascot: 'LEGO Star Wars Stormtrooper',
}

export const MAIN_TECHNOLOGY_LINK = {
  react: 'https://reactjs.org',
  mui: 'https://material-ui.com',
}

const commonTechnologyImages = {
  react: [
    publicImg('technologies/react.png'),
    publicImg('technologies/react@2x.png'),
  ],
  laravel: [
    publicImg('technologies/laravel.png'),
    publicImg('technologies/laravel@2x.png'),
  ],
}

export const TECHNOLOGY_GROUPS: ITechnologyGroup[] = [
  {
    tKey: 'logic',
    technologies: [
      {
        name: 'js',
        label: TECHNOLOGY_TITLE.js,
        color: 'yellow',
        images: [
          publicImg('technologies/js.png'),
          publicImg('technologies/js@2x.png'),
        ],
        href: 'https://ecma-international.org/publications/standards/Ecma-262.htm',
      },
      {
        name: 'ts',
        label: TECHNOLOGY_TITLE.ts,
        color: 'blue',
        images: [
          publicImg('technologies/ts.png'),
          publicImg('technologies/ts@2x.png'),
        ],
        href: 'https://typescriptlang.org',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.react,
        color: 'blue',
        images: commonTechnologyImages.react,
        href: MAIN_TECHNOLOGY_LINK.react,
      },
      {
        name: 'vue',
        label: TECHNOLOGY_TITLE.vue,
        color: 'grass',
        images: [
          publicImg('technologies/vue.png'),
          publicImg('technologies/vue@2x.png'),
        ],
        href: 'https://vuejs.org',
      },
      {
        name: 'reactquery',
        label: TECHNOLOGY_TITLE.reactquery,
        color: 'red',
        images: [
          publicImg('technologies/reactquery.png'),
          publicImg('technologies/reactquery@2x.png'),
        ],
        href: 'https://tanstack.com/query',
      },
      {
        name: 'zustand',
        label: TECHNOLOGY_TITLE.zustand,
        color: 'yellow',
        images: [
          publicImg('technologies/zustand.png'),
          publicImg('technologies/zustand@2x.png'),
        ],
        href: 'https://zustand-demo.pmnd.rs',
      },
      {
        name: 'redux',
        label: TECHNOLOGY_TITLE.redux,
        color: 'violet',
        images: [
          publicImg('technologies/redux.png'),
          publicImg('technologies/redux@2x.png'),
        ],
        href: 'https://redux.js.org',
      },
      {
        name: 'mobx',
        label: TECHNOLOGY_TITLE.mobx,
        color: 'red',
        images: [
          publicImg('technologies/mobx.png'),
          publicImg('technologies/mobx@2x.png'),
        ],
        href: 'https://mobx.js.org',
      },
      {
        name: 'next',
        label: TECHNOLOGY_TITLE.next,
        color: 'default',
        images: [
          publicImg('technologies/next.png'),
          publicImg('technologies/next@2x.png'),
        ],
        href: 'https://nextjs.org',
      },
      {
        name: 'nuxt',
        label: TECHNOLOGY_TITLE.nuxt,
        color: 'grass',
        images: [
          publicImg('technologies/nuxt.png'),
          publicImg('technologies/nuxt@2x.png'),
        ],
        href: 'https://nuxt.com/',
      },
      {
        name: 'gatsby',
        label: TECHNOLOGY_TITLE.gatsby,
        color: 'violet',
        images: [
          publicImg('technologies/gatsby.png'),
          publicImg('technologies/gatsby@2x.png'),
        ],
        href: 'https://gatsbyjs.org',
      },

      {
        name: 'preact',
        label: TECHNOLOGY_TITLE.preact,
        color: 'violet',
        images: [
          publicImg('technologies/preact.png'),
          publicImg('technologies/preact@2x.png'),
        ],
        href: 'https://preactjs.com',
      },
      {
        name: 'svelte',
        label: TECHNOLOGY_TITLE.svelte,
        color: 'red',
        images: [
          publicImg('technologies/svelte.png'),
          publicImg('technologies/svelte@2x.png'),
        ],
        href: 'https://svelte.dev',
      },
      {
        name: 'apollo',
        label: TECHNOLOGY_TITLE.apollo,
        color: 'blue',
        images: [
          publicImg('technologies/apollo.png'),
          publicImg('technologies/apollo@2x.png'),
        ],
        href: 'https://apollographql.com/docs/react',
      },
      {
        name: 'jquery',
        label: TECHNOLOGY_TITLE.jquery,
        color: 'blue',
        images: [
          publicImg('technologies/jquery.png'),
          publicImg('technologies/jquery@2x.png'),
        ],
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
        images: [
          publicImg('technologies/html.png'),
          publicImg('technologies/html@2x.png'),
        ],
        href: 'https://html.spec.whatwg.org/multipage',
      },
      {
        name: 'svg',
        label: TECHNOLOGY_TITLE.svg,
        color: 'yellow',
        images: [
          publicImg('technologies/svg.png'),
          publicImg('technologies/svg@2x.png'),
        ],
        href: 'https://w3.org/Graphics/svg',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.jsx,
        color: 'blue',
        images: commonTechnologyImages.react,
        href: 'https://react.dev/learn/writing-markup-with-jsx',
      },
      {
        name: 'pug',
        label: TECHNOLOGY_TITLE.pug,
        color: 'yellow',
        images: [
          publicImg('technologies/pug.png'),
          publicImg('technologies/pug@2x.png'),
        ],
        href: 'https://pugjs.org/api/getting-started.html',
      },
      {
        name: 'handlebars',
        label: TECHNOLOGY_TITLE.handlebars,
        color: 'default',
        images: [
          publicImg('technologies/handlebars.png'),
          publicImg('technologies/handlebars@2x.png'),
        ],
        href: 'https://handlebarsjs.com',
      },
      {
        name: 'markdown',
        label: TECHNOLOGY_TITLE.markdown,
        color: 'default',
        images: [
          publicImg('technologies/markdown.png'),
          publicImg('technologies/markdown@2x.png'),
        ],
        href: 'https://daringfireball.net/projects/markdown',
      },
      {
        name: 'blade',
        label: TECHNOLOGY_TITLE.blade,
        color: 'red',
        images: commonTechnologyImages.laravel,
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
        images: [
          publicImg('technologies/css.png'),
          publicImg('technologies/css@2x.png'),
        ],
        href: 'https://w3.org/style/css',
      },
      {
        name: 'sass',
        label: TECHNOLOGY_TITLE.sass,
        color: 'red',
        images: [
          publicImg('technologies/sass.png'),
          publicImg('technologies/sass@2x.png'),
        ],
        href: 'https://sass-lang.com',
      },
      {
        name: 'less',
        label: TECHNOLOGY_TITLE.less,
        color: 'blue',
        images: [
          publicImg('technologies/less.png'),
          publicImg('technologies/less@2x.png'),
        ],
        href: 'https://lesscss.org',
      },
      {
        name: 'modules',
        label: TECHNOLOGY_TITLE.modules,
        color: 'default',
        images: [
          publicImg('technologies/modules.png'),
          publicImg('technologies/modules@2x.png'),
        ],
        href: 'https://github.com/css-modules/css-modules',
      },
      {
        name: 'bem',
        label: TECHNOLOGY_TITLE.bem,
        color: 'default',
        images: [
          publicImg('technologies/bem.png'),
          publicImg('technologies/bem@2x.png'),
        ],
        href: 'https://bem.info',
      },
      {
        name: 'styled',
        label: TECHNOLOGY_TITLE.styled,
        color: 'red',
        images: [
          publicImg('technologies/styled.png'),
          publicImg('technologies/styled@2x.png'),
        ],
        href: 'https://styled-components.com',
      },
      {
        name: 'mui',
        label: TECHNOLOGY_TITLE.mui,
        color: 'blue',
        images: [
          publicImg('technologies/mui.png'),
          publicImg('technologies/mui@2x.png'),
        ],
        href: MAIN_TECHNOLOGY_LINK.mui,
      },
      {
        name: 'ant',
        label: TECHNOLOGY_TITLE.ant,
        color: 'blue',
        images: [
          publicImg('technologies/ant.png'),
          publicImg('technologies/ant@2x.png'),
        ],
        href: 'https://ant.design',
      },
      {
        name: 'tailwind',
        label: TECHNOLOGY_TITLE.tailwind,
        color: 'blue',
        images: [
          publicImg('technologies/tailwind.png'),
          publicImg('technologies/tailwind@2x.png'),
        ],
        href: 'https://tailwindcss.com',
      },
      {
        name: 'bulma',
        label: TECHNOLOGY_TITLE.bulma,
        color: 'green',
        images: [
          publicImg('technologies/bulma.png'),
          publicImg('technologies/bulma@2x.png'),
        ],
        href: 'https://bulma.io',
      },
      {
        name: 'materialize',
        label: TECHNOLOGY_TITLE.materialize,
        color: 'red',
        images: [
          publicImg('technologies/materialize.png'),
          publicImg('technologies/materialize@2x.png'),
        ],
        href: 'https://materializecss.com',
      },
      {
        name: 'bootstrap',
        label: TECHNOLOGY_TITLE.bootstrap,
        color: 'violet',
        images: [
          publicImg('technologies/bootstrap.png'),
          publicImg('technologies/bootstrap@2x.png'),
        ],
        href: 'https://getbootstrap.com',
      },
      {
        name: 'semantic',
        label: TECHNOLOGY_TITLE.semantic,
        color: 'green',
        images: [
          publicImg('technologies/semantic.png'),
          publicImg('technologies/semantic@2x.png'),
        ],
        href: 'https://semantic-ui.com',
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
        images: [
          publicImg('technologies/git.png'),
          publicImg('technologies/git@2x.png'),
        ],
        href: 'https://git-scm.com',
      },
      {
        name: 'npm',
        label: TECHNOLOGY_TITLE.npm,
        color: 'red',
        images: [
          publicImg('technologies/npm.png'),
          publicImg('technologies/npm@2x.png'),
        ],
        href: 'https://npmjs.com',
      },
      {
        name: 'pnpm',
        label: TECHNOLOGY_TITLE.pnpm,
        color: 'yellow',
        images: [
          publicImg('technologies/pnpm.png'),
          publicImg('technologies/pnpm@2x.png'),
        ],
        href: 'https://pnpm.io',
      },
      {
        name: 'yarn',
        label: TECHNOLOGY_TITLE.yarn,
        color: 'blue',
        images: [
          publicImg('technologies/yarn.png'),
          publicImg('technologies/yarn@2x.png'),
        ],
        href: 'https://yarnpkg.com',
      },
      {
        name: 'vite',
        label: TECHNOLOGY_TITLE.vite,
        color: 'violet',
        images: [
          publicImg('technologies/vite.png'),
          publicImg('technologies/vite@2x.png'),
        ],
        href: 'https://vitejs.dev',
      },
      {
        name: 'webpack',
        label: TECHNOLOGY_TITLE.webpack,
        color: 'blue',
        images: [
          publicImg('technologies/webpack.png'),
          publicImg('technologies/webpack@2x.png'),
        ],
        href: 'https://webpack.js.org',
      },
      {
        name: 'gulp',
        label: TECHNOLOGY_TITLE.gulp,
        color: 'red',
        images: [
          publicImg('technologies/gulp.png'),
          publicImg('technologies/gulp@2x.png'),
        ],
        href: 'https://gulpjs.com',
      },
      {
        name: 'babel',
        label: TECHNOLOGY_TITLE.babel,
        color: 'yellow',
        images: [
          publicImg('technologies/babel.png'),
          publicImg('technologies/babel@2x.png'),
        ],
        href: 'https://babeljs.io',
      },
      {
        name: 'gsap',
        label: TECHNOLOGY_TITLE.gsap,
        color: 'grass',
        images: [
          publicImg('technologies/gsap.png'),
          publicImg('technologies/gsap@2x.png'),
        ],
        href: 'https://gsap.com',
      },
      {
        name: 'prettier',
        label: TECHNOLOGY_TITLE.prettier,
        color: 'default',
        images: [
          publicImg('technologies/prettier.png'),
          publicImg('technologies/prettier@2x.png'),
        ],
        href: 'https://prettier.io',
      },
      {
        name: 'eslint',
        label: TECHNOLOGY_TITLE.eslint,
        color: 'violet',
        images: [
          publicImg('technologies/eslint.png'),
          publicImg('technologies/eslint@2x.png'),
        ],
        href: 'https://eslint.org',
      },
      {
        name: 'storybook',
        label: TECHNOLOGY_TITLE.storybook,
        color: 'red',
        images: [
          publicImg('technologies/storybook.png'),
          publicImg('technologies/storybook@2x.png'),
        ],
        href: 'https://storybook.js.org',
      },
      {
        name: 'jest',
        label: TECHNOLOGY_TITLE.jest,
        color: 'red',
        images: [
          publicImg('technologies/jest.png'),
          publicImg('technologies/jest@2x.png'),
        ],
        href: 'https://jestjs.io',
      },
      {
        name: 'cypress',
        label: TECHNOLOGY_TITLE.cypress,
        color: 'grass',
        images: [
          publicImg('technologies/cypress.png'),
          publicImg('technologies/cypress@2x.png'),
        ],
        href: 'https://cypress.io',
      },
    ],
  },
  {
    tKey: 'misc',
    technologies: [
      {
        name: 'gpt',
        label: TECHNOLOGY_TITLE.gpt,
        color: 'green',
        images: [
          publicImg('technologies/gpt.png'),
          publicImg('technologies/gpt@2x.png'),
        ],
        href: 'https://openai.com/chatgpt',
      },
      {
        name: 'reactnative',
        label: TECHNOLOGY_TITLE.reactnative,
        color: 'blue',
        images: [
          publicImg('technologies/reactnative.png'),
          publicImg('technologies/reactnative@2x.png'),
        ],
        href: 'https://reactnative.dev',
      },
      {
        name: 'expo',
        label: TECHNOLOGY_TITLE.expo,
        color: 'default',
        images: [
          publicImg('technologies/expo.png'),
          publicImg('technologies/expo@2x.png'),
        ],
        href: 'https://expo.dev',
      },
      {
        name: 'node',
        label: TECHNOLOGY_TITLE.node,
        color: 'grass',
        images: [
          publicImg('technologies/node.png'),
          publicImg('technologies/node@2x.png'),
        ],
        href: 'https://nodejs.org',
      },
      {
        name: 'wordpress',
        label: TECHNOLOGY_TITLE.wordpress,
        color: 'default',
        images: [
          publicImg('technologies/wordpress.png'),
          publicImg('technologies/wordpress@2x.png'),
        ],
        href: 'https://wordpress.com',
      },
      {
        name: 'strapi',
        label: TECHNOLOGY_TITLE.strapi,
        color: 'violet',
        images: [
          publicImg('technologies/strapi.png'),
          publicImg('technologies/strapi@2x.png'),
        ],
        href: 'https://strapi.io',
      },
      {
        name: 'mongo',
        label: TECHNOLOGY_TITLE.mongo,
        color: 'grass',
        images: [
          publicImg('technologies/mongo.png'),
          publicImg('technologies/mongo@2x.png'),
        ],
        href: 'https://mongodb.com',
      },
      {
        name: 'mysql',
        label: TECHNOLOGY_TITLE.mysql,
        color: 'yellow',
        images: [
          publicImg('technologies/mysql.png'),
          publicImg('technologies/mysql@2x.png'),
        ],
        href: 'https://mysql.com',
      },
      {
        name: 'php',
        label: TECHNOLOGY_TITLE.php,
        color: 'violet',
        images: [
          publicImg('technologies/php.png'),
          publicImg('technologies/php@2x.png'),
        ],
        href: 'https://php.net',
      },
      {
        name: 'laravel',
        label: TECHNOLOGY_TITLE.laravel,
        color: 'red',
        images: commonTechnologyImages.laravel,
        href: 'https://laravel.com',
      },
      {
        name: 'docker',
        label: TECHNOLOGY_TITLE.docker,
        color: 'blue',
        images: [
          publicImg('technologies/docker.png'),
          publicImg('technologies/docker@2x.png'),
        ],
        href: 'https://docker.com',
      },
      {
        name: 'stripe',
        label: TECHNOLOGY_TITLE.stripe,
        color: 'violet',
        images: [
          publicImg('technologies/stripe.png'),
          publicImg('technologies/stripe@2x.png'),
        ],
        href: 'https://stripe.com',
      },
      {
        name: 'youtube',
        label: CONTACT_LINK.youTube.title,
        color: 'red',
        images: [
          publicImg('technologies/youtube.png'),
          publicImg('technologies/youtube@2x.png'),
        ],
        href: CONTACT_LINK.youTube.href,
      },
      {
        name: 'epidemic',
        label: TECHNOLOGY_TITLE.epidemic,
        color: 'default',
        images: [
          publicImg('technologies/epidemic.png'),
          publicImg('technologies/epidemic@2x.png'),
        ],
        href: 'https://share.epidemicsound.com/5mzb54',
      },
    ],
  },
  {
    tKey: 'software',
    technologies: [
      {
        name: 'iterm',
        label: TECHNOLOGY_TITLE.iterm,
        color: 'grass',
        images: [
          publicImg('technologies/iterm.png'),
          publicImg('technologies/iterm@2x.png'),
        ],
        href: 'https://iterm2.com',
      },
      {
        name: 'vscode',
        label: TECHNOLOGY_TITLE.vscode,
        color: 'blue',
        images: [
          publicImg('technologies/vscode.png'),
          publicImg('technologies/vscode@2x.png'),
        ],
        href: 'https://code.visualstudio.com',
      },
      {
        name: 'phpstorm',
        label: TECHNOLOGY_TITLE.phpstorm,
        color: 'violet',
        images: [
          publicImg('technologies/phpstorm.png'),
          publicImg('technologies/phpstorm@2x.png'),
        ],
        href: 'https://jetbrains.com/phpstorm',
      },
      {
        name: 'devtools',
        label: TECHNOLOGY_TITLE.devtools,
        color: 'default',
        images: [
          publicImg('technologies/devtools.png'),
          publicImg('technologies/devtools@2x.png'),
        ],
        href: 'https://developers.google.com/web/tools/chrome-devtools',
      },
      {
        name: 'sketch',
        label: TECHNOLOGY_TITLE.sketch,
        color: 'yellow',
        images: [
          publicImg('technologies/sketch.png'),
          publicImg('technologies/sketch@2x.png'),
        ],
        href: 'https://sketch.com',
      },
      {
        name: 'figma',
        label: TECHNOLOGY_TITLE.figma,
        color: 'red',
        images: [
          publicImg('technologies/figma.png'),
          publicImg('technologies/figma@2x.png'),
        ],
        href: 'https://figma.com/',
      },
      {
        name: 'photoshop',
        label: TECHNOLOGY_TITLE.photoshop,
        color: 'blue',
        images: [
          publicImg('technologies/photoshop.png'),
          publicImg('technologies/photoshop@2x.png'),
        ],
        href: 'https://adobe.com/products/photoshop.html',
      },
      {
        name: 'zeplin',
        label: TECHNOLOGY_TITLE.zeplin,
        color: 'yellow',
        images: [
          publicImg('technologies/zeplin.png'),
          publicImg('technologies/zeplin@2x.png'),
        ],
        href: 'https://zeplin.io',
      },
      {
        name: 'optim',
        label: TECHNOLOGY_TITLE.optim,
        color: 'default',
        images: [
          publicImg('technologies/optim.png'),
          publicImg('technologies/optim@2x.png'),
        ],
        href: 'https://imageoptim.com',
      },
      {
        name: 'browserstack',
        label: TECHNOLOGY_TITLE.browserstack,
        color: 'default',
        images: [
          publicImg('technologies/browserstack.png'),
          publicImg('technologies/browserstack@2x.png'),
        ],
        href: 'https://browserstack.com',
      },
      {
        name: 'azure',
        label: TECHNOLOGY_TITLE.azure,
        color: 'blue',
        images: [
          publicImg('technologies/azure.png'),
          publicImg('technologies/azure@2x.png'),
        ],
        href: 'https://azure.microsoft.com',
      },
      {
        name: 'clickup',
        label: TECHNOLOGY_TITLE.clickup,
        color: 'violet',
        images: [
          publicImg('technologies/clickup.png'),
          publicImg('technologies/clickup@2x.png'),
        ],
        href: 'https://clickup.com',
      },
      {
        name: 'jira',
        label: TECHNOLOGY_TITLE.jira,
        color: 'blue',
        images: [
          publicImg('technologies/jira.png'),
          publicImg('technologies/jira@2x.png'),
        ],
        href: 'https://atlassian.com/software/jira',
      },
      {
        name: 'paw',
        label: TECHNOLOGY_TITLE.paw,
        color: 'blue',
        images: [
          publicImg('technologies/paw.png'),
          publicImg('technologies/paw@2x.png'),
        ],
        href: 'https://paw.cloud',
      },
      {
        name: 'notes',
        label: TECHNOLOGY_TITLE.notes,
        color: 'yellow',
        images: [
          publicImg('technologies/notes.png'),
          publicImg('technologies/notes@2x.png'),
        ],
        href: 'https://apps.apple.com/us/app/notes/id1110145109',
      },
      {
        name: 'fcpx',
        label: TECHNOLOGY_TITLE.fcpx,
        color: 'default',
        images: [
          publicImg('technologies/fcpx.png'),
          publicImg('technologies/fcpx@2x.png'),
        ],
        href: 'https://apple.com/final-cut-pro',
      },
      {
        name: 'macos',
        label: TECHNOLOGY_TITLE.macos,
        color: 'yellow',
        images: [
          publicImg('technologies/macos.png'),
          publicImg('technologies/macos@2x.png'),
        ],
        href: 'https://apple.com/macos/macos-sequoia',
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
        images: [
          publicImg('technologies/mac.png'),
          publicImg('technologies/mac@2x.png'),
        ],
        href: 'https://apple.com/macbook-pro-14-and-16',
      },
      {
        name: 'ipad',
        label: TECHNOLOGY_TITLE.ipad,
        color: 'default',
        images: [
          publicImg('technologies/ipad.png'),
          publicImg('technologies/ipad@2x.png'),
        ],
        href: 'https://apple.com/ipad-pro',
      },
      {
        name: 'keyboard',
        label: TECHNOLOGY_TITLE.keyboard,
        color: 'red',
        images: [
          publicImg('technologies/keyboard.png'),
          publicImg('technologies/keyboard@2x.png'),
        ],
        href: 'https://keychron.com/collections/low-profile-keyboard-collection/products/keychron-k3-wireless-mechanical-keyboard?variant=32220198928473',
      },
      {
        name: 'mouse',
        label: TECHNOLOGY_TITLE.mouse,
        color: 'default',
        images: [
          publicImg('technologies/mouse.png'),
          publicImg('technologies/mouse@2x.png'),
        ],
        href: 'https://logitech.com/en-us/products/mice/mx-master-3s-mac-bluetooth-mouse.910-006570',
      },
      {
        name: 'trackpad',
        label: TECHNOLOGY_TITLE.trackpad,
        color: 'default',
        images: [
          publicImg('technologies/trackpad.png'),
          publicImg('technologies/trackpad@2x.png'),
        ],
        href: 'https://apple.com/shop/product/MMMP3AM/A/magic-trackpad-black-multi-touch-surface?fnode=6244f8b1f93720dfd5ea27c7c6e8ae7aab984968920761941d8af235417cb2ecf95cc816a20ac8709c677b86759bd3bb248762be9a693b327b17cc88e10d74233ac00f76840a93cf8835235a616513bda2e56a178ed07b255334dbff47fca7f0',
      },
      {
        name: 'airpods',
        label: TECHNOLOGY_TITLE.airpods,
        color: 'default',
        images: [
          publicImg('technologies/airpods.png'),
          publicImg('technologies/airpods@2x.png'),
        ],
        href: 'https://apple.com/airpods-pro',
      },
      {
        name: 'dock',
        label: TECHNOLOGY_TITLE.dock,
        color: 'default',
        images: [
          publicImg('technologies/dock.png'),
          publicImg('technologies/dock@2x.png'),
        ],
        href: 'https://owc.com/solutions/thunderbolt-dock',
      },
      {
        name: 'mic',
        label: TECHNOLOGY_TITLE.mic,
        color: 'default',
        images: [
          publicImg('technologies/mic.png'),
          publicImg('technologies/mic@2x.png'),
        ],
        href: 'https://rode.com/en/microphones/usb/nt-usb-plus',
      },
      {
        name: 'iphone',
        label: TECHNOLOGY_TITLE.iphone,
        color: 'violet',
        images: [
          publicImg('technologies/iphone.png'),
          publicImg('technologies/iphone@2x.png'),
        ],
        href: 'https://apple.com/go/2022/iphone-14-pro',
      },
      {
        name: 'gopro',
        label: TECHNOLOGY_TITLE.gopro,
        color: 'blue',
        images: [
          publicImg('technologies/gopro.png'),
          publicImg('technologies/gopro@2x.png'),
        ],
        href: 'https://gopro.com/en/us/shop/cameras/hero11-black/CHDHX-111-master.html',
      },
      {
        name: 'glasses',
        label: TECHNOLOGY_TITLE.glasses,
        color: 'default',
        images: [
          publicImg('technologies/glasses.png'),
          publicImg('technologies/glasses@2x.png'),
        ],
        href: 'https://aliexpress.com/i/4000093342098.html',
      },
      {
        name: 'mascot',
        label: TECHNOLOGY_TITLE.mascot,
        color: 'default',
        images: [
          publicImg('technologies/mascot.png'),
          publicImg('technologies/mascot@2x.png'),
        ],
        href: 'https://media.entertainmentearth.com/assets/images/cfa66064858142faaa7f0cc9cbaa8c98lg.jpg',
      },
    ],
  },
]

export const TECHNOLOGY: ITechnology[] = TECHNOLOGY_GROUPS.map(
  (group) => group.technologies
).flat()
