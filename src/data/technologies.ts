import {publicImg} from '#utils/helpers'
import type {ITechnologyGroup, ITechnology} from '#utils/types'

export const TECHNOLOGY_TITLE = {
  js: 'JavaScript',
  ts: 'TypeScript',
  react: 'React',
  tanstack: 'TanStack Query',
  redux: 'Redux',
  zustand: 'Zustand',
  mobx: 'MobX',
  pinia: 'Pinia',
  preact: 'Preact',
  vue: 'Vue.js',
  svelte: 'Svelte',
  jquery: 'jQuery',
  claudecode: 'Claude Code',
  codex: 'Codex',
  gpt: 'ChatGPT',
  claude: 'Claude',
  gemini: 'Gemini',
  antigravity: 'Antigravity',
  cursor: 'Cursor',
  copilot: 'GitHub Copilot',
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
  emotion: 'Emotion',
  styled: 'styled-components',
  mui: 'Material UI',
  tailwind: 'Tailwind CSS',
  shadcn: 'shadcn/ui',
  ant: 'Ant Design',
  bulma: 'Bulma',
  daisy: 'daisyUI',
  materialize: 'Materialize',
  bootstrap: 'Bootstrap',
  semantic: 'Semantic UI',
  npm: 'npm',
  bun: 'Bun',
  pnpm: 'pnpm',
  yarn: 'Yarn',
  vite: 'Vite',
  webpack: 'webpack',
  gulp: 'Gulp',
  gatsby: 'Gatsby',
  gsap: 'GSAP',
  motion: 'Motion',
  threejs: 'three.js',
  next: 'Next.js',
  nuxt: 'Nuxt',
  git: 'Git',
  babel: 'Babel',
  prettier: 'Prettier',
  eslint: 'ESLint',
  stylelint: 'Stylelint',
  storybook: 'Storybook',
  sentry: 'Sentry',
  vitest: 'Vitest',
  playwright: 'Playwright',
  jest: 'Jest',
  cypress: 'Cypress',
  swagger: 'Swagger',
  docusaurus: 'Docusaurus',
  reactemail: 'React Email',
  iterm: 'iTerm2',
  vscode: 'Visual Studio Code',
  phpstorm: 'PhpStorm',
  chrome: 'Chrome DevTools',
  zeplin: 'Zeplin',
  sketch: 'Sketch',
  figma: 'Figma',
  photoshop: 'Photoshop',
  optim: 'ImageOptim',
  browserstack: 'BrowserStack',
  testmuai: 'TestMu AI',
  azure: 'Azure',
  bruno: 'Bruno',
  paw: 'RapidAPI',
  clickup: 'ClickUp',
  jira: 'Jira',
  tableplus: 'TablePlus',
  notes: 'Notes',
  finalcut: 'Final Cut Pro',
  pixelmator: 'Pixelmator Pro',
  macos: 'macOS Tahoe',
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
  github: 'GitHub Actions',
  cloudflare: 'Cloudflare',
  vercel: 'Vercel',
  netlify: 'Netlify',
  aws: 'Amazon Web Services',
  stripe: 'Stripe',
  airwallex: 'Airwallex',
  amplitude: 'Amplitude',
  firebase: 'Firebase',
  mailchimp: 'Mailchimp',
  squarespace: 'Squarespace',
  csharp: 'C#',
  dotnet: '.NET',
  epidemic: 'Epidemic Sound',
  mac: 'Apple MacBook M1 Pro (16-inch)',
  ipad: 'Apple iPad Pro (12.9-inch, 5th generation)',
  keyboard: 'Keychron K3 (Red Switch)',
  mouse: 'Logitech MX Master 4 for Mac',
  trackpad: 'Apple Magic Trackpad 2',
  airpods: 'Apple AirPods Pro (2nd generation)',
  dock: 'OWC Thunderbolt Dock',
  mic: 'Rode NT-USB+',
  wifi: 'TP-Link Deco X10 Mesh Wi-Fi 6 (2 Pack)',
  iphone: 'iPhone 17 Pro Max',
  gopro: 'GoPro HERO 11',
  glasses: 'Qukan W1',
  mascot: 'LEGO Star Wars Stormtrooper',
  coffee: 'Breville the Barista Express',
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
        name: 'tanstack',
        label: TECHNOLOGY_TITLE.tanstack,
        color: 'red',
        images: [
          publicImg('technologies/tanstack.png'),
          publicImg('technologies/tanstack@2x.png'),
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
        name: 'pinia',
        label: TECHNOLOGY_TITLE.pinia,
        color: 'yellow',
        images: [
          publicImg('technologies/pinia.png'),
          publicImg('technologies/pinia@2x.png'),
        ],
        href: 'https://pinia.vuejs.org',
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
        name: 'jsx',
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
        name: 'emotion',
        label: TECHNOLOGY_TITLE.emotion,
        color: 'violet',
        images: [
          publicImg('technologies/emotion.png'),
          publicImg('technologies/emotion@2x.png'),
        ],
        href: 'https://emotion.sh',
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
        name: 'shadcn',
        label: TECHNOLOGY_TITLE.shadcn,
        color: 'default',
        images: [
          publicImg('technologies/shadcn.png'),
          publicImg('technologies/shadcn@2x.png'),
        ],
        href: 'https://ui.shadcn.com',
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
        name: 'daisy',
        label: TECHNOLOGY_TITLE.daisy,
        color: 'yellow',
        images: [
          publicImg('technologies/daisy.png'),
          publicImg('technologies/daisy@2x.png'),
        ],
        href: 'https://daisyui.com',
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
    tKey: 'utils',
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
        name: 'stylelint',
        label: TECHNOLOGY_TITLE.stylelint,
        color: 'default',
        images: [
          publicImg('technologies/stylelint.png'),
          publicImg('technologies/stylelint@2x.png'),
        ],
        href: 'https://stylelint.io',
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
        name: 'sentry',
        label: TECHNOLOGY_TITLE.sentry,
        color: 'violet',
        images: [
          publicImg('technologies/sentry.png'),
          publicImg('technologies/sentry@2x.png'),
        ],
        href: 'https://sentry.io',
      },
      {
        name: 'vitest',
        label: TECHNOLOGY_TITLE.vitest,
        color: 'green',
        images: [
          publicImg('technologies/vitest.png'),
          publicImg('technologies/vitest@2x.png'),
        ],
        href: 'https://vitest.dev',
      },
      {
        name: 'playwright',
        label: TECHNOLOGY_TITLE.playwright,
        color: 'grass',
        images: [
          publicImg('technologies/playwright.png'),
          publicImg('technologies/playwright@2x.png'),
        ],
        href: 'https://playwright.dev',
      },
      {
        name: 'cypress',
        label: TECHNOLOGY_TITLE.cypress,
        color: 'green',
        images: [
          publicImg('technologies/cypress.png'),
          publicImg('technologies/cypress@2x.png'),
        ],
        href: 'https://cypress.io',
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
        name: 'swagger',
        label: TECHNOLOGY_TITLE.swagger,
        color: 'grass',
        images: [
          publicImg('technologies/swagger.png'),
          publicImg('technologies/swagger@2x.png'),
        ],
        href: 'https://swagger.io',
      },
      {
        name: 'docusaurus',
        label: TECHNOLOGY_TITLE.docusaurus,
        color: 'grass',
        images: [
          publicImg('technologies/docusaurus.png'),
          publicImg('technologies/docusaurus@2x.png'),
        ],
        href: 'https://docusaurus.io',
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
        name: 'motion',
        label: TECHNOLOGY_TITLE.motion,
        color: 'default',
        images: [
          publicImg('technologies/motion.png'),
          publicImg('technologies/motion@2x.png'),
        ],
        href: 'https://motion.dev',
      },
      {
        name: 'threejs',
        label: TECHNOLOGY_TITLE.threejs,
        color: 'default',
        images: [
          publicImg('technologies/threejs.png'),
          publicImg('technologies/threejs@2x.png'),
        ],
        href: 'https://threejs.org',
      },
      {
        name: 'reactemail',
        label: TECHNOLOGY_TITLE.reactemail,
        color: 'default',
        images: [
          publicImg('technologies/reactemail.png'),
          publicImg('technologies/reactemail@2x.png'),
        ],
        href: 'https://react.email',
      },
    ],
  },
  {
    tKey: 'build',
    technologies: [
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
        name: 'vite',
        label: TECHNOLOGY_TITLE.vite,
        color: 'violet',
        images: [
          publicImg('technologies/vite.png'),
          publicImg('technologies/vite@2x.png'),
        ],
        href: 'https://vite.dev',
      },
      {
        name: 'bun',
        label: TECHNOLOGY_TITLE.bun,
        color: 'default',
        images: [
          publicImg('technologies/bun.png'),
          publicImg('technologies/bun@2x.png'),
        ],
        href: 'https://bun.com',
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
        color: 'violet',
        images: [
          publicImg('technologies/yarn.png'),
          publicImg('technologies/yarn@2x.png'),
        ],
        href: 'https://yarnpkg.com',
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
    ],
  },
  {
    tKey: 'ai',
    technologies: [
      {
        name: 'claude',
        label: TECHNOLOGY_TITLE.claude,
        color: 'red',
        images: [
          publicImg('technologies/claude.png'),
          publicImg('technologies/claude@2x.png'),
        ],
        href: 'https://claude.com/product/overview',
      },
      {
        name: 'claudecode',
        label: TECHNOLOGY_TITLE.claudecode,
        color: 'red',
        images: [
          publicImg('technologies/claudecode.png'),
          publicImg('technologies/claudecode@2x.png'),
        ],
        href: 'https://claude.com/product/claude-code',
      },
      {
        name: 'gpt',
        label: TECHNOLOGY_TITLE.gpt,
        color: 'default',
        images: [
          publicImg('technologies/gpt.png'),
          publicImg('technologies/gpt@2x.png'),
        ],
        href: 'https://openai.com/chatgpt',
      },
      {
        name: 'codex',
        label: TECHNOLOGY_TITLE.codex,
        color: 'violet',
        images: [
          publicImg('technologies/codex.png'),
          publicImg('technologies/codex@2x.png'),
        ],
        href: 'https://openai.com/codex',
      },
      {
        name: 'gemini',
        label: TECHNOLOGY_TITLE.gemini,
        color: 'blue',
        images: [
          publicImg('technologies/gemini.png'),
          publicImg('technologies/gemini@2x.png'),
        ],
        href: 'https://gemini.google.com',
      },
      {
        name: 'antigravity',
        label: TECHNOLOGY_TITLE.antigravity,
        color: 'blue',
        images: [
          publicImg('technologies/antigravity.png'),
          publicImg('technologies/antigravity@2x.png'),
        ],
        href: 'https://antigravity.google',
      },
      {
        name: 'cursor',
        label: TECHNOLOGY_TITLE.cursor,
        color: 'default',
        images: [
          publicImg('technologies/cursor.png'),
          publicImg('technologies/cursor@2x.png'),
        ],
        href: 'https://cursor.com',
      },
      {
        name: 'copilot',
        label: TECHNOLOGY_TITLE.copilot,
        color: 'default',
        images: [
          publicImg('technologies/copilot.png'),
          publicImg('technologies/copilot@2x.png'),
        ],
        href: 'https://github.com/copilot',
      },
    ],
  },
  {
    tKey: 'services',
    technologies: [
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
        name: 'airwallex',
        label: TECHNOLOGY_TITLE.airwallex,
        color: 'red',
        images: [
          publicImg('technologies/airwallex.png'),
          publicImg('technologies/airwallex@2x.png'),
        ],
        href: 'https://www.airwallex.com',
      },
      {
        name: 'amplitude',
        label: TECHNOLOGY_TITLE.amplitude,
        color: 'blue',
        images: [
          publicImg('technologies/amplitude.png'),
          publicImg('technologies/amplitude@2x.png'),
        ],
        href: 'https://amplitude.com',
      },
      {
        name: 'firebase',
        label: TECHNOLOGY_TITLE.firebase,
        color: 'red',
        images: [
          publicImg('technologies/firebase.png'),
          publicImg('technologies/firebase@2x.png'),
        ],
        href: 'https://firebase.google.com',
      },
      {
        name: 'browserstack',
        label: TECHNOLOGY_TITLE.browserstack,
        color: 'yellow',
        images: [
          publicImg('technologies/browserstack.png'),
          publicImg('technologies/browserstack@2x.png'),
        ],
        href: 'https://browserstack.com',
      },
      {
        name: 'testmuai',
        label: TECHNOLOGY_TITLE.testmuai,
        color: 'default',
        images: [
          publicImg('technologies/testmuai.png'),
          publicImg('technologies/testmuai@2x.png'),
        ],
        href: 'https://www.testmuai.com',
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
    ],
  },
  {
    tKey: 'deploy',
    technologies: [
      {
        name: 'github',
        label: TECHNOLOGY_TITLE.github,
        color: 'default',
        images: [
          publicImg('technologies/github.png'),
          publicImg('technologies/github@2x.png'),
        ],
        href: 'https://github.com/features/actions',
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
        name: 'cloudflare',
        label: TECHNOLOGY_TITLE.cloudflare,
        color: 'yellow',
        images: [
          publicImg('technologies/cloudflare.png'),
          publicImg('technologies/cloudflare@2x.png'),
        ],
        href: 'https://www.cloudflare.com',
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
        name: 'vercel',
        label: TECHNOLOGY_TITLE.vercel,
        color: 'default',
        images: [
          publicImg('technologies/vercel.png'),
          publicImg('technologies/vercel@2x.png'),
        ],
        href: 'https://vercel.com',
      },
      {
        name: 'netlify',
        label: TECHNOLOGY_TITLE.netlify,
        color: 'green',
        images: [
          publicImg('technologies/netlify.png'),
          publicImg('technologies/netlify@2x.png'),
        ],
        href: 'https://www.netlify.com',
      },
      {
        name: 'aws',
        label: TECHNOLOGY_TITLE.aws,
        color: 'default',
        images: [
          publicImg('technologies/aws.png'),
          publicImg('technologies/aws@2x.png'),
        ],
        href: 'https://aws.amazon.com',
      },
    ],
  },
  {
    tKey: 'misc',
    technologies: [
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
        name: 'reactnative',
        label: TECHNOLOGY_TITLE.reactnative,
        color: 'blue',
        images: commonTechnologyImages.react,
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
        name: 'csharp',
        label: TECHNOLOGY_TITLE.csharp,
        color: 'violet',
        images: [
          publicImg('technologies/csharp.png'),
          publicImg('technologies/csharp@2x.png'),
        ],
        href: 'https://dotnet.microsoft.com/languages/csharp',
      },
      {
        name: 'dotnet',
        label: TECHNOLOGY_TITLE.dotnet,
        color: 'violet',
        images: [
          publicImg('technologies/dotnet.png'),
          publicImg('technologies/dotnet@2x.png'),
        ],
        href: 'https://dotnet.microsoft.com',
      },
      {
        name: 'squarespace',
        label: TECHNOLOGY_TITLE.squarespace,
        color: 'default',
        images: [
          publicImg('technologies/squarespace.png'),
          publicImg('technologies/squarespace@2x.png'),
        ],
        href: 'https://www.squarespace.com',
      },
      {
        name: 'mailchimp',
        label: TECHNOLOGY_TITLE.mailchimp,
        color: 'default',
        images: [
          publicImg('technologies/mailchimp.png'),
          publicImg('technologies/mailchimp@2x.png'),
        ],
        href: 'https://mailchimp.com',
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
        name: 'chrome',
        label: TECHNOLOGY_TITLE.chrome,
        color: 'blue',
        images: [
          publicImg('technologies/chrome.png'),
          publicImg('technologies/chrome@2x.png'),
        ],
        href: 'https://developer.chrome.com/docs/devtools',
      },
      {
        name: 'figma',
        label: TECHNOLOGY_TITLE.figma,
        color: 'red',
        images: [
          publicImg('technologies/figma.png'),
          publicImg('technologies/figma@2x.png'),
        ],
        href: 'https://figma.com',
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
        name: 'photoshop',
        label: TECHNOLOGY_TITLE.photoshop,
        color: 'blue',
        images: [
          publicImg('technologies/photoshop.png'),
          publicImg('technologies/photoshop@2x.png'),
        ],
        href: 'https://www.adobe.com/products/photoshop.html',
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
        name: 'bruno',
        label: TECHNOLOGY_TITLE.bruno,
        color: 'yellow',
        images: [
          publicImg('technologies/bruno.png'),
          publicImg('technologies/bruno@2x.png'),
        ],
        href: 'https://www.usebruno.com',
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
        name: 'tableplus',
        label: TECHNOLOGY_TITLE.tableplus,
        color: 'yellow',
        images: [
          publicImg('technologies/tableplus.png'),
          publicImg('technologies/tableplus@2x.png'),
        ],
        href: 'https://tableplus.com',
      },
      {
        name: 'finalcut',
        label: TECHNOLOGY_TITLE.finalcut,
        color: 'violet',
        images: [
          publicImg('technologies/finalcut.png'),
          publicImg('technologies/finalcut@2x.png'),
        ],
        href: 'https://apple.com/final-cut-pro',
      },
      {
        name: 'pixelmator',
        label: TECHNOLOGY_TITLE.pixelmator,
        color: 'red',
        images: [
          publicImg('technologies/pixelmator.png'),
          publicImg('technologies/pixelmator@2x.png'),
        ],
        href: 'https://www.apple.com/pixelmator-pro',
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
        name: 'macos',
        label: TECHNOLOGY_TITLE.macos,
        color: 'blue',
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
        href: 'https://support.apple.com/111901',
      },
      {
        name: 'ipad',
        label: TECHNOLOGY_TITLE.ipad,
        color: 'default',
        images: [
          publicImg('technologies/ipad.png'),
          publicImg('technologies/ipad@2x.png'),
        ],
        href: 'https://support.apple.com/111896',
      },
      {
        name: 'iphone',
        label: TECHNOLOGY_TITLE.iphone,
        color: 'default',
        images: [
          publicImg('technologies/iphone.png'),
          publicImg('technologies/iphone@2x.png'),
        ],
        href: 'https://www.apple.com/iphone-17-pro',
      },
      {
        name: 'airpods',
        label: TECHNOLOGY_TITLE.airpods,
        color: 'default',
        images: [
          publicImg('technologies/airpods.png'),
          publicImg('technologies/airpods@2x.png'),
        ],
        href: 'https://support.apple.com/111851',
      },
      {
        name: 'trackpad',
        label: TECHNOLOGY_TITLE.trackpad,
        color: 'default',
        images: [
          publicImg('technologies/trackpad.png'),
          publicImg('technologies/trackpad@2x.png'),
        ],
        href: 'https://support.apple.com/111884',
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
        color: 'green',
        images: [
          publicImg('technologies/mouse.png'),
          publicImg('technologies/mouse@2x.png'),
        ],
        href: 'https://www.logitech.com/shop/p/mx-master-4-mac.910-007578',
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
        name: 'wifi',
        label: TECHNOLOGY_TITLE.wifi,
        color: 'default',
        images: [
          publicImg('technologies/wifi.png'),
          publicImg('technologies/wifi@2x.png'),
        ],
        href: 'https://www.tp-link.com/au/home-networking/deco/deco-x10/v1%20(2-pack)',
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
        name: 'glasses',
        label: TECHNOLOGY_TITLE.glasses,
        color: 'default',
        images: [
          publicImg('technologies/glasses.png'),
          publicImg('technologies/glasses@2x.png'),
        ],
        href: 'https://www.aliexpress.com/item/1005006565514712.html',
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
        name: 'coffee',
        label: TECHNOLOGY_TITLE.coffee,
        color: 'default',
        images: [
          publicImg('technologies/coffee.png'),
          publicImg('technologies/coffee@2x.png'),
        ],
        href: 'https://www.breville.com/en-nz/product/bes870',
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

const TECHNOLOGIES: ITechnology[] = TECHNOLOGY_GROUPS.map(
  group => group.technologies
).flat()

export default TECHNOLOGIES
