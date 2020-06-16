import CodeIcon from '@material-ui/icons/CodeRounded'
import EventIcon from '@material-ui/icons/EventRounded'
import PaletteIcon from '@material-ui/icons/PaletteRounded'
import WebIcon from '@material-ui/icons/WebRounded'
import GroupWorkIcon from '@material-ui/icons/GroupWorkRounded'
import BuildIcon from '@material-ui/icons/BuildRounded'
import StarIcon from '@material-ui/icons/StarRounded'
import CheckCircleIcon from '@material-ui/icons/CheckCircleRounded'

import {COMPANIES, TECHNOLOGY_TITLES, PROJECT_TYPE_LABELS} from './common'
import {PROJECT_TYPES, PATH_COLORS, PROJECT_PATHS} from '../utils/constants'
import {Project} from '../utils/types'

const PROJECTS: Project[] = [
  {
    title: 'Proximal Coffee',
    name: 'proximal',
    description: 'Лендинг австралийской кофейни.',
    type: PROJECT_TYPES.landing,
    color: PATH_COLORS[PROJECT_PATHS.proximal],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.proximal,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.pug}, ${TECHNOLOGY_TITLES.js}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.gulp}, ${TECHNOLOGY_TITLES.zeplin}, ${TECHNOLOGY_TITLES.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.landing, Icon: WebIcon},
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
    description: 'Админка биометрической платформы.',
    type: PROJECT_TYPES.admin,
    color: PATH_COLORS[PROJECT_PATHS.embp],
    company: COMPANIES.tsftd,
    path: PROJECT_PATHS.embp,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.ts}, ${TECHNOLOGY_TITLES.react}, ${TECHNOLOGY_TITLES.redux}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.mui}, ${TECHNOLOGY_TITLES.styled}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.webpack}, ${TECHNOLOGY_TITLES.jest}`,
        Icon: BuildIcon,
      },
      {
        label: 'Обширная бизнес-логика, темная тема',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.admin, Icon: WebIcon},
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
    title: 'Ted Manson Foundation',
    name: 'tmf',
    description: 'Многостраничный сайт новозеландской строительной компании.',
    type: PROJECT_TYPES.site,
    color: PATH_COLORS[PROJECT_PATHS.tmf],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.tmf,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.pug}, ${TECHNOLOGY_TITLES.js}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.gulp}, ${TECHNOLOGY_TITLES.photoshop}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.site, Icon: WebIcon},
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
    description: 'Лендинг сервиса новозеландской ИТ компании.',
    type: PROJECT_TYPES.landing,
    color: PATH_COLORS[PROJECT_PATHS.lite],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.lite,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.mui}, ${TECHNOLOGY_TITLES.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.cra}, ${TECHNOLOGY_TITLES.zeplin}, ${TECHNOLOGY_TITLES.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.landing, Icon: WebIcon},
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
    title: 'Melissa Chalmers',
    name: 'melissa',
    description: 'Лендинг фитнес-блога.',
    type: PROJECT_TYPES.landing,
    color: PATH_COLORS[PROJECT_PATHS.mellissa],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.mellissa,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.mui}, ${TECHNOLOGY_TITLES.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.cra}, ${TECHNOLOGY_TITLES.zeplin}, ${TECHNOLOGY_TITLES.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.landing, Icon: WebIcon},
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
    title: 'Foodprint Portal',
    name: 'foodp',
    description: 'Админка новозеландского сервиса заказа еды в ресторанах.',
    type: PROJECT_TYPES.admin,
    color: PATH_COLORS[PROJECT_PATHS.foodp],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.foodp,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}, ${TECHNOLOGY_TITLES.redux}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.mui}, ${TECHNOLOGY_TITLES.sass}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.webpack}, ${TECHNOLOGY_TITLES.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: 'Крупный проект с обширной бизнес-логикой',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.admin, Icon: WebIcon},
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
    description: 'Лендинг новозеландского сервиса заказа еды в ресторанах.',
    type: PROJECT_TYPES.landing,
    color: PATH_COLORS[PROJECT_PATHS.food],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.food,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.mui}, ${TECHNOLOGY_TITLES.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.cra}, ${TECHNOLOGY_TITLES.zeplin}, ${TECHNOLOGY_TITLES.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.landing, Icon: WebIcon},
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
    title: 'Sales Digital System',
    name: 'sds',
    description: 'Единый кабинет для работы сотрудников и партнеров компании.',
    type: PROJECT_TYPES.app,
    color: PATH_COLORS[PROJECT_PATHS.sds],
    company: COMPANIES.tsftd,
    path: PROJECT_PATHS.sds,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}, ${TECHNOLOGY_TITLES.redux}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.mui}, ${TECHNOLOGY_TITLES.styled}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, Keycloak, ${TECHNOLOGY_TITLES.cra}`,
        Icon: BuildIcon,
      },
      {
        label: 'Поработал с Keycloak',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.app, Icon: WebIcon},
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
    description: 'Лендинг мобильного фитнес-приложения.',
    type: PROJECT_TYPES.landing,
    color: PATH_COLORS[PROJECT_PATHS.strong],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.strong,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.mui}, ${TECHNOLOGY_TITLES.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, Stripe, ${TECHNOLOGY_TITLES.cra}, ${TECHNOLOGY_TITLES.zeplin}, ${TECHNOLOGY_TITLES.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.landing, Icon: WebIcon},
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
      'Новозеландский сервис группового бронирования авиабилетов и отелей.',
    type: PROJECT_TYPES.site,
    color: PATH_COLORS[PROJECT_PATHS.rogue],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.rogue,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}, ${TECHNOLOGY_TITLES.redux}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.mui}, ${TECHNOLOGY_TITLES.sass}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, Stripe, ${TECHNOLOGY_TITLES.webpack}, ${TECHNOLOGY_TITLES.zeplin}, ${TECHNOLOGY_TITLES.sketch}`,
        Icon: BuildIcon,
      },
      {
        label: 'Крупный проект с обширной бизнес-логикой',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.site, Icon: WebIcon},
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
    description: 'Новозеландский сервис мониторинга передвижения грузовиков.',
    type: PROJECT_TYPES.app,
    color: PATH_COLORS[PROJECT_PATHS.trucks],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.trucks,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}, ${TECHNOLOGY_TITLES.mobx}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.sass}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: `Поработал с ${TECHNOLOGY_TITLES.mobx} и графиками`,
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.app, Icon: WebIcon},
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
    title: 'Service Packages',
    name: 'services',
    description: 'Лендинг описания услуг новозеландской ИТ компании.',
    type: PROJECT_TYPES.landing,
    color: PATH_COLORS[PROJECT_PATHS.services],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.services,
    href: 'https://7glyphs.com/approach/packages',
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.mui}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.sass}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.cra}, ${TECHNOLOGY_TITLES.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.landing, Icon: WebIcon},
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
    title: 'fcdc Dashboard',
    name: 'fcdc',
    description: 'Админка сервиса управления мероприятиями.',
    type: PROJECT_TYPES.admin,
    color: PATH_COLORS[PROJECT_PATHS.fcdc],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.fcdc,
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}, ${TECHNOLOGY_TITLES.redux}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.mui}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.sass}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.cra}, ${TECHNOLOGY_TITLES.photoshop}`,
        Icon: BuildIcon,
      },
      {
        label: 'Большое количество форм и таблиц',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.admin, Icon: WebIcon},
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
    description: 'Целевая страница для продажи дома в Новой Зеландии.',
    type: PROJECT_TYPES.landing,
    color: PATH_COLORS[PROJECT_PATHS.saffron],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.saffron,
    href: 'https://7glyphs.com/portfolio/projects/12-saffron',
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.pug}, ${TECHNOLOGY_TITLES.js}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.sass}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.gulp}, ${TECHNOLOGY_TITLES.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: 'Дом успешно продали',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.landing, Icon: WebIcon},
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
    description: 'Новозеландский сервис техосмотра автомобилей.',
    type: PROJECT_TYPES.site,
    color: PATH_COLORS[PROJECT_PATHS.whip],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.whip,
    href: 'https://7glyphs.com/portfolio/projects/whip-around',
    features: [
      {label: 'Развитие и поддержка проекта', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.php}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.jquery}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bootstrap}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.laravel}`,
        Icon: BuildIcon,
      },
      {
        label: `Поработал с ${TECHNOLOGY_TITLES.php}, ${TECHNOLOGY_TITLES.laravel} и ${TECHNOLOGY_TITLES.blade}`,
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.site, Icon: WebIcon},
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
    title: 'LazyAz Dashboard',
    name: 'lazyazd',
    description: 'Админка новозеландского сервиса доставки.',
    type: PROJECT_TYPES.admin,
    color: PATH_COLORS[PROJECT_PATHS.lazyazd],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.lazyazd,
    href: 'https://7glyphs.com/portfolio/projects/lazyaz',
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.php}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.jquery}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bootstrap}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.laravel}, ${TECHNOLOGY_TITLES.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: `Поработал с ${TECHNOLOGY_TITLES.php}, ${TECHNOLOGY_TITLES.laravel} и ${TECHNOLOGY_TITLES.blade}`,
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.admin, Icon: WebIcon},
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
    description: 'Веб-платформа новозеландского сервиса доставки.',
    type: PROJECT_TYPES.site,
    color: PATH_COLORS[PROJECT_PATHS.lazyaz],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.lazyaz,
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
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}, ${TECHNOLOGY_TITLES.redux}, ${TECHNOLOGY_TITLES.jquery}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.bem}, ${TECHNOLOGY_TITLES.sass}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.gulp}, ${TECHNOLOGY_TITLES.webpack}, ${TECHNOLOGY_TITLES.zeplin}`,
        Icon: BuildIcon,
      },
      {
        label: 'Первый коммерческий проект, написанный с нуля',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.site, Icon: WebIcon},
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
    description: `Сайт новозеландской ИТ компании.`,
    type: PROJECT_TYPES.site,
    color: PATH_COLORS[PROJECT_PATHS.glyphs],
    company: COMPANIES.sevenGlyphs,
    path: PROJECT_PATHS.glyphs,
    href: COMPANIES.sevenGlyphs.href,
    features: [
      {
        label: `Переписывание кодовой базы с ${TECHNOLOGY_TITLES.jquery} на ${TECHNOLOGY_TITLES.react}`,
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}, ${TECHNOLOGY_TITLES.jquery}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.sass}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.gulp}, ${TECHNOLOGY_TITLES.webpack}`,
        Icon: BuildIcon,
      },
      {
        label: 'Превратил сайт в SPA',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.site, Icon: WebIcon},
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
    title: 'Бизнес-навигатор МСП',
    name: 'msp',
    description:
      'Ресурс для предпринимателей, которые хотят открыть или расширить свой бизнес.',
    type: PROJECT_TYPES.app,
    color: PATH_COLORS[PROJECT_PATHS.msp],
    company: COMPANIES.everpoint,
    path: PROJECT_PATHS.msp,
    href: 'https://www.everpoint.ru/msp',
    features: [
      {label: 'Развитие и поддержка проекта', Icon: CheckCircleIcon},
      {
        label: 'Член команды фронтенд разработки',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.html}, ${TECHNOLOGY_TITLES.js}, ${TECHNOLOGY_TITLES.react}, ${TECHNOLOGY_TITLES.redux}, ${TECHNOLOGY_TITLES.handlebars}, ${TECHNOLOGY_TITLES.jquery}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.css}, ${TECHNOLOGY_TITLES.modules}, ${TECHNOLOGY_TITLES.sass}, ${TECHNOLOGY_TITLES.semantic}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.webpack}, ${TECHNOLOGY_TITLES.photoshop}`,
        Icon: BuildIcon,
      },
      {
        label: 'Первый коммерческий проект',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.app, Icon: WebIcon},
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
