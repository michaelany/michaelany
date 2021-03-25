import CodeIcon from '@material-ui/icons/CodeRounded'
import EventIcon from '@material-ui/icons/EventRounded'
import PaletteIcon from '@material-ui/icons/PaletteRounded'
import WebIcon from '@material-ui/icons/WebRounded'
import GroupWorkIcon from '@material-ui/icons/GroupWorkRounded'
import BuildIcon from '@material-ui/icons/BuildRounded'
import StarIcon from '@material-ui/icons/StarRounded'
import CheckCircleIcon from '@material-ui/icons/CheckCircleRounded'

import {
  COMPANY,
  COMPANY_TITLE,
  TECHNOLOGY_TITLE,
  PROJECT_TYPE_LABEL,
} from './common'
import {PATH_COLOR, PROJECT_ROUTE} from '../utils/constants'
import {Project} from '../utils/types'

const PROJECTS: Project[] = [
  {
    title: 'Proximal',
    name: 'proximal',
    description: 'Лендинг австралийской кофейни "Proximal Coffee".',
    type: 'landing',
    color: PATH_COLOR[PROJECT_ROUTE.proximal],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.proximal,
    href: 'https://www.proximalcoffee.com.au',
    features: [
      {
        label: 'Разработка проекта с нуля',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.js}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.landing, Icon: WebIcon},
      {label: 'Декабрь 2019', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/proximal@2x.jpg'),
          require('../assets/img/projects/proximal-desktop-first@2x.jpg'),
        ],

        [
          require('../assets/img/projects/proximal-desktop-second.jpg'),
          require('../assets/img/projects/proximal-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/proximal-desktop-third.jpg'),
          require('../assets/img/projects/proximal-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/proximal-mobile-first.jpg'),
          require('../assets/img/projects/proximal-mobile-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/proximal-mobile-second.jpg'),
          require('../assets/img/projects/proximal-mobile-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/proximal-mobile-third.jpg'),
          require('../assets/img/projects/proximal-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'АРМА ЕМБП',
    name: 'embp',
    description: 'Админка биометрической платформы для банка "ВТБ".',
    type: 'admin',
    color: PATH_COLOR[PROJECT_ROUTE.embp],
    company: COMPANY.tsftd,
    path: PROJECT_ROUTE.embp,
    features: [
      {
        label: 'Разработка с нуля, развитие и поддержка проекта',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Управление командой из двух фронтенд разработчиков',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.ts}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.styled}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.jest}`,
        Icon: BuildIcon,
      },
      {
        label: 'Обширная бизнес-логика, темная тема',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.admin, Icon: WebIcon},
      {label: 'Июль 2019', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/embp@2x.jpg'),
          require('../assets/img/projects/embp-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/embp-desktop-second.jpg'),
          require('../assets/img/projects/embp-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/embp-desktop-third.jpg'),
          require('../assets/img/projects/embp-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'TMF',
    name: 'tmf',
    description:
      'Многостраничный сайт новозеландской строительной компании "Ted Manson Foundation".',
    type: 'site',
    color: PATH_COLOR[PROJECT_ROUTE.tmf],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.tmf,
    href: 'https://www.tmfoundation.co.nz',
    features: [
      {
        label: 'Разработка проекта с нуля',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.js}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.photoshop}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.site, Icon: WebIcon},
      {label: 'Октябрь 2019', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/tmf@2x.jpg'),
          require('../assets/img/projects/tmf-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/tmf-desktop-second.jpg'),
          require('../assets/img/projects/tmf-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/tmf-desktop-third.jpg'),
          require('../assets/img/projects/tmf-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/tmf-mobile-first.jpg'),
          require('../assets/img/projects/tmf-mobile-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/tmf-mobile-second.jpg'),
          require('../assets/img/projects/tmf-mobile-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/tmf-mobile-third.jpg'),
          require('../assets/img/projects/tmf-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: '7 glyphs Lite',
    name: 'lite',
    description: `Лендинг сервиса новозеландского диджитал-агентства "${COMPANY_TITLE.sevenGlyphs}".`,
    type: 'landing',
    color: PATH_COLOR[PROJECT_ROUTE.lite],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.lite,
    href: 'https://lite.7glyphs.com',
    features: [
      {
        label: 'Разработка проекта с нуля',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.landing, Icon: WebIcon},
      {label: 'Сентябрь 2019', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/lite@2x.jpg'),
          require('../assets/img/projects/lite-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/lite-desktop-second.jpg'),
          require('../assets/img/projects/lite-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/lite-desktop-third.jpg'),
          require('../assets/img/projects/lite-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/lite-mobile-first.jpg'),
          require('../assets/img/projects/lite-mobile-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/lite-mobile-second.jpg'),
          require('../assets/img/projects/lite-mobile-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/lite-mobile-third.jpg'),
          require('../assets/img/projects/lite-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'Melissa',
    name: 'melissa',
    description: 'Лендинг фитнес-блогера Melissa Chalmers.',
    type: 'landing',
    color: PATH_COLOR[PROJECT_ROUTE.mellissa],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.mellissa,
    href: 'https://7glyphs.com/portfolio/projects/melissachalmers',
    features: [
      {
        label: 'Разработка проекта с нуля',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.landing, Icon: WebIcon},
      {label: 'Сентябрь 2019', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/melissa@2x.jpg'),
          require('../assets/img/projects/melissa-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/melissa-desktop-second.jpg'),
          require('../assets/img/projects/melissa-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/melissa-desktop-third.jpg'),
          require('../assets/img/projects/melissa-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/melissa-mobile-first.jpg'),
          require('../assets/img/projects/melissa-mobile-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/melissa-mobile-second.jpg'),
          require('../assets/img/projects/melissa-mobile-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/melissa-mobile-third.jpg'),
          require('../assets/img/projects/melissa-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'Foodprint',
    name: 'foodp',
    description:
      'Админка новозеландского сервиса заказа еды в ресторанах "Foodprint".',
    type: 'admin',
    color: PATH_COLOR[PROJECT_ROUTE.foodp],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.foodp,
    href: 'https://7glyphs.com/portfolio/projects/foodprint',
    features: [
      {
        label: 'Разработка с нуля, развитие и поддержка проекта',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.sass}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: 'Крупный проект с обширной бизнес-логикой',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.admin, Icon: WebIcon},
      {label: 'Июнь 2019', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/foodp@2x.jpg'),
          require('../assets/img/projects/foodp-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/foodp-desktop-second.jpg'),
          require('../assets/img/projects/foodp-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/foodp-desktop-third.jpg'),
          require('../assets/img/projects/foodp-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'Foodprint',
    name: 'food',
    description:
      'Лендинг новозеландского сервиса заказа еды в ресторанах "Foodprint".',
    type: 'landing',
    color: PATH_COLOR[PROJECT_ROUTE.food],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.food,
    href: 'https://7glyphs.com/portfolio/projects/foodprint',
    features: [
      {
        label: 'Разработка проекта с нуля',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.landing, Icon: WebIcon},
      {label: 'Июнь 2019', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/food@2x.jpg'),
          require('../assets/img/projects/food-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/food-desktop-second.jpg'),
          require('../assets/img/projects/food-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/food-desktop-third.jpg'),
          require('../assets/img/projects/food-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/food-mobile-first.jpg'),
          require('../assets/img/projects/food-mobile-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/food-mobile-second.jpg'),
          require('../assets/img/projects/food-mobile-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/food-mobile-third.jpg'),
          require('../assets/img/projects/food-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'SDS',
    name: 'sds',
    description:
      'Единый кабинет для работы сотрудников и партнеров компании "Vaillant".',
    type: 'app',
    color: PATH_COLOR[PROJECT_ROUTE.sds],
    company: COMPANY.tsftd,
    path: PROJECT_ROUTE.sds,
    features: [
      {
        label: 'Разработка с нуля, развитие и поддержка проекта',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Разработка в команде с фронтенд разработчиком',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.styled}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, Keycloak, ${TECHNOLOGY_TITLE.webpack}`,
        Icon: BuildIcon,
      },
      {
        label: 'Поработал с Keycloak',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.app, Icon: WebIcon},
      {label: '-', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/sds@2x.jpg'),
          require('../assets/img/projects/sds-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/sds-desktop-second.jpg'),
          require('../assets/img/projects/sds-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/sds-desktop-third.jpg'),
          require('../assets/img/projects/sds-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'StrongHer',
    name: 'strong',
    description: 'Лендинг мобильного фитнес-приложения "StrongHer".',
    type: 'landing',
    color: PATH_COLOR[PROJECT_ROUTE.strong],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.strong,
    href: 'https://7glyphs.com/portfolio/projects/strongher',
    features: [
      {
        label: 'Разработка с нуля, развитие и поддержка проекта',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, Stripe, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.landing, Icon: WebIcon},
      {label: 'Февраль 2019', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/strong@2x.jpg'),
          require('../assets/img/projects/strong-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/strong-desktop-second.jpg'),
          require('../assets/img/projects/strong-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/strong-desktop-third.jpg'),
          require('../assets/img/projects/strong-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/strong-mobile-first.jpg'),
          require('../assets/img/projects/strong-mobile-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/strong-mobile-second.jpg'),
          require('../assets/img/projects/strong-mobile-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/strong-mobile-third.jpg'),
          require('../assets/img/projects/strong-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'Rogue Travel',
    name: 'rogue',
    description:
      'Новозеландский сервис группового бронирования авиабилетов и отелей "Rogue Travel".',
    type: 'site',
    color: PATH_COLOR[PROJECT_ROUTE.rogue],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.rogue,
    href: 'https://7glyphs.com/portfolio/projects/rogue-travel',
    features: [
      {
        label: 'Разработка с нуля и поддержка проекта',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.sass}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, Stripe, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Крупный проект с обширной бизнес-логикой',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.site, Icon: WebIcon},
      {label: 'Ноябрь 2018', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/rogue@2x.jpg'),
          require('../assets/img/projects/rogue-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/rogue-desktop-second.jpg'),
          require('../assets/img/projects/rogue-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/rogue-desktop-third.jpg'),
          require('../assets/img/projects/rogue-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'Quarry Trucks',
    name: 'trucks',
    description:
      'Новозеландский сервис мониторинга передвижения грузовиков "Quarry Trucks".',
    type: 'app',
    color: PATH_COLOR[PROJECT_ROUTE.trucks],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.trucks,
    href: 'https://7glyphs.com/portfolio/projects/quarry-trucks',
    features: [
      {
        label: 'Верстка и разработка части бизнес-логики',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Разработка в команде с фронтенд разработчиком',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.mobx}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.sass}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: `Поработал с ${TECHNOLOGY_TITLE.mobx} и графиками`,
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.app, Icon: WebIcon},
      {label: 'Май 2018', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/trucks@2x.jpg'),
          require('../assets/img/projects/trucks-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/trucks-desktop-second.jpg'),
          require('../assets/img/projects/trucks-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/trucks-desktop-third.jpg'),
          require('../assets/img/projects/trucks-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'Services',
    name: 'services',
    description: `Лендинг описания услуг новозеландского диджитал-агентства "${COMPANY_TITLE.sevenGlyphs}".`,
    type: 'landing',
    color: PATH_COLOR[PROJECT_ROUTE.services],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.services,
    href: 'https://7glyphs.com/approach/packages',
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.landing, Icon: WebIcon},
      {label: 'Февраль 2018', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/services@2x.jpg'),
          require('../assets/img/projects/services-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/services-desktop-second.jpg'),
          require('../assets/img/projects/services-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/services-desktop-third.jpg'),
          require('../assets/img/projects/services-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/services-mobile-first.jpg'),
          require('../assets/img/projects/services-mobile-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/services-mobile-second.jpg'),
          require('../assets/img/projects/services-mobile-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/services-mobile-third.jpg'),
          require('../assets/img/projects/services-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'FCDC',
    name: 'fcdc',
    description: 'Админка сервиса управления мероприятиями "FCDC".',
    type: 'admin',
    color: PATH_COLOR[PROJECT_ROUTE.fcdc],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.fcdc,
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.mui}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.sass}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.photoshop}`,
        Icon: BuildIcon,
      },
      {
        label: 'Большое количество форм и таблиц',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.admin, Icon: WebIcon},
      {label: 'Январь 2018', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/fcdc@2x.jpg'),
          require('../assets/img/projects/fcdc-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/fcdc-desktop-second.jpg'),
          require('../assets/img/projects/fcdc-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/fcdc-desktop-third.jpg'),
          require('../assets/img/projects/fcdc-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: '12 Saffron',
    name: '12saffron',
    description: 'Целевая страница для продажи частного дома в Новой Зеландии.',
    type: 'landing',
    color: PATH_COLOR[PROJECT_ROUTE.saffron],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.saffron,
    href: 'https://7glyphs.com/portfolio/projects/12-saffron',
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.js}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.sass}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: 'Дом успешно продан',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.landing, Icon: WebIcon},
      {label: 'Август 2017', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/12saffron@2x.jpg'),
          require('../assets/img/projects/12saffron-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/12saffron-desktop-second.jpg'),
          require('../assets/img/projects/12saffron-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/12saffron-desktop-third.jpg'),
          require('../assets/img/projects/12saffron-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/12saffron-mobile-first.jpg'),
          require('../assets/img/projects/12saffron-mobile-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/12saffron-mobile-second.jpg'),
          require('../assets/img/projects/12saffron-mobile-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/12saffron-mobile-third.jpg'),
          require('../assets/img/projects/12saffron-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'Whip Around',
    name: 'whip',
    description: 'Новозеландский сервис техосмотра автомобилей "Whip Around".',
    type: 'site',
    color: PATH_COLOR[PROJECT_ROUTE.whip],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.whip,
    href: 'https://7glyphs.com/portfolio/projects/whip-around',
    features: [
      {label: 'Развитие и поддержка проекта', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.jquery}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bootstrap}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.laravel}`,
        Icon: BuildIcon,
      },
      {
        label: `Поработал с ${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.laravel} и ${TECHNOLOGY_TITLE.blade}`,
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.site, Icon: WebIcon},
      {label: 'Сентябрь 2017', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/whip@2x.jpg'),
          require('../assets/img/projects/whip-desktop@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/whip-mobile.jpg'),
          require('../assets/img/projects/whip-mobile@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'LazyAz',
    name: 'lazyazd',
    description: 'Админка новозеландского сервиса доставки "LazyAz".',
    type: 'admin',
    color: PATH_COLOR[PROJECT_ROUTE.lazyazd],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.lazyazd,
    href: 'https://7glyphs.com/portfolio/projects/lazyaz',
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.jquery}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bootstrap}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.laravel}, ${TECHNOLOGY_TITLE.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: `Поработал с ${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.laravel} и ${TECHNOLOGY_TITLE.blade}`,
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.admin, Icon: WebIcon},
      {label: 'Май 2017', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/lazyazd@2x.jpg'),
          require('../assets/img/projects/lazyazd-desktop@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/lazyazd-mobile.jpg'),
          require('../assets/img/projects/lazyazd-mobile@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'LazyAz',
    name: 'lazyaz',
    description: 'Веб-платформа новозеландского сервиса доставки "LazyAz".',
    type: 'site',
    color: PATH_COLOR[PROJECT_ROUTE.lazyaz],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.lazyaz,
    href: 'https://7glyphs.com/portfolio/projects/lazyaz',
    features: [
      {
        label: 'Разработка с нуля, развитие и поддержка проекта',
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.jquery}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.sass}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: 'Первый коммерческий проект, написанный с нуля',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.site, Icon: WebIcon},
      {label: 'Март 2017', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/lazyaz@2x.jpg'),
          require('../assets/img/projects/lazyaz-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/lazyaz-desktop-second.jpg'),
          require('../assets/img/projects/lazyaz-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/lazyaz-desktop-third.jpg'),
          require('../assets/img/projects/lazyaz-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/lazyaz-mobile-first@2x.jpg'),
          require('../assets/img/projects/lazyaz-mobile-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/lazyaz-mobile-second.jpg'),
          require('../assets/img/projects/lazyaz-mobile-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/lazyaz-mobile-third.jpg'),
          require('../assets/img/projects/lazyaz-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'Сайт 7 glyphs',
    name: '7glyphs',
    description: `Сайт новозеландского диджитал-агентства "${COMPANY_TITLE.sevenGlyphs}".`,
    type: 'site',
    color: PATH_COLOR[PROJECT_ROUTE.glyphs],
    company: COMPANY.sevenGlyphs,
    path: PROJECT_ROUTE.glyphs,
    href: COMPANY.sevenGlyphs.href,
    features: [
      {
        label: `Переписывание кодовой базы с ${TECHNOLOGY_TITLE.jquery} на ${TECHNOLOGY_TITLE.react}`,
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.jquery}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.webpack}`,
        Icon: BuildIcon,
      },
      {
        label: 'Превратил сайт в SPA',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.site, Icon: WebIcon},
      {label: 'Январь 2017', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/7glyphs@2x.jpg'),
          require('../assets/img/projects/7glyphs-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/7glyphs-desktop-second.jpg'),
          require('../assets/img/projects/7glyphs-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/7glyphs-desktop-third.jpg'),
          require('../assets/img/projects/7glyphs-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('../assets/img/projects/7glyphs-mobile-first.jpg'),
          require('../assets/img/projects/7glyphs-mobile-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/7glyphs-mobile-second.jpg'),
          require('../assets/img/projects/7glyphs-mobile-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/7glyphs-mobile-third.jpg'),
          require('../assets/img/projects/7glyphs-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    title: 'МСП',
    name: 'msp',
    description:
      'Ресурс для предпринимателей, которые хотят открыть или расширить свой бизнес.',
    type: 'app',
    color: PATH_COLOR[PROJECT_ROUTE.msp],
    company: COMPANY.everpoint,
    path: PROJECT_ROUTE.msp,
    href: 'https://www.everpoint.ru/msp',
    features: [
      {label: 'Развитие и поддержка проекта', Icon: CheckCircleIcon},
      {
        label: 'Член команды фронтенд разработки',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.html}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.handlebars}, ${TECHNOLOGY_TITLE.jquery}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.semantic}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.photoshop}`,
        Icon: BuildIcon,
      },
      {
        label: 'Первый коммерческий проект',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABEL.app, Icon: WebIcon},
      {label: 'Август 2016', Icon: EventIcon, time: true},
    ],
    images: {
      desktop: [
        [
          require('../assets/img/projects/msp@2x.jpg'),
          require('../assets/img/projects/msp-desktop-first@2x.jpg'),
        ],
        [
          require('../assets/img/projects/msp-desktop-second.jpg'),
          require('../assets/img/projects/msp-desktop-second@2x.jpg'),
        ],
        [
          require('../assets/img/projects/msp-desktop-third.jpg'),
          require('../assets/img/projects/msp-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
]

export default PROJECTS
