import {importImg} from '@utils/helpers'
import {IProject} from '@utils/types'
import {COMPANY, FEATURE, TECHNOLOGY_TITLE} from './common'

const commonLogo = {
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
    name: 'madfitp',
    title: 'MadFit',
    types: ['admin', 'app'],
    companyName: 'sevenGlyphs',
    details: 'https://7glyphs.com/portfolio/projects/madfit',
    features: [
      {
        tKey: 'wholeDevelopment',
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
          importImg('projects/madfitp@2x.jpg'),
          importImg('projects/madfitp-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/madfitp-desktop-second.jpg'),
          importImg('projects/madfitp-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/madfitp-desktop-third.jpg'),
          importImg('projects/madfitp-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/madfitp-desktop-fourth.jpg'),
          importImg('projects/madfitp-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/madfitp-desktop-fifth.jpg'),
          importImg('projects/madfitp-desktop-fifth@2x.jpg'),
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
        tKey: 'scratchSupportDevelopment',
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
        importImg('logos/vibe_sm.png'),
        importImg('logos/vibe.png'),
        importImg('logos/vibe@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/vibe@2x.jpg'),
          importImg('projects/vibe-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/vibe-desktop-second.jpg'),
          importImg('projects/vibe-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/vibe-desktop-third.jpg'),
          importImg('projects/vibe-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/vibe-desktop-fourth.jpg'),
          importImg('projects/vibe-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/vibe-desktop-fifth.jpg'),
          importImg('projects/vibe-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/vibe-mobile-first.jpg'),
          importImg('projects/vibe-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/vibe-mobile-second.jpg'),
          importImg('projects/vibe-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/vibe-mobile-third.jpg'),
          importImg('projects/vibe-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/vibe-mobile-fourth.jpg'),
          importImg('projects/vibe-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/vibe-mobile-fifth.jpg'),
          importImg('projects/vibe-mobile-fifth@2x.jpg'),
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
        importImg('logos/t1_sm.png'),
        importImg('logos/t1.png'),
        importImg('logos/t1@2x.png'),
      ],
      mobile: [
        [
          importImg('projects/t1online-first.jpg'),
          importImg('projects/t1online-first@2x.jpg'),
        ],
        [
          importImg('projects/t1online-second.jpg'),
          importImg('projects/t1online-second@2x.jpg'),
        ],
        [
          importImg('projects/t1online-third.jpg'),
          importImg('projects/t1online-third@2x.jpg'),
        ],
        [
          importImg('projects/t1online-fourth.jpg'),
          importImg('projects/t1online-fourth@2x.jpg'),
        ],
        [
          importImg('projects/t1online-fifth.jpg'),
          importImg('projects/t1online-fifth@2x.jpg'),
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
          importImg('projects/ninjal@2x.jpg'),
          importImg('projects/ninjal-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/ninjal-desktop-second.jpg'),
          importImg('projects/ninjal-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/ninjal-desktop-third.jpg'),
          importImg('projects/ninjal-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/ninjal-desktop-fourth.jpg'),
          importImg('projects/ninjal-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/ninjal-desktop-fifth.jpg'),
          importImg('projects/ninjal-desktop-fifth@2x.jpg'),
        ],
        [
          importImg('projects/ninjal-desktop-sixth.jpg'),
          importImg('projects/ninjal-desktop-sixth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/ninjal-mobile-first.jpg'),
          importImg('projects/ninjal-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/ninjal-mobile-second.jpg'),
          importImg('projects/ninjal-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/ninjal-mobile-third.jpg'),
          importImg('projects/ninjal-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/ninjal-mobile-fourth.jpg'),
          importImg('projects/ninjal-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/ninjal-mobile-fifth.jpg'),
          importImg('projects/ninjal-mobile-fifth@2x.jpg'),
        ],
        [
          importImg('projects/ninjal-mobile-sixth.jpg'),
          importImg('projects/ninjal-mobile-sixth@2x.jpg'),
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
          importImg('projects/ninja@2x.jpg'),
          importImg('projects/ninja-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/ninja-desktop-second.jpg'),
          importImg('projects/ninja-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/ninja-desktop-third.jpg'),
          importImg('projects/ninja-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/ninja-desktop-fourth.jpg'),
          importImg('projects/ninja-desktop-fourth@2x.jpg'),
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
        importImg('logos/ally_sm.png'),
        importImg('logos/ally.png'),
        importImg('logos/ally@2x.png'),
      ],
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
          importImg('projects/presentmel@2x.jpg'),
          importImg('projects/presentmel-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/presentmel-desktop-second.jpg'),
          importImg('projects/presentmel-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/presentmel-desktop-third.jpg'),
          importImg('projects/presentmel-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/presentmel-desktop-fourth.jpg'),
          importImg('projects/presentmel-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/presentmel-mobile-first.jpg'),
          importImg('projects/presentmel-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/presentmel-mobile-second.jpg'),
          importImg('projects/presentmel-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/presentmel-mobile-third.jpg'),
          importImg('projects/presentmel-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/presentmel-mobile-fourth.jpg'),
          importImg('projects/presentmel-mobile-fourth@2x.jpg'),
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
          importImg('projects/presentmep@2x.jpg'),
          importImg('projects/presentmep-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/presentmep-desktop-second.jpg'),
          importImg('projects/presentmep-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/presentmep-desktop-third.jpg'),
          importImg('projects/presentmep-desktop-third@2x.jpg'),
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
          importImg('projects/presentme@2x.jpg'),
          importImg('projects/presentme-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/presentme-desktop-second.jpg'),
          importImg('projects/presentme-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/presentme-desktop-third.jpg'),
          importImg('projects/presentme-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/presentme-desktop-fourth.jpg'),
          importImg('projects/presentme-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/presentme-desktop-fifth.jpg'),
          importImg('projects/presentme-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/presentme-mobile-first.jpg'),
          importImg('projects/presentme-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/presentme-mobile-second.jpg'),
          importImg('projects/presentme-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/presentme-mobile-third.jpg'),
          importImg('projects/presentme-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/presentme-mobile-fourth.jpg'),
          importImg('projects/presentme-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/presentme-mobile-fifth.jpg'),
          importImg('projects/presentme-mobile-fifth@2x.jpg'),
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
        importImg('logos/just-hatched_sm.png'),
        importImg('logos/just-hatched.png'),
        importImg('logos/just-hatched@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/hatched@2x.jpg'),
          importImg('projects/hatched-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/hatched-desktop-second.jpg'),
          importImg('projects/hatched-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/hatched-desktop-third.jpg'),
          importImg('projects/hatched-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/hatched-desktop-fourth.jpg'),
          importImg('projects/hatched-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/hatched-mobile-first.jpg'),
          importImg('projects/hatched-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/hatched-mobile-second.jpg'),
          importImg('projects/hatched-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/hatched-mobile-third.jpg'),
          importImg('projects/hatched-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/hatched-mobile-fourth.jpg'),
          importImg('projects/hatched-mobile-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'uls',
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
        importImg('logos/proximal-coffee_sm.png'),
        importImg('logos/proximal-coffee.png'),
        importImg('logos/proximal-coffee@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/proximal@2x.jpg'),
          importImg('projects/proximal-desktop-first@2x.jpg'),
        ],

        [
          importImg('projects/proximal-desktop-second.jpg'),
          importImg('projects/proximal-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/proximal-desktop-third.jpg'),
          importImg('projects/proximal-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/proximal-mobile-first.jpg'),
          importImg('projects/proximal-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/proximal-mobile-second.jpg'),
          importImg('projects/proximal-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/proximal-mobile-third.jpg'),
          importImg('projects/proximal-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    private: true,
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
          importImg('projects/lite@2x.jpg'),
          importImg('projects/lite-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/lite-desktop-second.jpg'),
          importImg('projects/lite-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/lite-desktop-third.jpg'),
          importImg('projects/lite-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/lite-desktop-fourth.jpg'),
          importImg('projects/lite-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/lite-mobile-first.jpg'),
          importImg('projects/lite-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/lite-mobile-second.jpg'),
          importImg('projects/lite-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/lite-mobile-third.jpg'),
          importImg('projects/lite-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/lite-mobile-fourth.jpg'),
          importImg('projects/lite-mobile-fourth@2x.jpg'),
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
          importImg('projects/melissa@2x.jpg'),
          importImg('projects/melissa-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/melissa-desktop-second.jpg'),
          importImg('projects/melissa-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/melissa-desktop-third.jpg'),
          importImg('projects/melissa-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/melissa-mobile-first.jpg'),
          importImg('projects/melissa-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/melissa-mobile-second.jpg'),
          importImg('projects/melissa-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/melissa-mobile-third.jpg'),
          importImg('projects/melissa-mobile-third@2x.jpg'),
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
          importImg('projects/foodp@2x.jpg'),
          importImg('projects/foodp-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/foodp-desktop-second.jpg'),
          importImg('projects/foodp-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/foodp-desktop-third.jpg'),
          importImg('projects/foodp-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/foodp-desktop-fourth.jpg'),
          importImg('projects/foodp-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/foodp-desktop-fifth.jpg'),
          importImg('projects/foodp-desktop-fifth@2x.jpg'),
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
          importImg('projects/food@2x.jpg'),
          importImg('projects/food-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/food-desktop-second.jpg'),
          importImg('projects/food-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/food-desktop-third.jpg'),
          importImg('projects/food-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/food-desktop-fourth.jpg'),
          importImg('projects/food-desktop-fourth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/food-mobile-first.jpg'),
          importImg('projects/food-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/food-mobile-second.jpg'),
          importImg('projects/food-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/food-mobile-third.jpg'),
          importImg('projects/food-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/food-mobile-fourth.jpg'),
          importImg('projects/food-mobile-fourth@2x.jpg'),
        ],
      ],
    },
  },
  {
    name: 'sds',
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
          importImg('projects/strong@2x.jpg'),
          importImg('projects/strong-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/strong-desktop-second.jpg'),
          importImg('projects/strong-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/strong-desktop-third.jpg'),
          importImg('projects/strong-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/strong-desktop-fourth.jpg'),
          importImg('projects/strong-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/strong-desktop-fifth.jpg'),
          importImg('projects/strong-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/strong-mobile-first.jpg'),
          importImg('projects/strong-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/strong-mobile-second.jpg'),
          importImg('projects/strong-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/strong-mobile-third.jpg'),
          importImg('projects/strong-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/strong-mobile-fourth.jpg'),
          importImg('projects/strong-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/strong-mobile-fifth.jpg'),
          importImg('projects/strong-mobile-fifth@2x.jpg'),
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
          importImg('projects/glyphs2@2x.jpg'),
          importImg('projects/glyphs2-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/glyphs2-desktop-second.jpg'),
          importImg('projects/glyphs2-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/glyphs2-desktop-third.jpg'),
          importImg('projects/glyphs2-desktop-third@2x.jpg'),
        ],
        [
          importImg('projects/glyphs2-desktop-fourth.jpg'),
          importImg('projects/glyphs2-desktop-fourth@2x.jpg'),
        ],
        [
          importImg('projects/glyphs2-desktop-fifth.jpg'),
          importImg('projects/glyphs2-desktop-fifth@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/glyphs2-mobile-first.jpg'),
          importImg('projects/glyphs2-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/glyphs2-mobile-second.jpg'),
          importImg('projects/glyphs2-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/glyphs2-mobile-third.jpg'),
          importImg('projects/glyphs2-mobile-third@2x.jpg'),
        ],
        [
          importImg('projects/glyphs2-mobile-fourth.jpg'),
          importImg('projects/glyphs2-mobile-fourth@2x.jpg'),
        ],
        [
          importImg('projects/glyphs2-mobile-fifth.jpg'),
          importImg('projects/glyphs2-mobile-fifth@2x.jpg'),
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
        tKey: 'scratchSupportDevelopment',
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
        importImg('logos/rogue-travel_sm.png'),
        importImg('logos/rogue-travel.png'),
        importImg('logos/rogue-travel@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/rogue@2x.jpg'),
          importImg('projects/rogue-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/rogue-desktop-second.jpg'),
          importImg('projects/rogue-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/rogue-desktop-third.jpg'),
          importImg('projects/rogue-desktop-third@2x.jpg'),
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
        importImg('logos/querry-trucks_sm.png'),
        importImg('logos/querry-trucks.png'),
        importImg('logos/querry-trucks@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/trucks@2x.jpg'),
          importImg('projects/trucks-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/trucks-desktop-second.jpg'),
          importImg('projects/trucks-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/trucks-desktop-third.jpg'),
          importImg('projects/trucks-desktop-third@2x.jpg'),
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
          importImg('projects/services@2x.jpg'),
          importImg('projects/services-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/services-desktop-second.jpg'),
          importImg('projects/services-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/services-desktop-third.jpg'),
          importImg('projects/services-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/services-mobile-first.jpg'),
          importImg('projects/services-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/services-mobile-second.jpg'),
          importImg('projects/services-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/services-mobile-third.jpg'),
          importImg('projects/services-mobile-third@2x.jpg'),
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
        importImg('logos/12saffron_sm.png'),
        importImg('logos/12saffron.png'),
        importImg('logos/12saffron@2x.png'),
      ],
      desktop: [
        [
          importImg('projects/saffron@2x.jpg'),
          importImg('projects/saffron-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/saffron-desktop-second.jpg'),
          importImg('projects/saffron-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/saffron-desktop-third.jpg'),
          importImg('projects/saffron-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/saffron-mobile-first.jpg'),
          importImg('projects/saffron-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/saffron-mobile-second.jpg'),
          importImg('projects/saffron-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/saffron-mobile-third.jpg'),
          importImg('projects/saffron-mobile-third@2x.jpg'),
        ],
      ],
    },
  },
  {
    private: true,
    name: 'whip',
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
          importImg('projects/whip@2x.jpg'),
          importImg('projects/whip-desktop@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/whip-mobile.jpg'),
          importImg('projects/whip-mobile@2x.jpg'),
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
          importImg('projects/lazyazd@2x.jpg'),
          importImg('projects/lazyazd-desktop@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/lazyazd-mobile.jpg'),
          importImg('projects/lazyazd-mobile@2x.jpg'),
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
          importImg('projects/glyphs@2x.jpg'),
          importImg('projects/glyphs-desktop-first@2x.jpg'),
        ],
        [
          importImg('projects/glyphs-desktop-second.jpg'),
          importImg('projects/glyphs-desktop-second@2x.jpg'),
        ],
        [
          importImg('projects/glyphs-desktop-third.jpg'),
          importImg('projects/glyphs-desktop-third@2x.jpg'),
        ],
      ],
      mobile: [
        [
          importImg('projects/glyphs-mobile-first.jpg'),
          importImg('projects/glyphs-mobile-first@2x.jpg'),
        ],
        [
          importImg('projects/glyphs-mobile-second.jpg'),
          importImg('projects/glyphs-mobile-second@2x.jpg'),
        ],
        [
          importImg('projects/glyphs-mobile-third.jpg'),
          importImg('projects/glyphs-mobile-third@2x.jpg'),
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
