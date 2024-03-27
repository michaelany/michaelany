import {YouTube as YouTubeIcon} from '@mui/icons-material'

import {importImg} from '#utils/helpers'
import SevenGlyphsIcon from '#assets/icons/7glyphs.svg?react'
import GitHubIcon from '#assets/icons/github.svg?react'
import LinkedInIcon from '#assets/icons/linkedin.svg?react'
import InstagramIcon from '#assets/icons/instagram.svg?react'
import VKIcon from '#assets/icons/vk.svg?react'
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
}

interface ICompanyData {
  sevenGlyphs: ICompany
  t1: ICompany
  everpoint: ICompany
  mvideo: ICompany
}

export const MY_NAME = 'Michael Any'

export const COMPANY_TITLE = {
  mvideo: 'M.Video',
  everpoint: 'Everpoint',
  sevenGlyphs: '7 glyphs Ltd.',
  t1: 'T1 Consulting',
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
  youTube: {
    title: 'YouTube',
    href: 'https://www.youtube.com/@michaelany',
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

export const COMPANY: ICompanyData = {
  sevenGlyphs: {
    title: COMPANY_TITLE.sevenGlyphs,
    name: 'sevenGlyphs',
    images: [
      importImg('companies/7glyphs.png'),
      importImg('companies/7glyphs@2x.png'),
    ],
    color: 'default',
    href: 'https://7glyphs.com',
  },
  t1: {
    title: COMPANY_TITLE.t1,
    name: 't1',
    images: [importImg('companies/t1.png'), importImg('companies/t1@2x.png')],
    color: 'blue',
    href: 'http://www.t1-consulting.ru',
  },
  everpoint: {
    title: COMPANY_TITLE.everpoint,
    name: 'everpoint',
    images: [
      importImg('companies/everpoint.png'),
      importImg('companies/everpoint@2x.png'),
    ],
    color: 'grass',
    href: 'https://www.everpoint.ru',
  },
  mvideo: {
    title: COMPANY_TITLE.mvideo,
    name: 'mvideo',
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
  reactstrap: 'reactstrap',
  materialize: 'Materialize',
  bootstrap: 'Bootstrap',
  semantic: 'Semantic UI',
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
  iterm: 'iTerm2',
  vscode: 'Visual Studio Code',
  phpstorm: 'PhpStorm',
  devtools: 'Chrome DevTools',
  zeplin: 'Zeplin',
  sketch: 'Sketch',
  figma: 'Figma',
  photoshop: 'Photoshop',
  optim: 'ImageOptim',
  paw: 'RapidAPI',
  clickup: 'ClickUp',
  fcpx: 'Final Cut Pro',
  macos: 'macOS Sonoma',
  gpt: 'ChatGPT',
  reactnative: 'React Native',
  expo: 'Expo',
  node: 'Node.js',
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
    importImg('technologies/react.png'),
    importImg('technologies/react@2x.png'),
  ],
  laravel: [
    importImg('technologies/laravel.png'),
    importImg('technologies/laravel@2x.png'),
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
          importImg('technologies/js.png'),
          importImg('technologies/js@2x.png'),
        ],
        href: 'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
      },
      {
        name: 'ts',
        label: TECHNOLOGY_TITLE.ts,
        color: 'blue',
        images: [
          importImg('technologies/ts.png'),
          importImg('technologies/ts@2x.png'),
        ],
        href: 'https://www.typescriptlang.org',
      },
      {
        name: 'react',
        label: TECHNOLOGY_TITLE.react,
        color: 'blue',
        images: commonTechnologyImages.react,
        href: MAIN_TECHNOLOGY_LINK.react,
      },
      {
        name: 'reactquery',
        label: TECHNOLOGY_TITLE.reactquery,
        color: 'red',
        images: [
          importImg('technologies/reactquery.png'),
          importImg('technologies/reactquery@2x.png'),
        ],
        href: 'https://tanstack.com/query',
      },
      {
        name: 'zustand',
        label: TECHNOLOGY_TITLE.zustand,
        color: 'yellow',
        images: [
          importImg('technologies/zustand.png'),
          importImg('technologies/zustand@2x.png'),
        ],
        href: 'https://zustand-demo.pmnd.rs',
      },
      {
        name: 'preact',
        label: TECHNOLOGY_TITLE.preact,
        color: 'violet',
        images: [
          importImg('technologies/preact.png'),
          importImg('technologies/preact@2x.png'),
        ],
        href: 'https://preactjs.com',
      },
      {
        name: 'redux',
        label: TECHNOLOGY_TITLE.redux,
        color: 'violet',
        images: [
          importImg('technologies/redux.png'),
          importImg('technologies/redux@2x.png'),
        ],
        href: 'https://redux.js.org',
      },
      {
        name: 'mobx',
        label: TECHNOLOGY_TITLE.mobx,
        color: 'red',
        images: [
          importImg('technologies/mobx.png'),
          importImg('technologies/mobx@2x.png'),
        ],
        href: 'https://mobx.js.org',
      },
      {
        name: 'vue',
        label: TECHNOLOGY_TITLE.vue,
        color: 'grass',
        images: [
          importImg('technologies/vue.png'),
          importImg('technologies/vue@2x.png'),
        ],
        href: 'https://vuejs.org',
      },
      {
        name: 'svelte',
        label: TECHNOLOGY_TITLE.svelte,
        color: 'red',
        images: [
          importImg('technologies/svelte.png'),
          importImg('technologies/svelte@2x.png'),
        ],
        href: 'https://svelte.dev',
      },
      {
        name: 'apollo',
        label: TECHNOLOGY_TITLE.apollo,
        color: 'blue',
        images: [
          importImg('technologies/apollo.png'),
          importImg('technologies/apollo@2x.png'),
        ],
        href: 'https://www.apollographql.com/docs/react',
      },
      {
        name: 'jquery',
        label: TECHNOLOGY_TITLE.jquery,
        color: 'blue',
        images: [
          importImg('technologies/jquery.png'),
          importImg('technologies/jquery@2x.png'),
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
          importImg('technologies/html.png'),
          importImg('technologies/html@2x.png'),
        ],
        href: 'https://html.spec.whatwg.org/multipage',
      },
      {
        name: 'svg',
        label: TECHNOLOGY_TITLE.svg,
        color: 'yellow',
        images: [
          importImg('technologies/svg.png'),
          importImg('technologies/svg@2x.png'),
        ],
        href: 'https://www.w3.org/Graphics/svg',
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
          importImg('technologies/pug.png'),
          importImg('technologies/pug@2x.png'),
        ],
        href: 'https://pugjs.org/api/getting-started.html',
      },
      {
        name: 'handlebars',
        label: TECHNOLOGY_TITLE.handlebars,
        color: 'default',
        images: [
          importImg('technologies/handlebars.png'),
          importImg('technologies/handlebars@2x.png'),
        ],
        href: 'https://handlebarsjs.com',
      },
      {
        name: 'markdown',
        label: TECHNOLOGY_TITLE.markdown,
        color: 'default',
        images: [
          importImg('technologies/markdown.png'),
          importImg('technologies/markdown@2x.png'),
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
          importImg('technologies/css.png'),
          importImg('technologies/css@2x.png'),
        ],
        href: 'https://www.w3.org/style/css',
      },
      {
        name: 'sass',
        label: TECHNOLOGY_TITLE.sass,
        color: 'red',
        images: [
          importImg('technologies/sass.png'),
          importImg('technologies/sass@2x.png'),
        ],
        href: 'https://sass-lang.com',
      },
      {
        name: 'less',
        label: TECHNOLOGY_TITLE.less,
        color: 'blue',
        images: [
          importImg('technologies/less.png'),
          importImg('technologies/less@2x.png'),
        ],
        href: 'https://lesscss.org',
      },
      {
        name: 'modules',
        label: TECHNOLOGY_TITLE.modules,
        color: 'default',
        images: [
          importImg('technologies/modules.png'),
          importImg('technologies/modules@2x.png'),
        ],
        href: 'https://github.com/css-modules/css-modules',
      },
      {
        name: 'bem',
        label: TECHNOLOGY_TITLE.bem,
        color: 'default',
        images: [
          importImg('technologies/bem.png'),
          importImg('technologies/bem@2x.png'),
        ],
        href: 'https://bem.info',
      },
      {
        name: 'styled',
        label: TECHNOLOGY_TITLE.styled,
        color: 'red',
        images: [
          importImg('technologies/styled.png'),
          importImg('technologies/styled@2x.png'),
        ],
        href: 'https://styled-components.com',
      },
      {
        name: 'mui',
        label: TECHNOLOGY_TITLE.mui,
        color: 'blue',
        images: [
          importImg('technologies/mui.png'),
          importImg('technologies/mui@2x.png'),
        ],
        href: MAIN_TECHNOLOGY_LINK.mui,
      },
      {
        name: 'ant',
        label: TECHNOLOGY_TITLE.ant,
        color: 'blue',
        images: [
          importImg('technologies/ant.png'),
          importImg('technologies/ant@2x.png'),
        ],
        href: 'https://ant.design',
      },
      {
        name: 'reactstrap',
        label: TECHNOLOGY_TITLE.reactstrap,
        color: 'default',
        images: [
          importImg('technologies/reactstrap.png'),
          importImg('technologies/reactstrap@2x.png'),
        ],
        href: 'https://reactstrap.github.io/',
      },
      {
        name: 'materialize',
        label: TECHNOLOGY_TITLE.materialize,
        color: 'red',
        images: [
          importImg('technologies/materialize.png'),
          importImg('technologies/materialize@2x.png'),
        ],
        href: 'https://materializecss.com',
      },
      {
        name: 'bootstrap',
        label: TECHNOLOGY_TITLE.bootstrap,
        color: 'violet',
        images: [
          importImg('technologies/bootstrap.png'),
          importImg('technologies/bootstrap@2x.png'),
        ],
        href: 'https://getbootstrap.com',
      },
      {
        name: 'semantic',
        label: TECHNOLOGY_TITLE.semantic,
        color: 'green',
        images: [
          importImg('technologies/semantic.png'),
          importImg('technologies/semantic@2x.png'),
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
          importImg('technologies/git.png'),
          importImg('technologies/git@2x.png'),
        ],
        href: 'https://git-scm.com',
      },
      {
        name: 'npm',
        label: TECHNOLOGY_TITLE.npm,
        color: 'red',
        images: [
          importImg('technologies/npm.png'),
          importImg('technologies/npm@2x.png'),
        ],
        href: 'https://www.npmjs.com',
      },
      {
        name: 'yarn',
        label: TECHNOLOGY_TITLE.yarn,
        color: 'blue',
        images: [
          importImg('technologies/yarn.png'),
          importImg('technologies/yarn@2x.png'),
        ],
        href: 'https://yarnpkg.com',
      },
      {
        name: 'vite',
        label: TECHNOLOGY_TITLE.vite,
        color: 'violet',
        images: [
          importImg('technologies/vite.png'),
          importImg('technologies/vite@2x.png'),
        ],
        href: 'https://vitejs.dev',
      },
      {
        name: 'webpack',
        label: TECHNOLOGY_TITLE.webpack,
        color: 'blue',
        images: [
          importImg('technologies/webpack.png'),
          importImg('technologies/webpack@2x.png'),
        ],
        href: 'https://webpack.js.org',
      },
      {
        name: 'gulp',
        label: TECHNOLOGY_TITLE.gulp,
        color: 'red',
        images: [
          importImg('technologies/gulp.png'),
          importImg('technologies/gulp@2x.png'),
        ],
        href: 'https://gulpjs.com',
      },
      {
        name: 'babel',
        label: TECHNOLOGY_TITLE.babel,
        color: 'yellow',
        images: [
          importImg('technologies/babel.png'),
          importImg('technologies/babel@2x.png'),
        ],
        href: 'https://babeljs.io',
      },
      {
        name: 'next',
        label: TECHNOLOGY_TITLE.next,
        color: 'default',
        images: [
          importImg('technologies/next.png'),
          importImg('technologies/next@2x.png'),
        ],
        href: 'https://nextjs.org',
      },
      {
        name: 'gatsby',
        label: TECHNOLOGY_TITLE.gatsby,
        color: 'violet',
        images: [
          importImg('technologies/gatsby.png'),
          importImg('technologies/gatsby@2x.png'),
        ],
        href: 'https://www.gatsbyjs.org',
      },
      {
        name: 'prettier',
        label: TECHNOLOGY_TITLE.prettier,
        color: 'default',
        images: [
          importImg('technologies/prettier.png'),
          importImg('technologies/prettier@2x.png'),
        ],
        href: 'https://prettier.io',
      },
      {
        name: 'eslint',
        label: TECHNOLOGY_TITLE.eslint,
        color: 'violet',
        images: [
          importImg('technologies/eslint.png'),
          importImg('technologies/eslint@2x.png'),
        ],
        href: 'https://eslint.org',
      },
      {
        name: 'storybook',
        label: TECHNOLOGY_TITLE.storybook,
        color: 'red',
        images: [
          importImg('technologies/storybook.png'),
          importImg('technologies/storybook@2x.png'),
        ],
        href: 'https://storybook.js.org',
      },
      {
        name: 'jest',
        label: TECHNOLOGY_TITLE.jest,
        color: 'red',
        images: [
          importImg('technologies/jest.png'),
          importImg('technologies/jest@2x.png'),
        ],
        href: 'https://jestjs.io',
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
          importImg('technologies/gpt.png'),
          importImg('technologies/gpt@2x.png'),
        ],
        href: 'https://openai.com/chatgpt',
      },
      {
        name: 'reactnative',
        label: TECHNOLOGY_TITLE.reactnative,
        color: 'blue',
        images: [
          importImg('technologies/reactnative.png'),
          importImg('technologies/reactnative@2x.png'),
        ],
        href: 'https://reactnative.dev',
      },
      {
        name: 'expo',
        label: TECHNOLOGY_TITLE.expo,
        color: 'default',
        images: [
          importImg('technologies/expo.png'),
          importImg('technologies/expo@2x.png'),
        ],
        href: 'https://expo.dev',
      },
      {
        name: 'node',
        label: TECHNOLOGY_TITLE.node,
        color: 'grass',
        images: [
          importImg('technologies/node.png'),
          importImg('technologies/node@2x.png'),
        ],
        href: 'https://nodejs.org',
      },
      {
        name: 'mongo',
        label: TECHNOLOGY_TITLE.mongo,
        color: 'grass',
        images: [
          importImg('technologies/mongo.png'),
          importImg('technologies/mongo@2x.png'),
        ],
        href: 'https://www.mongodb.com',
      },
      {
        name: 'mysql',
        label: TECHNOLOGY_TITLE.mysql,
        color: 'yellow',
        images: [
          importImg('technologies/mysql.png'),
          importImg('technologies/mysql@2x.png'),
        ],
        href: 'https://www.mysql.com',
      },
      {
        name: 'php',
        label: TECHNOLOGY_TITLE.php,
        color: 'violet',
        images: [
          importImg('technologies/php.png'),
          importImg('technologies/php@2x.png'),
        ],
        href: 'https://www.php.net',
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
          importImg('technologies/docker.png'),
          importImg('technologies/docker@2x.png'),
        ],
        href: 'https://www.docker.com',
      },
      {
        name: 'stripe',
        label: TECHNOLOGY_TITLE.stripe,
        color: 'violet',
        images: [
          importImg('technologies/stripe.png'),
          importImg('technologies/stripe@2x.png'),
        ],
        href: 'https://stripe.com',
      },
      {
        name: 'youtube',
        label: CONTACT_LINK.youTube.title,
        color: 'red',
        images: [
          importImg('technologies/youtube.png'),
          importImg('technologies/youtube@2x.png'),
        ],
        href: CONTACT_LINK.youTube.href,
      },
      {
        name: 'epidemic',
        label: TECHNOLOGY_TITLE.epidemic,
        color: 'default',
        images: [
          importImg('technologies/epidemic.png'),
          importImg('technologies/epidemic@2x.png'),
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
          importImg('technologies/iterm.png'),
          importImg('technologies/iterm@2x.png'),
        ],
        href: 'https://iterm2.com',
      },
      {
        name: 'vscode',
        label: TECHNOLOGY_TITLE.vscode,
        color: 'blue',
        images: [
          importImg('technologies/vscode.png'),
          importImg('technologies/vscode@2x.png'),
        ],
        href: 'https://code.visualstudio.com',
      },
      {
        name: 'phpstorm',
        label: TECHNOLOGY_TITLE.phpstorm,
        color: 'violet',
        images: [
          importImg('technologies/phpstorm.png'),
          importImg('technologies/phpstorm@2x.png'),
        ],
        href: 'https://www.jetbrains.com/phpstorm',
      },
      {
        name: 'devtools',
        label: TECHNOLOGY_TITLE.devtools,
        color: 'default',
        images: [
          importImg('technologies/devtools.png'),
          importImg('technologies/devtools@2x.png'),
        ],
        href: 'https://developers.google.com/web/tools/chrome-devtools',
      },
      {
        name: 'zeplin',
        label: TECHNOLOGY_TITLE.zeplin,
        color: 'yellow',
        images: [
          importImg('technologies/zeplin.png'),
          importImg('technologies/zeplin@2x.png'),
        ],
        href: 'https://zeplin.io',
      },
      {
        name: 'sketch',
        label: TECHNOLOGY_TITLE.sketch,
        color: 'yellow',
        images: [
          importImg('technologies/sketch.png'),
          importImg('technologies/sketch@2x.png'),
        ],
        href: 'https://www.sketch.com',
      },
      {
        name: 'figma',
        label: TECHNOLOGY_TITLE.figma,
        color: 'red',
        images: [
          importImg('technologies/figma.png'),
          importImg('technologies/figma@2x.png'),
        ],
        href: 'https://www.figma.com/',
      },
      {
        name: 'photoshop',
        label: TECHNOLOGY_TITLE.photoshop,
        color: 'blue',
        images: [
          importImg('technologies/photoshop.png'),
          importImg('technologies/photoshop@2x.png'),
        ],
        href: 'https://www.adobe.com/products/photoshop.html',
      },
      {
        name: 'optim',
        label: TECHNOLOGY_TITLE.optim,
        color: 'default',
        images: [
          importImg('technologies/optim.png'),
          importImg('technologies/optim@2x.png'),
        ],
        href: 'https://imageoptim.com',
      },
      {
        name: 'paw',
        label: TECHNOLOGY_TITLE.paw,
        color: 'blue',
        images: [
          importImg('technologies/paw.png'),
          importImg('technologies/paw@2x.png'),
        ],
        href: 'https://paw.cloud',
      },
      {
        name: 'clickup',
        label: TECHNOLOGY_TITLE.clickup,
        color: 'violet',
        images: [
          importImg('technologies/clickup.png'),
          importImg('technologies/clickup@2x.png'),
        ],
        href: 'https://clickup.com',
      },
      {
        name: 'fcpx',
        label: TECHNOLOGY_TITLE.fcpx,
        color: 'default',
        images: [
          importImg('technologies/fcpx.png'),
          importImg('technologies/fcpx@2x.png'),
        ],
        href: 'https://www.apple.com/final-cut-pro',
      },
      {
        name: 'macos',
        label: TECHNOLOGY_TITLE.macos,
        color: 'grass',
        images: [
          importImg('technologies/macos.png'),
          importImg('technologies/macos@2x.png'),
        ],
        href: 'https://www.apple.com/macos/sonoma',
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
          importImg('technologies/mac.png'),
          importImg('technologies/mac@2x.png'),
        ],
        href: 'https://www.apple.com/macbook-pro-14-and-16',
      },
      {
        name: 'ipad',
        label: TECHNOLOGY_TITLE.ipad,
        color: 'default',
        images: [
          importImg('technologies/ipad.png'),
          importImg('technologies/ipad@2x.png'),
        ],
        href: 'https://www.apple.com/ipad-pro',
      },
      {
        name: 'keyboard',
        label: TECHNOLOGY_TITLE.keyboard,
        color: 'red',
        images: [
          importImg('technologies/keyboard.png'),
          importImg('technologies/keyboard@2x.png'),
        ],
        href: 'https://www.keychron.com/collections/low-profile-keyboard-collection/products/keychron-k3-wireless-mechanical-keyboard?variant=32220198928473',
      },
      {
        name: 'mouse',
        label: TECHNOLOGY_TITLE.mouse,
        color: 'default',
        images: [
          importImg('technologies/mouse.png'),
          importImg('technologies/mouse@2x.png'),
        ],
        href: 'https://www.logitech.com/en-us/products/mice/mx-master-3s-mac-bluetooth-mouse.910-006570',
      },
      {
        name: 'trackpad',
        label: TECHNOLOGY_TITLE.trackpad,
        color: 'default',
        images: [
          importImg('technologies/trackpad.png'),
          importImg('technologies/trackpad@2x.png'),
        ],
        href: 'https://www.apple.com/shop/product/MMMP3AM/A/magic-trackpad-black-multi-touch-surface?fnode=6244f8b1f93720dfd5ea27c7c6e8ae7aab984968920761941d8af235417cb2ecf95cc816a20ac8709c677b86759bd3bb248762be9a693b327b17cc88e10d74233ac00f76840a93cf8835235a616513bda2e56a178ed07b255334dbff47fca7f0',
      },
      {
        name: 'airpods',
        label: TECHNOLOGY_TITLE.airpods,
        color: 'default',
        images: [
          importImg('technologies/airpods.png'),
          importImg('technologies/airpods@2x.png'),
        ],
        href: 'https://www.apple.com/airpods-pro',
      },
      {
        name: 'dock',
        label: TECHNOLOGY_TITLE.dock,
        color: 'default',
        images: [
          importImg('technologies/dock.png'),
          importImg('technologies/dock@2x.png'),
        ],
        href: 'https://www.owc.com/solutions/thunderbolt-dock',
      },
      {
        name: 'mic',
        label: TECHNOLOGY_TITLE.mic,
        color: 'default',
        images: [
          importImg('technologies/mic.png'),
          importImg('technologies/mic@2x.png'),
        ],
        href: 'https://rode.com/en/microphones/usb/nt-usb-plus',
      },
      {
        name: 'iphone',
        label: TECHNOLOGY_TITLE.iphone,
        color: 'violet',
        images: [
          importImg('technologies/iphone.png'),
          importImg('technologies/iphone@2x.png'),
        ],
        href: 'https://www.apple.com/go/2022/iphone-14-pro',
      },
      {
        name: 'gopro',
        label: TECHNOLOGY_TITLE.gopro,
        color: 'blue',
        images: [
          importImg('technologies/gopro.png'),
          importImg('technologies/gopro@2x.png'),
        ],
        href: 'https://gopro.com/en/us/shop/cameras/hero11-black/CHDHX-111-master.html',
      },
      {
        name: 'glasses',
        label: TECHNOLOGY_TITLE.glasses,
        color: 'default',
        images: [
          importImg('technologies/glasses.png'),
          importImg('technologies/glasses@2x.png'),
        ],
        href: 'https://www.aliexpress.com/i/4000093342098.html',
      },
      {
        name: 'mascot',
        label: TECHNOLOGY_TITLE.mascot,
        color: 'default',
        images: [
          importImg('technologies/mascot.png'),
          importImg('technologies/mascot@2x.png'),
        ],
        href: 'https://media.entertainmentearth.com/assets/images/cfa66064858142faaa7f0cc9cbaa8c98lg.jpg',
      },
    ],
  },
]

export const TECHNOLOGY: ITechnology[] = TECHNOLOGY_GROUPS.map(
  (group) => group.technologies
).flat()
