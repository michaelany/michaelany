import CodeIcon from '@material-ui/icons/CodeTwoTone'
import EventIcon from '@material-ui/icons/EventTwoTone'
import PaletteIcon from '@material-ui/icons/PaletteTwoTone'
import WebIcon from '@material-ui/icons/WebTwoTone'
import GroupWorkIcon from '@material-ui/icons/GroupWorkTwoTone'
import BuildIcon from '@material-ui/icons/BuildTwoTone'
import StarIcon from '@material-ui/icons/StarTwoTone'
import CheckCircleIcon from '@material-ui/icons/CheckCircleTwoTone'

import {COMPANIES, TECHNOLOGY_TITLES, PROJECT_TYPE_LABELS} from './common'
import {PROJECT_TYPES, PATH_COLORS, PROJECT_PATHS} from '../utils/constants'
import {Project} from '../utils/types'

const PROJECTS: Project[] = [
  {
    title: 'Proximal Coffee',
    name: 'proximal',
    description: 'Лендинг австралийской кофейни.',
    type: PROJECT_TYPES.LANDING,
    color: PATH_COLORS[PROJECT_PATHS.PROXIMAL],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.PROXIMAL,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.PUG}, ${TECHNOLOGY_TITLES.JS}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.SASS}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.GULP}, ${TECHNOLOGY_TITLES.ZEPLIN}, ${TECHNOLOGY_TITLES.SKETCH}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.LANDING, Icon: WebIcon},
      {label: 'Декабрь 2019', Icon: EventIcon},
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
    type: PROJECT_TYPES.ADMIN,
    color: PATH_COLORS[PROJECT_PATHS.EMBP],
    company: COMPANIES.TSFTD,
    path: PROJECT_PATHS.EMBP,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.TS}, ${TECHNOLOGY_TITLES.REACT}, ${TECHNOLOGY_TITLES.REDUX}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.MUI}, ${TECHNOLOGY_TITLES.SASS}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.WEBPACK}, ${TECHNOLOGY_TITLES.JEST}`,
        Icon: BuildIcon,
      },
      {
        label: 'Обширная бизнес-логика, темная тема',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.ADMIN, Icon: WebIcon},
      {label: 'Июль 2019', Icon: EventIcon},
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
    type: PROJECT_TYPES.SITE,
    color: PATH_COLORS[PROJECT_PATHS.TMF],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.TMF,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.PUG}, ${TECHNOLOGY_TITLES.JS}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.SASS}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.GULP}, ${TECHNOLOGY_TITLES.PHOTOSHOP}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.SITE, Icon: WebIcon},
      {label: 'Октябрь 2019', Icon: EventIcon},
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
    type: PROJECT_TYPES.LANDING,
    color: PATH_COLORS[PROJECT_PATHS.LITE],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.LITE,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.MUI}, ${TECHNOLOGY_TITLES.SASS}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.CRA}, ${TECHNOLOGY_TITLES.ZEPLIN}, ${TECHNOLOGY_TITLES.SKETCH}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.LANDING, Icon: WebIcon},
      {label: 'Сентябрь 2019', Icon: EventIcon},
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
    type: PROJECT_TYPES.LANDING,
    color: PATH_COLORS[PROJECT_PATHS.MELISSA],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.MELISSA,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.MUI}, ${TECHNOLOGY_TITLES.SASS}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.CRA}, ${TECHNOLOGY_TITLES.ZEPLIN}, ${TECHNOLOGY_TITLES.SKETCH}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.LANDING, Icon: WebIcon},
      {label: 'Сентябрь 2019', Icon: EventIcon},
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
    type: PROJECT_TYPES.ADMIN,
    color: PATH_COLORS[PROJECT_PATHS.FOODP],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.FOODP,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}, ${TECHNOLOGY_TITLES.REDUX}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.MUI}, ${TECHNOLOGY_TITLES.SASS}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.WEBPACK}, ${TECHNOLOGY_TITLES.ZEPLIN}`,
        Icon: BuildIcon,
      },
      {
        label: 'Крупный проект с обширной бизнес-логикой',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.ADMIN, Icon: WebIcon},
      {label: 'Июнь 2019', Icon: EventIcon},
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
    type: PROJECT_TYPES.LANDING,
    color: PATH_COLORS[PROJECT_PATHS.FOOD],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.FOOD,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.MUI}, ${TECHNOLOGY_TITLES.SASS}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.CRA}, ${TECHNOLOGY_TITLES.ZEPLIN}, ${TECHNOLOGY_TITLES.SKETCH}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.LANDING, Icon: WebIcon},
      {label: 'Июнь 2019', Icon: EventIcon},
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
    type: PROJECT_TYPES.APP,
    color: PATH_COLORS[PROJECT_PATHS.SDS],
    company: COMPANIES.TSFTD,
    path: PROJECT_PATHS.SDS,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}, ${TECHNOLOGY_TITLES.REDUX}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.MUI}, ${TECHNOLOGY_TITLES.SASS}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, Keycloak, ${TECHNOLOGY_TITLES.CRA}`,
        Icon: BuildIcon,
      },
      {
        label: 'Поработал с Keycloak',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.APP, Icon: WebIcon},
      {label: '-', Icon: EventIcon},
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
    type: PROJECT_TYPES.LANDING,
    color: PATH_COLORS[PROJECT_PATHS.STRONG],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.STRONG,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.MUI}, ${TECHNOLOGY_TITLES.SASS}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, Stripe, ${TECHNOLOGY_TITLES.CRA}, ${TECHNOLOGY_TITLES.ZEPLIN}, ${TECHNOLOGY_TITLES.SKETCH}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.LANDING, Icon: WebIcon},
      {label: 'Февраль 2019', Icon: EventIcon},
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
    type: PROJECT_TYPES.SITE,
    color: PATH_COLORS[PROJECT_PATHS.ROGUE],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.ROGUE,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}, ${TECHNOLOGY_TITLES.REDUX}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.MUI}, ${TECHNOLOGY_TITLES.SASS}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, Stripe, ${TECHNOLOGY_TITLES.WEBPACK}, ${TECHNOLOGY_TITLES.ZEPLIN}, ${TECHNOLOGY_TITLES.SKETCH}`,
        Icon: BuildIcon,
      },
      {
        label: 'Крупный проект с обширной бизнес-логикой',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.SITE, Icon: WebIcon},
      {label: 'Ноябрь 2018', Icon: EventIcon},
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
    type: PROJECT_TYPES.APP,
    color: PATH_COLORS[PROJECT_PATHS.TRUCKS],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.TRUCKS,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}, ${TECHNOLOGY_TITLES.MOBX}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.SASS}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.ZEPLIN}`,
        Icon: BuildIcon,
      },
      {
        label: `Поработал с ${TECHNOLOGY_TITLES.MOBX} и графиками`,
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.APP, Icon: WebIcon},
      {label: 'Май 2018', Icon: EventIcon},
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
    type: PROJECT_TYPES.LANDING,
    color: PATH_COLORS[PROJECT_PATHS.SERVICES],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.SERVICES,
    href: 'https://7glyphs.com/approach/packages',
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.MUI}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.SASS}, адаптивный интерфейс, анимации`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.CRA}, ${TECHNOLOGY_TITLES.ZEPLIN}`,
        Icon: BuildIcon,
      },
      {
        label: 'Анимации',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.LANDING, Icon: WebIcon},
      {label: 'Февраль 2018', Icon: EventIcon},
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
    title: 'FCDC Dashboard',
    name: 'fcdc',
    description: 'Админка сервиса управления мероприятиями.',
    type: PROJECT_TYPES.ADMIN,
    color: PATH_COLORS[PROJECT_PATHS.FCDC],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.FCDC,
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}, ${TECHNOLOGY_TITLES.REDUX}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.MUI}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.SASS}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.CRA}, ${TECHNOLOGY_TITLES.PHOTOSHOP}`,
        Icon: BuildIcon,
      },
      {
        label: 'Большое количество форм и таблиц',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.ADMIN, Icon: WebIcon},
      {label: 'Январь 2018', Icon: EventIcon},
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
    type: PROJECT_TYPES.LANDING,
    color: PATH_COLORS[PROJECT_PATHS.SAFFRON],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.SAFFRON,
    href: 'https://7glyphs.com/portfolio/projects/12-saffron',
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.PUG}, ${TECHNOLOGY_TITLES.JS}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.SASS}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.GULP}, ${TECHNOLOGY_TITLES.ZEPLIN}`,
        Icon: BuildIcon,
      },
      {
        label: 'Дом успешно продали',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.LANDING, Icon: WebIcon},
      {label: 'Август 2017', Icon: EventIcon},
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
    type: PROJECT_TYPES.SITE,
    color: PATH_COLORS[PROJECT_PATHS.WHIP],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.WHIP,
    href: 'https://7glyphs.com/portfolio/projects/whip-around',
    features: [
      {label: 'Развитие и поддержка проекта', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.PHP}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.JQUERY}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BOOTSTRAP}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.LARAVEL}`,
        Icon: BuildIcon,
      },
      {
        label: `Поработал с ${TECHNOLOGY_TITLES.PHP}, ${TECHNOLOGY_TITLES.LARAVEL} и ${TECHNOLOGY_TITLES.BLADE}`,
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.SITE, Icon: WebIcon},
      {label: 'Сентябрь 2017', Icon: EventIcon},
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
    type: PROJECT_TYPES.ADMIN,
    color: PATH_COLORS[PROJECT_PATHS.LAZYAZD],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.LAZYAZD,
    href: 'https://7glyphs.com/portfolio/projects/lazyaz',
    features: [
      {label: 'Разработка проекта с нуля', Icon: CheckCircleIcon},
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.PHP}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.JQUERY}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BOOTSTRAP}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.LARAVEL}, ${TECHNOLOGY_TITLES.ZEPLIN}`,
        Icon: BuildIcon,
      },
      {
        label: `Поработал с ${TECHNOLOGY_TITLES.PHP}, ${TECHNOLOGY_TITLES.LARAVEL} и ${TECHNOLOGY_TITLES.BLADE}`,
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.ADMIN, Icon: WebIcon},
      {label: 'Май 2017', Icon: EventIcon},
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
    type: PROJECT_TYPES.SITE,
    color: PATH_COLORS[PROJECT_PATHS.LAZYAZ],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.LAZYAZ,
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
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}, ${TECHNOLOGY_TITLES.REDUX}, ${TECHNOLOGY_TITLES.JQUERY}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.BEM}, ${TECHNOLOGY_TITLES.SASS}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.GULP}, ${TECHNOLOGY_TITLES.WEBPACK}, ${TECHNOLOGY_TITLES.ZEPLIN}`,
        Icon: BuildIcon,
      },
      {
        label: 'Первый коммерческий проект, написанный с нуля',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.SITE, Icon: WebIcon},
      {label: 'Март 2017', Icon: EventIcon},
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
    type: PROJECT_TYPES.SITE,
    color: PATH_COLORS[PROJECT_PATHS.GLYPHS],
    company: COMPANIES.SEVEN_GLYPHS,
    path: PROJECT_PATHS.GLYPHS,
    href: COMPANIES.SEVEN_GLYPHS.href,
    features: [
      {
        label: `Переписывание кодовой базы с ${TECHNOLOGY_TITLES.JQUERY} на ${TECHNOLOGY_TITLES.REACT}`,
        Icon: CheckCircleIcon,
      },
      {
        label: 'Самостоятельная фронтенд разработка',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}, ${TECHNOLOGY_TITLES.JQUERY}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.SASS}, адаптивный интерфейс`,
        Icon: PaletteIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.GULP}, ${TECHNOLOGY_TITLES.WEBPACK}`,
        Icon: BuildIcon,
      },
      {
        label: 'Превратил сайт в SPA',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.SITE, Icon: WebIcon},
      {label: 'Январь 2017', Icon: EventIcon},
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
    type: PROJECT_TYPES.APP,
    color: PATH_COLORS[PROJECT_PATHS.MSP],
    company: COMPANIES.EVERPOINT,
    path: PROJECT_PATHS.MSP,
    href: 'https://www.everpoint.ru/msp',
    features: [
      {label: 'Развитие и поддержка проекта', Icon: CheckCircleIcon},
      {
        label: 'Член команды фронтенд разработки',
        Icon: GroupWorkIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.HTML}, ${TECHNOLOGY_TITLES.JS}, ${TECHNOLOGY_TITLES.REACT}, ${TECHNOLOGY_TITLES.REDUX}, ${TECHNOLOGY_TITLES.HANDLEBARS}, ${TECHNOLOGY_TITLES.JQUERY}`,
        Icon: CodeIcon,
      },
      {
        label: `${TECHNOLOGY_TITLES.CSS}, ${TECHNOLOGY_TITLES.MODULES}, ${TECHNOLOGY_TITLES.SASS}, ${TECHNOLOGY_TITLES.SEMANTIC}`,
        Icon: PaletteIcon,
      },
      {
        label: `REST API, ${TECHNOLOGY_TITLES.WEBPACK}, ${TECHNOLOGY_TITLES.PHOTOSHOP}`,
        Icon: BuildIcon,
      },
      {
        label: 'Первый коммерческий проект',
        Icon: StarIcon,
      },
      {label: PROJECT_TYPE_LABELS.APP, Icon: WebIcon},
      {label: 'Август 2016', Icon: EventIcon},
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
