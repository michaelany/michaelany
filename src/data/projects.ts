import {publicImg} from '#utils/helpers'
import {COMPANY, FEATURE, TECHNOLOGY_TITLE} from '#data/common'
import type {IProject} from '#utils/types'

const commonLogo = {
  ally: [
    publicImg('logos/ally_sm.png'),
    publicImg('logos/ally.png'),
    publicImg('logos/ally@2x.png'),
  ],
  pridefit: [
    publicImg('logos/pridefit_sm.png'),
    publicImg('logos/pridefit.png'),
    publicImg('logos/pridefit@2x.png'),
  ],
  madfit: [
    publicImg('logos/madfit_sm.png'),
    publicImg('logos/madfit.png'),
    publicImg('logos/madfit@2x.png'),
  ],
  roadNinja: [
    publicImg('logos/road-ninja_sm.png'),
    publicImg('logos/road-ninja.png'),
    publicImg('logos/road-ninja@2x.png'),
  ],
  presentMe: [
    publicImg('logos/present-me_sm.png'),
    publicImg('logos/present-me.png'),
    publicImg('logos/present-me@2x.png'),
  ],
  vaillant: [
    publicImg('logos/vaillant_sm.png'),
    publicImg('logos/vaillant.png'),
    publicImg('logos/vaillant@2x.png'),
  ],
  sevenGlyphs: [
    publicImg('logos/7glyphs_sm.png'),
    publicImg('logos/7glyphs.png'),
    publicImg('logos/7glyphs@2x.png'),
  ],
  strongher: [
    publicImg('logos/strongher_sm.png'),
    publicImg('logos/strongher.png'),
    publicImg('logos/strongher@2x.png'),
  ],
  foodprint: [
    publicImg('logos/foodprint_sm.png'),
    publicImg('logos/foodprint.png'),
    publicImg('logos/foodprint@2x.png'),
  ],
  lazyaz: [
    publicImg('logos/lazyaz_sm.png'),
    publicImg('logos/lazyaz.png'),
    publicImg('logos/lazyaz@2x.png'),
  ],
}

const projects: IProject[] = [
  {
    name: 'ally-2',
    color: 'red',
    title: 'Ally 2.0',
    textValues: ['Nintendo amiibo'],
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
          publicImg('projects/ally-2@2x.jpg'),
          publicImg('projects/ally-2-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/ally-2-desktop-second.jpg'),
          publicImg('projects/ally-2-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/ally-2-desktop-third.jpg'),
          publicImg('projects/ally-2-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/ally-2-desktop-fourth.jpg'),
          publicImg('projects/ally-2-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/ally-2-desktop-fifth.jpg'),
          publicImg('projects/ally-2-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/ally-2-mobile-first.jpg'),
          publicImg('projects/ally-2-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/ally-2-mobile-second.jpg'),
          publicImg('projects/ally-2-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/ally-2-mobile-third.jpg'),
          publicImg('projects/ally-2-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/ally-2-mobile-fourth.jpg'),
          publicImg('projects/ally-2-mobile-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/ally-2-mobile-fifth.jpg'),
          publicImg('projects/ally-2-mobile-fifth@2x.jpg'),
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
          publicImg('projects/strongher-cms@2x.jpg'),
          publicImg('projects/strongher-cms-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-cms-desktop-second.jpg'),
          publicImg('projects/strongher-cms-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-cms-desktop-third.jpg'),
          publicImg('projects/strongher-cms-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-cms-desktop-fourth.jpg'),
          publicImg('projects/strongher-cms-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-cms-desktop-fifth.jpg'),
          publicImg('projects/strongher-cms-desktop-fifth@2x.jpg'),
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
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.next}, ${TECHNOLOGY_TITLE.stripe}, ${TECHNOLOGY_TITLE.sketch}`,
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
          publicImg('projects/pridefit@2x.jpg'),
          publicImg('projects/pridefit-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/pridefit-desktop-second.jpg'),
          publicImg('projects/pridefit-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/pridefit-desktop-third.jpg'),
          publicImg('projects/pridefit-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/pridefit-mobile-first.jpg'),
          publicImg('projects/pridefit-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/pridefit-mobile-second.jpg'),
          publicImg('projects/pridefit-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/pridefit-mobile-third.jpg'),
          publicImg('projects/pridefit-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'ally-cms',
    color: 'red',
    title: 'Ally CMS',
    textValues: ['Nintendo amiibo'],
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
        publicImg('logos/ally-second_sm.png'),
        publicImg('logos/ally-second.png'),
        publicImg('logos/ally-second@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/ally-cms@2x.jpg'),
          publicImg('projects/ally-cms-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/ally-cms-desktop-second.jpg'),
          publicImg('projects/ally-cms-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/ally-cms-desktop-third.jpg'),
          publicImg('projects/ally-cms-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/ally-cms-desktop-fourth.jpg'),
          publicImg('projects/ally-cms-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/ally-cms-desktop-fifth.jpg'),
          publicImg('projects/ally-cms-desktop-fifth@2x.jpg'),
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
          publicImg('projects/pridefit-cms@2x.jpg'),
          publicImg('projects/pridefit-cms-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/pridefit-cms-desktop-second.jpg'),
          publicImg('projects/pridefit-cms-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/pridefit-cms-desktop-third.jpg'),
          publicImg('projects/pridefit-cms-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/pridefit-cms-desktop-fourth.jpg'),
          publicImg('projects/pridefit-cms-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/pridefit-cms-desktop-fifth.jpg'),
          publicImg('projects/pridefit-cms-desktop-fifth@2x.jpg'),
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
        text: `${TECHNOLOGY_TITLE.css}, ${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, GSAP`,
      },
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.stripe}, ${TECHNOLOGY_TITLE.zeplin}`,
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
          publicImg('projects/madfit@2x.jpg'),
          publicImg('projects/madfit-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-desktop-second.jpg'),
          publicImg('projects/madfit-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-desktop-third.jpg'),
          publicImg('projects/madfit-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-desktop-fourth.jpg'),
          publicImg('projects/madfit-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-desktop-fifth.jpg'),
          publicImg('projects/madfit-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/madfit-mobile-first.jpg'),
          publicImg('projects/madfit-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-mobile-second.jpg'),
          publicImg('projects/madfit-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-mobile-third.jpg'),
          publicImg('projects/madfit-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-mobile-fourth.jpg'),
          publicImg('projects/madfit-mobile-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-mobile-fifth.jpg'),
          publicImg('projects/madfit-mobile-fifth@2x.jpg'),
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
          publicImg('projects/madfit-cms@2x.jpg'),
          publicImg('projects/madfit-cms-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-cms-desktop-second.jpg'),
          publicImg('projects/madfit-cms-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-cms-desktop-third.jpg'),
          publicImg('projects/madfit-cms-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-cms-desktop-fourth.jpg'),
          publicImg('projects/madfit-cms-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/madfit-cms-desktop-fifth.jpg'),
          publicImg('projects/madfit-cms-desktop-fifth@2x.jpg'),
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, GSAP`,
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
        publicImg('logos/vibe-media_sm.png'),
        publicImg('logos/vibe-media.png'),
        publicImg('logos/vibe-media@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/vibe-media@2x.jpg'),
          publicImg('projects/vibe-media-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/vibe-media-desktop-second.jpg'),
          publicImg('projects/vibe-media-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/vibe-media-desktop-third.jpg'),
          publicImg('projects/vibe-media-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/vibe-media-desktop-fourth.jpg'),
          publicImg('projects/vibe-media-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/vibe-media-desktop-fifth.jpg'),
          publicImg('projects/vibe-media-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/vibe-media-mobile-first.jpg'),
          publicImg('projects/vibe-media-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/vibe-media-mobile-second.jpg'),
          publicImg('projects/vibe-media-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/vibe-media-mobile-third.jpg'),
          publicImg('projects/vibe-media-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/vibe-media-mobile-fourth.jpg'),
          publicImg('projects/vibe-media-mobile-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/vibe-media-mobile-fifth.jpg'),
          publicImg('projects/vibe-media-mobile-fifth@2x.jpg'),
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
        publicImg('logos/tradease_sm.png'),
        publicImg('logos/tradease.png'),
        publicImg('logos/tradease@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/tradease@2x.jpg'),
          publicImg('projects/tradease-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/tradease-desktop-second.jpg'),
          publicImg('projects/tradease-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/tradease-desktop-third.jpg'),
          publicImg('projects/tradease-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/tradease-desktop-fourth.jpg'),
          publicImg('projects/tradease-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/tradease-mobile-first.jpg'),
          publicImg('projects/tradease-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/tradease-mobile-second.jpg'),
          publicImg('projects/tradease-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/tradease-mobile-third.jpg'),
          publicImg('projects/tradease-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/tradease-mobile-fourth.jpg'),
          publicImg('projects/tradease-mobile-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    mobileApp: true,
    name: 't1-online',
    color: 'blue',
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
        publicImg('logos/t1_sm.png'),
        publicImg('logos/t1.png'),
        publicImg('logos/t1@2x.png'),
      ],
      mobile: [
        [
          publicImg('projects/t1-online-first.jpg'),
          publicImg('projects/t1-online-first@2x.jpg'),
        ],
        [
          publicImg('projects/t1-online-second.jpg'),
          publicImg('projects/t1-online-second@2x.jpg'),
        ],
        [
          publicImg('projects/t1-online-third.jpg'),
          publicImg('projects/t1-online-third@2x.jpg'),
        ],
        [
          publicImg('projects/t1-online-fourth.jpg'),
          publicImg('projects/t1-online-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/t1-online-fifth.jpg'),
          publicImg('projects/t1-online-fifth@2x.jpg'),
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
        text: `${TECHNOLOGY_TITLE.sass}, ${TECHNOLOGY_TITLE.bem}, GSAP`,
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
          publicImg('projects/road-ninja-landing@2x.jpg'),
          publicImg('projects/road-ninja-landing-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-landing-desktop-second.jpg'),
          publicImg('projects/road-ninja-landing-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-landing-desktop-third.jpg'),
          publicImg('projects/road-ninja-landing-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-landing-desktop-fourth.jpg'),
          publicImg('projects/road-ninja-landing-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-landing-desktop-fifth.jpg'),
          publicImg('projects/road-ninja-landing-desktop-fifth@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-landing-desktop-sixth.jpg'),
          publicImg('projects/road-ninja-landing-desktop-sixth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/road-ninja-landing-mobile-first.jpg'),
          publicImg('projects/road-ninja-landing-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-landing-mobile-second.jpg'),
          publicImg('projects/road-ninja-landing-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-landing-mobile-third.jpg'),
          publicImg('projects/road-ninja-landing-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-landing-mobile-fourth.jpg'),
          publicImg('projects/road-ninja-landing-mobile-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-landing-mobile-fifth.jpg'),
          publicImg('projects/road-ninja-landing-mobile-fifth@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-landing-mobile-sixth.jpg'),
          publicImg('projects/road-ninja-landing-mobile-sixth@2x.jpg'),
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
      `${FEATURE.rest}, ${FEATURE.socket}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.stripe}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
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
          publicImg('projects/road-ninja@2x.jpg'),
          publicImg('projects/road-ninja-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-desktop-second.jpg'),
          publicImg('projects/road-ninja-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-desktop-third.jpg'),
          publicImg('projects/road-ninja-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/road-ninja-desktop-fourth.jpg'),
          publicImg('projects/road-ninja-desktop-fourth@2x.jpg'),
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
        publicImg('logos/celebration_sm.png'),
        publicImg('logos/celebration.png'),
        publicImg('logos/celebration@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/celebration@2x.jpg'),
          publicImg('projects/celebration-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/celebration-desktop-second.jpg'),
          publicImg('projects/celebration-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/celebration-desktop-third.jpg'),
          publicImg('projects/celebration-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/celebration-mobile-first.jpg'),
          publicImg('projects/celebration-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/celebration-mobile-second.jpg'),
          publicImg('projects/celebration-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/celebration-mobile-third.jpg'),
          publicImg('projects/celebration-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'ally',
    color: 'default',
    title: 'Ally',
    textValues: ['Nintendo amiibo'],
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
          publicImg('projects/ally@2x.jpg'),
          publicImg('projects/ally-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/ally-desktop-second.jpg'),
          publicImg('projects/ally-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/ally-desktop-third.jpg'),
          publicImg('projects/ally-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/ally-mobile-first.jpg'),
          publicImg('projects/ally-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/ally-mobile-second.jpg'),
          publicImg('projects/ally-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/ally-mobile-third.jpg'),
          publicImg('projects/ally-mobile-third@2x.jpg'),
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
          publicImg('projects/present-me-landing@2x.jpg'),
          publicImg('projects/present-me-landing-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-landing-desktop-second.jpg'),
          publicImg('projects/present-me-landing-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-landing-desktop-third.jpg'),
          publicImg('projects/present-me-landing-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-landing-desktop-fourth.jpg'),
          publicImg('projects/present-me-landing-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/present-me-landing-mobile-first.jpg'),
          publicImg('projects/present-me-landing-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-landing-mobile-second.jpg'),
          publicImg('projects/present-me-landing-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-landing-mobile-third.jpg'),
          publicImg('projects/present-me-landing-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-landing-mobile-fourth.jpg'),
          publicImg('projects/present-me-landing-mobile-fourth@2x.jpg'),
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
          publicImg('projects/present-me-portal@2x.jpg'),
          publicImg('projects/present-me-portal-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-portal-desktop-second.jpg'),
          publicImg('projects/present-me-portal-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-portal-desktop-third.jpg'),
          publicImg('projects/present-me-portal-desktop-third@2x.jpg'),
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
          publicImg('projects/present-me@2x.jpg'),
          publicImg('projects/present-me-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-desktop-second.jpg'),
          publicImg('projects/present-me-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-desktop-third.jpg'),
          publicImg('projects/present-me-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-desktop-fourth.jpg'),
          publicImg('projects/present-me-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-desktop-fifth.jpg'),
          publicImg('projects/present-me-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/present-me-mobile-first.jpg'),
          publicImg('projects/present-me-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-mobile-second.jpg'),
          publicImg('projects/present-me-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-mobile-third.jpg'),
          publicImg('projects/present-me-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-mobile-fourth.jpg'),
          publicImg('projects/present-me-mobile-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/present-me-mobile-fifth.jpg'),
          publicImg('projects/present-me-mobile-fifth@2x.jpg'),
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
        publicImg('logos/dropdrone_sm.png'),
        publicImg('logos/dropdrone.png'),
        publicImg('logos/dropdrone@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/dropdrone@2x.jpg'),
          publicImg('projects/dropdrone-desktop-first@2x.jpg'),
        ],

        [
          publicImg('projects/dropdrone-desktop-second.jpg'),
          publicImg('projects/dropdrone-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/dropdrone-desktop-third.jpg'),
          publicImg('projects/dropdrone-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/dropdrone-desktop-fourth.jpg'),
          publicImg('projects/dropdrone-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/dropdrone-mobile-first.jpg'),
          publicImg('projects/dropdrone-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/dropdrone-mobile-second.jpg'),
          publicImg('projects/dropdrone-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/dropdrone-mobile-third.jpg'),
          publicImg('projects/dropdrone-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/dropdrone-mobile-fourth.jpg'),
          publicImg('projects/dropdrone-mobile-fourth@2x.jpg'),
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
        publicImg('logos/just-hatched_sm.png'),
        publicImg('logos/just-hatched.png'),
        publicImg('logos/just-hatched@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/just-hatched@2x.jpg'),
          publicImg('projects/just-hatched-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/just-hatched-desktop-second.jpg'),
          publicImg('projects/just-hatched-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/just-hatched-desktop-third.jpg'),
          publicImg('projects/just-hatched-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/just-hatched-desktop-fourth.jpg'),
          publicImg('projects/just-hatched-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/just-hatched-mobile-first.jpg'),
          publicImg('projects/just-hatched-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/just-hatched-mobile-second.jpg'),
          publicImg('projects/just-hatched-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/just-hatched-mobile-third.jpg'),
          publicImg('projects/just-hatched-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/just-hatched-mobile-fourth.jpg'),
          publicImg('projects/just-hatched-mobile-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'uls',
    color: 'blue',
    title: 'Vaillant United Login System',
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
      `${TECHNOLOGY_TITLE.webpack}, ${FEATURE.rest}, ${FEATURE.keycloak}, ${TECHNOLOGY_TITLE.docker}`,
      {
        tKey: 'tryTwo',
        values: [FEATURE.keycloak, TECHNOLOGY_TITLE.docker],
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
          publicImg('projects/uls@2x.jpg'),
          publicImg('projects/uls-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/uls-desktop-second.jpg'),
          publicImg('projects/uls-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/uls-desktop-third.jpg'),
          publicImg('projects/uls-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/uls-mobile-first.jpg'),
          publicImg('projects/uls-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/uls-mobile-second.jpg'),
          publicImg('projects/uls-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/uls-mobile-third.jpg'),
          publicImg('projects/uls-mobile-third@2x.jpg'),
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
        publicImg('logos/proximal-coffee_sm.png'),
        publicImg('logos/proximal-coffee.png'),
        publicImg('logos/proximal-coffee@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/proximal-coffee@2x.jpg'),
          publicImg('projects/proximal-coffee-desktop-first@2x.jpg'),
        ],

        [
          publicImg('projects/proximal-coffee-desktop-second.jpg'),
          publicImg('projects/proximal-coffee-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/proximal-coffee-desktop-third.jpg'),
          publicImg('projects/proximal-coffee-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/proximal-coffee-mobile-first.jpg'),
          publicImg('projects/proximal-coffee-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/proximal-coffee-mobile-second.jpg'),
          publicImg('projects/proximal-coffee-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/proximal-coffee-mobile-third.jpg'),
          publicImg('projects/proximal-coffee-mobile-third@2x.jpg'),
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
        publicImg('logos/vtb_sm.png'),
        publicImg('logos/vtb.png'),
        publicImg('logos/vtb@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/embp@2x.jpg'),
          publicImg('projects/embp-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/embp-desktop-second.jpg'),
          publicImg('projects/embp-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/embp-desktop-third.jpg'),
          publicImg('projects/embp-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/embp-desktop-fourth.jpg'),
          publicImg('projects/embp-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/embp-desktop-fifth.jpg'),
          publicImg('projects/embp-desktop-fifth@2x.jpg'),
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
    url: 'https://tmfoundation.co.nz',
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
        publicImg('logos/tmf_sm.png'),
        publicImg('logos/tmf.png'),
        publicImg('logos/tmf@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/tmf@2x.jpg'),
          publicImg('projects/tmf-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/tmf-desktop-second.jpg'),
          publicImg('projects/tmf-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/tmf-desktop-third.jpg'),
          publicImg('projects/tmf-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/tmf-desktop-fourth.jpg'),
          publicImg('projects/tmf-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/tmf-desktop-fifth.jpg'),
          publicImg('projects/tmf-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/tmf-mobile-first.jpg'),
          publicImg('projects/tmf-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/tmf-mobile-second.jpg'),
          publicImg('projects/tmf-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/tmf-mobile-third.jpg'),
          publicImg('projects/tmf-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/tmf-mobile-fourth.jpg'),
          publicImg('projects/tmf-mobile-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/tmf-mobile-fifth.jpg'),
          publicImg('projects/tmf-mobile-fifth@2x.jpg'),
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
          publicImg('projects/7glyphs-lite@2x.jpg'),
          publicImg('projects/7glyphs-lite-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-lite-desktop-second.jpg'),
          publicImg('projects/7glyphs-lite-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-lite-desktop-third.jpg'),
          publicImg('projects/7glyphs-lite-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-lite-desktop-fourth.jpg'),
          publicImg('projects/7glyphs-lite-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/7glyphs-lite-mobile-first.jpg'),
          publicImg('projects/7glyphs-lite-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-lite-mobile-second.jpg'),
          publicImg('projects/7glyphs-lite-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-lite-mobile-third.jpg'),
          publicImg('projects/7glyphs-lite-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-lite-mobile-fourth.jpg'),
          publicImg('projects/7glyphs-lite-mobile-fourth@2x.jpg'),
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
          publicImg('projects/melissa-chalmers@2x.jpg'),
          publicImg('projects/melissa-chalmers-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/melissa-chalmers-desktop-second.jpg'),
          publicImg('projects/melissa-chalmers-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/melissa-chalmers-desktop-third.jpg'),
          publicImg('projects/melissa-chalmers-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/melissa-chalmers-mobile-first.jpg'),
          publicImg('projects/melissa-chalmers-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/melissa-chalmers-mobile-second.jpg'),
          publicImg('projects/melissa-chalmers-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/melissa-chalmers-mobile-third.jpg'),
          publicImg('projects/melissa-chalmers-mobile-third@2x.jpg'),
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
          publicImg('projects/foodprint-first.jpg'),
          publicImg('projects/foodprint-first@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-second.jpg'),
          publicImg('projects/foodprint-second@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-third.jpg'),
          publicImg('projects/foodprint-third@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-fourth.jpg'),
          publicImg('projects/foodprint-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-fifth.jpg'),
          publicImg('projects/foodprint-fifth@2x.jpg'),
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
          publicImg('projects/foodprint-portal@2x.jpg'),
          publicImg('projects/foodprint-portal-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-portal-desktop-second.jpg'),
          publicImg('projects/foodprint-portal-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-portal-desktop-third.jpg'),
          publicImg('projects/foodprint-portal-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-portal-desktop-fourth.jpg'),
          publicImg('projects/foodprint-portal-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-portal-desktop-fifth.jpg'),
          publicImg('projects/foodprint-portal-desktop-fifth@2x.jpg'),
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
          publicImg('projects/foodprint-landing@2x.jpg'),
          publicImg('projects/foodprint-landing-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-landing-desktop-second.jpg'),
          publicImg('projects/foodprint-landing-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-landing-desktop-third.jpg'),
          publicImg('projects/foodprint-landing-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-landing-desktop-fourth.jpg'),
          publicImg('projects/foodprint-landing-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/foodprint-landing-mobile-first.jpg'),
          publicImg('projects/foodprint-landing-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-landing-mobile-second.jpg'),
          publicImg('projects/foodprint-landing-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-landing-mobile-third.jpg'),
          publicImg('projects/foodprint-landing-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/foodprint-landing-mobile-fourth.jpg'),
          publicImg('projects/foodprint-landing-mobile-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'sds',
    color: 'green',
    title: 'Vaillant Sales Digital System',
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
          publicImg('projects/sds@2x.jpg'),
          publicImg('projects/sds-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/sds-desktop-second.jpg'),
          publicImg('projects/sds-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/sds-desktop-third.jpg'),
          publicImg('projects/sds-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/sds-desktop-fourth.jpg'),
          publicImg('projects/sds-desktop-fourth@2x.jpg'),
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
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.stripe}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
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
          publicImg('projects/strongher@2x.jpg'),
          publicImg('projects/strongher-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-desktop-second.jpg'),
          publicImg('projects/strongher-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-desktop-third.jpg'),
          publicImg('projects/strongher-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-desktop-fourth.jpg'),
          publicImg('projects/strongher-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-desktop-fifth.jpg'),
          publicImg('projects/strongher-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/strongher-mobile-first.jpg'),
          publicImg('projects/strongher-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-mobile-second.jpg'),
          publicImg('projects/strongher-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-mobile-third.jpg'),
          publicImg('projects/strongher-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-mobile-fourth.jpg'),
          publicImg('projects/strongher-mobile-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/strongher-mobile-fifth.jpg'),
          publicImg('projects/strongher-mobile-fifth@2x.jpg'),
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
          publicImg('projects/7glyphs-2@2x.jpg'),
          publicImg('projects/7glyphs-2-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-2-desktop-second.jpg'),
          publicImg('projects/7glyphs-2-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-2-desktop-third.jpg'),
          publicImg('projects/7glyphs-2-desktop-third@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-2-desktop-fourth.jpg'),
          publicImg('projects/7glyphs-2-desktop-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-2-desktop-fifth.jpg'),
          publicImg('projects/7glyphs-2-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/7glyphs-2-mobile-first.jpg'),
          publicImg('projects/7glyphs-2-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-2-mobile-second.jpg'),
          publicImg('projects/7glyphs-2-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-2-mobile-third.jpg'),
          publicImg('projects/7glyphs-2-mobile-third@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-2-mobile-fourth.jpg'),
          publicImg('projects/7glyphs-2-mobile-fourth@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-2-mobile-fifth.jpg'),
          publicImg('projects/7glyphs-2-mobile-fifth@2x.jpg'),
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
      `${FEATURE.rest}, ${TECHNOLOGY_TITLE.webpack}, ${TECHNOLOGY_TITLE.stripe}, ${TECHNOLOGY_TITLE.zeplin}, ${TECHNOLOGY_TITLE.sketch}`,
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
        publicImg('logos/rogue-travel.png'),
        publicImg('logos/rogue-travel.png'),
        publicImg('logos/rogue-travel@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/rogue-travel@2x.jpg'),
          publicImg('projects/rogue-travel-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/rogue-travel-desktop-second.jpg'),
          publicImg('projects/rogue-travel-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/rogue-travel-desktop-third.jpg'),
          publicImg('projects/rogue-travel-desktop-third@2x.jpg'),
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
        publicImg('logos/querry-trucks_sm.png'),
        publicImg('logos/querry-trucks.png'),
        publicImg('logos/querry-trucks@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/quarry-trucks@2x.jpg'),
          publicImg('projects/quarry-trucks-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/quarry-trucks-desktop-second.jpg'),
          publicImg('projects/quarry-trucks-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/quarry-trucks-desktop-third.jpg'),
          publicImg('projects/quarry-trucks-desktop-third@2x.jpg'),
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
          publicImg('projects/service-packages@2x.jpg'),
          publicImg('projects/service-packages-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/service-packages-desktop-second.jpg'),
          publicImg('projects/service-packages-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/service-packages-desktop-third.jpg'),
          publicImg('projects/service-packages-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/service-packages-mobile-first.jpg'),
          publicImg('projects/service-packages-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/service-packages-mobile-second.jpg'),
          publicImg('projects/service-packages-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/service-packages-mobile-third.jpg'),
          publicImg('projects/service-packages-mobile-third@2x.jpg'),
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
        publicImg('logos/fcdc_sm.png'),
        publicImg('logos/fcdc.png'),
        publicImg('logos/fcdc@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/fcdc@2x.jpg'),
          publicImg('projects/fcdc-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/fcdc-desktop-second.jpg'),
          publicImg('projects/fcdc-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/fcdc-desktop-third.jpg'),
          publicImg('projects/fcdc-desktop-third@2x.jpg'),
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
        publicImg('logos/12-saffron_sm.png'),
        publicImg('logos/12-saffron.png'),
        publicImg('logos/12-saffron@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/12-saffron@2x.jpg'),
          publicImg('projects/12-saffron-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/12-saffron-desktop-second.jpg'),
          publicImg('projects/12-saffron-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/12-saffron-desktop-third.jpg'),
          publicImg('projects/12-saffron-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/12-saffron-mobile-first.jpg'),
          publicImg('projects/12-saffron-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/12-saffron-mobile-second.jpg'),
          publicImg('projects/12-saffron-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/12-saffron-mobile-third.jpg'),
          publicImg('projects/12-saffron-mobile-third@2x.jpg'),
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
        publicImg('logos/whip-around_sm.png'),
        publicImg('logos/whip-around.png'),
        publicImg('logos/whip-around@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/whip-around@2x.jpg'),
          publicImg('projects/whip-around-desktop@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/whip-around-mobile.jpg'),
          publicImg('projects/whip-around-mobile@2x.jpg'),
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
          publicImg('projects/lazyaz-dashboard@2x.jpg'),
          publicImg('projects/lazyaz-dashboard-desktop@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/lazyaz-dashboard-mobile.jpg'),
          publicImg('projects/lazyaz-dashboard-mobile@2x.jpg'),
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
          publicImg('projects/lazyaz@2x.jpg'),
          publicImg('projects/lazyaz-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/lazyaz-desktop-second.jpg'),
          publicImg('projects/lazyaz-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/lazyaz-desktop-third.jpg'),
          publicImg('projects/lazyaz-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/lazyaz-mobile-first@2x.jpg'),
          publicImg('projects/lazyaz-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/lazyaz-mobile-second.jpg'),
          publicImg('projects/lazyaz-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/lazyaz-mobile-third.jpg'),
          publicImg('projects/lazyaz-mobile-third@2x.jpg'),
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
          publicImg('projects/7glyphs@2x.jpg'),
          publicImg('projects/7glyphs-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-desktop-second.jpg'),
          publicImg('projects/7glyphs-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-desktop-third.jpg'),
          publicImg('projects/7glyphs-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          publicImg('projects/7glyphs-mobile-first.jpg'),
          publicImg('projects/7glyphs-mobile-first@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-mobile-second.jpg'),
          publicImg('projects/7glyphs-mobile-second@2x.jpg'),
        ],
        [
          publicImg('projects/7glyphs-mobile-third.jpg'),
          publicImg('projects/7glyphs-mobile-third@2x.jpg'),
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
    details: 'https://everpoint.ru/msp',
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
        publicImg('logos/msp_sm.png'),
        publicImg('logos/msp.png'),
        publicImg('logos/msp@2x.png'),
      ],
      desktop: [
        [
          publicImg('projects/msp@2x.jpg'),
          publicImg('projects/msp-desktop-first@2x.jpg'),
        ],
        [
          publicImg('projects/msp-desktop-second.jpg'),
          publicImg('projects/msp-desktop-second@2x.jpg'),
        ],
        [
          publicImg('projects/msp-desktop-third.jpg'),
          publicImg('projects/msp-desktop-third@2x.jpg'),
        ],
      ],
    },
  },
]

const PUBLIC_PROJECTS: IProject[] = projects.filter(
  (project: IProject) => !project.private
)

export const PRIVATE_PROJECTS: IProject[] = projects.filter(
  (project: IProject) => project.private
)

export const PRIVATE_AND_OTHER_COMPANY_PROJECTS_COUNT = {
  goRentals: 3,
  sevenGlyphs:
    2 +
    PRIVATE_PROJECTS.filter((project) => project.companyName === 'sevenGlyphs')
      .length,
  t1:
    2 +
    PRIVATE_PROJECTS.filter((project) => project.companyName === 't1').length,
}

export const PROJECTS_COUNT: number =
  PUBLIC_PROJECTS.length +
  Object.values(PRIVATE_AND_OTHER_COMPANY_PROJECTS_COUNT).reduce(
    (sum, count) => sum + count,
    0
  )

export default PUBLIC_PROJECTS
