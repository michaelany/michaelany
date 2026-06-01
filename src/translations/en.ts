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
      part3: 'creator',
    },
    subtitle: 'Banner',
  },
  about: {
    text: `I'm a <0>software engineer</0> with 10 years of experience in <0>frontend development</0>. I build <1>projects</1> of different sizes && complexity, bringing <0>{{0}}</0> ideas to life. I run a <2>${common.title.blog}</2> on <3>{{2}}</3>. Based in Auckland, New Zealand`,
    feature: {
      projects: {
        label: '{{0}} commercial projects',
        text: `My portfolio includes commercial projects of different sizes: from one-page landing pages to large web applications. Most of them are available in <0>${common.title.portfolio}</0>`,
      },
      position: {
        label: 'Lead Frontend Engineer',
        text: `I build projects from scratch, design architecture, write business logic, create layouts, test, optimize and maintain code. I plan tasks, do code reviews and teach. More in <0>${common.title.skills}</0>`,
      },
      experience: {
        label: '{{0}} years of experience',
        text: `I built my first website at age {{0}}. I went from junior developer to team lead. I work for a New Zealand company and consult on frontend development. More in <0>${common.title.experience}</0>`,
      },
      organizing: {
        label: 'Organized and independent',
        text: 'I have built most projects on my own. I like being responsible for the entire client side: from discussing the concept, research and prototyping to implementation, launch and production support',
      },
      programming: {
        label: 'Love to code',
        text: "Frontend is my main hobby. I experiment with {{0}}, {{1}} and AI tools. I'm interested in interface design, cross-platform development and language models",
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
        text: 'Quality is my main principle. I pay close attention to every detail of a project, but experience and deadlines help me balance speed and quality. I like to keep things consistent, simple and organized',
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
        text: "I like technology, games, anime and {{0}} culture. I love {{1}}, especially the {{2}} and {{3}} series, and I'm a huge fan of Arcane. I'm also interested in gadgets and hardware. I built my <0>dreamdesk</0>",
      },
      resident: {
        label: 'New Zealand resident',
        text: 'I moved to New Zealand {{0}} years ago. I received residency as a {{1}}. Now it’s my home, and I live in the country I’ve always dreamed of',
      },
      sport: {
        label: 'Into sports',
        text: 'Physical activity is especially important for a developer, so I exercise every day. I love calisthenics, fitness and hiking. And when all the tasks are done and the surf forecast looks good, you’ll find me out among the waves on my board',
      },
      travel: {
        label: 'Love to travel',
        text: 'I have visited <0>{{0}} countries</0>. Once I climbed to the top of Mount Fuji, had an ale at the Green Dragon Inn in Hobbiton, went to an Oasis concert in Australia and survived an encounter with a wild bear at Dyatlov Pass',
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
    text: 'I develop <0>applications</0>, <1>multi-page websites</1>, <2>landing pages</2> && <3>admin panels</3>. My favourite stack is <4>{{0}}</4> + <4>{{1}}</4> + <4>{{2}}</4> + <4>{{3}}</4>. I also work with <4>Vue.js</4>. For SSR projects, I use <4>Next.js</4> || <4>Nuxt</4>. I work with AI coding agents like <4>{{4}}</4> && <4>{{5}}</4>. I create <5>{{6}} videos</5> && edit them in <4>{{7}}</4>',
    feature: {
      interface: {
        label: 'Creating usable and reliable interfaces',
        text: 'I build polished interfaces with clear interactions and well-thought-out business logic. I understand when to use a specific element, component or widget. I handle edge cases and pay attention to security and {{0}}',
      },
      performance: {
        label: 'Writing modern and performant code',
        text: 'I work with {{0}}, {{1}}, {{2}}, {{3}}, {{4}} and etc. I avoid unnecessary operations and memory leaks. I memoize heavy computations and optimize performance',
      },
      architecture: {
        label: 'Designing modular and scalable architecture',
        text: 'I think through architecture for each project. I use a modular approach, custom {{0}} and {{1}} principles. I create clear code structure with a clean separation of responsibilities, so it is easy to maintain and extend',
      },
      code: {
        label: 'Writing clean and maintainable code',
        text: 'I write self-documenting code in a declarative style. I use {{0}}, {{1}} and proven style guides. I follow {{2}}, {{3}} and {{4}} principles. I refactor regularly. Readable code matters more than micro-optimizations',
      },
      state: {
        label: 'Managing application state',
        text: 'I separate local, global, server and {{0}} state. I build predictable data flow without duplication. I think through data loading, caching, synchronization and updates',
      },
      tools: {
        label: 'Using modern libraries and tools',
        text: 'I keep up with technology changes. I like the {{0}} ecosystem. I add dependencies intentionally, so each one solves a specific problem. I choose frameworks, libraries, utilities and tools based on the project. My <0>core toolkit</0>',
      },
      patterns: {
        label: 'Applying various patterns and techniques',
        text: 'Memoization, virtualization, lazy loading, optimistic updates, destructuring, decorator, currying, delegation, recursion, module, observer, proxy, mixin, throttling, debouncing, hydration..',
      },
      server: {
        label: 'Handling server requests',
        text: 'Deduplication, interceptors, caching, prefetching, aborting, retries, authentication, mutations, pagination, infinite scroll, progress tracking, offline mode, streams, parallel and dependent requests..',
      },
      markup: {
        label: 'Creating semantic, cross-browser and {{0}} markup',
        text: 'I build layouts pixel by pixel. I use modern {{0}} features and semantic {{1}} tags. I avoid "div soup". I account for browser differences, care about accessibility and build email templates',
      },
      responsive: {
        label: 'Adapting interfaces for different devices',
        text: 'I use {{0}} approaches. I set up breakpoints and create flexible responsive layouts for different devices and resolutions. I test interfaces across screen widths down to the minimum size',
      },
      animation: {
        label: 'Creating advanced animations',
        text: 'I create performant {{0}}, {{1}}, {{2}} and {{3}} animations: smooth transitions, microinteractions, interactive flows, scroll animations and 3D effects. I keep them smooth and purposeful. I like {{4}}, {{5}} and {{6}}',
      },
      media: {
        label: 'Working with media and design',
        text: 'I work with raster and vector images, video and documents. I choose suitable file formats and optimize media without visible quality loss. I prototype layouts and contribute to design work. I work in {{0}} and {{1}}',
      },
      test: {
        label: 'Testing and optimizing',
        text: 'I write unit, integration and end-to-end tests. I prefer {{0}} and {{1}}. I create and integrate {{2}} tests to validate product hypotheses. I optimize resource loading, {{3}} and {{4}}',
      },
      ai: {
        label: 'Using {{0}} tools',
        text: 'I use {{0}} agents for development, mainly {{1}} and {{2}}. I use prompt engineering, validate {{0}} output, create skills and work with {{3}}. I understand the capabilities and limits of generative {{0}}',
      },
      integrations: {
        label: 'Integrating third-party services',
        text: 'I connect payment systems, {{0}}, analytics and external platforms. I have experience integrating {{1}}s and {{2}}s such as {{3}}, {{4}}, {{5}}, {{6}}, {{7}} and {{8}} services. I adapt integrations to project requirements',
      },
      cicd: {
        label: 'Working with infrastructure and {{0}}',
        text: 'I use {{0}}, {{1}}, {{2}}, {{3}}, {{4}}, {{5}} and other cloud services for deployment. I set up build pipelines, test and script automation, environments and supporting processes for stable releases',
      },
      tasks: {
        label: 'Planning and decomposing tasks',
        text: 'I plan the backlog, decompose and estimate tasks. I account for priorities, dependencies, risks and acceptance criteria. I turn ideas into a clear work plan. I combine {{0}}, {{1}} and my own planning system',
      },
      ownership: {
        label: 'Taking responsibility for the result',
        text: 'I do not wait for step-by-step instructions. I clarify requirements, notice problems and propose solutions. I care about project quality and consistency. I work directly with the team and stakeholders',
      },
      mentor: {
        label: 'Doing code reviews and teaching',
        text: 'I mentor developers, give constructive feedback in pull requests and share experience with the team. I developed a corporate internship program and have experience conducting technical interviews',
      },
      blog: {
        label: 'Creating content for {{0}}',
        text: 'I write and edit scripts, speak on camera and think through video structure. I shoot, edit, process audio, color grade and create thumbnails. I prepare publications and communicate with subscribers',
      },
    },
    subtitle: 'Technologies',
    technologyGroup: {
      logic: 'Logic',
      ai: 'AI',
      markup: 'Markup',
      styles: 'Styles',
      utils: 'Utils',
      build: 'Build',
      deploy: 'Deploy',
      services: 'Services',
      misc: 'Misc',
      software: 'Software',
      hardware: 'Hardware',
    },
  },
  experience: {
    text: `<0>${common.occupation.lead}</0> at <1>{{0}}</1>. I built my <0>first website</0> at the age of {{1}}. I have been working <0>professionally</0> in frontend development since {{2}}. I worked my way up from a <0>junior developer</0> to a <0>team lead</0>. In my <2>${common.title.blog}</2>, I share my journey in programming && life, as well as my experience && knowledge`,
    projects: 'Projects',
    tools: 'Tools',
    duties: 'Duties',
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
        tests: 'Writing unit, functional and end-to-end tests',
        support: 'Supporting projects',
        tasks: 'Decomposing and evaluating tasks',
        tasksTeam: 'Planning, decomposing and evaluating team tasks',
        manage: 'Team management and development',
        review: 'Conducting code reviews and interviews',
        serviceDesk: 'Registering and processing requests in {{0}}',
        hardwareFix: 'Solving software and hardware issues',
        hardwareInstall: 'Installing, configuring software and hardware',
        consult: 'Advising employees on technical issues',
        collaboration:
          'Collaborating with the marketing department and stakeholders',
        design: 'Prototyping and making design decisions',
        integration:
          'Configuring and integrating {{0}} platforms and third-party services',
        partIntegration: 'Configuring and integrating third-party services',
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
          'Developed a corporate mobile application on {{0}} and released it to the app stores',
        interview: 'Conducted many interviews and hired a dozen developers',
        technologies:
          'Studied and applied in practice a lot technologies and tools',
        technologiesBase: 'Pumped the {{0}}, {{1}} and {{2}}',
        independent: 'Reached a high level of autonomy and organization',
        visa: 'Relocated to New Zealand on a work visa by the company',
        work: 'Improved teamwork skills',
        orders: 'Processed thousands of requests',
        hardware: 'Gained extensive experience with software and hardware',
        softSkills: 'Improved soft skills',
        architecture: 'Created my own ideal architecture for web applications',
        animations: 'Developed several landing pages with advanced animations',
        interfaces:
          'Created a large number of multifunctional interfaces with custom charts, analytics, tables, forms and dashboards',
        businessLogic:
          'Developed a large-scale financial application with extensive business logic on the client side',
        publicWebsiteDevelopment:
          'Developed components, widgets and pages for the public website and internal portal, improving user experience and conversion',
        partnerProjects:
          "Created pages and mini-applications for the company's partners, supporting long-term collaboration",
        seoRoadmap:
          'Implemented an {{0}} optimization plan, contributing to sales growth during the winter period',
        strapiMigration:
          'Migrated content from {{0}} to {{1}} and implemented {{2}} pages with {{3}}, making content management easier for the marketing team',
        docs: 'Created an internal documentation project for the corporate portal using {{0}}',
        flp: 'Completed the corporate {{0}} and developed organizational and communication skills',
        resident:
          "Obtained a New Zealand resident visa through the {{0}} pathway with the company's support",
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
      step1: `I created my first multi-page website at the age of {{0}}. After finishing school, I enrolled in the "Moscow State University of Instrument Engineering and Computer Science". Alongside my studies at the university, I got a job as a <0>${common.occupation.support}</0> at the {{1}} company`,
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
      step10: `Worked remotely as a <0>${common.occupation.middle}</0> in the {{0}}. Graduated from VGIK and obtained a second higher education`,
      step11: `Agreed with the {{0}} to continue working on projects in part-time mode. Received several offers for the position of a <0>${common.occupation.middle}</0>, chose the {{1}} company`,
      step12: `Worked as a <0>${common.occupation.middle}</0> in the {{0}}`,
      step13: `Received a promotion to the <0>${common.occupation.senior}</0> in the {{0}}`,
      step14: `Worked as a <0>${common.occupation.senior}</0> in the {{0}}`,
      step15: `Expanded my area of the responsibility and I was promoted to <0>${common.occupation.teamLead}</0> in the {{0}} company`,
      step16: `Worked as a <0>${common.occupation.teamLead}</0> in the {{0}}. Continued to collaborate on projects with the {{1}}`,
      step17:
        'Switched to mobile development. Developed a cross-platform corporate mobile application from scratch and released it in {{0}} and {{1}} stores. Recruited a team for the further development of the application',
      step18: `Received an offer from the {{0}} for the position of <0>${common.occupation.lead}</0> with the possibility of relocation to New Zealand. Completed all tasks, handed over projects to successor at {{1}}. Accepted the offer from {{0}}`,
      step19: `Worked remotely as a <0>${common.occupation.lead}</0> in the New Zealand company {{0}}. I also provided frontend development consultations`,
      step20:
        'I moved to Montenegro and continued working remotely. Collected documents for a work visa to New Zealand from the company {{0}}. Launched my <0>{{1}} channel</0>. Obtained a work visa',
      step21:
        'I moved to New Zealand on a work visa from the {{0}} company. Worked, settled in, built relationships with hobbits and alpacas',
      step22: `I agreed with {{0}} on a gradual search for a new job, as the company began shutting down its core business. I passed an interview, completed a technical assessment and received an offer from {{1}} for the position of <0>${common.occupation.lead}</0>. I was waiting for an update on my work visa while continuing to collaborate with {{2}} on projects`,
      step23: `I received an updated work visa and started as a <0>${common.occupation.lead}</0> at {{0}}. Obtained a New Zealand resident visa through the {{1}} pathway with the company's support`,
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
        text: "I've finally fulfilled my dream — created a beautiful and convenient workspace. In this video, I'll provide a detailed explanation and showcase how it's set up, the devices I use, why I often work standing and why I don't need a large monitor",
      },
      'day-in-a-life-new-zealand': {
        title:
          'A day in the life of a software engineer in New Zealand {{0}} POV',
        text: "I was gifted the {{0}}, and someday I'll be filming myself surfing the waves of the Pacific Ocean in New Zealand. But for now, I invite you to spend a typical day with me in this distant and beautiful country through my eyes, that is, from a first-person point of view",
      },
      'how-i-became-software-engineer': {
        title:
          'How I became a software engineer at 27 {{0}} From actor to developer',
        text: "In this video, I'll share the story of how I made a drastic career change at the age of 27 and became a front-end developer. I'll talk about myself, the challenges I faced, where and how I learned, what helped me along the way and how I found my first job in {{0}}",
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
    expand: 'Expand all',
    collapse: 'Collapse all',
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
