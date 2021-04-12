import {COMPANY, COMPANY_TITLE, TECHNOLOGY_TITLE} from './common'
import {Project} from '../utils/types'

const featureText = {
  wholeDevelopment: 'Фронтенд-разработка с нуля, развитие, поддержка проекта',
  scratchGrowthDevelopment: 'Фронтенд-разработка с нуля, поддержка проекта',
  scratchDevelopment: 'Фронтенд-разработка с нуля',
  growthSupportDevelopment: 'Развитие, поддержка проекта',
  leadWork: 'Тимлид команды фронтенд-разработки',
  teamWork: 'Член команды фронтенд-разработки',
  soloWork: 'Самостоятельная фронтенд-разработка',
  responsive: 'адаптивный интерфейс',
  emails: 'верстка писем',
  design: 'прототипирование и дизайн',
  animations: 'Анимации',
  rest: 'Rest API',
  stripe: 'Stripe',
  businessLogic: 'Обширная бизнес-логика',
}

const PROJECTS: Project[] = [
  {
    title: 'Road Ninja',
    name: 'ninjal',
    description: 'Лендинг новозеландского сервиса найма водителей грузовиков',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      `${featureText.animations}`,
      'Апрель 2021',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/ninjal@2x.jpg').default,
          require('../assets/img/projects/ninjal-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ninjal-desktop-second.jpg').default,
          require('../assets/img/projects/ninjal-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/ninjal-desktop-third.jpg').default,
          require('../assets/img/projects/ninjal-desktop-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ninjal-desktop-fourth.jpg').default,
          require('../assets/img/projects/ninjal-desktop-fourth@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/ninjal-desktop-fifth.jpg').default,
          require('../assets/img/projects/ninjal-desktop-fifth@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/ninjal-mobile-first.jpg').default,
          require('../assets/img/projects/ninjal-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ninjal-mobile-second.jpg').default,
          require('../assets/img/projects/ninjal-mobile-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ninjal-mobile-third.jpg').default,
          require('../assets/img/projects/ninjal-mobile-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ninjal-mobile-fourth.jpg').default,
          require('../assets/img/projects/ninjal-mobile-fourth@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ninjal-mobile-fifth.jpg').default,
          require('../assets/img/projects/ninjal-mobile-fifth@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Road Ninja',
    name: 'ninja',
    description: 'Новозеландский сервис найма водителей грузовиков',
    types: ['app', 'site'],
    companyName: 'sevenGlyphs',
    features: [
      'Верстка компонентов и разработка части бизнес-логики',
      featureText.teamWork,
      `${TECHNOLOGY_TITLE.ts}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.mui}, ${featureText.responsive}, ${featureText.emails}`,
      `${featureText.rest}, WebSocket, ${TECHNOLOGY_TITLE.webpack}, ${featureText.stripe}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}, ${TECHNOLOGY_TITLE.emails}`,
      featureText.businessLogic,
      'Апрель 2021',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/ninja@2x.jpg').default,
          require('../assets/img/projects/ninja-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ninja-desktop-second.jpg').default,
          require('../assets/img/projects/ninja-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ninja-desktop-third.jpg').default,
          require('../assets/img/projects/ninja-desktop-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ninja-desktop-fourth.jpg').default,
          require('../assets/img/projects/ninja-desktop-fourth@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Сelebration',
    name: 'celebration',
    description:
      'Новогоднее мини-приложение для поздравления сотрудников компании',
    types: ['app'],
    companyName: 'tsc',
    features: [
      `${featureText.scratchDevelopment}, ${featureText.design}`,
      featureText.leadWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.mui}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      `${featureText.animations}, PWA`,
      'Декабрь 2020',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/celebration@2x.jpg').default,
          require('../assets/img/projects/celebration-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/celebration-desktop-second.jpg')
            .default,
          require('../assets/img/projects/celebration-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/celebration-desktop-third.jpg')
            .default,
          require('../assets/img/projects/celebration-desktop-third@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/celebration-mobile-first.jpg')
            .default,
          require('../assets/img/projects/celebration-mobile-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/celebration-mobile-second.jpg')
            .default,
          require('../assets/img/projects/celebration-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/celebration-mobile-third.jpg')
            .default,
          require('../assets/img/projects/celebration-mobile-third@2x.jpg')
            .default,
        ],
      ],
    },
  },
  {
    title: 'Ally',
    name: 'ally',
    description:
      'Лендинг мобильного приложения для интерактивных фигурок Nintendo Amiibo',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/ally',
    features: [
      featureText.wholeDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      `${featureText.animations}`,
      'Октябрь 2020',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/ally@2x.jpg').default,
          require('../assets/img/projects/ally-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ally-desktop-second.jpg').default,
          require('../assets/img/projects/ally-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ally-desktop-third.jpg').default,
          require('../assets/img/projects/ally-desktop-third@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/ally-mobile-first.jpg').default,
          require('../assets/img/projects/ally-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ally-mobile-second.jpg').default,
          require('../assets/img/projects/ally-mobile-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/ally-mobile-third.jpg').default,
          require('../assets/img/projects/ally-mobile-third@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Present.me',
    name: 'presentmel',
    description: 'Лендинг новозеландского сервиса создания профиля соискателя',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/presentme',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      `${featureText.animations}`,
      'Сентябрь 2020',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/presentmel@2x.jpg').default,
          require('../assets/img/projects/presentmel-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentmel-desktop-second.jpg')
            .default,
          require('../assets/img/projects/presentmel-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentmel-desktop-third.jpg')
            .default,
          require('../assets/img/projects/presentmel-desktop-third@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentmel-desktop-fourth.jpg')
            .default,
          require('../assets/img/projects/presentmel-desktop-fourth@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/presentmel-mobile-first.jpg').default,
          require('../assets/img/projects/presentmel-mobile-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentmel-mobile-second.jpg')
            .default,
          require('../assets/img/projects/presentmel-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentmel-mobile-third.jpg').default,
          require('../assets/img/projects/presentmel-mobile-third@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentmel-mobile-fourth.jpg')
            .default,
          require('../assets/img/projects/presentmel-mobile-fourth@2x.jpg')
            .default,
        ],
      ],
    },
  },
  {
    title: 'Present.me',
    name: 'presentmep',
    description: 'Админка новозеландского сервиса создания профиля соискателя',
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/presentme',
    features: [
      featureText.wholeDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      featureText.businessLogic,
      'Август 2020',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/presentmep@2x.jpg').default,
          require('../assets/img/projects/presentmep-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentmep-desktop-second.jpg')
            .default,
          require('../assets/img/projects/presentmep-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentmep-desktop-third.jpg')
            .default,
          require('../assets/img/projects/presentmep-desktop-third@2x.jpg')
            .default,
        ],
      ],
    },
  },
  {
    title: 'Present.me',
    name: 'presentme',
    description: 'Новозеландский сервис создания профиля соискателя',
    types: ['app'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/presentme',
    features: [
      featureText.wholeDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${featureText.responsive}, ${featureText.emails}`,
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}, ${TECHNOLOGY_TITLE.emails}`,
      `Динамические формы, собственный роутинг`,
      'Август 2020',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/presentme@2x.jpg').default,
          require('../assets/img/projects/presentme-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentme-desktop-second.jpg')
            .default,
          require('../assets/img/projects/presentme-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentme-desktop-third.jpg').default,
          require('../assets/img/projects/presentme-desktop-third@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentme-desktop-fourth.jpg')
            .default,
          require('../assets/img/projects/presentme-desktop-fourth@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentme-desktop-fifth.jpg').default,
          require('../assets/img/projects/presentme-desktop-fifth@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/presentme-mobile-first.jpg').default,
          require('../assets/img/projects/presentme-mobile-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentme-mobile-second.jpg').default,
          require('../assets/img/projects/presentme-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentme-mobile-third.jpg').default,
          require('../assets/img/projects/presentme-mobile-third@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentme-mobile-fourth.jpg').default,
          require('../assets/img/projects/presentme-mobile-fourth@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/presentme-mobile-fifth.jpg').default,
          require('../assets/img/projects/presentme-mobile-fifth@2x.jpg')
            .default,
        ],
      ],
    },
  },
  {
    title: 'Dropdrone',
    name: 'dropdrone',
    description: 'Лендинг новозеландского сельскохозяйственного стартапа',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      featureText.animations,
      'Июнь 2020',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/dropdrone@2x.jpg').default,
          require('../assets/img/projects/dropdrone-desktop-first@2x.jpg')
            .default,
        ],

        [
          require('../assets/img/projects/dropdrone-desktop-second.jpg')
            .default,
          require('../assets/img/projects/dropdrone-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/dropdrone-desktop-third.jpg').default,
          require('../assets/img/projects/dropdrone-desktop-third@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/dropdrone-desktop-fourth.jpg')
            .default,
          require('../assets/img/projects/dropdrone-desktop-fourth@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/dropdrone-mobile-first.jpg').default,
          require('../assets/img/projects/dropdrone-mobile-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/dropdrone-mobile-second.jpg').default,
          require('../assets/img/projects/dropdrone-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/dropdrone-mobile-third.jpg').default,
          require('../assets/img/projects/dropdrone-mobile-third@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/dropdrone-mobile-fourth.jpg').default,
          require('../assets/img/projects/dropdrone-mobile-fourth@2x.jpg')
            .default,
        ],
      ],
    },
  },
  {
    title: 'Just Hatched',
    name: 'hatched',
    description:
      'Лендинг мобильного приложения-трекера для новорожденных малышей',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/justhatched',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      `${featureText.animations}`,
      'Май 2020',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/hatched@2x.jpg').default,
          require('../assets/img/projects/hatched-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/hatched-desktop-second.jpg').default,
          require('../assets/img/projects/hatched-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/hatched-desktop-third.jpg').default,
          require('../assets/img/projects/hatched-desktop-third@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/hatched-desktop-fourth.jpg').default,
          require('../assets/img/projects/hatched-desktop-fourth@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/hatched-mobile-first.jpg').default,
          require('../assets/img/projects/hatched-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/hatched-mobile-second.jpg').default,
          require('../assets/img/projects/hatched-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/hatched-mobile-third.jpg').default,
          require('../assets/img/projects/hatched-mobile-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/hatched-mobile-fourth.jpg').default,
          require('../assets/img/projects/hatched-mobile-fourth@2x.jpg')
            .default,
        ],
      ],
    },
  },
  {
    title: 'Unified Login System',
    name: 'uls',
    description: 'Единый кабинет пользователей компании "Vaillant Group"',
    types: ['app'],
    companyName: 'tsc',
    features: [
      featureText.wholeDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.webpack}, ${featureText.rest}, Keycloak, Docker`,
      'Поработал с Keycloak и Docker',
      'Февраль 2020',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/uls@2x.jpg').default,
          require('../assets/img/projects/uls-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/uls-desktop-second.jpg').default,
          require('../assets/img/projects/uls-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/uls-desktop-third.jpg').default,
          require('../assets/img/projects/uls-desktop-third@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/uls-mobile-first.jpg').default,
          require('../assets/img/projects/uls-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/uls-mobile-second.jpg').default,
          require('../assets/img/projects/uls-mobile-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/uls-mobile-third.jpg').default,
          require('../assets/img/projects/uls-mobile-third@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Proximal Coffee',
    name: 'proximal',
    description: 'Лендинг австралийской кофейни',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://www.proximalcoffee.com.au',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      featureText.animations,
      'Декабрь 2019',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/proximal@2x.jpg').default,
          require('../assets/img/projects/proximal-desktop-first@2x.jpg')
            .default,
        ],

        [
          require('../assets/img/projects/proximal-desktop-second.jpg').default,
          require('../assets/img/projects/proximal-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/proximal-desktop-third.jpg').default,
          require('../assets/img/projects/proximal-desktop-third@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/proximal-mobile-first.jpg').default,
          require('../assets/img/projects/proximal-mobile-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/proximal-mobile-second.jpg').default,
          require('../assets/img/projects/proximal-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/proximal-mobile-third.jpg').default,
          require('../assets/img/projects/proximal-mobile-third@2x.jpg')
            .default,
        ],
      ],
    },
  },
  {
    title: 'АРМА ЕМБП',
    name: 'embp',
    description: 'Админка биометрической платформы для банка "ВТБ"',
    types: ['admin', 'app'],
    companyName: 'tsc',
    features: [
      `${featureText.wholeDevelopment}, ${featureText.design}`,
      featureText.leadWork,
      `${TECHNOLOGY_TITLE.ts}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.styled}, ${TECHNOLOGY_TITLE.mui}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.jest}`,
      'Темная тема',
      'Июль 2019',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/embp@2x.jpg').default,
          require('../assets/img/projects/embp-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/embp-desktop-second.jpg').default,
          require('../assets/img/projects/embp-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/embp-desktop-third.jpg').default,
          require('../assets/img/projects/embp-desktop-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/embp-desktop-fourth.jpg').default,
          require('../assets/img/projects/embp-desktop-fourth@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/embp-desktop-fifth.jpg').default,
          require('../assets/img/projects/embp-desktop-fifth@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Ted Manson Foundation',
    name: 'tmf',
    description: 'Сайт новозеландской строительной компании',
    types: ['site'],
    companyName: 'sevenGlyphs',
    href: 'https://www.tmfoundation.co.nz',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.photoshop}`,
      featureText.animations,
      'Октябрь 2019',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/tmf@2x.jpg').default,
          require('../assets/img/projects/tmf-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/tmf-desktop-second.jpg').default,
          require('../assets/img/projects/tmf-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/tmf-desktop-third.jpg').default,
          require('../assets/img/projects/tmf-desktop-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/tmf-desktop-fourth.jpg').default,
          require('../assets/img/projects/tmf-desktop-fourth@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/tmf-desktop-fifth.jpg').default,
          require('../assets/img/projects/tmf-desktop-fifth@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/tmf-mobile-first.jpg').default,
          require('../assets/img/projects/tmf-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/tmf-mobile-second.jpg').default,
          require('../assets/img/projects/tmf-mobile-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/tmf-mobile-third.jpg').default,
          require('../assets/img/projects/tmf-mobile-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/tmf-mobile-fourth.jpg').default,
          require('../assets/img/projects/tmf-mobile-fourth@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/tmf-mobile-fifth.jpg').default,
          require('../assets/img/projects/tmf-mobile-fifth@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: '7 glyphs Lite',
    name: 'lite',
    description: `Лендинг сервиса новозеландского диджитал-агентства`,
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://lite.7glyphs.com',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      featureText.animations,
      'Сентябрь 2019',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/lite@2x.jpg').default,
          require('../assets/img/projects/lite-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/lite-desktop-second.jpg').default,
          require('../assets/img/projects/lite-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/lite-desktop-third.jpg').default,
          require('../assets/img/projects/lite-desktop-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/lite-desktop-fourth.jpg').default,
          require('../assets/img/projects/lite-desktop-fourth@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/lite-mobile-first.jpg').default,
          require('../assets/img/projects/lite-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/lite-mobile-second.jpg').default,
          require('../assets/img/projects/lite-mobile-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/lite-mobile-third.jpg').default,
          require('../assets/img/projects/lite-mobile-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/lite-mobile-fourth.jpg').default,
          require('../assets/img/projects/lite-mobile-fourth@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Melissa Chalmers',
    name: 'melissa',
    description: 'Лендинг фитнес-блогера',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/melissachalmers',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      featureText.animations,
      'Сентябрь 2019',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/melissa@2x.jpg').default,
          require('../assets/img/projects/melissa-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/melissa-desktop-second.jpg').default,
          require('../assets/img/projects/melissa-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/melissa-desktop-third.jpg').default,
          require('../assets/img/projects/melissa-desktop-third@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/melissa-mobile-first.jpg').default,
          require('../assets/img/projects/melissa-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/melissa-mobile-second.jpg').default,
          require('../assets/img/projects/melissa-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/melissa-mobile-third.jpg').default,
          require('../assets/img/projects/melissa-mobile-third@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Foodprint',
    name: 'foodp',
    description:
      'Портал новозеландского сервиса заказа дисконтной еды в ресторанах',
    types: ['site', 'app', 'admin'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/foodprint',
    features: [
      featureText.wholeDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      featureText.businessLogic,
      'Июнь 2019',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/foodp@2x.jpg').default,
          require('../assets/img/projects/foodp-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/foodp-desktop-second.jpg').default,
          require('../assets/img/projects/foodp-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/foodp-desktop-third.jpg').default,
          require('../assets/img/projects/foodp-desktop-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/foodp-desktop-fourth.jpg').default,
          require('../assets/img/projects/foodp-desktop-fourth@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/foodp-desktop-fifth.jpg').default,
          require('../assets/img/projects/foodp-desktop-fifth@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Foodprint',
    name: 'food',
    description:
      'Лендинг новозеландского сервиса заказа дисконтной еды в ресторанах',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/foodprint',
    features: [
      featureText.wholeDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}, ${featureText.emails}`,
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}, ${TECHNOLOGY_TITLE.emails}`,
      featureText.animations,
      'Июнь 2019',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/food@2x.jpg').default,
          require('../assets/img/projects/food-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/food-desktop-second.jpg').default,
          require('../assets/img/projects/food-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/food-desktop-third.jpg').default,
          require('../assets/img/projects/food-desktop-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/food-desktop-fourth.jpg').default,
          require('../assets/img/projects/food-desktop-fourth@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/food-mobile-first.jpg').default,
          require('../assets/img/projects/food-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/food-mobile-second.jpg').default,
          require('../assets/img/projects/food-mobile-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/food-mobile-third.jpg').default,
          require('../assets/img/projects/food-mobile-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/food-mobile-fourth.jpg').default,
          require('../assets/img/projects/food-mobile-fourth@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Sales Digital System',
    name: 'sds',
    description:
      'Корпоративный сервис для работы с документооборотом компании "Vaillant Group"',
    types: ['app'],
    companyName: 'tsc',
    features: [
      `${featureText.wholeDevelopment}, ${featureText.design}`,
      featureText.leadWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.styled}, ${TECHNOLOGY_TITLE.mui}`,
      `${featureText.rest}, Keycloak, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.sketch}`,
      featureText.businessLogic,
      'Апрель 2019',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/sds@2x.jpg').default,
          require('../assets/img/projects/sds-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/sds-desktop-second.jpg').default,
          require('../assets/img/projects/sds-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/sds-desktop-third.jpg').default,
          require('../assets/img/projects/sds-desktop-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/sds-desktop-fourth.jpg').default,
          require('../assets/img/projects/sds-desktop-fourth@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'StrongHer',
    name: 'strong',
    description: 'Сайт мобильного фитнес-приложения',
    types: ['site', 'app'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/strongher',
    features: [
      featureText.wholeDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}, ${featureText.emails}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${featureText.stripe}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}, ${TECHNOLOGY_TITLE.emails}`,
      `${featureText.animations}`,
      'Февраль 2019',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/strong@2x.jpg').default,
          require('../assets/img/projects/strong-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/strong-desktop-second.jpg').default,
          require('../assets/img/projects/strong-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/strong-desktop-third.jpg').default,
          require('../assets/img/projects/strong-desktop-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/strong-desktop-fourth.jpg').default,
          require('../assets/img/projects/strong-desktop-fourth@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/strong-desktop-fifth.jpg').default,
          require('../assets/img/projects/strong-desktop-fifth@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/strong-mobile-first.jpg').default,
          require('../assets/img/projects/strong-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/strong-mobile-second.jpg').default,
          require('../assets/img/projects/strong-mobile-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/strong-mobile-third.jpg').default,
          require('../assets/img/projects/strong-mobile-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/strong-mobile-fourth.jpg').default,
          require('../assets/img/projects/strong-mobile-fourth@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/strong-mobile-fifth.jpg').default,
          require('../assets/img/projects/strong-mobile-fifth@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: '7 glyphs 2.0',
    name: 'glyphs2',
    description: 'Домашний сайт новозеландского диджитал-агентства',
    types: ['site'],
    companyName: 'sevenGlyphs',
    href: COMPANY.sevenGlyphs.href,
    features: [
      featureText.growthSupportDevelopment,
      featureText.teamWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${featureText.responsive}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      featureText.animations,
      'Январь 2018',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/glyphs2@2x.jpg').default,
          require('../assets/img/projects/glyphs2-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/glyphs2-desktop-second.jpg').default,
          require('../assets/img/projects/glyphs2-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/glyphs2-desktop-third.jpg').default,
          require('../assets/img/projects/glyphs2-desktop-third@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/glyphs2-desktop-fourth.jpg').default,
          require('../assets/img/projects/glyphs2-desktop-fourth@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/glyphs2-desktop-fifth.jpg').default,
          require('../assets/img/projects/glyphs2-desktop-fifth@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/glyphs2-mobile-first.jpg').default,
          require('../assets/img/projects/glyphs2-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/glyphs2-mobile-second.jpg').default,
          require('../assets/img/projects/glyphs2-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/glyphs2-mobile-third.jpg').default,
          require('../assets/img/projects/glyphs2-mobile-third@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/glyphs2-mobile-fourth.jpg').default,
          require('../assets/img/projects/glyphs2-mobile-fourth@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/glyphs2-mobile-fifth.jpg').default,
          require('../assets/img/projects/glyphs2-mobile-fifth@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Rogue Travel',
    name: 'rogue',
    description:
      'Новозеландский сервис группового бронирования авиабилетов и отелей',
    types: ['site', 'app'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/rogue-travel',
    features: [
      featureText.scratchGrowthDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${featureText.stripe}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      featureText.businessLogic,
      'Ноябрь 2018',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/rogue@2x.jpg').default,
          require('../assets/img/projects/rogue-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/rogue-desktop-second.jpg').default,
          require('../assets/img/projects/rogue-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/rogue-desktop-third.jpg').default,
          require('../assets/img/projects/rogue-desktop-third@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Quarry Trucks',
    name: 'trucks',
    description: 'Новозеландский сервис мониторинга передвижения грузовиков',
    types: ['app'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/quarry-trucks',
    features: [
      'Верстка и разработка части бизнес-логики',
      featureText.teamWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.mobx}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.zeplin}`,
      `Поработал с ${TECHNOLOGY_TITLE.mobx} и графиками`,
      'Май 2018',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/trucks@2x.jpg').default,
          require('../assets/img/projects/trucks-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/trucks-desktop-second.jpg').default,
          require('../assets/img/projects/trucks-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/trucks-desktop-third.jpg').default,
          require('../assets/img/projects/trucks-desktop-third@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Service Packages',
    name: 'services',
    description: `Лендинг описания услуг новозеландского диджитал-агентства "${COMPANY_TITLE.sevenGlyphs}"`,
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/approach/packages',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      featureText.animations,
      'Февраль 2018',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/services@2x.jpg').default,
          require('../assets/img/projects/services-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/services-desktop-second.jpg').default,
          require('../assets/img/projects/services-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/services-desktop-third.jpg').default,
          require('../assets/img/projects/services-desktop-third@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/services-mobile-first.jpg').default,
          require('../assets/img/projects/services-mobile-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/services-mobile-second.jpg').default,
          require('../assets/img/projects/services-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/services-mobile-third.jpg').default,
          require('../assets/img/projects/services-mobile-third@2x.jpg')
            .default,
        ],
      ],
    },
  },
  {
    title: 'FCDC',
    name: 'fcdc',
    description: 'Админка сервиса управления мероприятиями',
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.photoshop}`,
      'Много форм и таблиц',
      'Январь 2018',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/fcdc@2x.jpg').default,
          require('../assets/img/projects/fcdc-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/fcdc-desktop-second.jpg').default,
          require('../assets/img/projects/fcdc-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/fcdc-desktop-third.jpg').default,
          require('../assets/img/projects/fcdc-desktop-third@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: '12 Saffron',
    name: 'saffron',
    description: 'Целевая страница для продажи частного дома в Новой Зеландии',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/12-saffron',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.zeplin}`,
      'Дом успешно продан',
      'Август 2017',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/saffron@2x.jpg').default,
          require('../assets/img/projects/saffron-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/saffron-desktop-second.jpg').default,
          require('../assets/img/projects/saffron-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/saffron-desktop-third.jpg').default,
          require('../assets/img/projects/saffron-desktop-third@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/saffron-mobile-first.jpg').default,
          require('../assets/img/projects/saffron-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/saffron-mobile-second.jpg').default,
          require('../assets/img/projects/saffron-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/saffron-mobile-third.jpg').default,
          require('../assets/img/projects/saffron-mobile-third@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Whip Around',
    name: 'whip',
    description: 'Новозеландский сервис техосмотра автомобилей',
    types: ['site'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/whip-around',
    features: [
      featureText.growthSupportDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.jquery}, ${TECHNOLOGY_TITLE.blade}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bootstrap}, ${featureText.responsive}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.laravel}`,
      `Поработал с ${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.laravel} и ${TECHNOLOGY_TITLE.blade}`,
      'Сентябрь 2017',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/whip@2x.jpg').default,
          require('../assets/img/projects/whip-desktop@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/whip-mobile.jpg').default,
          require('../assets/img/projects/whip-mobile@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'LazyAz',
    name: 'lazyazd',
    description: 'Админка новозеландского сервиса доставки товаров',
    types: ['admin'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/lazyaz',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.jquery}, ${TECHNOLOGY_TITLE.blade}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bootstrap}, ${featureText.responsive}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.laravel}, ${TECHNOLOGY_TITLE.zeplin}`,
      `Поработал с ${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.laravel} и ${TECHNOLOGY_TITLE.blade}`,
      'Май 2017',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/lazyazd@2x.jpg').default,
          require('../assets/img/projects/lazyazd-desktop@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/lazyazd-mobile.jpg').default,
          require('../assets/img/projects/lazyazd-mobile@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'LazyAz',
    name: 'lazyaz',
    description: 'Веб-платформа новозеландского сервиса доставки товаров',
    types: ['site', 'app'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/lazyaz',
    features: [
      featureText.wholeDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.jquery}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}, ${featureText.emails}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      'Первый коммерческий проект, написанный с нуля',
      'Март 2017',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/lazyaz@2x.jpg').default,
          require('../assets/img/projects/lazyaz-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/lazyaz-desktop-second.jpg').default,
          require('../assets/img/projects/lazyaz-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/lazyaz-desktop-third.jpg').default,
          require('../assets/img/projects/lazyaz-desktop-third@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/lazyaz-mobile-first@2x.jpg').default,
          require('../assets/img/projects/lazyaz-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/lazyaz-mobile-second.jpg').default,
          require('../assets/img/projects/lazyaz-mobile-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/lazyaz-mobile-third.jpg').default,
          require('../assets/img/projects/lazyaz-mobile-third@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: '7 glyphs',
    name: 'glyphs',
    description: 'Домашний сайт новозеландского диджитал-агентства',
    types: ['site'],
    companyName: 'sevenGlyphs',
    features: [
      `Переписывание кодовой базы с ${TECHNOLOGY_TITLE.jquery} на ${TECHNOLOGY_TITLE.react}`,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.jquery}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${featureText.responsive}`,
      `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.webpack}`,
      'Превратил сайт в SPA',
      'Январь 2017',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/glyphs@2x.jpg').default,
          require('../assets/img/projects/glyphs-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/glyphs-desktop-second.jpg').default,
          require('../assets/img/projects/glyphs-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('../assets/img/projects/glyphs-desktop-third.jpg').default,
          require('../assets/img/projects/glyphs-desktop-third@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/glyphs-mobile-first.jpg').default,
          require('../assets/img/projects/glyphs-mobile-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/glyphs-mobile-second.jpg').default,
          require('../assets/img/projects/glyphs-mobile-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/glyphs-mobile-third.jpg').default,
          require('../assets/img/projects/glyphs-mobile-third@2x.jpg').default,
        ],
      ],
    },
  },
  {
    title: 'Бизнес-навигатор МСП',
    name: 'msp',
    description:
      'Ресурс для предпринимателей, которые хотят открыть или расширить свой бизнес',
    types: ['site', 'app'],
    companyName: 'everpoint',
    href: 'https://www.everpoint.ru/msp',
    features: [
      featureText.growthSupportDevelopment,
      featureText.teamWork,
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.handlebars}, ${TECHNOLOGY_TITLE.jquery}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.sass}, Semantic UI`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.photoshop}`,
      `Первый коммерческий проект`,
      'Август 2016',
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/msp@2x.jpg').default,
          require('../assets/img/projects/msp-desktop-first@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/msp-desktop-second.jpg').default,
          require('../assets/img/projects/msp-desktop-second@2x.jpg').default,
        ],
        [
          require('../assets/img/projects/msp-desktop-third.jpg').default,
          require('../assets/img/projects/msp-desktop-third@2x.jpg').default,
        ],
      ],
    },
  },
]

export default PROJECTS
