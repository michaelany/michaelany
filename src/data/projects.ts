import {importImg} from '#utils/helpers'
import {IProject} from '#utils/types'
import {COMPANY, FEATURE, TECHNOLOGY_TITLE} from './common'

const commonLogo = {
  ally: [
    importImg('logos/ally_sm.png'),
    importImg('logos/ally.png'),
    importImg('logos/ally@2x.png'),
  ],
  pridefit: [
    importImg('logos/pridefit_sm.png'),
    importImg('logos/pridefit.png'),
    importImg('logos/pridefit@2x.png'),
  ],
  madfit: [
    importImg('logos/madfit_sm.png'),
    importImg('logos/madfit.png'),
    importImg('logos/madfit@2x.png'),
  ],
  roadNinja: [
    importImg('logos/road-ninja_sm.png'),
    importImg('logos/road-ninja.png'),
    importImg('logos/road-ninja@2x.png'),
  ],
  presentMe: [
    importImg('logos/present-me_sm.png'),
    importImg('logos/present-me.png'),
    importImg('logos/present-me@2x.png'),
  ],
  vaillant: [
    importImg('logos/vaillant_sm.png'),
    importImg('logos/vaillant.png'),
    importImg('logos/vaillant@2x.png'),
  ],
  sevenGlyphs: [
    importImg('logos/7glyphs_sm.png'),
    importImg('logos/7glyphs.png'),
    importImg('logos/7glyphs@2x.png'),
  ],
  strongher: [
    importImg('logos/strongher_sm.png'),
    importImg('logos/strongher.png'),
    importImg('logos/strongher@2x.png'),
  ],
  foodprint: [
    importImg('logos/foodprint_sm.png'),
    importImg('logos/foodprint.png'),
    importImg('logos/foodprint@2x.png'),
  ],
  lazyaz: [
    importImg('logos/lazyaz_sm.png'),
    importImg('logos/lazyaz.png'),
    importImg('logos/lazyaz@2x.png'),
  ],
}

const projects: IProject[] = [
  {
    name: 'ally-2',
    color: 'red',
    title: 'Ally 2.0',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
      },
      `${TECHNOLOGY_TITLE.vite}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'animations',
      },
      {
        tKey: 'march',
        text: 2024,
      },
    ],
    images: {
      logo: commonLogo.ally,
      desktop: [
        [
          importImg('projects/ally-2@2x.jpg'),
          importImg('projects/ally-2-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/ally-2-desktop-second.jpg'),
          importImg('projects/ally-2-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/ally-2-desktop-third.jpg'),
          importImg('projects/ally-2-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/ally-2-desktop-fourth.jpg'),
          importImg('projects/ally-2-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/ally-2-desktop-fifth.jpg'),
          importImg('projects/ally-2-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/ally-2-mobile-first.jpg'),
          importImg('projects/ally-2-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/ally-2-mobile-second.jpg'),
          importImg('projects/ally-2-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/ally-2-mobile-third.jpg'),
          importImg('projects/ally-2-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/ally-2-mobile-fourth.jpg'),
          importImg('projects/ally-2-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/ally-2-mobile-fifth.jpg'),
          importImg('projects/ally-2-mobile-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'strongher-cms',
    color: 'red',
    title: 'StrongHer CMS',
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    features: [
      {
        tKeys: ['wholeDevelopment', 'design'],
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.ts}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.reactquery}, ${TECHNOLOGY_TITLE.zustand}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.mui}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.vite}, ${TECHNOLOGY_TITLE.figma}`,
      {
        tKey: 'formsTables',
      },
      {
        tKey: 'january',
        text: 2024,
      },
    ],
    images: {
      logo: commonLogo.strongher,
      desktop: [
        [
          importImg('projects/strongher-cms@2x.jpg'),
          importImg('projects/strongher-cms-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/strongher-cms-desktop-second.jpg'),
          importImg('projects/strongher-cms-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/strongher-cms-desktop-third.jpg'),
          importImg('projects/strongher-cms-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/strongher-cms-desktop-fourth.jpg'),
          importImg('projects/strongher-cms-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/strongher-cms-desktop-fifth.jpg'),
          importImg('projects/strongher-cms-desktop-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'pridefit',
    color: 'violet',
    title: 'Pridefit',
    types: ['landing', 'app'],
    companyName: 'sevenGlyphs',
    url: 'https://app.pridefit.com',
    features: [
      {
        tKey: 'wholeDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.ts}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
      },
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.next}, ${FEATURE.stripe}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'fastDevelopment',
      },
      {
        tKey: 'october',
        text: 2023,
      },
    ],
    images: {
      logo: commonLogo.pridefit,
      desktop: [
        [
          importImg('projects/pridefit@2x.jpg'),
          importImg('projects/pridefit-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/pridefit-desktop-second.jpg'),
          importImg('projects/pridefit-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/pridefit-desktop-third.jpg'),
          importImg('projects/pridefit-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/pridefit-mobile-first.jpg'),
          importImg('projects/pridefit-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/pridefit-mobile-second.jpg'),
          importImg('projects/pridefit-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/pridefit-mobile-third.jpg'),
          importImg('projects/pridefit-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'ally-cms',
    color: 'red',
    title: 'Ally CMS',
    textValues: ['Nintendo Amiibo'],
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    features: [
      {
        tKeys: ['wholeDevelopment', 'design'],
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.ts}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.reactquery}, ${TECHNOLOGY_TITLE.zustand}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.mui}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.vite}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'newArchitecture',
      },
      {
        tKey: 'september',
        text: 2023,
      },
    ],
    images: {
      logo: [
        importImg('logos/ally-second_sm.png'),
        importImg('logos/ally-second.png'),
        importImg('logos/ally-second@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/ally-cms@2x.jpg'),
          importImg('projects/ally-cms-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/ally-cms-desktop-second.jpg'),
          importImg('projects/ally-cms-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/ally-cms-desktop-third.jpg'),
          importImg('projects/ally-cms-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/ally-cms-desktop-fourth.jpg'),
          importImg('projects/ally-cms-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/ally-cms-desktop-fifth.jpg'),
          importImg('projects/ally-cms-desktop-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'pridefit-cms',
    color: 'blue',
    title: 'Pridefit CMS',
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    features: [
      {
        tKeys: ['wholeDevelopment', 'design'],
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.mui}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.sketch}`,
      {
        tKey: 'tryOne',
        values: ['ffmpeg.wasm'],
      },
      {
        tKey: 'may',
        text: 2023,
      },
    ],
    images: {
      logo: commonLogo.pridefit,
      desktop: [
        [
          importImg('projects/pridefit-cms@2x.jpg'),
          importImg('projects/pridefit-cms-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/pridefit-cms-desktop-second.jpg'),
          importImg('projects/pridefit-cms-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/pridefit-cms-desktop-third.jpg'),
          importImg('projects/pridefit-cms-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/pridefit-cms-desktop-fourth.jpg'),
          importImg('projects/pridefit-cms-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/pridefit-cms-desktop-fifth.jpg'),
          importImg('projects/pridefit-cms-desktop-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'madfit',
    color: 'green',
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
          importImg('projects/madfit@2x.jpg'),
          importImg('projects/madfit-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/madfit-desktop-second.jpg'),
          importImg('projects/madfit-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/madfit-desktop-third.jpg'),
          importImg('projects/madfit-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/madfit-desktop-fourth.jpg'),
          importImg('projects/madfit-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/madfit-desktop-fifth.jpg'),
          importImg('projects/madfit-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/madfit-mobile-first.jpg'),
          importImg('projects/madfit-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/madfit-mobile-second.jpg'),
          importImg('projects/madfit-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/madfit-mobile-third.jpg'),
          importImg('projects/madfit-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/madfit-mobile-fourth.jpg'),
          importImg('projects/madfit-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/madfit-mobile-fifth.jpg'),
          importImg('projects/madfit-mobile-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'madfit-cms',
    color: 'green',
    title: 'MadFit CMS',
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/madfit',
    features: [
      {
        tKeys: ['wholeDevelopment', 'design'],
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      `${TECHNOLOGY_TITLE.modules}, ${TECHNOLOGY_TITLE.mui}`,
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: '≈',
      },
      {
        tKey: 'january',
        text: 2021,
      },
    ],
    images: {
      logo: commonLogo.madfit,
      desktop: [
        [
          importImg('projects/madfit-cms@2x.jpg'),
          importImg('projects/madfit-cms-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/madfit-cms-desktop-second.jpg'),
          importImg('projects/madfit-cms-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/madfit-cms-desktop-third.jpg'),
          importImg('projects/madfit-cms-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/madfit-cms-desktop-fourth.jpg'),
          importImg('projects/madfit-cms-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/madfit-cms-desktop-fifth.jpg'),
          importImg('projects/madfit-cms-desktop-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'vibe-media',
    color: 'yellow',
    title: 'Vibe Media',
    types: ['landing'],
    companyName: 'sevenGlyphs',
    url: 'https://vibemedia.app',
    features: [
      {
        tKey: 'scratchSupportDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.preact}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'responsive',
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.gsap}`,
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
        importImg('logos/vibe-media_sm.png'),
        importImg('logos/vibe-media.png'),
        importImg('logos/vibe-media@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/vibe-media@2x.jpg'),
          importImg('projects/vibe-media-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/vibe-media-desktop-second.jpg'),
          importImg('projects/vibe-media-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/vibe-media-desktop-third.jpg'),
          importImg('projects/vibe-media-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/vibe-media-desktop-fourth.jpg'),
          importImg('projects/vibe-media-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/vibe-media-desktop-fifth.jpg'),
          importImg('projects/vibe-media-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/vibe-media-mobile-first.jpg'),
          importImg('projects/vibe-media-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/vibe-media-mobile-second.jpg'),
          importImg('projects/vibe-media-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/vibe-media-mobile-third.jpg'),
          importImg('projects/vibe-media-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/vibe-media-mobile-fourth.jpg'),
          importImg('projects/vibe-media-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/vibe-media-mobile-fifth.jpg'),
          importImg('projects/vibe-media-mobile-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'tradease',
    color: 'red',
    title: 'Tradease',
    types: ['site', 'app'],
    companyName: 'sevenGlyphs',
    features: [
      {
        tKey: 'scratchSupportDevelopment',
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
        importImg('logos/tradease_sm.png'),
        importImg('logos/tradease.png'),
        importImg('logos/tradease@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/tradease@2x.jpg'),
          importImg('projects/tradease-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/tradease-desktop-second.jpg'),
          importImg('projects/tradease-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/tradease-desktop-third.jpg'),
          importImg('projects/tradease-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/tradease-desktop-fourth.jpg'),
          importImg('projects/tradease-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/tradease-mobile-first.jpg'),
          importImg('projects/tradease-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/tradease-mobile-second.jpg'),
          importImg('projects/tradease-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/tradease-mobile-third.jpg'),
          importImg('projects/tradease-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/tradease-mobile-fourth.jpg'),
          importImg('projects/tradease-mobile-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    mobileApp: true,
    name: 't1-online',
    color: 'blue',
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
        importImg('logos/t1_sm.png'),
        importImg('logos/t1.png'),
        importImg('logos/t1@2x.png'),
      ],
      mobile: [
        [
          importImg('projects/t1-online-first.jpg'),
          importImg('projects/t1-online-first@2x.jpg'),
        ],
        [
          importImg('projects/t1-online-second.jpg'),
          importImg('projects/t1-online-second@2x.jpg'),
        ],
        [
          importImg('projects/t1-online-third.jpg'),
          importImg('projects/t1-online-third@2x.jpg'),
        ],
        [
          importImg('projects/t1-online-fourth.jpg'),
          importImg('projects/t1-online-fourth@2x.jpg'),
        ],
        [
          importImg('projects/t1-online-fifth.jpg'),
          importImg('projects/t1-online-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'road-ninja-landing',
    color: 'red',
    title: 'Road Ninja Landing',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem},  ${TECHNOLOGY_TITLE.gsap}`,
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
          importImg('projects/road-ninja-landing@2x.jpg'),
          importImg('projects/road-ninja-landing-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-landing-desktop-second.jpg'),
          importImg('projects/road-ninja-landing-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-landing-desktop-third.jpg'),
          importImg('projects/road-ninja-landing-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-landing-desktop-fourth.jpg'),
          importImg('projects/road-ninja-landing-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-landing-desktop-fifth.jpg'),
          importImg('projects/road-ninja-landing-desktop-fifth@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-landing-desktop-sixth.jpg'),
          importImg('projects/road-ninja-landing-desktop-sixth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/road-ninja-landing-mobile-first.jpg'),
          importImg('projects/road-ninja-landing-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-landing-mobile-second.jpg'),
          importImg('projects/road-ninja-landing-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-landing-mobile-third.jpg'),
          importImg('projects/road-ninja-landing-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-landing-mobile-fourth.jpg'),
          importImg('projects/road-ninja-landing-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-landing-mobile-fifth.jpg'),
          importImg('projects/road-ninja-landing-mobile-fifth@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-landing-mobile-sixth.jpg'),
          importImg('projects/road-ninja-landing-mobile-sixth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'road-ninja',
    color: 'red',
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
          importImg('projects/road-ninja@2x.jpg'),
          importImg('projects/road-ninja-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-desktop-second.jpg'),
          importImg('projects/road-ninja-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-desktop-third.jpg'),
          importImg('projects/road-ninja-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/road-ninja-desktop-fourth.jpg'),
          importImg('projects/road-ninja-desktop-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'celebration',
    color: 'violet',
    title: 'Сelebration',
    types: ['app'],
    companyName: 't1',
    features: [
      {
        tKeys: ['scratchDevelopment', 'design'],
      },
      {
        tKey: 'soloWork',
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
        importImg('logos/celebration_sm.png'),
        importImg('logos/celebration.png'),
        importImg('logos/celebration@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/celebration@2x.jpg'),
          importImg('projects/celebration-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/celebration-desktop-second.jpg'),
          importImg('projects/celebration-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/celebration-desktop-third.jpg'),
          importImg('projects/celebration-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/celebration-mobile-first.jpg'),
          importImg('projects/celebration-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/celebration-mobile-second.jpg'),
          importImg('projects/celebration-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/celebration-mobile-third.jpg'),
          importImg('projects/celebration-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'ally',
    color: 'default',
    title: 'Ally',
    textValues: ['Nintendo Amiibo'],
    types: ['landing'],
    companyName: 'sevenGlyphs',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
      logo: commonLogo.ally,
      desktop: [
        [
          importImg('projects/ally@2x.jpg'),
          importImg('projects/ally-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/ally-desktop-second.jpg'),
          importImg('projects/ally-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/ally-desktop-third.jpg'),
          importImg('projects/ally-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/ally-mobile-first.jpg'),
          importImg('projects/ally-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/ally-mobile-second.jpg'),
          importImg('projects/ally-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/ally-mobile-third.jpg'),
          importImg('projects/ally-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'present-me-landing',
    color: 'yellow',
    title: 'Present.me Landing',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
          importImg('projects/present-me-landing@2x.jpg'),
          importImg('projects/present-me-landing-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/present-me-landing-desktop-second.jpg'),
          importImg('projects/present-me-landing-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/present-me-landing-desktop-third.jpg'),
          importImg('projects/present-me-landing-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/present-me-landing-desktop-fourth.jpg'),
          importImg('projects/present-me-landing-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/present-me-landing-mobile-first.jpg'),
          importImg('projects/present-me-landing-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/present-me-landing-mobile-second.jpg'),
          importImg('projects/present-me-landing-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/present-me-landing-mobile-third.jpg'),
          importImg('projects/present-me-landing-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/present-me-landing-mobile-fourth.jpg'),
          importImg('projects/present-me-landing-mobile-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'present-me-portal',
    color: 'yellow',
    title: 'Present.me Portal',
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
      `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
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
          importImg('projects/present-me-portal@2x.jpg'),
          importImg('projects/present-me-portal-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/present-me-portal-desktop-second.jpg'),
          importImg('projects/present-me-portal-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/present-me-portal-desktop-third.jpg'),
          importImg('projects/present-me-portal-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'present-me',
    color: 'yellow',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
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
          importImg('projects/present-me@2x.jpg'),
          importImg('projects/present-me-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/present-me-desktop-second.jpg'),
          importImg('projects/present-me-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/present-me-desktop-third.jpg'),
          importImg('projects/present-me-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/present-me-desktop-fourth.jpg'),
          importImg('projects/present-me-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/present-me-desktop-fifth.jpg'),
          importImg('projects/present-me-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/present-me-mobile-first.jpg'),
          importImg('projects/present-me-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/present-me-mobile-second.jpg'),
          importImg('projects/present-me-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/present-me-mobile-third.jpg'),
          importImg('projects/present-me-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/present-me-mobile-fourth.jpg'),
          importImg('projects/present-me-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/present-me-mobile-fifth.jpg'),
          importImg('projects/present-me-mobile-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'dropdrone',
    color: 'default',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
        importImg('logos/dropdrone_sm.png'),
        importImg('logos/dropdrone.png'),
        importImg('logos/dropdrone@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/dropdrone@2x.jpg'),
          importImg('projects/dropdrone-desktop-first@2x.jpg'),
        ],

        [
          importImg('projects/dropdrone-desktop-second.jpg'),
          importImg('projects/dropdrone-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/dropdrone-desktop-third.jpg'),
          importImg('projects/dropdrone-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/dropdrone-desktop-fourth.jpg'),
          importImg('projects/dropdrone-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/dropdrone-mobile-first.jpg'),
          importImg('projects/dropdrone-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/dropdrone-mobile-second.jpg'),
          importImg('projects/dropdrone-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/dropdrone-mobile-third.jpg'),
          importImg('projects/dropdrone-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/dropdrone-mobile-fourth.jpg'),
          importImg('projects/dropdrone-mobile-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'just-hatched',
    color: 'yellow',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
        importImg('logos/just-hatched_sm.png'),
        importImg('logos/just-hatched.png'),
        importImg('logos/just-hatched@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/just-hatched@2x.jpg'),
          importImg('projects/just-hatched-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/just-hatched-desktop-second.jpg'),
          importImg('projects/just-hatched-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/just-hatched-desktop-third.jpg'),
          importImg('projects/just-hatched-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/just-hatched-desktop-fourth.jpg'),
          importImg('projects/just-hatched-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/just-hatched-mobile-first.jpg'),
          importImg('projects/just-hatched-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/just-hatched-mobile-second.jpg'),
          importImg('projects/just-hatched-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/just-hatched-mobile-third.jpg'),
          importImg('projects/just-hatched-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/just-hatched-mobile-fourth.jpg'),
          importImg('projects/just-hatched-mobile-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'uls',
    color: 'blue',
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
        text: `${TECHNOLOGY_TITLE.sass}`,
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
          importImg('projects/uls@2x.jpg'),
          importImg('projects/uls-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/uls-desktop-second.jpg'),
          importImg('projects/uls-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/uls-desktop-third.jpg'),
          importImg('projects/uls-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/uls-mobile-first.jpg'),
          importImg('projects/uls-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/uls-mobile-second.jpg'),
          importImg('projects/uls-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/uls-mobile-third.jpg'),
          importImg('projects/uls-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'proximal-coffee',
    color: 'yellow',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
        importImg('logos/proximal-coffee_sm.png'),
        importImg('logos/proximal-coffee.png'),
        importImg('logos/proximal-coffee@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/proximal-coffee@2x.jpg'),
          importImg('projects/proximal-coffee-desktop-first@2x.jpg'),
        ],

        [
          importImg('projects/proximal-coffee-desktop-second.jpg'),
          importImg('projects/proximal-coffee-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/proximal-coffee-desktop-third.jpg'),
          importImg('projects/proximal-coffee-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/proximal-coffee-mobile-first.jpg'),
          importImg('projects/proximal-coffee-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/proximal-coffee-mobile-second.jpg'),
          importImg('projects/proximal-coffee-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/proximal-coffee-mobile-third.jpg'),
          importImg('projects/proximal-coffee-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    private: true,
    name: 'embp',
    color: 'blue',
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
        importImg('logos/vtb_sm.png'),
        importImg('logos/vtb.png'),
        importImg('logos/vtb@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/embp@2x.jpg'),
          importImg('projects/embp-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/embp-desktop-second.jpg'),
          importImg('projects/embp-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/embp-desktop-third.jpg'),
          importImg('projects/embp-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/embp-desktop-fourth.jpg'),
          importImg('projects/embp-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/embp-desktop-fifth.jpg'),
          importImg('projects/embp-desktop-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    private: true,
    name: 'tmf',
    color: 'blue',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
        importImg('logos/tmf_sm.png'),
        importImg('logos/tmf.png'),
        importImg('logos/tmf@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/tmf@2x.jpg'),
          importImg('projects/tmf-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/tmf-desktop-second.jpg'),
          importImg('projects/tmf-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/tmf-desktop-third.jpg'),
          importImg('projects/tmf-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/tmf-desktop-fourth.jpg'),
          importImg('projects/tmf-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/tmf-desktop-fifth.jpg'),
          importImg('projects/tmf-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/tmf-mobile-first.jpg'),
          importImg('projects/tmf-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/tmf-mobile-second.jpg'),
          importImg('projects/tmf-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/tmf-mobile-third.jpg'),
          importImg('projects/tmf-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/tmf-mobile-fourth.jpg'),
          importImg('projects/tmf-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/tmf-mobile-fifth.jpg'),
          importImg('projects/tmf-mobile-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: '7glyphs-lite',
    color: 'grass',
    title: '7 glyphs Lite',
    types: ['landing'],
    companyName: 'sevenGlyphs',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
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
          importImg('projects/7glyphs-lite@2x.jpg'),
          importImg('projects/7glyphs-lite-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-lite-desktop-second.jpg'),
          importImg('projects/7glyphs-lite-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-lite-desktop-third.jpg'),
          importImg('projects/7glyphs-lite-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-lite-desktop-fourth.jpg'),
          importImg('projects/7glyphs-lite-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/7glyphs-lite-mobile-first.jpg'),
          importImg('projects/7glyphs-lite-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-lite-mobile-second.jpg'),
          importImg('projects/7glyphs-lite-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-lite-mobile-third.jpg'),
          importImg('projects/7glyphs-lite-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-lite-mobile-fourth.jpg'),
          importImg('projects/7glyphs-lite-mobile-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'melissa-chalmers',
    color: 'green',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
          importImg('projects/melissa-chalmers@2x.jpg'),
          importImg('projects/melissa-chalmers-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/melissa-chalmers-desktop-second.jpg'),
          importImg('projects/melissa-chalmers-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/melissa-chalmers-desktop-third.jpg'),
          importImg('projects/melissa-chalmers-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/melissa-chalmers-mobile-first.jpg'),
          importImg('projects/melissa-chalmers-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/melissa-chalmers-mobile-second.jpg'),
          importImg('projects/melissa-chalmers-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/melissa-chalmers-mobile-third.jpg'),
          importImg('projects/melissa-chalmers-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    mobileApp: true,
    name: 'foodprint',
    color: 'violet',
    title: 'Foodprint',
    types: ['app'],
    companyName: 'sevenGlyphs',
    stores: [
      'https://apps.apple.com/nz/app/foodprint/id1462596522',
      'https://play.google.com/store/apps/details?id=com.foodprint',
    ],
    features: [
      {
        tKey: 'growthSupportDevelopment',
      },
      {
        tKey: 'teamWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.reactnative}`,
      `${TECHNOLOGY_TITLE.reactnative} styles`,
      `${FEATURE.rest}, Xcode, Android Studio, ${TECHNOLOGY_TITLE.zeplin}`,
      {
        tKey: 'tryOne',
        values: [TECHNOLOGY_TITLE.reactnative],
      },
      {
        tKey: 'june',
        text: 2019,
      },
    ],
    images: {
      logo: commonLogo.foodprint,
      mobile: [
        [
          importImg('projects/foodprint-first.jpg'),
          importImg('projects/foodprint-first@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-second.jpg'),
          importImg('projects/foodprint-second@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-third.jpg'),
          importImg('projects/foodprint-third@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-fourth.jpg'),
          importImg('projects/foodprint-fourth@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-fifth.jpg'),
          importImg('projects/foodprint-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'foodprint-portal',
    color: 'violet',
    title: 'Foodprint Portal',
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
      `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
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
          importImg('projects/foodprint-portal@2x.jpg'),
          importImg('projects/foodprint-portal-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-portal-desktop-second.jpg'),
          importImg('projects/foodprint-portal-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-portal-desktop-third.jpg'),
          importImg('projects/foodprint-portal-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-portal-desktop-fourth.jpg'),
          importImg('projects/foodprint-portal-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-portal-desktop-fifth.jpg'),
          importImg('projects/foodprint-portal-desktop-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'foodprint-landing',
    color: 'violet',
    title: 'Foodprint Landing',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
          importImg('projects/foodprint-landing@2x.jpg'),
          importImg('projects/foodprint-landing-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-landing-desktop-second.jpg'),
          importImg('projects/foodprint-landing-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-landing-desktop-third.jpg'),
          importImg('projects/foodprint-landing-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-landing-desktop-fourth.jpg'),
          importImg('projects/foodprint-landing-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/foodprint-landing-mobile-first.jpg'),
          importImg('projects/foodprint-landing-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-landing-mobile-second.jpg'),
          importImg('projects/foodprint-landing-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-landing-mobile-third.jpg'),
          importImg('projects/foodprint-landing-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/foodprint-landing-mobile-fourth.jpg'),
          importImg('projects/foodprint-landing-mobile-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'sds',
    color: 'green',
    title: 'Sales Digital System',
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
          importImg('projects/sds@2x.jpg'),
          importImg('projects/sds-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/sds-desktop-second.jpg'),
          importImg('projects/sds-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/sds-desktop-third.jpg'),
          importImg('projects/sds-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/sds-desktop-fourth.jpg'),
          importImg('projects/sds-desktop-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'strongher',
    color: 'red',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
          importImg('projects/strongher@2x.jpg'),
          importImg('projects/strongher-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/strongher-desktop-second.jpg'),
          importImg('projects/strongher-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/strongher-desktop-third.jpg'),
          importImg('projects/strongher-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/strongher-desktop-fourth.jpg'),
          importImg('projects/strongher-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/strongher-desktop-fifth.jpg'),
          importImg('projects/strongher-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/strongher-mobile-first.jpg'),
          importImg('projects/strongher-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/strongher-mobile-second.jpg'),
          importImg('projects/strongher-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/strongher-mobile-third.jpg'),
          importImg('projects/strongher-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/strongher-mobile-fourth.jpg'),
          importImg('projects/strongher-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/strongher-mobile-fifth.jpg'),
          importImg('projects/strongher-mobile-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: '7glyphs-2',
    color: 'default',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
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
          importImg('projects/7glyphs-2@2x.jpg'),
          importImg('projects/7glyphs-2-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-2-desktop-second.jpg'),
          importImg('projects/7glyphs-2-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-2-desktop-third.jpg'),
          importImg('projects/7glyphs-2-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-2-desktop-fourth.jpg'),
          importImg('projects/7glyphs-2-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-2-desktop-fifth.jpg'),
          importImg('projects/7glyphs-2-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/7glyphs-2-mobile-first.jpg'),
          importImg('projects/7glyphs-2-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-2-mobile-second.jpg'),
          importImg('projects/7glyphs-2-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-2-mobile-third.jpg'),
          importImg('projects/7glyphs-2-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-2-mobile-fourth.jpg'),
          importImg('projects/7glyphs-2-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-2-mobile-fifth.jpg'),
          importImg('projects/7glyphs-2-mobile-fifth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'rogue-travel',
    color: 'violet',
    title: 'Rogue Travel',
    types: ['site', 'app'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/rogue-travel',
    features: [
      {
        tKey: 'scratchSupportDevelopment',
      },
      {
        tKey: 'soloWork',
      },
      `${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.react}, ${TECHNOLOGY_TITLE.redux}, ${TECHNOLOGY_TITLE.html}`,
      {
        tKey: 'emails',
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
        importImg('logos/rogue-travel.png'),
        importImg('logos/rogue-travel.png'),
        importImg('logos/rogue-travel@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/rogue-travel@2x.jpg'),
          importImg('projects/rogue-travel-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/rogue-travel-desktop-second.jpg'),
          importImg('projects/rogue-travel-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/rogue-travel-desktop-third.jpg'),
          importImg('projects/rogue-travel-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'quarry-trucks',
    color: 'yellow',
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
      `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
        importImg('logos/querry-trucks_sm.png'),
        importImg('logos/querry-trucks.png'),
        importImg('logos/querry-trucks@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/quarry-trucks@2x.jpg'),
          importImg('projects/quarry-trucks-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/quarry-trucks-desktop-second.jpg'),
          importImg('projects/quarry-trucks-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/quarry-trucks-desktop-third.jpg'),
          importImg('projects/quarry-trucks-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'service-packages',
    color: 'grass',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
          importImg('projects/service-packages@2x.jpg'),
          importImg('projects/service-packages-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/service-packages-desktop-second.jpg'),
          importImg('projects/service-packages-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/service-packages-desktop-third.jpg'),
          importImg('projects/service-packages-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/service-packages-mobile-first.jpg'),
          importImg('projects/service-packages-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/service-packages-mobile-second.jpg'),
          importImg('projects/service-packages-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/service-packages-mobile-third.jpg'),
          importImg('projects/service-packages-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    private: true,
    name: 'fcdc',
    color: 'blue',
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
      `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, ${TECHNOLOGY_TITLE.mui}`,
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
        importImg('logos/fcdc_sm.png'),
        importImg('logos/fcdc.png'),
        importImg('logos/fcdc@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/fcdc@2x.jpg'),
          importImg('projects/fcdc-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/fcdc-desktop-second.jpg'),
          importImg('projects/fcdc-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/fcdc-desktop-third.jpg'),
          importImg('projects/fcdc-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: '12-saffron',
    color: 'yellow',
    title: '12 Saffron',
    types: ['landing'],
    companyName: 'sevenGlyphs',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
        importImg('logos/12-saffron_sm.png'),
        importImg('logos/12-saffron.png'),
        importImg('logos/12-saffron@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/12-saffron@2x.jpg'),
          importImg('projects/12-saffron-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/12-saffron-desktop-second.jpg'),
          importImg('projects/12-saffron-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/12-saffron-desktop-third.jpg'),
          importImg('projects/12-saffron-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/12-saffron-mobile-first.jpg'),
          importImg('projects/12-saffron-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/12-saffron-mobile-second.jpg'),
          importImg('projects/12-saffron-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/12-saffron-mobile-third.jpg'),
          importImg('projects/12-saffron-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    private: true,
    name: 'whip-around',
    color: 'default',
    title: 'Whip Around',
    types: ['admin'],
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
        importImg('logos/whip-around_sm.png'),
        importImg('logos/whip-around.png'),
        importImg('logos/whip-around@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/whip-around@2x.jpg'),
          importImg('projects/whip-around-desktop@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/whip-around-mobile.jpg'),
          importImg('projects/whip-around-mobile@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'lazyaz-dashboard',
    color: 'default',
    title: 'LazyAz Dashboard',
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
          importImg('projects/lazyaz-dashboard@2x.jpg'),
          importImg('projects/lazyaz-dashboard-desktop@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/lazyaz-dashboard-mobile.jpg'),
          importImg('projects/lazyaz-dashboard-mobile@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'lazyaz',
    color: 'red',
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}`,
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
          importImg('projects/lazyaz@2x.jpg'),
          importImg('projects/lazyaz-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/lazyaz-desktop-second.jpg'),
          importImg('projects/lazyaz-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/lazyaz-desktop-third.jpg'),
          importImg('projects/lazyaz-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/lazyaz-mobile-first@2x.jpg'),
          importImg('projects/lazyaz-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/lazyaz-mobile-second.jpg'),
          importImg('projects/lazyaz-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/lazyaz-mobile-third.jpg'),
          importImg('projects/lazyaz-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: '7glyphs',
    color: 'grass',
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
        text: `${TECHNOLOGY_TITLE.sass}`,
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
          importImg('projects/7glyphs@2x.jpg'),
          importImg('projects/7glyphs-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-desktop-second.jpg'),
          importImg('projects/7glyphs-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-desktop-third.jpg'),
          importImg('projects/7glyphs-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/7glyphs-mobile-first.jpg'),
          importImg('projects/7glyphs-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-mobile-second.jpg'),
          importImg('projects/7glyphs-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/7glyphs-mobile-third.jpg'),
          importImg('projects/7glyphs-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'msp',
    color: 'blue',
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
        importImg('logos/msp_sm.png'),
        importImg('logos/msp.png'),
        importImg('logos/msp@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/msp@2x.jpg'),
          importImg('projects/msp-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/msp-desktop-second.jpg'),
          importImg('projects/msp-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/msp-desktop-third.jpg'),
          importImg('projects/msp-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
]

const PROJECTS: IProject[] =
  import.meta.env.VITE_SHOW_PRIVATE_PROJECTS === 'true'
    ? projects
    : projects.filter((project: IProject) => !project.private)

const OTHER_PROJECTS_COUNT = 5

export const PROJECTS_COUNT: number = projects.length + OTHER_PROJECTS_COUNT

export default PROJECTS
