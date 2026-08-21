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
    text: `I'm a <0>software engineer</0> with {{0}} years of experience in <0>frontend development</0>. I build <1>projects</1> of different sizes && complexity, bringing <0>{{1}}</0> ideas to life. I run a <2>${common.title.blog}</2> on <3>{{2}}</3>. Based in Auckland, New Zealand`,
    feature: {
      projects: {
        label: '{{0}} commercial projects',
        text: `My portfolio includes commercial projects of different sizes: from landing pages to large web applications. You can find most of them in <0>${common.title.portfolio}</0>`,
      },
      position: {
        label: 'Lead Frontend Engineer',
        text: `I build projects from scratch: design architecture, write business logic, create layouts, test, optimize and maintain code. Plan tasks, review code and mentor teammates. More in <0>${common.title.skills}</0>`,
      },
      experience: {
        label: '{{0}} years of experience',
        text: `Built my first website at {{0}}. Went from junior developer to team lead. I work for a New Zealand company and consult on frontend development. More in <0>${common.title.experience}</0>`,
      },
      organizing: {
        label: 'Organized and independent',
        text: 'I have built most projects independently and like owning the client side end to end: from discussing the idea and research to prototyping, development, launch and production support',
      },
      programming: {
        label: 'Love coding',
        text: "Frontend is my main hobby. I experiment with {{0}}, {{1}} and AI tools. I'm interested in web design, cross-platform development and language models",
      },
      blogger: {
        label: '{{0}} creator',
        text: `I run a channel on <1>{{0}}</1>, where I share my life, experience and knowledge. Enjoy the whole process of making a video: from the idea and script to editing and publishing. More on the <0>${common.title.blog}</0>`,
      },
      growing: {
        label: 'Constantly learning',
        text: 'I keep sharpening the saw by studying new technologies, documentation, articles, courses, videos, books and talks. Interested in popular science and personal development books. Always look for methods and tools that help me be more productive',
      },
      perfect: {
        label: 'Prone to perfectionism',
        text: 'Quality is my core principle. I care about every detail of a project, but experience and deadlines help me balance speed and results. Value consistency, simplicity and order',
      },
      education: {
        label: 'Two university degrees',
        text: 'I graduated from Moscow State University of Instrument Engineering and Computer Science and the Russian State Institute of Cinematography. My second degree helped me improve my soft skills',
      },
      actor: {
        label: 'Former actor',
        text: 'I used to act in movies, TV series and commercials, host events, work as an entertainer and perform in a student theatre. There was a time when I wrote {{0}} in the office during the day and performed on stage in a play in the evening. More in the <0>video</0>',
      },
      geek: {
        label: 'Tech geek',
        text: "I like technology, games, anime and {{0}} culture. Love {{1}}, especially the {{2}} and {{3}} series, and I'm a huge fan of Arcane. Also interested in gadgets and hardware. Built my <0>dreamdesk</0>",
      },
      resident: {
        label: 'New Zealand resident',
        text: "I moved to New Zealand {{0}} years ago and got residency as a {{1}}. New Zealand is now my home, the country I've always dreamed of",
      },
      sport: {
        label: 'Into sports',
        text: "Physical activity is especially important for a developer, so I move every day. Love calisthenics, fitness and hiking. When all the tasks are done and the surf forecast looks good, you'll find me out on my board in the waves",
      },
      travel: {
        label: 'Love traveling',
        text: "Visited <0>{{0}} countries</0>. Once I climbed Mount Fuji, had an ale at Hobbiton's Green Dragon Inn, saw Oasis live in Australia and encountered a wild bear at Dyatlov Pass",
      },
      love: {
        label: 'Happy husband',
        text: "<0>She</0> is my best friend and biggest source of inspiration. We've been together for {{0}} years. I once built a progressive web app to ask her to marry me",
      },
      coffee: {
        label: 'Coffee lover',
        text: '"A programmer is someone who turns coffee into code." I start my workday with a cup of freshly brewed coffee. Like grinding whole beans and making flat whites on my {{0}}',
      },
    },
    country: {
      abkhazia: 'Abkhazia',
      albania: 'Albania',
      australia: 'Australia',
      belarus: 'Belarus',
      bosniaHerzegovina: 'Bosnia & Herzegovina',
      china: 'China',
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
      russia: 'Russia',
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
    text: 'Develop <0>applications</0>, <1>multi-page websites</1>, <2>landing pages</2> && <3>admin panels</3>. Love the <4>{{0}}</4> ecosystem and also work with <4>{{1}}</4>. Use <4>{{3}}</4> || <4>{{4}}</4> for {{2}} projects. Work with AI agents <4>{{5}}</4> && <4>{{6}}</4>. Create <5>{{7}} videos</5> && edit them in <4>{{8}}</4>',
    feature: {
      interface: {
        label: 'Creating usable and reliable interfaces',
        text: 'I build polished interfaces with clear interactions and well-thought-out business logic. Understand when to use a specific element, component or widget. Handle edge cases and pay attention to security and {{0}}',
      },
      performance: {
        label: 'Writing modern and performant code',
        text: 'I work with {{0}}, {{1}}, {{2}}, {{3}}, {{4}} and other modern technologies. Avoid unnecessary operations and memory leaks. Memoize heavy computations and optimize performance',
      },
      architecture: {
        label: 'Designing modular and scalable architecture',
        text: 'I think through architecture for each project. Use a modular approach, custom {{0}} and {{1}} principles. Create a clear code structure with a clean separation of concerns, so it is easy to maintain and extend',
      },
      code: {
        label: 'Writing clean and maintainable code',
        text: 'I write self-documenting code in a declarative style. Use {{0}}, {{1}} and proven style guides. Follow {{2}}, {{3}} and {{4}} principles. Refactor regularly. Readable code matters more than micro-optimizations',
      },
      state: {
        label: 'Managing application state',
        text: 'I separate local, global, server and {{0}} state. Build predictable data flow without duplication. Think through data loading, caching, synchronization and updates',
      },
      tools: {
        label: 'Using modern libraries and tools',
        text: 'I keep up with technology updates. Like the {{0}} ecosystem. Add dependencies intentionally, so each one solves a specific problem. Choose frameworks, libraries, utilities and tools based on the project. My <0>core toolkit</0>',
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
        text: 'I build layouts pixel by pixel. Use modern {{0}} features and semantic {{1}} tags. Avoid "div soup". Account for browser differences, care about accessibility and build email templates',
      },
      responsive: {
        label: 'Adapting interfaces for different devices',
        text: 'I use {{0}} approaches. Set up breakpoints and create flexible responsive layouts for different devices and resolutions. Test interfaces across screen widths down to the minimum size',
      },
      animation: {
        label: 'Creating advanced animations',
        text: 'I create performant {{0}}, {{1}}, {{2}} and {{3}} animations: smooth transitions, interactive flows, scroll animations and 3D effects. Keep them smooth and purposeful. Like {{4}}, {{5}} and {{6}}',
      },
      media: {
        label: 'Working with media and design',
        text: 'I work with raster and vector images, video and documents. Choose suitable file formats and optimize media without visible quality loss. Prototype layouts and contribute to design. Work in {{0}} and {{1}}',
      },
      test: {
        label: 'Testing and optimizing',
        text: 'I write unit, integration and end-to-end tests. Prefer {{0}} and {{1}}. Create and integrate {{2}} tests to validate product hypotheses. Optimize resource loading, {{3}} scores and {{4}}',
      },
      ai: {
        label: 'Using AI tools',
        text: 'I use AI agents for development, mainly {{0}} and {{1}}. Use prompt engineering, validate AI output, create skills and work with {{2}}. Integrate AI into workflows. Understand the capabilities and limits of generative AI',
      },
      integrations: {
        label: 'Integrating third-party services',
        text: 'I connect payment systems, {{0}}, analytics and external platforms. Have experience integrating {{1}}s and {{2}}s for {{3}}, {{4}}, {{5}}, {{6}}, {{7}}, {{8}}, {{9}} and other services. Adapt integrations to project requirements',
      },
      cicd: {
        label: 'Working with infrastructure and {{0}}',
        text: 'I use {{0}}, {{1}}, {{2}}, {{3}}, {{4}}, {{5}} and other cloud services for deployment. Set up build pipelines, automated tests, scripts and environments for stable releases',
      },
      tasks: {
        label: 'Planning and decomposing tasks',
        text: 'I plan the backlog, decompose and estimate tasks. Account for priorities, dependencies, risks and acceptance criteria. Turn ideas into a clear work plan. Combine {{0}}, {{1}} and my own planning system',
      },
      ownership: {
        label: 'Taking responsibility for the result',
        text: "I don't wait for step-by-step instructions. Clarify requirements, notice problems and propose solutions. Own tasks end to end and bring them to a finished result. Care about project quality and consistency. Work directly with the team and stakeholders",
      },
      mentor: {
        label: 'Reviewing code and mentoring',
        text: 'I mentor developers, give constructive feedback in pull requests and share experience with the team. Developed a corporate internship program and have experience conducting technical interviews',
      },
      blog: {
        label: 'Creating content for {{0}}',
        text: 'I write and edit scripts, speak on camera and think through video structure. Shoot, edit, process audio, color grade and create thumbnails. Prepare publications and communicate with subscribers',
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
    text: `<0>${common.occupation.lead}</0> at <1>{{0}}</1>. Built my <0>first website</0> at {{1}}. I've been working <0>professionally</0> in frontend development since {{2}}. Went from <0>junior developer</0> to <0>team lead</0>. I share my life, experience && knowledge on my <2>${common.title.blog}</2>`,
    projects: 'Projects',
    tools: 'Tools',
    duties: 'Duties',
    achievements: 'Achievements',
    current: 'Current position',
    occupation: common.occupation,
    job: {
      duty: {
        logicApps: 'Developing application business logic',
        logicAppsSites:
          'Developing business logic for applications and websites',
        logicModules: 'Developing business logic for application components',
        structureProjects: 'Designing project architecture',
        responsive: 'Building cross-browser, responsive layouts',
        rest: 'Working with {{0}}',
        restSocket: 'Working with {{0}} and {{1}}',
        refactor: 'Refactoring and maintaining code',
        tests: 'Writing unit, functional and end-to-end tests',
        support: 'Maintaining and improving projects',
        performance: 'Optimizing performance and {{0}}',
        tasks: 'Breaking down and estimating tasks',
        tasksTeam: 'Planning, breaking down and estimating team tasks',
        manage: 'Managing and developing the team',
        review: 'Conducting code reviews and interviews',
        serviceDesk: 'Handling {{0}} requests',
        hardwareInstall:
          'Installing, configuring and troubleshooting software and hardware',
        consult: 'Advising employees on technical issues',
        stakeholders: 'Working with stakeholders',
        marketingStakeholders:
          'Working with the marketing team and stakeholders',
        design: 'Prototyping and making design decisions',
        integration: 'Integrating and configuring third-party services',
      },
      achievement: {
        frontendOwnership: 'Own frontend development across the company',
        frontendOwnershipPast: 'Owned frontend development across the company',
        corporateApps: 'Developed several projects for major clients',
        foreignProjects: 'Developed {{0}} diverse international projects',
        complexApp:
          'Developed dozens of components and sections for the application',
        analyticsCharts: 'Built an analytics section with custom charts',
        businessPlanPdf:
          'Created {{0}} templates for generating multi-page business plans in {{1}} format',
        pathLead: 'Progressed from developer to team lead',
        pathFront: 'Progressed from junior to frontend developer',
        internship: 'Created a corporate internship program',
        mentor: 'Mentored several interns',
        mobile:
          'Built a corporate mobile app from scratch with {{0}} and released it on the {{1}} and {{2}}',
        interview:
          'Conducted dozens of interviews and hired a dozen developers',
        technologies:
          'Learned and applied a wide range of technologies and libraries',
        technologiesBase: 'Got better at {{0}}, {{1}} and {{2}}',
        independent: 'Became highly autonomous and organized',
        visa: 'Relocated to New Zealand on a company-sponsored work visa',
        work: 'Improved my teamwork skills',
        orders: 'Handled thousands of support requests',
        hardware: 'Gained experience with software and hardware',
        softSkills: 'Improved my communication skills',
        animations: 'Built dozens of sections with advanced animations',
        interfaces:
          'Built multifunctional interfaces with analytics, charts, tables, forms and dashboards',
        financeApp:
          'Built a financial application from scratch with extensive client-side business logic',
        pagesComponents: 'Developed hundreds of components and pages',
        seoRoadmap:
          'Optimized the website for {{0}} and increased organic traffic',
        wordpressMigration:
          'Migrated content from a legacy {{0}} website to a server-rendered {{1}} application with a {{2}}',
        cmsIntegration:
          'Integrated {{0}} {{1}}, configured the visual editor and designed a scalable architecture for blocks and components',
        externalBugFixes:
          'Initiated bug fixes in third-party plugins and widgets',
        docs: 'Created corporate documentation using {{0}}',
        flp:
          'Completed a corporate program focused on leadership, communication and teamwork',
        resident:
          "Obtained a New Zealand resident visa with the company's support",
        ai: 'Introduced AI tools into team workflows',
        optimization:
          'Improved performance across the public website and internal web platform',
        newPortal:
          'Built a new version of the internal business platform from scratch using a modern tech stack',
      },
      feature: {
        busyFull: 'full-time',
        busyPart: 'part-time',
        remote: 'remote',
        office: 'office',
        hybrid: 'hybrid',
        moscow: 'Moscow, Russia',
        auckland: 'Auckland, New Zealand',
      },
    },
    subtitle: 'Timeline',
    next: 'Next',
    back: 'Back',
    refresh: 'Reset',
    continue: 'To be continued',
    other: 'Other',
    stepper: {
      step1: `Built my first multi-page website. Graduated from high school and enrolled at Moscow State University of Instrument Engineering and Computer Science. While studying, I started working as a <0>${common.occupation.support}</0> at {{0}}`,
      step2: `Worked as a <0>${common.occupation.support}</0> at {{0}}`,
      step3:
        'I graduated from university. Expanded my horizons in other areas of activity. I decided to become an actor and enrolled in the "Russian State University of Cinematography"',
      step4:
        'While studying at VGIK, I built personal projects and learned to code',
      step5: `Passed the interview, completed the test tasks and I got a job as a <0>${common.occupation.junior}</0> in the {{0}} company`,
      step6: `Worked as a <0>${common.occupation.junior}</0> in the {{0}}`,
      step7: `Was promoted to <0>${common.occupation.middle}</0> at {{0}}`,
      step8: `Worked as a <0>${common.occupation.middle}</0> at {{0}}. In my spare time, I built a project for {{1}}`,
      step9: `I was invited to the company {{0}} for the position of a <0>${common.occupation.middle}</0>. Made a decision to move from {{1}} to {{2}}`,
      step10: `Worked remotely as a <0>${common.occupation.middle}</0> in the {{0}}. Graduated from VGIK and obtained a second higher education`,
      step11: `Agreed with the {{0}} to continue working on projects in part-time mode. Received several offers for the position of a <0>${common.occupation.middle}</0>, chose the {{1}} company`,
      step12: `Worked as a <0>${common.occupation.middle}</0> at {{0}}`,
      step13: `Became a <0>${common.occupation.senior}</0> at {{0}}`,
      step14: `Worked as a <0>${common.occupation.senior}</0> in the {{0}}`,
      step15: `Expanded my responsibilities and was promoted to <0>${common.occupation.teamLead}</0> at {{0}}`,
      step16: `Worked as a <0>${common.occupation.teamLead}</0> in the {{0}}. Continued to collaborate on projects with the {{1}}`,
      step17:
        'Switched to mobile development. Built a cross-platform corporate mobile app from scratch and released it on {{0}} and {{1}}. Recruited a team to continue developing the app',
      step18: `Received an offer from the {{0}} for the position of <0>${common.occupation.lead}</0> with the possibility of relocation to New Zealand. Completed all tasks, handed over projects to successor at {{1}}. Accepted the offer from {{0}}`,
      step19: `Worked remotely as a <0>${common.occupation.lead}</0> in the New Zealand company {{0}}. I also provided frontend development consultations`,
      step20:
        'Moved to Montenegro and continued working remotely. Prepared the documents needed to relocate to New Zealand on a work visa sponsored by {{0}}. Launched my <0>{{1}} channel</0> and received the visa',
      step21:
        'I moved to New Zealand on a work visa from the {{0}} company. Worked, settled in, built relationships with hobbits and alpacas',
      step22: `Agreed with {{0}} to look for a new role as the company began winding down its core business. Completed the interview process and a technical assessment, then received an offer from {{1}} for a <0>${common.occupation.lead}</0> position. While waiting for my updated work visa, I continued working on projects with {{2}}`,
      step23: `I received an updated work visa and started as a <0>${common.occupation.lead}</0> at {{0}}. Obtained a New Zealand resident visa through the {{1}} pathway with the company's support`,
    },
  },
  portfolio: {
    limit: 'Projects without an {{0}} that I can showcase {{1}}',
    developed: 'Developed in',
    filter: {
      all: 'All',
      app: 'Application',
      site: 'Website',
      landing: 'Landing page',
      admin: 'Admin panel',
    },
    mobileApp: 'Mobile application',
    project: {
      'reps-rest': {
        text: 'Fitness training planner and workout tracking application',
        description:
          'I designed and developed the application independently from scratch. The work included a responsive interface, REST API integration and PWA support',
      },
      'ally-2': {
        text: common.projects.ally,
        description:
          'I independently developed the landing page from scratch, then improved and supported it. I also built its responsive interface and animations',
      },
      'strongher-cms': {
        text: common.projects.cmsFit,
        description:
          'I independently designed and developed the admin panel from scratch, then improved and supported it. The interface includes many forms and tables',
      },
      pridefit: {
        text: 'Subscription landing page for the mobile fitness application',
        description:
          'I independently developed the subscription flow from scratch, then improved and supported it. The responsive interface was delivered on a tight schedule',
      },
      'ally-cms': {
        text: 'Content management system for the mobile application to manage {{0}} figures',
        description:
          'I independently designed and developed the admin panel from scratch, then improved and supported it. I also tried a new modular architecture for the project',
      },
      'pridefit-cms': {
        text: common.projects.cmsFit,
        description:
          'I independently designed and developed the admin panel from scratch, then improved and supported it. The project also gave me hands-on experience with {{0}}',
      },
      madfit: {
        text: 'Landing page & subscription service for the mobile fitness application',
        description:
          'I independently developed the landing page and subscription flow from scratch, then improved and supported them. The work included a responsive animated interface and payment integration',
      },
      'madfit-cms': {
        text: common.projects.cmsFit,
        description:
          'I independently designed and developed the admin panel from scratch, then improved and supported it. The interface was built for managing mobile fitness app content',
      },
      'vibe-media': {
        text: 'Landing page of the digital marketing agency',
        description:
          'I independently developed the landing page from scratch and continued supporting it. I built a responsive interface with custom animations',
      },
      tradease: {
        text: 'Building order management website',
        description:
          'I independently developed the service from scratch and continued improving and supporting it. The work included a responsive interface and REST API integration',
      },
      't1-online': {
        title: 'T1 Online',
        text: 'Corporate mobile application for company employees',
        description:
          'I led the frontend team and developed the corporate mobile application from scratch. We released it in {{0}} and {{1}}',
      },
      'road-ninja-landing': {
        text: 'Landing page for the truck drivers hire service',
        description:
          'I independently developed the landing page from scratch. I built its responsive interface and custom animations',
      },
      'road-ninja': {
        text: 'Truck drivers hire service',
        description:
          'As part of the development team, I built the markup and part of the business logic. The service includes a responsive interface, email templates, payments, REST API and WebSocket integrations',
      },
      celebration: {
        text: "New Year's mini application for congratulating company employees",
        description:
          'I independently designed and developed the mini application from scratch. I built a responsive animated interface and added PWA support',
      },
      ally: {
        text: common.projects.ally,
        description:
          'I independently developed the landing page from scratch, then improved and supported it. I also built its responsive interface and animations',
      },
      'present-me-landing': {
        text: 'Landing page for the jobseeker profile creation service',
        description:
          'I independently developed the landing page from scratch. I built its responsive interface and animations',
      },
      'present-me-portal': {
        text: 'Admin panel of the job seeker creating profile service',
        description:
          'As part of the development team, I worked on the complete frontend implementation. The admin panel contains extensive business logic',
      },
      'present-me': {
        text: 'Service for creating a job seeker profile',
        description:
          'I independently developed the service from scratch, then improved and supported it. I built a responsive interface, email templates, dynamic forms and custom routing',
      },
      dropdrone: {
        text: 'Agricultural startup website',
        description:
          'I independently developed the website from scratch. I built its responsive interface and animations',
      },
      'just-hatched': {
        text: 'Landing page for the mobile application tracker for newborn babies',
        description:
          'As part of the development team, I built the landing page from scratch, including its responsive interface and animations',
      },
      uls: {
        text: 'Single user account of the company',
        description:
          'I independently developed the application from scratch, then improved and supported it. The work included a responsive interface, REST API integration, authentication with {{0}} and containerisation with {{1}}',
      },
      'proximal-coffee': {
        text: 'Landing page for the coffee shop',
        description:
          'I independently developed the landing page from scratch. I built its responsive interface and animations',
      },
      embp: {
        title: 'EMBP',
        text: 'Admin panel of the biometric platform for VTB Bank',
        description:
          'I led frontend development and handled the interface design while building the admin panel from scratch. The application includes extensive business logic and a dark theme',
      },
      '7glyphs-lite': {
        text: 'Landing page for the digital agency service',
        description:
          'I independently developed the landing page from scratch. I built its responsive interface and animations',
      },
      'melissa-chalmers': {
        text: 'Fitness blogger landing page',
        description:
          'I independently developed the landing page from scratch. I built its responsive interface and animations',
      },
      foodprint: {
        text: 'Discount food ordering service in restaurants mobile application',
        description:
          'As part of the development team, I improved and supported the mobile application. This was my first commercial experience with {{0}}',
      },
      'foodprint-portal': {
        text: 'Portal of the discount food ordering service in restaurants',
        description:
          'I independently developed the portal from scratch, then improved and supported it. The application contains extensive business logic',
      },
      'foodprint-landing': {
        text: 'Landing page of the service for ordering discount food in restaurants',
        description:
          'I independently developed the landing page from scratch, then improved and supported it. I built a responsive interface, email templates and animations',
      },
      sds: {
        text: 'Enterprise service to work with the company document flow',
        description:
          'I led frontend development and designed the interface while building the service from scratch, then improved and supported it. The application contains extensive business logic',
      },
      strongher: {
        text: 'Mobile fitness application website',
        description:
          'I independently developed the website from scratch, then improved and supported it. I built a responsive animated interface, email templates and payment integration',
      },
      '7glyphs-2': {
        text: 'Home website of the digital agency',
        description:
          'As part of the development team, I improved and supported the website. I worked on its responsive interface and animations',
      },
      'rogue-travel': {
        text: 'Flight & hotel group booking service',
        description:
          'I independently developed the service from scratch and continued supporting it. The work included email templates, payment integration and extensive business logic',
      },
      'quarry-trucks': {
        text: 'Truck traffic monitoring service',
        description:
          'As part of the development team, I built the markup and part of the business logic. The project gave me hands-on experience with {{0}} and data visualisation charts',
      },
      'service-packages': {
        text: 'Landing page for complex services of the digital agency',
        description:
          'I independently developed the landing page from scratch. I built its responsive interface and animations',
      },
      '12-saffron': {
        text: 'Landing page for sale of the private home in New Zealand',
        description:
          'I independently developed the landing page from scratch and built its responsive interface. The website successfully helped sell the house',
      },
      'whip-around': {
        text: 'Vehicle inspection service',
        description:
          'I independently improved and supported the service, working across its responsive frontend and backend. The project gave me hands-on experience with {{0}}, {{1}} and {{2}}',
      },
      'lazyaz-dashboard': {
        text: 'Admin panel for a delivery service',
        description:
          "I adapted a {{0}} admin panel built with {{1}} and {{2}} to the project's needs. Built the UI, wrote scripts for interactive elements and set up {{3}} requests, gaining hands-on experience with {{4}}",
      },
      lazyaz: {
        text: 'Web platform for a delivery service',
        description:
          'This was the first commercial project I built from scratch. I designed the application architecture, implemented its business logic, set up global state management with {{0}} and handled server data. Integrated an interactive map and added address search using the {{2}}. Built a design system with custom {{1}} components, created {{3}} email templates and set up the project build using {{4}} and {{5}}',
      },
      '7glyphs': {
        text: 'Digital agency website',
        description:
          'I rewrote the codebase from {{0}} to {{1}} and converted the multi-page website into a single-page application. Set up client-side routing, made the layout responsive, added animations and configured the project build using {{2}} and {{3}}',
      },
      msp: {
        title: 'Business navigator MSP',
        text: 'Service for entrepreneurs looking to start or grow a business',
        description:
          'This was my first commercial project as part of a frontend team. I strengthened my {{0}}, {{1}} and {{2}} skills while developing dozens of components and application screens, including an analytics section with custom charts. Also created {{3}} templates for generating multi-page business plans in {{4}} format',
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
