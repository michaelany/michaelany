import {COMPANY, FEATURE, TECHNOLOGY_TITLE} from './common'
import {Project} from 'utils/types'

const commonLogo = {
  madfit: [
    require('assets/img/logos/madfit_sm.png'),
    require('assets/img/logos/madfit.png'),
    require('assets/img/logos/madfit@2x.png'),
  ],
  roadNinja: [
    require('assets/img/logos/road-ninja_sm.png'),
    require('assets/img/logos/road-ninja.png'),
    require('assets/img/logos/road-ninja@2x.png'),
  ],
  presentMe: [
    require('assets/img/logos/present-me_sm.png'),
    require('assets/img/logos/present-me.png'),
    require('assets/img/logos/present-me@2x.png'),
  ],
  vaillant: [
    require('assets/img/logos/vaillant_sm.png'),
    require('assets/img/logos/vaillant.png'),
    require('assets/img/logos/vaillant@2x.png'),
  ],
  sevenGlyphs: [
    require('assets/img/logos/7glyphs_sm.png'),
    require('assets/img/logos/7glyphs.png'),
    require('assets/img/logos/7glyphs@2x.png'),
  ],
  strongher: [
    require('assets/img/logos/strongher_sm.png'),
    require('assets/img/logos/strongher.png'),
    require('assets/img/logos/strongher@2x.png'),
  ],
  foodprint: [
    require('assets/img/logos/foodprint_sm.png'),
    require('assets/img/logos/foodprint.png'),
    require('assets/img/logos/foodprint@2x.png'),
  ],
  lazyaz: [
    require('assets/img/logos/lazyaz_sm.png'),
    require('assets/img/logos/lazyaz.png'),
    require('assets/img/logos/lazyaz@2x.png'),
  ],
}

const projects: Project[] = [
  {
    name: 'madfit',
    title: 'MadFit',
    types: ['landing', 'app'],
    companyName: 'sevenGlyphs',
    url: 'https://maddielymburner.co',
    details: 'https://7glyphs.com/portfolio/projects/madfit',
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
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.gsap}`,
      },
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${FEATURE.stripe}, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'january',
        text: 2022,
      },
    ],

    images: {
      logo: commonLogo.madfit,
      desktop: [
        [
          require('assets/img/projects/madfit@2x.jpg'),
          require('assets/img/projects/madfit-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/madfit-desktop-second.jpg'),
          require('assets/img/projects/madfit-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/madfit-desktop-third.jpg'),
          require('assets/img/projects/madfit-desktop-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/madfit-desktop-fourth.jpg'),
          require('assets/img/projects/madfit-desktop-fourth@2x.jpg').default,
        ],
        [
          require('assets/img/projects/madfit-desktop-fifth.jpg'),
          require('assets/img/projects/madfit-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/madfit-mobile-first.jpg'),
          require('assets/img/projects/madfit-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/madfit-mobile-second.jpg'),
          require('assets/img/projects/madfit-mobile-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/madfit-mobile-third.jpg'),
          require('assets/img/projects/madfit-mobile-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/madfit-mobile-fourth.jpg'),
          require('assets/img/projects/madfit-mobile-fourth@2x.jpg'),
        ],
        [
          require('assets/img/projects/madfit-mobile-fifth.jpg'),
          require('assets/img/projects/madfit-mobile-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'madfitp',
    title: 'MadFit',
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/madfit',
    features: [
      {
        tKey: 'scratchDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.mui}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: 'fastDevelopment',
      },
      {
        tKey: 'january',
        text: 2020,
      },
    ],
    images: {
      logo: commonLogo.madfit,
      desktop: [
        [
          require('assets/img/projects/madfitp@2x.jpg'),
          require('assets/img/projects/madfitp-desktop-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/madfitp-desktop-second.jpg'),
          require('assets/img/projects/madfitp-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/madfitp-desktop-third.jpg'),
          require('assets/img/projects/madfitp-desktop-third@2x.jpg').default,
        ],
      ],
    },
  },
  {
    name: 'vibe',
    title: 'Vibe Media',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://vibemedia.app',
    features: [
      {
        tKey: 'scratchGrowthDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem},  ${TECHNOLOGY_TITLE.gsap}`,
      },
      `${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'december',
        text: 2021,
      },
    ],
    images: {
      logo: [
        require('assets/img/logos/vibe_sm.png'),
        require('assets/img/logos/vibe.png'),
        require('assets/img/logos/vibe@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/vibe@2x.jpg'),
          require('assets/img/projects/vibe-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/vibe-desktop-second.jpg'),
          require('assets/img/projects/vibe-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/vibe-desktop-third.jpg'),
          require('assets/img/projects/vibe-desktop-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/vibe-desktop-fourth.jpg'),
          require('assets/img/projects/vibe-desktop-fourth@2x.jpg'),
        ],
        [
          require('assets/img/projects/vibe-desktop-fifth.jpg'),
          require('assets/img/projects/vibe-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/vibe-mobile-first.jpg'),
          require('assets/img/projects/vibe-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/vibe-mobile-second.jpg'),
          require('assets/img/projects/vibe-mobile-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/vibe-mobile-third.jpg'),
          require('assets/img/projects/vibe-mobile-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/vibe-mobile-fourth.jpg'),
          require('assets/img/projects/vibe-mobile-fourth@2x.jpg'),
        ],
        [
          require('assets/img/projects/vibe-mobile-fifth.jpg'),
          require('assets/img/projects/vibe-mobile-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'tradease',
    title: 'Tradease',
    types: ['site', 'app'],
    companyName: 'sevenGlyphs',
    features: [
      {
        tKey: 'scratchGrowthDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.ts}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.reactquery}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.sass}`,
      },
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.figma}`,
      {
        tKey: 'tryOne',
        values: [TECHNOLOGY_TITLE.reactquery],
      },
      {
        tKey: 'november',
        text: 2021,
      },
    ],
    images: {
      logo: [
        require('assets/img/logos/tradease_sm.png'),
        require('assets/img/logos/tradease.png'),
        require('assets/img/logos/tradease@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/tradease@2x.jpg'),
          require('assets/img/projects/tradease-desktop-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/tradease-desktop-second.jpg'),
          require('assets/img/projects/tradease-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/tradease-desktop-third.jpg'),
          require('assets/img/projects/tradease-desktop-third@2x.jpg').default,
        ],
        [
          require('assets/img/projects/tradease-desktop-fourth.jpg'),
          require('assets/img/projects/tradease-desktop-fourth@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/tradease-mobile-first.jpg'),
          require('assets/img/projects/tradease-mobile-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/tradease-mobile-second.jpg'),
          require('assets/img/projects/tradease-mobile-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/tradease-mobile-third.jpg'),
          require('assets/img/projects/tradease-mobile-third@2x.jpg').default,
        ],
        [
          require('assets/img/projects/tradease-mobile-fourth.jpg'),
          require('assets/img/projects/tradease-mobile-fourth@2x.jpg').default,
        ],
      ],
    },
  },
  {
    name: 't1online',
    title: 'T1 Онлайн',
    types: ['app'],
    companyName: 't1',
    stores: [
      'https://apps.apple.com/ru/app/%D1%821-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1592700568?l=en',
      'https://play.google.com/store/apps/details?id=com.t1consulting.t1online',
    ],
    features: [
      {
        tKey: 'wholeDevelopment',
      },
      {
        tKey: 'leadWork',
      },
      `${TECHNOLOGY_TITLE.ts}, ${TECHNOLOGY_TITLE.reactnative}`,
      `${TECHNOLOGY_TITLE.reactnative} styles`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.expo}, Xcode, Android Studio, ${TECHNOLOGY_TITLE.figma}`,
      {
        tKey: 'mobileDevelopment',
        values: ['AppStore', 'Google Play'],
      },
      {
        tKey: 'october',
        text: 2021,
      },
    ],
    images: {
      logo: [
        require('assets/img/logos/t1_sm.png'),
        require('assets/img/logos/t1.png'),
        require('assets/img/logos/t1@2x.png'),
      ],
      mobile: [
        [
          require('assets/img/projects/t1online-first.jpg'),
          require('assets/img/projects/t1online-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/t1online-second.jpg'),
          require('assets/img/projects/t1online-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/t1online-third.jpg'),
          require('assets/img/projects/t1online-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/t1online-fourth.jpg'),
          require('assets/img/projects/t1online-fourth@2x.jpg'),
        ],
        [
          require('assets/img/projects/t1online-fifth.jpg'),
          require('assets/img/projects/t1online-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'ninjal',
    title: 'Road Ninja',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://roadninja.co.nz',
    details: 'https://7glyphs.com/portfolio/projects/roadninja',
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
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem},  ${TECHNOLOGY_TITLE.gsap}`,
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
      logo: commonLogo.roadNinja,
      desktop: [
        [
          require('assets/img/projects/ninjal@2x.jpg'),
          require('assets/img/projects/ninjal-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/ninjal-desktop-second.jpg'),
          require('assets/img/projects/ninjal-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/ninjal-desktop-third.jpg'),
          require('assets/img/projects/ninjal-desktop-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/ninjal-desktop-fourth.jpg'),
          require('assets/img/projects/ninjal-desktop-fourth@2x.jpg').default,
        ],
        [
          require('assets/img/projects/ninjal-desktop-fifth.jpg'),
          require('assets/img/projects/ninjal-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/ninjal-mobile-first.jpg'),
          require('assets/img/projects/ninjal-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/ninjal-mobile-second.jpg'),
          require('assets/img/projects/ninjal-mobile-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/ninjal-mobile-third.jpg'),
          require('assets/img/projects/ninjal-mobile-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/ninjal-mobile-fourth.jpg'),
          require('assets/img/projects/ninjal-mobile-fourth@2x.jpg'),
        ],
        [
          require('assets/img/projects/ninjal-mobile-fifth.jpg'),
          require('assets/img/projects/ninjal-mobile-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'ninja',
    title: 'Road Ninja',
    types: ['app', 'site'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/roadninja',
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
      `${FEATURE.rest}, ${FEATURE.socket}, ${TECHNOLOGY_TITLE.webpack}, ${FEATURE.stripe}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'businessLogic',
      },
      {
        tKey: 'april',
        text: 2021,
      },
    ],
    images: {
      logo: commonLogo.roadNinja,
      desktop: [
        [
          require('assets/img/projects/ninja@2x.jpg'),
          require('assets/img/projects/ninja-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/ninja-desktop-second.jpg'),
          require('assets/img/projects/ninja-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/ninja-desktop-third.jpg'),
          require('assets/img/projects/ninja-desktop-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/ninja-desktop-fourth.jpg'),
          require('assets/img/projects/ninja-desktop-fourth@2x.jpg'),
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
      logo: [
        require('assets/img/logos/celebration_sm.png'),
        require('assets/img/logos/celebration.png'),
        require('assets/img/logos/celebration@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/celebration@2x.jpg'),
          require('assets/img/projects/celebration-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/celebration-desktop-second.jpg').default,
          require('assets/img/projects/celebration-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/celebration-desktop-third.jpg').default,
          require('assets/img/projects/celebration-desktop-third@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/celebration-mobile-first.jpg').default,
          require('assets/img/projects/celebration-mobile-first@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/celebration-mobile-second.jpg').default,
          require('assets/img/projects/celebration-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/celebration-mobile-third.jpg').default,
          require('assets/img/projects/celebration-mobile-third@2x.jpg')
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
      logo: [
        require('assets/img/logos/ally_sm.png'),
        require('assets/img/logos/ally.png'),
        require('assets/img/logos/ally@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/ally@2x.jpg'),
          require('assets/img/projects/ally-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/ally-desktop-second.jpg'),
          require('assets/img/projects/ally-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/ally-desktop-third.jpg'),
          require('assets/img/projects/ally-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/ally-mobile-first.jpg'),
          require('assets/img/projects/ally-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/ally-mobile-second.jpg'),
          require('assets/img/projects/ally-mobile-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/ally-mobile-third.jpg'),
          require('assets/img/projects/ally-mobile-third@2x.jpg'),
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
      logo: commonLogo.presentMe,
      desktop: [
        [
          require('assets/img/projects/presentmel@2x.jpg'),
          require('assets/img/projects/presentmel-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/presentmel-desktop-second.jpg').default,
          require('assets/img/projects/presentmel-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/presentmel-desktop-third.jpg').default,
          require('assets/img/projects/presentmel-desktop-third@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/presentmel-desktop-fourth.jpg').default,
          require('assets/img/projects/presentmel-desktop-fourth@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/presentmel-mobile-first.jpg'),
          require('assets/img/projects/presentmel-mobile-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/presentmel-mobile-second.jpg').default,
          require('assets/img/projects/presentmel-mobile-second@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/presentmel-mobile-third.jpg'),
          require('assets/img/projects/presentmel-mobile-third@2x.jpg').default,
        ],
        [
          require('assets/img/projects/presentmel-mobile-fourth.jpg').default,
          require('assets/img/projects/presentmel-mobile-fourth@2x.jpg')
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
      logo: commonLogo.presentMe,
      desktop: [
        [
          require('assets/img/projects/presentmep@2x.jpg'),
          require('assets/img/projects/presentmep-desktop-first@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/presentmep-desktop-second.jpg').default,
          require('assets/img/projects/presentmep-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/presentmep-desktop-third.jpg').default,
          require('assets/img/projects/presentmep-desktop-third@2x.jpg')
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
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'dynamicFormsRouting',
      },
      {
        tKey: 'august',
        text: 2020,
      },
    ],
    images: {
      logo: commonLogo.presentMe,
      desktop: [
        [
          require('assets/img/projects/presentme@2x.jpg'),
          require('assets/img/projects/presentme-desktop-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/presentme-desktop-second.jpg').default,
          require('assets/img/projects/presentme-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/presentme-desktop-third.jpg'),
          require('assets/img/projects/presentme-desktop-third@2x.jpg').default,
        ],
        [
          require('assets/img/projects/presentme-desktop-fourth.jpg').default,
          require('assets/img/projects/presentme-desktop-fourth@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/presentme-desktop-fifth.jpg'),
          require('assets/img/projects/presentme-desktop-fifth@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/presentme-mobile-first.jpg'),
          require('assets/img/projects/presentme-mobile-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/presentme-mobile-second.jpg'),
          require('assets/img/projects/presentme-mobile-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/presentme-mobile-third.jpg'),
          require('assets/img/projects/presentme-mobile-third@2x.jpg').default,
        ],
        [
          require('assets/img/projects/presentme-mobile-fourth.jpg'),
          require('assets/img/projects/presentme-mobile-fourth@2x.jpg').default,
        ],
        [
          require('assets/img/projects/presentme-mobile-fifth.jpg'),
          require('assets/img/projects/presentme-mobile-fifth@2x.jpg').default,
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
      logo: [
        require('assets/img/logos/dropdrone_sm.png'),
        require('assets/img/logos/dropdrone.png'),
        require('assets/img/logos/dropdrone@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/dropdrone@2x.jpg'),
          require('assets/img/projects/dropdrone-desktop-first@2x.jpg').default,
        ],

        [
          require('assets/img/projects/dropdrone-desktop-second.jpg').default,
          require('assets/img/projects/dropdrone-desktop-second@2x.jpg')
            .default,
        ],
        [
          require('assets/img/projects/dropdrone-desktop-third.jpg'),
          require('assets/img/projects/dropdrone-desktop-third@2x.jpg').default,
        ],
        [
          require('assets/img/projects/dropdrone-desktop-fourth.jpg').default,
          require('assets/img/projects/dropdrone-desktop-fourth@2x.jpg')
            .default,
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/dropdrone-mobile-first.jpg'),
          require('assets/img/projects/dropdrone-mobile-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/dropdrone-mobile-second.jpg'),
          require('assets/img/projects/dropdrone-mobile-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/dropdrone-mobile-third.jpg'),
          require('assets/img/projects/dropdrone-mobile-third@2x.jpg').default,
        ],
        [
          require('assets/img/projects/dropdrone-mobile-fourth.jpg'),
          require('assets/img/projects/dropdrone-mobile-fourth@2x.jpg').default,
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
      logo: [
        require('assets/img/logos/just-hatched_sm.png'),
        require('assets/img/logos/just-hatched.png'),
        require('assets/img/logos/just-hatched@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/hatched@2x.jpg'),
          require('assets/img/projects/hatched-desktop-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/hatched-desktop-second.jpg'),
          require('assets/img/projects/hatched-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/hatched-desktop-third.jpg'),
          require('assets/img/projects/hatched-desktop-third@2x.jpg').default,
        ],
        [
          require('assets/img/projects/hatched-desktop-fourth.jpg'),
          require('assets/img/projects/hatched-desktop-fourth@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/hatched-mobile-first.jpg'),
          require('assets/img/projects/hatched-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/hatched-mobile-second.jpg'),
          require('assets/img/projects/hatched-mobile-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/hatched-mobile-third.jpg'),
          require('assets/img/projects/hatched-mobile-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/hatched-mobile-fourth.jpg'),
          require('assets/img/projects/hatched-mobile-fourth@2x.jpg').default,
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
      logo: commonLogo.vaillant,
      desktop: [
        [
          require('assets/img/projects/uls@2x.jpg'),
          require('assets/img/projects/uls-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/uls-desktop-second.jpg'),
          require('assets/img/projects/uls-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/uls-desktop-third.jpg'),
          require('assets/img/projects/uls-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/uls-mobile-first.jpg'),
          require('assets/img/projects/uls-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/uls-mobile-second.jpg'),
          require('assets/img/projects/uls-mobile-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/uls-mobile-third.jpg'),
          require('assets/img/projects/uls-mobile-third@2x.jpg'),
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
      logo: [
        require('assets/img/logos/proximal-coffee_sm.png'),
        require('assets/img/logos/proximal-coffee.png'),
        require('assets/img/logos/proximal-coffee@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/proximal@2x.jpg'),
          require('assets/img/projects/proximal-desktop-first@2x.jpg').default,
        ],

        [
          require('assets/img/projects/proximal-desktop-second.jpg'),
          require('assets/img/projects/proximal-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/proximal-desktop-third.jpg'),
          require('assets/img/projects/proximal-desktop-third@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/proximal-mobile-first.jpg'),
          require('assets/img/projects/proximal-mobile-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/proximal-mobile-second.jpg'),
          require('assets/img/projects/proximal-mobile-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/proximal-mobile-third.jpg'),
          require('assets/img/projects/proximal-mobile-third@2x.jpg').default,
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
      logo: [
        require('assets/img/logos/vtb_sm.png'),
        require('assets/img/logos/vtb.png'),
        require('assets/img/logos/vtb@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/embp@2x.jpg'),
          require('assets/img/projects/embp-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/embp-desktop-second.jpg'),
          require('assets/img/projects/embp-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/embp-desktop-third.jpg'),
          require('assets/img/projects/embp-desktop-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/embp-desktop-fourth.jpg'),
          require('assets/img/projects/embp-desktop-fourth@2x.jpg'),
        ],
        [
          require('assets/img/projects/embp-desktop-fifth.jpg'),
          require('assets/img/projects/embp-desktop-fifth@2x.jpg'),
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
      logo: [
        require('assets/img/logos/tmf_sm.png'),
        require('assets/img/logos/tmf.png'),
        require('assets/img/logos/tmf@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/tmf@2x.jpg'),
          require('assets/img/projects/tmf-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/tmf-desktop-second.jpg'),
          require('assets/img/projects/tmf-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/tmf-desktop-third.jpg'),
          require('assets/img/projects/tmf-desktop-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/tmf-desktop-fourth.jpg'),
          require('assets/img/projects/tmf-desktop-fourth@2x.jpg'),
        ],
        [
          require('assets/img/projects/tmf-desktop-fifth.jpg'),
          require('assets/img/projects/tmf-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/tmf-mobile-first.jpg'),
          require('assets/img/projects/tmf-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/tmf-mobile-second.jpg'),
          require('assets/img/projects/tmf-mobile-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/tmf-mobile-third.jpg'),
          require('assets/img/projects/tmf-mobile-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/tmf-mobile-fourth.jpg'),
          require('assets/img/projects/tmf-mobile-fourth@2x.jpg'),
        ],
        [
          require('assets/img/projects/tmf-mobile-fifth.jpg'),
          require('assets/img/projects/tmf-mobile-fifth@2x.jpg'),
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
      logo: commonLogo.sevenGlyphs,
      desktop: [
        [
          require('assets/img/projects/lite@2x.jpg'),
          require('assets/img/projects/lite-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/lite-desktop-second.jpg'),
          require('assets/img/projects/lite-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/lite-desktop-third.jpg'),
          require('assets/img/projects/lite-desktop-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/lite-desktop-fourth.jpg'),
          require('assets/img/projects/lite-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/lite-mobile-first.jpg'),
          require('assets/img/projects/lite-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/lite-mobile-second.jpg'),
          require('assets/img/projects/lite-mobile-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/lite-mobile-third.jpg'),
          require('assets/img/projects/lite-mobile-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/lite-mobile-fourth.jpg'),
          require('assets/img/projects/lite-mobile-fourth@2x.jpg'),
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
    details: 'https://7glyphs.com/portfolio/projects/melissachalmers',
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
      logo: commonLogo.strongher,
      desktop: [
        [
          require('assets/img/projects/melissa@2x.jpg'),
          require('assets/img/projects/melissa-desktop-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/melissa-desktop-second.jpg'),
          require('assets/img/projects/melissa-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/melissa-desktop-third.jpg'),
          require('assets/img/projects/melissa-desktop-third@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/melissa-mobile-first.jpg'),
          require('assets/img/projects/melissa-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/melissa-mobile-second.jpg'),
          require('assets/img/projects/melissa-mobile-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/melissa-mobile-third.jpg'),
          require('assets/img/projects/melissa-mobile-third@2x.jpg'),
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
      logo: commonLogo.foodprint,
      desktop: [
        [
          require('assets/img/projects/foodp@2x.jpg'),
          require('assets/img/projects/foodp-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/foodp-desktop-second.jpg'),
          require('assets/img/projects/foodp-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/foodp-desktop-third.jpg'),
          require('assets/img/projects/foodp-desktop-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/foodp-desktop-fourth.jpg'),
          require('assets/img/projects/foodp-desktop-fourth@2x.jpg'),
        ],
        [
          require('assets/img/projects/foodp-desktop-fifth.jpg'),
          require('assets/img/projects/foodp-desktop-fifth@2x.jpg'),
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
      logo: commonLogo.foodprint,
      desktop: [
        [
          require('assets/img/projects/food@2x.jpg'),
          require('assets/img/projects/food-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/food-desktop-second.jpg'),
          require('assets/img/projects/food-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/food-desktop-third.jpg'),
          require('assets/img/projects/food-desktop-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/food-desktop-fourth.jpg'),
          require('assets/img/projects/food-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/food-mobile-first.jpg'),
          require('assets/img/projects/food-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/food-mobile-second.jpg'),
          require('assets/img/projects/food-mobile-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/food-mobile-third.jpg'),
          require('assets/img/projects/food-mobile-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/food-mobile-fourth.jpg'),
          require('assets/img/projects/food-mobile-fourth@2x.jpg'),
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
      logo: commonLogo.vaillant,
      desktop: [
        [
          require('assets/img/projects/sds@2x.jpg'),
          require('assets/img/projects/sds-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/sds-desktop-second.jpg'),
          require('assets/img/projects/sds-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/sds-desktop-third.jpg'),
          require('assets/img/projects/sds-desktop-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/sds-desktop-fourth.jpg'),
          require('assets/img/projects/sds-desktop-fourth@2x.jpg'),
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
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${FEATURE.stripe}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'february',
        text: 2019,
      },
    ],
    images: {
      logo: commonLogo.strongher,
      desktop: [
        [
          require('assets/img/projects/strong@2x.jpg'),
          require('assets/img/projects/strong-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/strong-desktop-second.jpg'),
          require('assets/img/projects/strong-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/strong-desktop-third.jpg'),
          require('assets/img/projects/strong-desktop-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/strong-desktop-fourth.jpg'),
          require('assets/img/projects/strong-desktop-fourth@2x.jpg').default,
        ],
        [
          require('assets/img/projects/strong-desktop-fifth.jpg'),
          require('assets/img/projects/strong-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/strong-mobile-first.jpg'),
          require('assets/img/projects/strong-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/strong-mobile-second.jpg'),
          require('assets/img/projects/strong-mobile-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/strong-mobile-third.jpg'),
          require('assets/img/projects/strong-mobile-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/strong-mobile-fourth.jpg'),
          require('assets/img/projects/strong-mobile-fourth@2x.jpg'),
        ],
        [
          require('assets/img/projects/strong-mobile-fifth.jpg'),
          require('assets/img/projects/strong-mobile-fifth@2x.jpg'),
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
      logo: commonLogo.sevenGlyphs,
      desktop: [
        [
          require('assets/img/projects/glyphs2@2x.jpg'),
          require('assets/img/projects/glyphs2-desktop-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/glyphs2-desktop-second.jpg'),
          require('assets/img/projects/glyphs2-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/glyphs2-desktop-third.jpg'),
          require('assets/img/projects/glyphs2-desktop-third@2x.jpg').default,
        ],
        [
          require('assets/img/projects/glyphs2-desktop-fourth.jpg'),
          require('assets/img/projects/glyphs2-desktop-fourth@2x.jpg').default,
        ],
        [
          require('assets/img/projects/glyphs2-desktop-fifth.jpg'),
          require('assets/img/projects/glyphs2-desktop-fifth@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/glyphs2-mobile-first.jpg'),
          require('assets/img/projects/glyphs2-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/glyphs2-mobile-second.jpg'),
          require('assets/img/projects/glyphs2-mobile-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/glyphs2-mobile-third.jpg'),
          require('assets/img/projects/glyphs2-mobile-third@2x.jpg'),
        ],
        [
          require('assets/img/projects/glyphs2-mobile-fourth.jpg'),
          require('assets/img/projects/glyphs2-mobile-fourth@2x.jpg').default,
        ],
        [
          require('assets/img/projects/glyphs2-mobile-fifth.jpg'),
          require('assets/img/projects/glyphs2-mobile-fifth@2x.jpg'),
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
      {
        tKey: 'emails',
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
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
      logo: [
        require('assets/img/logos/rogue-travel_sm.png'),
        require('assets/img/logos/rogue-travel.png'),
        require('assets/img/logos/rogue-travel@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/rogue@2x.jpg'),
          require('assets/img/projects/rogue-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/rogue-desktop-second.jpg'),
          require('assets/img/projects/rogue-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/rogue-desktop-third.jpg'),
          require('assets/img/projects/rogue-desktop-third@2x.jpg'),
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
      logo: [
        require('assets/img/logos/querry-trucks_sm.png'),
        require('assets/img/logos/querry-trucks.png'),
        require('assets/img/logos/querry-trucks@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/trucks@2x.jpg'),
          require('assets/img/projects/trucks-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/trucks-desktop-second.jpg'),
          require('assets/img/projects/trucks-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/trucks-desktop-third.jpg'),
          require('assets/img/projects/trucks-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'services',
    title: 'Service Packages',
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
      logo: commonLogo.sevenGlyphs,
      desktop: [
        [
          require('assets/img/projects/services@2x.jpg'),
          require('assets/img/projects/services-desktop-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/services-desktop-second.jpg'),
          require('assets/img/projects/services-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/services-desktop-third.jpg'),
          require('assets/img/projects/services-desktop-third@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/services-mobile-first.jpg'),
          require('assets/img/projects/services-mobile-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/services-mobile-second.jpg'),
          require('assets/img/projects/services-mobile-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/services-mobile-third.jpg'),
          require('assets/img/projects/services-mobile-third@2x.jpg').default,
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
      logo: [
        require('assets/img/logos/fcdc_sm.png'),
        require('assets/img/logos/fcdc.png'),
        require('assets/img/logos/fcdc@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/fcdc@2x.jpg'),
          require('assets/img/projects/fcdc-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/fcdc-desktop-second.jpg'),
          require('assets/img/projects/fcdc-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/fcdc-desktop-third.jpg'),
          require('assets/img/projects/fcdc-desktop-third@2x.jpg'),
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
      logo: [
        require('assets/img/logos/12saffron_sm.png'),
        require('assets/img/logos/12saffron.png'),
        require('assets/img/logos/12saffron@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/saffron@2x.jpg'),
          require('assets/img/projects/saffron-desktop-first@2x.jpg').default,
        ],
        [
          require('assets/img/projects/saffron-desktop-second.jpg'),
          require('assets/img/projects/saffron-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/saffron-desktop-third.jpg'),
          require('assets/img/projects/saffron-desktop-third@2x.jpg').default,
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/saffron-mobile-first.jpg'),
          require('assets/img/projects/saffron-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/saffron-mobile-second.jpg'),
          require('assets/img/projects/saffron-mobile-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/saffron-mobile-third.jpg'),
          require('assets/img/projects/saffron-mobile-third@2x.jpg'),
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
      logo: [
        require('assets/img/logos/whip-around_sm.png'),
        require('assets/img/logos/whip-around.png'),
        require('assets/img/logos/whip-around@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/whip@2x.jpg'),
          require('assets/img/projects/whip-desktop@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/whip-mobile.jpg'),
          require('assets/img/projects/whip-mobile@2x.jpg'),
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
      logo: commonLogo.lazyaz,
      desktop: [
        [
          require('assets/img/projects/lazyazd@2x.jpg'),
          require('assets/img/projects/lazyazd-desktop@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/lazyazd-mobile.jpg'),
          require('assets/img/projects/lazyazd-mobile@2x.jpg'),
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
      logo: commonLogo.lazyaz,
      desktop: [
        [
          require('assets/img/projects/lazyaz@2x.jpg'),
          require('assets/img/projects/lazyaz-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/lazyaz-desktop-second.jpg'),
          require('assets/img/projects/lazyaz-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/lazyaz-desktop-third.jpg'),
          require('assets/img/projects/lazyaz-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/lazyaz-mobile-first@2x.jpg'),
          require('assets/img/projects/lazyaz-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/lazyaz-mobile-second.jpg'),
          require('assets/img/projects/lazyaz-mobile-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/lazyaz-mobile-third.jpg'),
          require('assets/img/projects/lazyaz-mobile-third@2x.jpg'),
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
      logo: commonLogo.sevenGlyphs,
      desktop: [
        [
          require('assets/img/projects/glyphs@2x.jpg'),
          require('assets/img/projects/glyphs-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/glyphs-desktop-second.jpg'),
          require('assets/img/projects/glyphs-desktop-second@2x.jpg').default,
        ],
        [
          require('assets/img/projects/glyphs-desktop-third.jpg'),
          require('assets/img/projects/glyphs-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          require('assets/img/projects/glyphs-mobile-first.jpg'),
          require('assets/img/projects/glyphs-mobile-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/glyphs-mobile-second.jpg'),
          require('assets/img/projects/glyphs-mobile-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/glyphs-mobile-third.jpg'),
          require('assets/img/projects/glyphs-mobile-third@2x.jpg'),
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
      logo: [
        require('assets/img/logos/msp_sm.png'),
        require('assets/img/logos/msp.png'),
        require('assets/img/logos/msp@2x.png'),
      ],
      desktop: [
        [
          require('assets/img/projects/msp@2x.jpg'),
          require('assets/img/projects/msp-desktop-first@2x.jpg'),
        ],
        [
          require('assets/img/projects/msp-desktop-second.jpg'),
          require('assets/img/projects/msp-desktop-second@2x.jpg'),
        ],
        [
          require('assets/img/projects/msp-desktop-third.jpg'),
          require('assets/img/projects/msp-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
]

const PROJECTS: Project[] =
  process.env.REACT_APP_SHOW_PRIVATE_PROJECTS === 'true'
    ? projects
    : projects.filter((project: Project) => !project.private)

const OTHER_PROJECTS_COUNT = 3

export const PROJECTS_COUNT: number = projects.length + OTHER_PROJECTS_COUNT

export default PROJECTS
