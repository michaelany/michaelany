const common = {
  title: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    portfolio: 'Portfolio',
    contact: 'Contact',
    language: 'English',
  },
  occupation: {
    lead: 'Lead Frontend Developer',
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
}

const EN = {
  title: common.title,
  month: {
    september: 'september',
    october: 'october',
    november: 'november',
    december: 'december',
    january: 'january',
    february: 'february',
    april: 'april',
    march: 'march',
    may: 'may',
    june: 'june',
    july: 'july',
    august: 'august',
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
      part1: 'a frontend',
      part2: 'developer',
    },
    subtitle: 'Banner',
  },
  about: {
    text: "I'm a software engineer specializing in <0>frontend development</0>. I create projects of any complexity from scratch, bringing {{0}} ideas to life. Live in New Zealand",
    feature: {
      projects: {
        label: 'Developed {{0}} commercial projects',
        text: `My portfolio includes foreign and domestic commercial projects - from one-page landing pages to large web applications. Most of them in <0>${common.title.portfolio}</0>`,
      },
      position: {
        label: 'Lead software engineer',
        text: `I develop projects from scratch, write business logic, create layout, optimize and maintain the code. I plan and evaluate tasks, make code reviews and teach. More in <0>${common.title.skills}</0>`,
      },
      experience: {
        label: '{{0}} years of experience',
        text: `Made my first website at the age of {{0}}. I went from junior coder to lead developer. I work for the New Zealand digital company and consult on frontend development. More in <0>${common.title.experience}</0>`,
      },
      organizing: {
        label: 'Organized & standalone',
        text: 'Most of the projects were developed by me independently. I like to take over the entire client part of the project from discussing the concept to the final implementation and support in production',
      },
      programming: {
        label: 'Love to code',
        text: 'Frontend is my main hobby. I like to experiment with {{0}} and {{1}}. I am interested in cross-platform and back-end development. I plan to launch my own blog recently',
      },
      growing: {
        label: 'Constantly learning',
        text: 'I regularly "sharpen the saw", study new technologies, documentation, articles, courses, books and reports. I am constantly looking for new methods and tools to improve my efficiency',
      },
      perfect: {
        label: 'Prone to perfectionism',
        text: 'High quality is my main principle. I put all of myself into every project. The strength of the deadline, experience and the thought of "all is well in moderation" helps me focus on speed and result',
      },
      education: {
        label: 'Two higher educations',
        text: 'Graduated from the Moscow Technological University and Russian State University of Cinematography {{0}}. Studying in the latter boosted my soft skills well',
      },
      sport: {
        label: 'Sports lover',
        text: 'Physical activity is especially relevant for the developer and every day I go in for sports. I like calisthenics, cycling, running, hiking and fitness. Recently discovered surfing',
      },
      travel: {
        label: 'Traveler',
        text: 'Visited {{0}} countries. Love Japan and New Zealand. Climbed to the top of Fujiyama, visited Hobbiton and survived after meeting with the wild bear at the Dyatlov Pass {{1}}',
      },
      love: {
        label: 'Happy husband',
        text: "<0>She</0> is my main source of inspiration and best friend. We've been together for {{0}} years. I once developed a progressive web application to offer her a hand and heart {{1}}",
      },
      coffee: {
        label: 'Coffee lover',
        text: '"Programmer is an organism that turns coffee into code" {{0}}. I start my working day with a cup of aromatic coffee. After a trip to Japan, I fell in love with matcha tea',
      },
    },
    subtitle: 'Avatar and social',
  },
  skills: {
    text: 'I craft applications, admin panels, landing pages & multi-page sites. My main stack is <0>{{0}}</0> + <0>{{1}}</0> + <0>{{2}}</0>',
    feature: {
      interface: {
        label: 'Create reliable & well-functioning interfaces',
        text: 'I implement a system of interface elements with convenient interaction and well-thought-out business logic. I care about cross-browser compatibility, security and handle possible errors',
      },
      performance: {
        label: 'Write modern & productive code',
        text: 'I use {{0}} standards, {{1}}, {{2}}, {{3}}... Optimize heavy computations. I avoid unnecessary operations and memory leaks. Applying productivity techniques',
      },
      efficient: {
        label: 'Choose a simple way to solve the problem',
        text: 'I try to find a clear and optimal solution for any task. I know when to use a specific method, pattern, library or tool',
      },
      markup: {
        label: 'Create semantic, cross-browser & {{0}} markup',
        text: 'I make pixel-by-pixel layouts. I use semantic tags and don\'t suffer from "divatosis" {{0}}. I test in all modern browsers, care about accessibility and also build HTML emails',
      },
      patterns: {
        label: 'Use a lot of patterns & techniques',
        text: 'Memoization, virtualization, lazy loading, destructuring, decorator, currying, delegation, recursion, module, factory, observer, proxy, mixin, throttling, debounce..',
      },
      modules: {
        label: 'Build a modular & optimal project architecture',
        text: 'I avoid over-nesting, follow the principle of separation of concerns, {{0}} and {{1}}. Each module, class or component is responsible for one functionality type. Configuring the project build system',
      },
      tools: {
        label: 'Use modern frameworks, libraries, and tools',
        text: 'I regularly follow the technology updates and in constant search for new ones. In addition to <0>general</0> I use many auxiliary libraries and tools',
      },
      responsive: {
        label: 'Implement responsive interface & animations',
        text: 'I use {{0}} approaches, test the interface at every pixel from the minimum to the maximum screen width, create productive {{1}}, {{2}} and {{3}} animations',
      },
      code: {
        label: 'Follow a consistent code style',
        text: 'I write self-documenting and declarative code, explore popular style guides practices, use {{0}} and {{1}}. Human-readable code is more important than the fast one',
      },
      test: {
        label: 'Optimize, test & refactor',
        text: 'I check project perfomance in various browsers and devices. I measure and speed up the loading of resources. Minify and optimize files, images. Refactoring code',
      },
      tasks: {
        label: 'Plan, decompose & document',
        text: 'I plan the backlog, group, decompose and evaluate tasks. I use {{0}} and {{1}} methodologies. I use task managers. Writing documentation',
      },
      mentor: {
        label: 'Make code reviews & teach',
        text: "I'm mentoring, giving feedback on pull requests and sharing my experience with colleagues. Developed a corporate internship program. Have experience in interviewing",
      },
    },
    subtitle: 'Technologies',
    technologyGroup: {
      logic: 'Logic',
      markup: 'Markup',
      styles: 'Styles',
      tools: 'Tools',
      misc: 'Miscellaneous',
      software: 'Software',
      hardware: 'Hardware',
    },
    learn: 'Exploring',
  },
  experience: {
    text: `<0>${common.occupation.lead}</0> at <1>{{0}}</1> I've been professionally engaged in frontend development for {{1}} years. I work remotely`,
    duties: 'Duties',
    achievements: 'Achievements',
    current: 'Current position',
    occupation: common.occupation,
    job: {
      duty: {
        logicApps: 'Develop applications business logic',
        logicAppsSites: 'Develop business logic for applications and websites',
        logicModules: 'Develop application components',
        structureApps: 'Create applications architecture',
        structureProjects: 'Create projects architecture',
        responsive: 'Cross-browsing and responsive markup',
        rest: 'Working with {{0}}',
        restSocket: 'Working with {{0}} and {{1}}',
        refactor: 'Refactoring and maintain the code',
        scratch: 'Develop projects from scratch',
        support: 'Support projects',
        tasks: 'Decompose and evaluate tasks',
        tasksTeam: 'Planning, decomposing and evaluating team tasks',
        manage: 'Team management and development',
        review: 'Conducting code reviews and interviews',
        serviceDesk: 'Registering and processing requests in {{0}}',
        hardwareFix: 'Solve software and hardware issues',
        hardwareInstall: 'Installing, configuring software and hardware',
        consult: 'Advising employees on technical issues',
      },
      achievement: {
        resultCorporate:
          'Developed several large-scale applications for large customers',
        resultForeign: 'Developed from scratch many different foreign projects',
        resultApp:
          'Developed many components and sections for a large application',
        pathLead: 'Passed the way from an ordinary developer to a team lead',
        pathFront: 'Grew from junior to a middle frontend developer',
        internship: 'Created a corporate internship program',
        mentor: 'Trained several juniors',
        mobile: 'Developed a corporate mobile application on {{0}}',
        design: 'Created several approved design layouts',
        interview:
          'Conducted many interviews and hired a dozen decent developers',
        technologies:
          'Studied and applied in practice many technologies and libraries',
        technologiesBase: 'Pumped the {{0}}, {{1}} and {{2}}',
        speed:
          'Set a personal record for the speed of completion of a project - {{0}} day',
        independent: 'Reached a high level of autonomy and organization',
        visa: 'Got a work visa to New Zealand from the company',
        english: 'Improved English, cooperating with foreign customers',
        testimonials:
          'Received many complimentary reviews from colleagues and customers',
        work: 'Improved teamwork skills',
        orders: 'Processed thousands of requests',
        hardware: 'Gained extensive experience with software and hardware',
        softSkills: 'Improved soft skills',
      },
      feature: {
        busyFull: 'full-time',
        busyPart: 'part-time',
        remote: 'remotely',
        office: 'office',
        moscow: 'Moscow, Russia',
        auckland: 'Auckland, New Zealand',
      },
    },
    subtitle: 'Steps',
    next: 'Next',
    back: 'Back',
    refresh: 'Reset',
    continue: 'To be continued ✌️',
    stepper: {
      step1: `Worked as a <0>${common.occupation.support}</0> in the {{0}} company`,
      step2: 'Expanded my horizons in other areas of activity {{0}}',
      step3:
        'In parallel with my study at the university, I created pet projects and learned programming',
      step4: `Passed the interview, completed the test tasks and I got a job as a <0>${common.occupation.junior}</0> in the {{0}} company`,
      step5: `Worked as a <0>${common.occupation.junior}</0> in the {{0}}`,
      step6: `I was promoted to a <0>${common.occupation.middle}</0> in the {{0}} company`,
      step7: `Worked as a <0>${common.occupation.middle}</0> in the {{0}}. In my spare time I did a commercial project for the {{1}} company`,
      step8: `I was invited to the company {{0}} for the position of a <0>${common.occupation.middle}</0>. Made a decision to move from {{1}} to {{2}}`,
      step9: `Worked as a <0>${common.occupation.middle}</0> in the {{0}}`,
      step10: `Agreed with the {{0}} to continue working on projects in part-time mode. Received several offers for the position of a <0>${common.occupation.middle}</0>, chose the {{1}} company`,
      step11: `Worked as a <0>${common.occupation.middle}</0> in the {{0}}`,
      step12: `Received a promotion to the <0>${common.occupation.senior}</0> in the {{0}}`,
      step13: `Worked as a <0>${common.occupation.senior}</0> in the {{0}}`,
      step14: `Expanded my area of the responsibility and I was promoted to <0>${common.occupation.teamLead}</0> in the {{0}} company`,
      step15: `Worked as a <0>${common.occupation.teamLead}</0> in the {{0}}. Continued to collaborate on projects with the {{1}}`,
      step16:
        'Switched to mobile development. Developed a cross-platform corporate mobile application from scratch and released it in {{0}} and {{1}} stores. Recruited a team for the further development of the application',
      step17: `Received an offer from the {{0}} for the position of <0>${common.occupation.lead}</0> with the possibility of relocation to New Zealand. Completed all tasks, handed over projects to successor at {{1}}. Accepted the offer from {{0}}`,
      step18: `Work as a <0>${common.occupation.lead}</0> in the New Zealand company {{0}} I provide frontend development consultations`,
      step19:
        'Moved to Montenegro. Collected documents for a work visa to New Zealand from the company {{0}} Got a work visa. Preparing to move to New Zealand',
      step20:
        'Moved to New Zealand on a work visa from the {{0}} company. Settling in, establishing relations with hobbits and alpacas {{1}}',
    },
  },
  portfolio: {
    limit:
      'Projects that have been released into production and allowed to demonstration',
    developed: 'Developed in',
    filter: {
      all: 'All',
      app: 'Application',
      site: 'Website',
      landing: 'Landing page',
      admin: 'Admin panel',
    },
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
    },
    project: {
      vconline: {
        text: 'Corporate application of the financial company',
      },
      vconlinel: {
        text: 'Landing page of the financial company mobile corporate application',
      },
      madfit: {
        text: 'Landing page & subscription service the mobile fitness application',
      },
      madfitp: {
        text: 'Mini content management system the mobile fitness application',
      },
      vibe: {
        text: 'Landing page the New Zealand digital marketing agency',
      },
      tradease: {
        text: 'New Zealand building order management website',
      },
      t1online: {
        type: 'Mobile application',
        text: 'Corporate mobile application for company employees',
      },
      ninjal: {
        text: 'Landing page the New Zealand truck drivers hire service',
      },
      ninja: {
        text: 'New Zealand truck drivers hire service',
      },
      celebration: {
        text: "New Year's mini application for congratulating company employees",
      },
      ally: {
        text: 'Landing page the mobile application for interactive figures {{0}}',
      },
      presentmel: {
        text: 'Landing page the New Zealand jobseeker profile creation service',
      },
      presentmep: {
        text: 'Admin panel of the New Zealand service for creating a job seeker profile',
      },
      presentme: {
        text: 'New Zealand service for creating a job seeker profile',
      },
      dropdrone: {
        text: 'New Zealand agricultural startup website',
      },
      hatched: {
        text: 'Landing page the mobile application tracker for newborn babies',
      },
      uls: {
        title: 'United Login System',
        text: '{{0}} single user account',
      },
      proximal: {
        text: 'Landing page the Australian coffee shop',
      },
      embp: {
        title: 'EMBP',
        text: 'Admin panel of the biometric platform for VTB Bank',
      },
      tmf: {
        text: 'New Zealand construction company website',
      },
      lite: {
        text: 'Landing page for the New Zealand digital agency service',
      },
      melissa: {
        text: 'Fitness blogger landing page',
      },
      foodp: {
        text: 'Portal of the New Zealand discount food ordering service in restaurants',
      },
      food: {
        text: 'Landing page of the New Zealand service for ordering discount food in restaurants',
      },
      sds: {
        text: 'Enterprise service for work with {{0}} document flow',
      },
      strong: {
        text: 'Mobile fitness application website',
      },
      glyphs2: {
        text: 'Home website of the New Zealand digital agency',
      },
      rogue: {
        text: 'New Zealand flight & hotel group booking service',
      },
      trucks: {
        text: 'New Zealand truck traffic monitoring service',
      },
      services: {
        text: 'Landing page for complex services of the New Zealand digital agency',
      },
      fcdc: {
        text: 'Event management service admin panel',
      },
      saffron: {
        text: 'Landing page for sale of the private home in New Zealand',
      },
      whip: {
        text: 'New Zealand vehicle inspection service',
      },
      lazyazd: {
        text: 'Admin panel of a New Zealand delivery service',
      },
      lazyaz: {
        text: 'Web platform for the New Zealand delivery service',
      },
      glyphs: {
        text: 'Home site of the New Zealand digital agency',
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
  stopWar: {
    text: 'I am Russian and also Ukrainian, my family lives both in Russia and Ukraine. Homeland attacked homeland! This is madness! <0>NO WAR!</0>',
    firstHelp: 'Find out how to help',
    secondHelp: 'More ways to help',
  },
}

export default EN
