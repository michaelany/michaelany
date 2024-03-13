const common = {
  title: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    portfolio: 'Portfolio',
    vlog: 'Vlog',
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
    ally: 'Landing page of the mobile application for the interactive figures {{0}}',
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
      part1: 'a frontend',
      part2: 'developer',
      part3: 'YouTuber',
    },
    subtitle: 'Banner',
  },
  about: {
    text: `I'm a software engineer specializing in <0>frontend development</0>. I create <1>projects</1> of any complexity from scratch, bringing {{0}} ideas to life. I have my own <2>${common.title.vlog}</2> on <3>{{2}}</3>. Live in New Zealand`,
    feature: {
      projects: {
        label: 'Developed {{0}} commercial projects',
        text: `My portfolio includes a variety of commercial projects, ranging from one-page landing pages to large web applications. Most of them can be found in <0>${common.title.portfolio}</0>`,
      },
      position: {
        label: 'Lead software engineer',
        text: `I develop projects from scratch, write business logic, create layout, optimize and maintain the code. I plan and evaluate tasks, make code reviews and teach. More in <0>${common.title.skills}</0>`,
      },
      vlogger: {
        label: '{{0}} channel creator',
        extraLabel: '& {{0}} channel creator',
        text: `I've launched my own channel on YouTube. I share my journey in programming and life, as well as provide insights and knowledge. More details in the <0>${common.title.vlog}</0> or on <1>{{1}}</1>`,
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
        text: `Frontend is my main hobby. I like to experiment with {{0}} and {{1}}. I am interested in cross-platform and back-end development. <0>${common.title.vlog}</0> is also related to programming`,
      },
      growing: {
        label: 'Constantly learning',
        text: 'I regularly "sharpen the saw", study new technologies, documentation, articles, courses, books and reports. I am constantly looking for new methods and tools to improve my efficiency',
      },
      perfect: {
        label: 'Prone to perfectionism',
        text: 'High quality is my main principle. I put all of myself into every project. The strength of the deadline, experience and the thought of "all is well in moderation" helps me focus on speed and result. A bit nerd',
      },
      education: {
        label: 'Two higher educations',
        text: 'Graduated from the "Moscow State University of Instrument Engineering and Computer Science" and "Russian State University of Cinematography". Studying in the latter boosted my soft skills well',
      },
      actor: {
        label: 'Former professional actor',
        text: 'I used to act in movies, TV series, and commercials, hosted events, worked as an animator, and performed in educational theater. But then I came to my senses and switched to programming',
      },
      sport: {
        label: 'Sports lover',
        text: 'Physical activity is especially relevant for the developer and every day I go in for sports. I like calisthenics, cycling, running, hiking and fitness. Recently discovered surfing',
      },
      travel: {
        label: 'Traveler',
        text: 'Visited {{0}} countries. I relocated to New Zealand. Once I climbed to the top of Fujiyama, visited Hobbiton and survived after meeting with the wild bear at the Dyatlov Pass',
      },
      love: {
        label: 'Happy husband',
        text: "<0>She</0> is my main source of inspiration and best friend. We've been together for {{0}} years. I once developed a progressive web application to offer her a hand and heart",
      },
      coffee: {
        label: 'Coffee lover',
        text: '"Programmer is an organism that turns coffee into code". I start my working day with a cup of aromatic coffee. After a trip to Japan, I fell in love with matcha tea',
      },
    },
    subtitle: 'Avatar and social',
  },
  skills: {
    text: 'I craft <0>applications</0>, <1>multi-page websites</1>, <2>landing pages</2> & <3>admin panels</3>. My main stack is <4>{{0}}</4> + <4>{{1}}</4> + <4>{{2}}</4> + <4>{{3}}</4>. I create <5>{{4}} videos</5> in {{5}}',
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
        text: 'I make pixel-by-pixel layouts. I use semantic tags and don\'t suffer from "divatosis". I test in all modern browsers, care about accessibility and also build HTML emails',
      },
      patterns: {
        label: 'Use a lot of patterns & techniques',
        text: 'I use memoization, virtualization, lazy loading, destructuring, decorator, currying, delegation, recursion, module, factory, observer, proxy, mixin, throttling, debounce..',
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
        label: 'Plan & decompose',
        text: 'I plan the backlog, group, decompose and evaluate tasks. I use {{0}} and {{1}} methodologies. I use task managers',
      },
      mentor: {
        label: 'Make code reviews & teach',
        text: "I'm mentoring, giving feedback on pull requests and sharing my experience with colleagues. Developed a corporate internship program. Have experience in interviewing",
      },
      vlog: {
        label: 'Create {{0}} videos',
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
    learn: 'Exploring',
  },
  experience: {
    text: `<0>${common.occupation.lead}</0> at <1>{{0}}</1> I've been professionally engaged in frontend development for {{1}} years. Share my experience & knowledge in my <2>${common.title.vlog}</2>`,
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
        interview: 'Conducted many interviews and hired a dozen developers',
        technologies:
          'Studied and applied in practice many technologies and libraries',
        technologiesBase: 'Pumped the {{0}}, {{1}} and {{2}}',
        speed:
          'Set a personal record for the speed of completion of a project - {{0}} day',
        independent: 'Reached a high level of autonomy and organization',
        visa: 'I relocated to New Zealand on a work visa by the company',
        english: 'Improved English, cooperating with foreign customers',
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
      step10: `Worked as a <0>${common.occupation.middle}</0> in the {{0}}`,
      step11: `Agreed with the {{0}} to continue working on projects in part-time mode. Received several offers for the position of a <0>${common.occupation.middle}</0>, chose the {{1}} company`,
      step12: `Worked as a <0>${common.occupation.middle}</0> in the {{0}}`,
      step13: `Received a promotion to the <0>${common.occupation.senior}</0> in the {{0}}`,
      step14: `Worked as a <0>${common.occupation.senior}</0> in the {{0}}`,
      step15: `Expanded my area of the responsibility and I was promoted to <0>${common.occupation.teamLead}</0> in the {{0}} company`,
      step16: `Worked as a <0>${common.occupation.teamLead}</0> in the {{0}}. Continued to collaborate on projects with the {{1}}`,
      step17:
        'Switched to mobile development. Developed a cross-platform corporate mobile application from scratch and released it in {{0}} and {{1}} stores. Recruited a team for the further development of the application',
      step18: `Received an offer from the {{0}} for the position of <0>${common.occupation.lead}</0> with the possibility of relocation to New Zealand. Completed all tasks, handed over projects to successor at {{1}}. Accepted the offer from {{0}}`,
      step19: `Worked as a <0>${common.occupation.lead}</0> in the New Zealand company {{0}} I also provided frontend development consultations`,
      step20:
        'I moved to Montenegro. Collected documents for a work visa to New Zealand from the company {{0}} Launched my {{1}} channel. Obtained a work visa',
      step21:
        'I moved to New Zealand on a work visa from the {{0}} company. Working, settling in, building relationships with hobbits and alpacas. I run the {{1}} channel',
    },
  },
  portfolio: {
    limit: 'Projects with no {{0}} that I can showcase {{1}}',
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
      ally2: {
        text: common.projects.ally,
      },
      strongp: {
        text: common.projects.cmsFit,
      },
      pridefit: {
        text: 'Subscription landing page for the mobile fitness application',
      },
      allyp: {
        text: 'Content management system for the interactive figures {{0}} mobile application',
      },
      pridefitp: {
        text: common.projects.cmsFit,
      },
      madfit: {
        text: 'Landing page & subscription service for the mobile fitness application',
      },
      madfitp: {
        text: common.projects.cmsFit,
      },
      vibe: {
        text: 'Landing page of the digital marketing agency',
      },
      tradease: {
        text: 'Building order management website',
      },
      t1online: {
        text: 'Corporate mobile application for company employees',
      },
      ninjal: {
        text: 'Landing page for the truck drivers hire service',
      },
      ninja: {
        text: 'Truck drivers hire service',
      },
      celebration: {
        text: "New Year's mini application for congratulating company employees",
      },
      ally: {
        text: common.projects.ally,
      },
      presentmel: {
        text: 'Landing page for the jobseeker profile creation service',
      },
      presentmep: {
        text: 'Admin panel of the job seeker creating profile service',
      },
      presentme: {
        text: 'Service for creating a job seeker profile',
      },
      dropdrone: {
        text: 'Agricultural startup website',
      },
      hatched: {
        text: 'Landing page for the mobile application tracker for newborn babies',
      },
      uls: {
        title: 'United Login System',
        text: 'Single user account of the company',
      },
      proximal: {
        text: 'Landing page for the coffee shop',
      },
      embp: {
        title: 'EMBP',
        text: 'Admin panel of the biometric platform for VTB Bank',
      },
      tmf: {
        text: 'Construction company website',
      },
      lite: {
        text: 'Landing page for the digital agency service',
      },
      melissa: {
        text: 'Fitness blogger landing page',
      },
      foodm: {
        text: 'Discount food ordering service in restaurants mobile application',
      },
      foodp: {
        text: 'Portal of the discount food ordering service in restaurants',
      },
      food: {
        text: 'Landing page of the service for ordering discount food in restaurants',
      },
      sds: {
        text: 'Enterprise service to work with the company document flow',
      },
      strong: {
        text: 'Mobile fitness application website',
      },
      glyphs2: {
        text: 'Home website of the digital agency',
      },
      rogue: {
        text: 'Flight & hotel group booking service',
      },
      trucks: {
        text: 'Truck traffic monitoring service',
      },
      services: {
        text: 'Landing page for complex services of the digital agency',
      },
      fcdc: {
        text: 'Event management service admin panel',
      },
      saffron: {
        text: 'Landing page for sale of the private home in New Zealand',
      },
      whip: {
        text: 'Vehicle inspection service',
      },
      lazyazd: {
        text: 'Admin panel of the delivery service',
      },
      lazyaz: {
        text: 'Web platform for the delivery service',
      },
      glyphs: {
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
  vlog: {
    description:
      "<0>Hi there! {{0}}</0><0>My name is Michael. I've been professionally engaged in frontend development for 8 years. I went from junior coder to lead developer. I work for the New Zealand digital company 7 glyphs Ltd. {{1}}</0><0>In April 2023 I moved from Russia to New Zealand, since then I have been building relationships with hobbits and alpacas {{2}}</0><0>On this channel, I share my journey in programming and life, as well as my experience and knowledge. I hope it will be interesting and, perhaps, even a little useful{{3}}</0><0>Peace and love to everyone {{3}}",
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
    newYear: '<0>Happy New Year 2024</0>',
    halloween: 'Happy <0>Halloween</0>',
  },
}

export default EN
