import {COMPANY, COMPANY_TITLE, TECHNOLOGY_TITLE} from './common'
import {Project} from '../utils/types'

const featureText = {
  wholeDevelopment: 'Разработка с нуля, развитие, поддержка',
  scratchGrowthDevelopment: 'Разработка с нуля, поддержка',
  scratchDevelopment: 'Разработка с нуля',
  growthSupportDevelopment: 'Развитие, поддержка',
  leadWork: 'Тимлид команды разработки',
  teamWork: 'Член команды разработки',
  soloWork: 'Самостоятельная разработка',
  responsive: 'Адаптивный интерфейс',
  animations: 'Анимации',
  rest: 'Rest API',
  stripe: 'Stripe',
  businessLogic: 'Обширная бизнес-логика',
}

const PROJECTS: Project[] = [
  {
    title: 'Proximal',
    name: 'proximal',
    description: 'Лендинг австралийской кофейни "Proximal Coffee".',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://www.proximalcoffee.com.au',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.js}`,
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
    description: 'Админка биометрической платформы для банка "ВТБ".',
    types: ['admin', 'app'],
    companyName: 'tsftd',
    features: [
      featureText.wholeDevelopment,
      featureText.leadWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.ts}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.styled}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.jest}`,
      'Реализовал темную тему',
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
      ],
    },
  },
  {
    title: 'TMF',
    name: 'tmf',
    description:
      'Многостраничный лендинг новозеландской строительной компании "Ted Manson Foundation".',
    types: ['site', 'landing'],
    companyName: 'sevenGlyphs',
    href: 'https://www.tmfoundation.co.nz',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.js}`,
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
      ],
    },
  },
  {
    title: '7 glyphs Lite',
    name: 'lite',
    description: `Лендинг сервиса новозеландского диджитал-агентства "${COMPANY_TITLE.sevenGlyphs}".`,
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://lite.7glyphs.com',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${featureText.responsive}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
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
      ],
    },
  },
  {
    title: 'Melissa',
    name: 'melissa',
    description: 'Лендинг фитнес-блогера Melissa Chalmers.',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/melissachalmers',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${featureText.responsive}`,
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
      'Админка новозеландского сервиса заказа еды в ресторанах "Foodprint".',
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/foodprint',
    features: [
      featureText.wholeDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}`,
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
      ],
    },
  },
  {
    title: 'Foodprint',
    name: 'food',
    description:
      'Лендинг новозеландского сервиса заказа еды в ресторанах "Foodprint".',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/foodprint',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${featureText.responsive}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
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
      ],
    },
  },
  {
    title: 'SDS',
    name: 'sds',
    description:
      'Единый кабинет для работы сотрудников и партнеров компании "Vaillant".',
    types: ['app'],
    companyName: 'tsftd',
    features: [
      featureText.wholeDevelopment,
      featureText.leadWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.styled}`,
      `${featureText.rest}, Keycloak, ${TECHNOLOGY_TITLE.webpack}`,
      'Поработал с Keycloak',
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
      ],
    },
  },
  {
    title: 'StrongHer',
    name: 'strong',
    description: 'Лендинг мобильного фитнес-приложения "StrongHer".',
    types: ['landing', 'app'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/strongher',
    features: [
      featureText.wholeDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${featureText.responsive}`,
      `${featureText.rest}, ${featureText.stripe.toLowerCase()}, ${
        TECHNOLOGY_TITLE.webpack
      }, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      featureText.animations,
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
      ],
    },
  },
  {
    title: 'Rogue Travel',
    name: 'rogue',
    description:
      'Новозеландский сервис группового бронирования авиабилетов и отелей "Rogue Travel".',
    types: ['site', 'app'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/rogue-travel',
    features: [
      featureText.scratchGrowthDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
      `${featureText.rest}, ${featureText.stripe}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
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
    description:
      'Новозеландский сервис мониторинга передвижения грузовиков "Quarry Trucks".',
    types: ['app'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/quarry-trucks',
    features: [
      'Верстка и разработка части бизнес-логики',
      featureText.teamWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.mobx}`,
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
    title: 'Services',
    name: 'services',
    description: `Лендинг описания услуг новозеландского диджитал-агентства "${COMPANY_TITLE.sevenGlyphs}".`,
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/approach/packages',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
      `${featureText.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
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
    description: 'Админка сервиса управления мероприятиями "FCDC".',
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.bem}`,
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
    description: 'Целевая страница для продажи частного дома в Новой Зеландии.',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/12-saffron',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.js}`,
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
    description: 'Новозеландский сервис техосмотра автомобилей "Whip Around".',
    types: ['site'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/whip-around',
    features: [
      featureText.growthSupportDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.jquery}`,
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
    description: 'Админка новозеландского сервиса доставки "LazyAz".',
    types: ['admin'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/lazyaz',
    features: [
      featureText.scratchDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.jquery}`,
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
    description: 'Веб-платформа новозеландского сервиса доставки "LazyAz".',
    types: ['site', 'app'],
    companyName: 'sevenGlyphs',
    href: 'https://7glyphs.com/portfolio/projects/lazyaz',
    features: [
      featureText.wholeDevelopment,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.jquery}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${featureText.responsive}`,
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
    title: 'Сайт 7 glyphs',
    name: 'glyphs',
    description: `Домашний сайт новозеландского диджитал-агентства "${COMPANY_TITLE.sevenGlyphs}".`,
    types: ['site', 'landing'],
    companyName: 'sevenGlyphs',
    href: COMPANY.sevenGlyphs.href,
    features: [
      `Переписывание кодовой базы с ${TECHNOLOGY_TITLE.jquery} на ${TECHNOLOGY_TITLE.react}`,
      featureText.soloWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.jquery}`,
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
    title: 'МСП',
    name: 'msp',
    description:
      'Ресурс для предпринимателей, которые хотят открыть или расширить свой бизнес.',
    types: ['app', 'site'],
    companyName: 'everpoint',
    href: 'https://www.everpoint.ru/msp',
    features: [
      featureText.growthSupportDevelopment,
      featureText.teamWork,
      `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.handlebars}, ${TECHNOLOGY_TITLE.jquery}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.semantic}`,
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
