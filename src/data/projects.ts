import {COMPANY, FEATURE, COMPANY_TITLE, TECHNOLOGY_TITLE} from './common'
import {Project} from '../utils/types'

const projects: Project[] = [
  {
    name: 'ninjal',
    title: 'Road Ninja',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://roadninja.co.nz',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'april',
        text: 2021,
      },
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
    name: 'ninja',
    title: 'Road Ninja',
    types: ['app', 'site'],
    companyName: 'sevenGlyphs',
    features: [
      {
        tKey: 'markupBusinessLogic',
      },
      {
        tKey: 'teamWork',
      },
      `${TECHNOLOGY_TITLE.ts}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKeys: ['responsive', 'emails'],
        text: `${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.mui}`,
      },
      `${FEATURE.rest}, ${FEATURE.socket}, ${TECHNOLOGY_TITLE.webpack}, ${FEATURE.stripe}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}, ${TECHNOLOGY_TITLE.emails}`,
      {
        tKey: 'businessLogic',
      },
      {
        tKey: 'april',
        text: 2021,
      },
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
    name: 'celebration',
    title: 'Сelebration',
    types: ['app'],
    companyName: 't1',
    features: [
      {
        tKeys: ['scratchDevelopment', 'design'],
      },
      {
        tKey: 'leadWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.mui}`,
      },
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKeys: ['animations', 'pwa'],
      },
      {
        tKey: 'december',
        text: 2020,
      },
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
    name: 'ally',
    title: 'Ally',
    textValues: ['Nintendo Amiibo'],
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://ally.ninja',
    details: 'https://7glyphs.com/portfolio/projects/ally',
    features: [
      {
        tKey: 'wholeDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'october',
        text: 2020,
      },
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
    name: 'presentmel',
    title: 'Present.me',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://business.present.me',
    details: 'https://7glyphs.com/portfolio/projects/presentme',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'september',
        text: 2020,
      },
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
    name: 'presentmep',
    title: 'Present.me',
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/presentme',
    features: [
      {
        tKey: 'wholeDevelopment',
      },
      {
        tKey: 'teamWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: 'businessLogic',
      },
      {
        tKey: 'august',
        text: 2020,
      },
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
    name: 'presentme',
    title: 'Present.me',
    types: ['app'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/presentme',
    features: [
      {
        tKey: 'wholeDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKeys: ['responsive', 'emails'],
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
      },
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}, ${TECHNOLOGY_TITLE.emails}`,
      {
        tKey: 'dynamicFormsRouting',
      },
      {
        tKey: 'august',
        text: 2020,
      },
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
    name: 'dropdrone',
    title: 'Dropdrone',
    types: ['site'],
    companyName: 'sevenGlyphs',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'june',
        text: 2020,
      },
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
    name: 'hatched',
    title: 'Just Hatched',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://justhatched.app',
    details: 'https://7glyphs.com/portfolio/projects/justhatched',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'teamWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'may',
        text: 2020,
      },
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
    name: 'uls',
    textValues: ['Vaillant Group'],
    types: ['app'],
    companyName: 't1',
    features: [
      {
        tKey: 'wholeDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}`,
      },
      `${TECHNOLOGY_TITLE.webpack}, ${FEATURE.rest}, ${FEATURE.keycloak}, ${FEATURE.docker}`,
      {
        tKey: 'tryTwo',
        values: [FEATURE.keycloak, FEATURE.docker],
      },
      {
        tKey: 'february',
        text: 2020,
      },
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
    name: 'proximal',
    title: 'Proximal Coffee',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'december',
        text: 2019,
      },
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
    name: 'embp',
    types: ['admin', 'app'],
    companyName: 't1',
    features: [
      {
        tKeys: ['wholeDevelopment', 'design'],
      },
      {
        tKey: 'leadWork',
      },
      `${TECHNOLOGY_TITLE.ts}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.styled}, ${TECHNOLOGY_TITLE.mui}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.jest}`,
      {
        tKey: 'darkTheme',
      },
      {
        tKey: 'july',
        text: 2019,
      },
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
    private: true,
    name: 'tmf',
    title: 'Ted Manson Foundation',
    types: ['site'],
    companyName: 'sevenGlyphs',
    url: 'https://www.tmfoundation.co.nz',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.photoshop}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'october',
        text: 2019,
      },
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
    name: 'lite',
    title: '7 glyphs Lite',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://lite.7glyphs.com',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
      },
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'september',
        text: 2019,
      },
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
    name: 'melissa',
    title: 'Melissa Chalmers',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://melissachalmers.app',
    href: 'https://7glyphs.com/portfolio/projects/melissachalmers',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'september',
        text: 2019,
      },
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
    private: true,
    name: 'foodp',
    title: 'Foodprint',
    types: ['site', 'app', 'admin'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/foodprint',
    features: [
      {
        tKey: 'wholeDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: 'businessLogic',
      },
      {
        tKey: 'june',
        text: 2019,
      },
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
    private: true,
    name: 'food',
    title: 'Foodprint',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://foodprint.app',
    details: 'https://7glyphs.com/portfolio/projects/foodprint',
    features: [
      {
        tKey: 'wholeDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKeys: ['responsive', 'emails'],
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      {
        tKey: 'animations',
      },
      {
        tKey: 'june',
        text: 2019,
      },
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
    name: 'sds',
    title: 'Sales Digital System',
    textValues: ['Vaillant Group'],
    types: ['app'],
    companyName: 't1',
    features: [
      {
        tKeys: ['wholeDevelopment', 'design'],
      },
      {
        tKey: 'leadWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.styled}, ${TECHNOLOGY_TITLE.mui}`,
      `${FEATURE.rest}, ${FEATURE.keycloak}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'businessLogic',
      },
      {
        tKey: 'april',
        text: 2019,
      },
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
    private: true,
    name: 'strong',
    title: 'StrongHer',
    types: ['site', 'app'],
    companyName: 'sevenGlyphs',
    url: 'https://strongherapp.com',
    details: 'https://7glyphs.com/portfolio/projects/strongher',
    features: [
      {
        tKey: 'wholeDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKeys: ['responsive', 'emails'],
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${FEATURE.stripe}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}, ${TECHNOLOGY_TITLE.emails}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'february',
        text: 2019,
      },
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
    name: 'glyphs2',
    title: '7 glyphs 2.0',
    types: ['site'],
    companyName: 'sevenGlyphs',
    url: COMPANY.sevenGlyphs.href,
    features: [
      {
        tKey: 'growthSupportDevelopment',
      },
      {
        tKey: 'teamWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
      },
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'january',
        text: 2018,
      },
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
    name: 'rogue',
    title: 'Rogue Travel',
    types: ['site', 'app'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/rogue-travel',
    features: [
      {
        tKey: 'scratchGrowthDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${FEATURE.stripe}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'businessLogic',
      },
      {
        tKey: 'november',
        text: 2018,
      },
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
    name: 'trucks',
    title: 'Quarry Trucks',
    types: ['app'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/quarry-trucks',
    features: [
      {
        tKey: 'markupBusinessLogic',
      },
      {
        tKey: 'teamWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.mobx}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: 'tryOneGraph',
        values: [TECHNOLOGY_TITLE.mobx],
      },
      {
        tKey: 'may',
        text: 2018,
      },
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
    name: 'services',
    title: 'Service Packages',
    textValues: [COMPANY_TITLE.sevenGlyphs],
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://7glyphs.com/approach/packages',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'february',
        text: 2018,
      },
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
    private: true,
    name: 'fcdc',
    title: 'FCDC',
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.photoshop}`,
      {
        tKey: 'formsTables',
      },
      {
        tKey: 'january',
        text: 2018,
      },
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
    name: 'saffron',
    title: '12 Saffron',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://12saffron.co.nz',
    details: 'https://7glyphs.com/portfolio/projects/12-saffron',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.pug}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: 'sellHouse',
      },
      {
        tKey: 'august',
        text: 2017,
      },
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
    private: true,
    name: 'whip',
    title: 'Whip Around',
    types: ['site'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/whip-around',
    features: [
      {
        tKey: 'growthSupportDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.jquery}, ${TECHNOLOGY_TITLE.blade}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bootstrap}`,
      },
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.laravel}`,
      {
        tKey: 'tryThree',
        values: [
          TECHNOLOGY_TITLE.php,
          TECHNOLOGY_TITLE.laravel,
          TECHNOLOGY_TITLE.blade,
        ],
      },
      {
        tKey: 'september',
        text: 2017,
      },
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
    name: 'lazyazd',
    title: 'LazyAz',
    types: ['admin'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/lazyaz',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.php}, ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.jquery}, ${TECHNOLOGY_TITLE.blade}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.bootstrap}`,
      },
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.laravel}, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: 'tryThree',
        values: [
          TECHNOLOGY_TITLE.php,
          TECHNOLOGY_TITLE.laravel,
          TECHNOLOGY_TITLE.blade,
        ],
      },
      {
        tKey: 'may',
        text: 2017,
      },
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
    name: 'lazyaz',
    title: 'LazyAz',
    types: ['site', 'app'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/lazyaz',
    features: [
      {
        tKey: 'wholeDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.jquery}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKeys: ['responsive', 'emails'],
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: 'firstScratchProject',
      },
      {
        tKey: 'march',
        text: 2017,
      },
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
    name: 'glyphs',
    title: '7 glyphs',
    types: ['site'],
    companyName: 'sevenGlyphs',
    features: [
      {
        tKey: 'jqueryReact',
        values: [TECHNOLOGY_TITLE.jquery, TECHNOLOGY_TITLE.react],
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.jquery}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}`,
      },
      `${TECHNOLOGY_TITLE.gulp}, ${TECHNOLOGY_TITLE.webpack}`,
      {
        tKey: 'spa',
      },
      {
        tKey: 'january',
        text: 2017,
      },
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
    name: 'msp',
    types: ['site', 'app'],
    companyName: 'everpoint',
    url: 'https://navigator.smbn.ru',
    details: 'https://www.everpoint.ru/msp',
    features: [
      {
        tKey: 'growthSupportDevelopment',
      },
      {
        tKey: 'teamWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.handlebars}, ${TECHNOLOGY_TITLE.jquery}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.semantic}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.photoshop}`,
      {
        tKey: 'firstProject',
      },
      {
        tKey: 'august',
        text: 2016,
      },
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

const PROJECTS: Project[] =
  process.env.REACT_APP_SHOW_PRIVATE_PROJECTS === 'true'
    ? projects
    : projects.filter((project: Project) => !project.private)

export default PROJECTS
