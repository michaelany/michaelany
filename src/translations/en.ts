const common = {
  title: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    portfolio: 'Portfolio',
    blog: 'Blog',
    contact: 'Contact',
    language: 'English',
  },
  occupation: {
    lead: 'Lead Frontend Engineer',
    teamLead: 'Frontend Team Lead',
    senior: 'Senior Frontend Developer',
    middle: 'Frontend Developer',
    junior: 'Junior Frontend Developer',
    consult: 'Frontend Development Consultant',
    support: 'Technical Support Engineer',
  },
  portfolio: {
    scratchDevelopment: 'Development from scratch',
  },
  projects: {
    ally: 'Landing page of the mobile application for the interactive {{0}} figures',
    cmsFit: 'Content management system for the mobile fitness application',
  },
}

const EN = {
  title: common.title,
  month: {
    january: 'january',
    february: 'february',
    march: 'march',
    april: 'april',
    may: 'may',
    june: 'june',
    july: 'july',
    august: 'august',
    september: 'september',
    october: 'october',
    november: 'november',
    december: 'december',
  },
  home: {
    hi: {
      morning: 'Good morning',
      afternoon: 'Good afternoon',
      evening: 'Good evening',
      night: 'Good night',
    },
    iam: "I'm",
    occupation: {
      part1: 'frontend',
      part2: 'engineer',
      part3: 'YouTuber',
    },
    subtitle: 'Banner',
  },
  about: {
    text: `I'm a software engineer with 10 years of experience in <0>frontend development</0>. I build <1>projects</1> of different sizes and complexity, bringing <0>{{0}}</0> ideas to life. I run a <2>${common.title.blog}</2> on <3>{{2}}</3>. Based in Auckland, New Zealand`,
    feature: {
      projects: {
        label: '{{0}} commercial projects',
        text: `My portfolio includes commercial projects of different sizes: from one-page landing pages to large web applications. Most of them are available in <0>${common.title.portfolio}</0>`,
      },
      position: {
        label: 'Lead Frontend Engineer',
        text: `I build projects from scratch, write business logic, create layouts, test, optimize and maintain code. I plan tasks, do code reviews and teach. More in <0>${common.title.skills}</0>`,
      },
      experience: {
        label: '{{0}} years of experience',
        text: `I built my first website at age {{0}}. I went from junior markup developer to team lead. I work for a New Zealand company and consult on frontend development. More in <0>${common.title.experience}</0>`,
      },
      organizing: {
        label: 'Organized and independent',
        text: 'I have built most projects on my own. I like being responsible for the entire client side: from discussing the concept to implementation, launch and production support',
      },
      programming: {
        label: 'Love to code',
        text: "Frontend is my main hobby. I experiment with {{0}}, {{1}} and AI tools. I'm interested in interface design, language models and cross-platform development",
      },
      blogger: {
        label: '{{0}} channel creator',
        text: `I run a channel on <1>{{0}}</1>. I talk about my journey in programming and life, and share experience and knowledge. I enjoy the whole process of making a video: from idea and script to editing and publishing. More in the <0>${common.title.blog}</0>`,
      },
      growing: {
        label: 'Constantly learning',
        text: 'I keep sharpening the saw: I study new technologies, documentation, articles, courses, videos, books and talks. I look for methods and tools that help me work more effectively',
      },
      perfect: {
        label: 'Prone to perfectionism',
        text: 'Quality is my main standard. I pay attention to every detail of a project, while experience and deadlines help me balance speed and the final result. I value consistency, a systematic approach, thoughtful structure and order in everything',
      },
      education: {
        label: 'Two higher education degrees',
        text: 'I graduated from Moscow State University of Instrument Engineering and Computer Science and the Russian State Institute of Cinematography. My second degree helped me improve my soft skills',
      },
      actor: {
        label: 'Former actor',
        text: 'I used to act in movies, TV series and commercials, host events, work as an animator and perform in a student theater. There was a period when I wrote {{0}} at the office during the day and performed on stage in a play in the evening. More in the <0>video</0>',
      },
      geek: {
        label: 'Tech geek',
        text: "I like technology, games, anime and {{0}} culture. I love {{1}}, especially the {{2}} and {{3}} games, and I'm a huge fan of Arcane. I'm also interested in gadgets and hardware. I built my ideal <0>setup</0>",
      },
      resident: {
        label: 'New Zealand resident',
        text: 'I moved to New Zealand {{0}} years ago. I received residency as a {{1}}. Now I live in the country I always dreamed of',
      },
      sport: {
        label: 'Into sports',
        text: 'Physical activity is especially important for a developer, so I exercise every day. I love calisthenics, fitness and hiking. When all tasks are done and the ocean has a good surf forecast, you can find me on a board among the waves',
      },
      travel: {
        label: 'Love to travel',
        text: 'I have visited <0>{{0}} countries</0>. Once I climbed to the top of Mount Fuji, had a pint at the Green Dragon Inn in Hobbiton and survived an encounter with a wild bear at Dyatlov Pass',
      },
      love: {
        label: 'Happy husband',
        text: '<0>She</0> is my main source of inspiration and my best friend. We have been together for {{0}} years. Once I developed a progressive web application to propose to her',
      },
      coffee: {
        label: 'Coffee lover',
        text: '"A programmer is a person who turns coffee into code." I start my workday with a cup of fresh coffee. I like grinding whole beans and making flat whites on my {{0}}',
      },
    },
    country: {
      abkhazia: 'Abkhazia',
      albania: 'Albania',
      australia: 'Australia',
      belarus: 'Belarus',
      bosniaHerzegovina: 'Bosnia & Herzegovina',
      cyprus: 'Cyprus',
      czechRepublic: 'Czech Republic',
      egypt: 'Egypt',
      france: 'France',
      germany: 'Germany',
      greece: 'Greece',
      italy: 'Italy',
      japan: 'Japan',
      latvia: 'Latvia',
      maldives: 'Maldives',
      montenegro: 'Montenegro',
      newZealand: 'New Zealand',
      russianFederation: 'Russian Federation',
      serbia: 'Serbia',
      spain: 'Spain',
      sriLanka: 'Sri Lanka',
      thailand: 'Thailand',
      turkey: 'Turkey',
      ukraine: 'Ukraine',
      vaticanCity: 'Vatican City',
    },
    subtitle: 'Avatar and social media',
  },
  skills: {
    text: 'I craft <0>applications</0>, <1>multi-page websites</1>, <2>landing pages</2> & <3>admin panels</3>. My favourite stack is <4>{{0}}</4> + <4>{{1}}</4> + <4>{{2}}</4> + <4>{{3}}</4>. I edit <5>{{4}} videos</5> in {{5}}',
    feature: {
      interface: {
        label: 'Creating reliable & well-functioning interfaces',
        text: 'I implement a system of interface elements with convenient interaction and well-thought-out business logic. I care about cross-browser compatibility, security and handle possible errors',
      },
      performance: {
        label: 'Writing modern & productive code',
        text: 'I use {{0}} standards, {{1}}, {{2}}, {{3}}... Optimizing heavy computations. I avoid unnecessary operations and memory leaks. Applying productivity techniques',
      },
      efficient: {
        label: 'Choosing a simple way to solve the problem',
        text: 'I try to find a clear and optimal solution for any task. I know when to use a specific method, pattern, library or tool',
      },
      markup: {
        label: 'Creating semantic, cross-browser & {{0}} markup',
        text: 'I make pixel-by-pixel layouts. I use semantic tags and don\'t suffer from "divatosis". I test in all modern browsers, care about accessibility and also build HTML emails',
      },
      patterns: {
        label: 'Using a lot of patterns & techniques',
        text: 'Memoization, virtualization, lazy loading, optimistic update, hydration, destructuring, decorator, currying, delegation, recursion, module, observer, proxy, mixin, throttling, debounce..',
      },
      requests: {
        label: 'Handling server requests',
        text: 'Deduplication, interceptor, caching, prefetching, aborting, retrying, authentication, mutation, pagination, infinite scrolling, progress tracking, offline, parallel and dependent queries..',
      },
      modules: {
        label: 'Building a modular & optimal project architecture',
        text: 'I avoid over-nesting, follow the principle of separation of concerns, {{0}} and {{1}}. Each module, class or component is responsible for one functionality type. Configuring the project build system',
      },
      tools: {
        label: 'Using modern frameworks, libraries, and tools',
        text: 'I regularly follow the technology updates and in constant search for new ones. In addition to <0>general</0> I use many additional libraries and tools',
      },
      responsive: {
        label: 'Implementing responsive interface & animations',
        text: 'I use {{0}} approaches, test the interface at every pixel from the minimum to the maximum screen width, create productive {{1}}, {{2}} and {{3}} animations',
      },
      code: {
        label: 'Following a consistent code style',
        text: 'I write self-documenting and declarative code, explore popular style guides practices, use {{0}} and {{1}}. Human-readable code is more important than the fast one',
      },
      test: {
        label: 'Optimizing, testing & refactoring',
        text: 'I check project perfomance in various browsers and devices. I measure and speed up the loading of resources. Minifing and optimizing files, images. Writing unit, functional, and end-to-end tests. Refactoring code',
      },
      tasks: {
        label: 'Planing & decomposing tasks',
        text: 'I plan the backlog, group, decompose and evaluate tasks. I use {{0}} and {{1}} methodologies. Using task managers and my own planning system',
      },
      mentor: {
        label: 'Making code reviews & teaching',
        text: "I'm mentoring, giving feedback on pull requests and sharing my experience with colleagues. Developed a corporate internship program. I have experience in recruitment",
      },
      blog: {
        label: 'Creating {{0}} videos',
        text: 'I write and edit scripts, plan shoots, film, edit, make color correction, process audio, create thumbnails and publish videos',
      },
    },
    subtitle: 'Technologies',
    technologyGroup: {
      logic: 'Logic',
      markup: 'Markup',
      styles: 'Styles',
      tools: 'Utilities',
      misc: 'Miscellaneous',
      software: 'Software',
      hardware: 'Hardware',
    },
  },
  experience: {
    text: `<0>${common.occupation.lead}</0> at <1>{{0}}</1>. I've been professionally engaged in frontend development for {{1}} years. I also share my journey in programming & life, as well as my experience & knowledge in my <2>${common.title.blog}</2>`,
    projects: 'Projects',
    tools: 'Base tools',
    duties: 'Key duties',
    achievements: 'Achievements',
    current: 'Current position',
    occupation: common.occupation,
    job: {
      duty: {
        logicApps: 'Developing applications business logic',
        logicAppsSites: 'Developing applications and websites business logic',
        logicModules: 'Developing application components',
        structureApps: 'Creating applications architecture',
        structureProjects: 'Creating projects architecture',
        responsive: 'Creating cross-browsing and responsive markup',
        rest: 'Working with {{0}}',
        restSocket: 'Working with {{0}} and {{1}}',
        refactor: 'Refactoring and maintaining the code',
        scratch: 'Developing projects from scratch',
        tests: 'Writing unit, functional, and end-to-end tests',
        support: 'Supporting projects',
        tasks: 'Decomposing and evaluating tasks',
        tasksTeam: 'Planning, decomposing and evaluating team tasks',
        manage: 'Team management and development',
        review: 'Conducting code reviews and interviews',
        serviceDesk: 'Registering and processing requests in {{0}}',
        hardwareFix: 'Solving software and hardware issues',
        hardwareInstall: 'Installing, configuring software and hardware',
        consult: 'Advising employees on technical issues',
      },
      achievement: {
        resultCorporate:
          'Successfully developed several large-scale applications for the major clients',
        resultForeign:
          'Successfully developed various different projects from scratch',
        resultApp:
          'Successfully developed many components and sections for a complex application',
        pathLead: 'Passed the way from an ordinary developer to a team lead',
        pathFront: 'Grew from junior to a middle frontend developer',
        internship: 'Created a corporate internship program',
        mentor: 'Trained several juniors',
        mobile:
          'Developed a corporate mobile application on {{0}} and independently released it to the app stores',
        interview: 'Conducted many interviews and hired a dozen developers',
        technologies:
          'Studied and applied in practice a lot technologies and tools',
        technologiesBase: 'Pumped the {{0}}, {{1}} and {{2}}',
        speed:
          'Set a personal record for the speed of completion of a project - {{0}} day',
        independent: 'Reached a high level of autonomy and organization',
        visa: 'Relocated to New Zealand on a work visa by the company',
        work: 'Improved teamwork skills',
        orders: 'Processed thousands of requests',
        hardware: 'Gained extensive experience with software and hardware',
        softSkills: 'Improved soft skills',
        architecture: 'Created my own ideal architecture for web applications',
        animations:
          'Developed several landing pages with advanced and beautiful animations',
        interfaces:
          'Created a large number of multifunctional interfaces with custom charts, analytics, tables, forms, and dashboards',
        businessLogic:
          'Developed a large-scale financial application with extensive business logic and complex mathematical calculations and formulas on the client side',
      },
      feature: {
        busyFull: 'full-time',
        busyPart: 'part-time',
        remote: 'remotely',
        office: 'in the office',
        hybrid: 'hybrid work',
        moscow: 'Moscow, Russia',
        auckland: 'Auckland, New Zealand',
      },
    },
    subtitle: 'Steps',
    next: 'Next',
    back: 'Back',
    refresh: 'Reset',
    continue: 'To be continued',
    stepper: {
      step1:
        'I created my first multi-page website at the age of {{0}}. After finishing school, I enrolled in the "Moscow State University of Instrument Engineering and Computer Science". Alongside my studies at the university, I got a job as a <0>technical support engineer</0> at the {{1}} company',
      step2: `Worked as a <0>${common.occupation.support}</0> in the {{0}} company`,
      step3:
        'I graduated from university. Expanded my horizons in other areas of activity. I decided to become an actor and enrolled in the "Russian State University of Cinematography"',
      step4:
        'In parallel with my study at the university, I created pet projects and learned programming',
      step5: `Passed the interview, completed the test tasks and I got a job as a <0>${common.occupation.junior}</0> in the {{0}} company`,
      step6: `Worked as a <0>${common.occupation.junior}</0> in the {{0}}`,
      step7: `I was promoted to a <0>${common.occupation.middle}</0> in the {{0}} company`,
      step8: `Worked as a <0>${common.occupation.middle}</0> in the {{0}}. In my spare time I did a commercial project for the {{1}} company`,
      step9: `I was invited to the company {{0}} for the position of a <0>${common.occupation.middle}</0>. Made a decision to move from {{1}} to {{2}}`,
      step10: `Worked as a <0>${common.occupation.middle}</0> in the {{0}}. Graduated from VGIK and obtained a second higher education.`,
      step11: `Agreed with the {{0}} to continue working on projects in part-time mode. Received several offers for the position of a <0>${common.occupation.middle}</0>, chose the {{1}} company`,
      step12: `Worked as a <0>${common.occupation.middle}</0> in the {{0}}`,
      step13: `Received a promotion to the <0>${common.occupation.senior}</0> in the {{0}}`,
      step14: `Worked as a <0>${common.occupation.senior}</0> in the {{0}}`,
      step15: `Expanded my area of the responsibility and I was promoted to <0>${common.occupation.teamLead}</0> in the {{0}} company`,
      step16: `Worked as a <0>${common.occupation.teamLead}</0> in the {{0}}. Continued to collaborate on projects with the {{1}}`,
      step17:
        'Switched to mobile development. Developed a cross-platform corporate mobile application from scratch and released it in {{0}} and {{1}} stores. Recruited a team for the further development of the application',
      step18: `Received an offer from the {{0}} for the position of <0>${common.occupation.lead}</0> with the possibility of relocation to New Zealand. Completed all tasks, handed over projects to successor at {{1}}. Accepted the offer from {{0}}`,
      step19: `Worked as a <0>${common.occupation.lead}</0> in the New Zealand company {{0}}. I also provided frontend development consultations`,
      step20:
        'I moved to Montenegro. Collected documents for a work visa to New Zealand from the company {{0}}. Launched my <0>{{1}} channel</0>. Obtained a work visa',
      step21:
        'I moved to New Zealand on a work visa from the {{0}} company. Worked, settled in, built relationships with hobbits and alpacas',
      step22: `I agreed with {{0}} on a gradual search for a new job, as the company began shutting down its core business. I passed an interview, completed a technical assessment and received an offer from {{1}} for the position of <0>${common.occupation.lead}</0>. I was waiting for an update on my work visa while continuing to collaborate with {{2}} on projects`,
      step23: `I received an updated work visa and started as a <0>${common.occupation.lead}</0> at {{0}}`,
    },
  },
  portfolio: {
    limit:
      "Here are some of the projects I've worked on that have no {{0}}, which I can showcase {{1}}",
    developed: 'Developed in',
    filter: {
      all: 'All',
      app: 'Application',
      site: 'Website',
      landing: 'Landing page',
      admin: 'Admin panel',
    },
    mobileApp: 'Mobile application',
    feature: {
      wholeDevelopment: `${common.portfolio.scratchDevelopment}, project improvement & support`,
      scratchSupportDevelopment: `${common.portfolio.scratchDevelopment}, project support`,
      scratchDevelopment: common.portfolio.scratchDevelopment,
      growthSupportDevelopment: 'Project improvement & support',
      markupBusinessLogic: 'Markup & development of a part of business logic',
      jqueryReact: 'Rewriting the codebase from {{0}} to {{1}}',
      leadWork: 'Frontend Development team lead',
      teamWork: 'Development team member',
      soloWork: 'Standalone development',
      responsive: 'Responsive interface',
      emails: 'email markup',
      design: 'prototyping & design',
      animations: 'Animations',
      businessLogic: 'Extensive business logic',
      pwa: 'Progressive Web Application',
      firstProject: 'First commercial project',
      firstScratchProject:
        'The first commercial project developed from scratch',
      spa: 'Turned the site into a Single Page Application',
      tryOne: `Worked with {{0}}`,
      tryTwo: `Worked with {{0}}, & {{1}}`,
      tryThree: `Worked with {{0}}, {{1}} & {{2}}`,
      tryOneGraph: `Worked with {{0}} & charts`,
      sellHouse: 'House sold successfully',
      formsTables: 'Many forms & tables',
      darkTheme: 'Dark theme',
      dynamicFormsRouting: 'Dynamic forms, own routing',
      mobileDevelopment: 'Released the application to {{0}} & {{1}}',
      fastDevelopment: 'Fast development',
      newArchitecture: 'Try new module project architecture',
    },
    project: {
      'ally-2': {
        text: common.projects.ally,
      },
      'strongher-cms': {
        text: common.projects.cmsFit,
      },
      pridefit: {
        text: 'Subscription landing page for the mobile fitness application',
      },
      'ally-cms': {
        text: 'Content management system for the mobile application to manage {{0}} figures',
      },
      'pridefit-cms': {
        text: common.projects.cmsFit,
      },
      madfit: {
        text: 'Landing page & subscription service for the mobile fitness application',
      },
      'madfit-cms': {
        text: common.projects.cmsFit,
      },
      'vibe-media': {
        text: 'Landing page of the digital marketing agency',
      },
      tradease: {
        text: 'Building order management website',
      },
      't1-online': {
        title: 'T1 Online',
        text: 'Corporate mobile application for company employees',
      },
      'road-ninja-landing': {
        text: 'Landing page for the truck drivers hire service',
      },
      'road-ninja': {
        text: 'Truck drivers hire service',
      },
      celebration: {
        text: "New Year's mini application for congratulating company employees",
      },
      ally: {
        text: common.projects.ally,
      },
      'present-me-landing': {
        text: 'Landing page for the jobseeker profile creation service',
      },
      'present-me-portal': {
        text: 'Admin panel of the job seeker creating profile service',
      },
      'present-me': {
        text: 'Service for creating a job seeker profile',
      },
      dropdrone: {
        text: 'Agricultural startup website',
      },
      'just-hatched': {
        text: 'Landing page for the mobile application tracker for newborn babies',
      },
      uls: {
        text: 'Single user account of the company',
      },
      'proximal-coffee': {
        text: 'Landing page for the coffee shop',
      },
      embp: {
        title: 'EMBP',
        text: 'Admin panel of the biometric platform for VTB Bank',
      },
      tmf: {
        text: 'Construction company website',
      },
      '7glyphs-lite': {
        text: 'Landing page for the digital agency service',
      },
      'melissa-chalmers': {
        text: 'Fitness blogger landing page',
      },
      foodprint: {
        text: 'Discount food ordering service in restaurants mobile application',
      },
      'foodprint-portal': {
        text: 'Portal of the discount food ordering service in restaurants',
      },
      'foodprint-landing': {
        text: 'Landing page of the service for ordering discount food in restaurants',
      },
      sds: {
        text: 'Enterprise service to work with the company document flow',
      },
      strongher: {
        text: 'Mobile fitness application website',
      },
      '7glyphs-2': {
        text: 'Home website of the digital agency',
      },
      'rogue-travel': {
        text: 'Flight & hotel group booking service',
      },
      'quarry-trucks': {
        text: 'Truck traffic monitoring service',
      },
      'service-packages': {
        text: 'Landing page for complex services of the digital agency',
      },
      fcdc: {
        text: 'Event management service admin panel',
      },
      '12-saffron': {
        text: 'Landing page for sale of the private home in New Zealand',
      },
      'whip-around': {
        text: 'Vehicle inspection service',
      },
      'lazyaz-dashboard': {
        text: 'Admin panel of the delivery service',
      },
      lazyaz: {
        text: 'Web platform for the delivery service',
      },
      '7glyphs': {
        text: 'Home site of the digital agency',
      },
      msp: {
        title: 'Business navigator MSP',
        text: 'Service for entrepreneurs who want to open or expand their business',
      },
    },
    subtitle: 'Screenshots',
    screenshot: 'Screenshot',
    mobile: 'mobile',
    screen: 'project screen',
  },
  blog: {
    description:
      "<0>Hi there! {{0}}</0><0>My name is Michael. I've been professionally engaged in frontend development for {{1}} years. I create projects of any complexity and bring UI/UX ideas to life. I went from junior coder to lead developer. Working at the New Zealand company {{2}}</0><0>In April 2023 I moved from Russia to New Zealand {{3}}</0><0>On this channel, I share my journey in programming and life, as well as my experience and knowledge. I hope it will be interesting and, perhaps, even a little useful {{4}}</0><0>Peace and love to everyone {{5}}",
    sort: {
      new: 'Latest',
      old: 'Oldest',
    },
    video: {
      'day-in-a-life-montenegro': {
        title:
          'A day in the life of a software engineer in Montenegro {{0}} Remote work',
        text: 'I will provide a detailed overview of my typical day in Montenegro and how I work remotely for a New Zealand-based company. I enjoy watching similar videos, so I decided to create my own',
      },
      'my-dreamdesk': {
        title: 'My dreamdesk {{0}} New no monitors setup',
        text: "I've finally fulfilled my dream - created a beautiful and convenient workspace. In this video, I'll provide a detailed explanation and showcase how it's set up, the devices I use, why I often work standing, and why I don't need a large monitor",
      },
      'day-in-a-life-new-zealand': {
        title:
          'A day in the life of a software engineer in New Zealand {{0}} POV',
        text: "I was gifted the {{0}}, and someday I'll be filming myself surfing the waves of the Pacific Ocean in New Zealand. But for now, I invite you to spend a typical day with me in this distant and beautiful country through my eyes, that is, from a first-person point of view",
      },
      'how-i-became-software-engineer': {
        title:
          'How I became a software engineer at 27 {{0}} From actor to developer',
        text: "In this video, I'll share the story of how I made a drastic career change at the age of 27 and became a front-end developer. I'll talk about myself, the challenges I faced, where and how I learned, what helped me along the way, and how I found my first job in {{0}}",
      },
    },
  },
  contact: {
    text: {
      part1: 'Do you need my <0>help</0>',
      part2: 'Have a <0>suggestion</0> for me',
      part3: 'Send me a <0>message</0> to <1>{{0}}</1> or use the form',
    },
    marker: 'I live here now',
    form: {
      name: 'Name',
      message: 'Message',
      send: 'Send',
    },
    success: {
      thank: 'Message sent. Thank you',
      sent: 'Message sent',
      callback: 'I will contact you shortly',
      ok: 'Good',
    },
  },
  copyright: {
    crafted: 'Crafted by',
    me: 'me',
    with: 'with',
  },
  other: {
    more: 'Details',
    see: 'See it live',
    error: 'Server connection error',
  },
  message: {
    stopWar: 'My relatives live in Russia and Ukraine. <0>NO WAR</0>',
    newYear: '<0>Merry Christmas and Happy New Year!</0>',
    halloween: 'Happy <0>Halloween</0>',
  },
}

export default EN
