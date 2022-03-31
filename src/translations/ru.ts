const common = {
  title: {
    home: 'Главная',
    about: 'Обо мне',
    skills: 'Навыки',
    experience: 'Опыт',
    portfolio: 'Портфолио',
    contact: 'Контакты',
    language: 'Русский',
  },
  occupationLead: 'Ведущий фронтенд разработчик',
  portfolio: {
    scratchDevelopment: 'Разработка с нуля',
    support: 'поддержка проекта',
  },
}

const RU = {
  title: common.title,
  month: {
    september: 'сентябрь',
    october: 'октябрь',
    november: 'ноябрь',
    december: 'декабрь',
    january: 'январь',
    february: 'февраль',
    april: 'апрель',
    march: 'март',
    may: 'май',
    june: 'июнь',
    july: 'июль',
    august: 'август',
  },
  home: {
    hi: {
      morning: 'Доброе утро',
      afternoon: 'Добрый день',
      evening: 'Добрый вечер',
      night: 'Доброй ночи',
    },
    iam: 'Я',
    occupation: {
      part1: 'фронтенд',
      part2: 'разработчик',
    },

    subtitle: 'Баннер',
  },
  about: {
    text: 'Занимаюсь <0>фронтенд разработкой</0> и обучением. Создаю проекты любой сложности с нуля. Воплощаю в жизнь {{0}} идеи',
    feature: {
      projects: {
        label: 'Разработал {{0}} коммерческих проектов',
        text: `В моем портфолио зарубежные и отечественные коммерческие проекты - от одностраничных лендингов до крупных веб-приложений. Большинство из них в <0>${common.title.portfolio}</0>`,
      },
      position: {
        label: 'Ведущий разработчик и ментор',
        text: `Разрабатываю проекты с нуля, пишу бизнес-логику, верстаю, оптимизирую и поддерживаю код. Планирую и оцениваю задачи, провожу код-ревью и обучаю. Подробнее в <0>${common.title.skills}</0>`,
      },
      experience: {
        label: 'Опыт разработки {{0}} лет',
        text: `Первый сайт сделал в {{0}} лет. Прошел путь от верстальщика до тимлида фронтенд разработки. Работаю в новозеландской компании и даю консультации по фронтенд разработке. Подробнее в <0>${common.title.experience}</0>`,
      },
      organizing: {
        label: 'Организованный и автономный',
        text: 'Большинство проектов я разработал самостоятельно. Мне нравится брать на себя всю клиентскую часть проекта от обсуждения концепции до финальной реализации и поддержки на продакшне',
      },
      programming: {
        label: 'Люблю программировать',
        text: 'Фронтенд - мое основное хобби. Экспериментирую с {{0}} и {{1}}. Интересуюсь кроссплатформенной и бекенд-разработкой. Планирую запустить собственный блог',
      },
      growing: {
        label: 'Постоянно учусь',
        text: 'Регулярно "затачиваю пилу", изучаю новые технологии, документации, статьи, курсы, книги и доклады. В постоянном поиске новых методов и инструментов повышения моей эффективности',
      },
      perfect: {
        label: 'Склонный к перфекционизму',
        text: 'Высокое качество - мой главный принцип. В каждый проект я вкладываю всего себя. Сила дедлайна, опыт и мысль "все хорошо, что в меру" помогают мне сосредоточиться на скорости и результате',
      },
      education: {
        label: 'Два высших образования',
        text: 'Окончил "Московский технологический университет" и "Всероссийский государственный институт кинематографии" {{0}}. Учеба в последнем хорошо прокачала мои гибкие навыки',
      },
      sport: {
        label: 'Занимаюсь спортом',
        text: 'Физические нагрузки особенно актуальны для разработчика и каждый день я занимаюсь спортом. Мне нравится калистеника, велосипед, бег, хайкинг и фитнес. Недавно открыл для себя и полюбил серфинг',
      },
      travel: {
        label: 'Путешественник',
        text: 'Побывал в {{0}} странах. В восторге от Японии и Новой Зеландии. Взобрался на вершину Фудзиямы, посетил Хоббитон и остался жив после встречи с диким медведем на Перевале Дятлова {{1}}',
      },
      love: {
        label: 'Счастливый муж',
        text: '<0>Она</0> - мой главный источник вдохновения и лучший друг. Мы вместе уже {{0}} лет. Однажды я разработал прогрессивное веб-приложение для предложения ей руки и сердца {{1}}',
      },
      coffee: {
        label: 'Кофеман',
        text: '"Программист - это человек, превращающий кофе в код" {{0}}. Свой рабочий день я начинаю с кружечки ароматного кофе. После поездки в Японию полюбил чай матча',
      },
    },
    subtitle: 'Аватар и социальные сети',
  },
  skills: {
    text: 'Разрабатываю приложения, админки, лендинги и многостраничные сайты. Основной стек - <0>{{0}}</0> + <0>{{1}}</0> + <0>{{2}}</0>',
    feature: {
      interface: {
        label: 'Создаю надежные и правильно работающие интерфейсы',
        text: 'Реализую систему элементов интерфейса с удобным взаимодействием и продуманной бизнес-логикой. Забочусь о кроссбраузерности, безопасности и обрабатываю возможные ошибки',
      },
      performance: {
        label: 'Пишу современный и производительный код',
        text: 'Использую стандарты {{0}}, {{1}}, {{2}}, {{3}}... Оптимизирую тяжелые вычисления. Избегаю лишних операций и утечек памяти. Применяю техники улучшения производительности',
      },
      efficient: {
        label: 'Выбираю простой способ решения задачи',
        text: 'Для любой задачи стараюсь найти понятное и оптимальное решение. Знаю в каких случаях нужно использовать конкретный метод, паттерн, библиотеку или инструмент',
      },
      markup: {
        label: 'Верстаю семантично, кроссбраузерно и {{0}}',
        text: 'Верстаю макеты пиксель в пиксель. Использую семантичные теги, не болею "диватозом" {{0}}. Тестирую во всех современных браузерах. Забочусь о доступности. Верстаю письма',
      },
      patterns: {
        label: 'Применяю множество паттернов и приемов',
        text: 'Мемоизация, виртуализация, ленивая загрузка, деструктуризация, декоратор, каррирование, делегирование, рекурсия, модуль, фабрика, наблюдатель, прокси, примесь, троттлинг, дебаунс..',
      },
      modules: {
        label: 'Создаю модульную и понятную архитектуру проекта',
        text: 'Избегаю чрезмерной вложенности, следую принципу разделения ответственности, {{0}} и {{1}}. Каждый модуль, класс или компонент отвечает за один набор функций. Конфигурирую систему сборки проекта',
      },
      tools: {
        label: 'Использую актуальные фреймворки, библиотеки и инструменты',
        text: 'Регулярно слежу за обновлениями технологий и в постоянном поиске новых. Помимо <0>основных</0> пользуюсь многими вспомогательными библиотеками и инструментами',
      },
      responsive: {
        label: 'Реализую адаптивный интерфейс и анимации',
        text: 'Применяю подходы {{0}}. Тестирую интерфейс на каждом пикселе от минимальной до максимальной ширины экрана. Создаю производительные {{1}}, {{2}} и {{3}} анимации',
      },
      code: {
        label: 'Соблюдаю единый стиль кода',
        text: 'Пишу самодокументируемый код в декларативном стиле. Изучаю практики популярных стайлгайдов. Использую {{0}} и {{1}}. Читаемый код важнее быстрого',
      },
      test: {
        label: 'Оптимизирую, тестирую и рефакторю',
        text: 'Проверяю работу проекта в различных браузерах и устройствах. Замеряю и ускоряю загрузку ресурсов. Минифицирую и оптимизирую файлы, изображения. Провожу рефакторинг кода',
      },
      tasks: {
        label: 'Планирую, декомпозирую и документирую',
        text: 'Планирую бэклог, группирую, декомпозирую и оцениваю задачи. Применяю методологии {{0}} и {{1}}. Пользуюсь таск-менеджерами. Пишу документацию',
      },
      mentor: {
        label: 'Провожу код-ревью и обучаю',
        text: 'Занимаюсь менторством, даю обратную связь по пулл-реквестам и делюсь опытом с коллегами. Разработал корпоративную программу стажировки. Есть опыт проведения собеседований',
      },
    },
    subtitle: 'Технологии',
    technologyGroup: {
      logic: 'Логика',
      markup: 'Разметка',
      styles: 'Стили',
      tools: 'Утилиты',
      misc: 'Разное',
      software: 'Программы',
      hardware: 'Инструменты',
    },
    learn: 'Изучаю',
  },
  experience: {
    text: `<0>${common.occupationLead}</0> в <1>{{0}}</1> Профессионально занимаюсь фронтенд разработкой {{1}} лет. Работаю удаленно`,
    duties: 'Обязанности',
    achievements: 'Достижения',
    current: 'Текущая должность',
    occupation: {
      lead: common.occupationLead,
      senior: 'Сеньор фронтенд разработчик',
      middle: 'Фронтенд разработчик',
      junior: 'Джуниор фронтенд разработчик',
      consult: 'Консультант фронтенд разработки',
      support: 'Инженер технической поддержки',
    },
    job: {
      duty: {
        logicApps: 'Разработка бизнес-логики приложений',
        logicAppsSites: 'Разработка бизнес-логики приложений и сайтов',
        logicModules: 'Разработка бизнес-логики компонентов приложения',
        structureApps: 'Создание архитектуры приложений',
        structureProjects: 'Создание архитектуры проектов',
        responsive: 'Кроссбраузерная и адаптивная верстка',
        rest: 'Работа с {{0}}',
        restSocket: 'Работа с {{0}} и {{1}}',
        refactor: 'Рефакторинг и сопровождение кода',
        scratch: 'Разработка проектов с нуля',
        support: 'Поддержка проектов',
        tasks: 'Декомпозиция и оценка задач',
        tasksTeam: 'Планирование, декомпозиция и оценка задач команды',
        manage: 'Управление и развитие команды',
        review: 'Проведение код-ревью и собеседований',
        serviceDesk: 'Регистрация и обработка обращений в {{0}}',
        hardwareFix:
          'Решение проблем программного обеспечения и периферийного оборудования',
        hardwareInstall:
          'Установка и настройка программного обеспечения и периферийного оборудования',
        consult: 'Консультирование сотрудников по техническим вопросам',
      },
      achievement: {
        resultCorporate:
          'Разработал несколько масштабных приложений для крупных заказчиков',
        resultForeign:
          'Разработал с нуля множество разноплановых зарубежных проектов',
        resultApp:
          'Разработал множество компонентов и разделов для крупного приложения',
        pathLead: 'Прошел путь от рядового разработчика до тимлида',
        pathFront: 'Вырос из верстальщика во фронтенд разработчика',
        internship: 'Разработал корпоративную программу стажировки',
        mentor: 'Обучил несколько стажеров',
        mobile: 'Разработал корпоративное мобильное приложение на {{0}}',
        design: 'Создал несколько утвержденных дизайн-макетов',
        interview:
          'Провел множество собеседований и нанял дюжину достойных разработчиков',
        technologies:
          'Изучил и применил на практике большое количество технологий и библиотек',
        technologiesBase: 'Прокачал {{0}}, {{1}} и {{2}}',
        speed:
          'Поставил личный рекорд скорости завершения проекта - {{0}} день',
        independent: 'Достиг высокого уровня автономности и организованности',
        english: 'Прокачал английский, сотрудничая с иностранными заказчиками',
        testimonials: 'Получил много лестных отзывов от коллег и заказчиков',
        work: 'Развил навык работы в команде',
        orders: 'Обработал тысячи заявок',
        hardware: 'Приобрел большой опыт работы с софтом и железом',
        softSkills: 'Прокачал коммуникативные навыки',
      },
      feature: {
        busyFull: 'полная занятость',
        busyPart: 'частичная занятость',
        remote: 'удаленно',
        office: 'офис',
        moscow: 'Москва, Россия',
        auckland: 'Окленд, Новая Зеландия',
      },
    },
    subtitle: 'Этапы',
    next: 'Вперед',
    back: 'Назад',
    refresh: 'Обновить',
    continue: 'Продолжение следует ✌️',
    stepper: {
      step1: 'Работал <0>инженером технической поддержки</0> в компании {{0}}',
      step2: 'Расширял кругозор в других сферах деятельности {{0}}',
      step3:
        'Параллельно с учебой в институте создавал пет-проекты и учился программировать',
      step4:
        'Прошел интервью, выполнил тестовые задания и устроился <0>верстальщиком</0> в компанию {{0}}',
      step5: 'Работал <0>верстальщиком</0> в {{0}}',
      step6:
        'Получил повышение до <0>фронтенд разработчика</0> в компании {{0}}',
      step7:
        'Работал <0>фронтенд разработчиком</0> в {{0}}. В свободное время делал коммерческий проект для компании {{1}}',
      step8:
        'Получил оффер от компании {{0}} на должность <0>фронтенд разработчика</0>. Принял решение перейти из {{1}} в {{2}}',
      step9: 'Работал <0>фронтенд разработчиком</0> в {{0}}',
      step10:
        'Договорился с {{0}} о продолжении сотрудничества по проектам в режиме частичной занятости. Получил несколько офферов на позицию <0>фронтенд разработчика</0>, выбрал компанию {{1}}',
      step11: 'Работал <0>фронтенд разработчиком</0> в {{0}}',
      step12: 'Стал <0>сеньор фронтенд разработчиком</0> в компании {{0}}',
      step13: 'Работал <0>сеньор фронтенд разработчиком</0> в {{0}}',
      step14:
        'Расширил зону ответственности и получил повышение до <0>ведушего фронтенд разработчика</0> в компании {{0}}',
      step15:
        'Работал <0>ведущим фронтенд разработчиком</0> в {{0}}. Продолжал сотрудничество по проектам с {{1}}',
      step16:
        'Переключился на мобильную разработку. С нуля разработал кроссплатформенное корпоративноке мобильное приложение и зарелизил его в магазинах {{0}} и {{1}}. Набрал команду для дальнейшего развития приложения',
      step17:
        'Получил предложение от {{0}} на должность <0>ведущего фронтенд разработчика</0> с возможностью релокейта в Новую Зеландию. Завершил все задачи, передал проекты преемнику в {{1}} и принял предложение о переходе в {{0}}',
      step18:
        'Работаю <0>ведущим фронтенд разработчиком</0> в новозеландской компании {{0}} Даю консультации по фронтенд разработке',
    },
  },
  portfolio: {
    limit: 'Проекты, выпущенные в продакшн и разрешенные к показу',
    developed: 'Разработано в',
    filter: {
      all: 'Все',
      app: 'Приложение',
      site: 'Сайт',
      landing: 'Лендинг',
      admin: 'Админка',
    },
    feature: {
      wholeDevelopment: `${common.portfolio.scratchDevelopment}, развитие, ${common.portfolio.support}`,
      scratchGrowthDevelopment: `${common.portfolio.scratchDevelopment}, ${common.portfolio.support}`,
      scratchDevelopment: common.portfolio.scratchDevelopment,
      growthSupportDevelopment: `Развитие, ${common.portfolio.support}`,
      markupBusinessLogic: 'Верстка и разработка части бизнес-логики',
      jqueryReact: 'Переписывание кодовой базы с {{0}} на {{1}}',
      leadWork: 'Тимлид команды фронтенд разработки',
      teamWork: 'Член команды разработки',
      soloWork: 'Самостоятельная разработка',
      responsive: 'адаптивный интерфейс',
      emails: 'верстка писем',
      design: 'прототипирование и дизайн',
      animations: 'Анимации',
      businessLogic: 'Обширная бизнес-логика',
      pwa: 'прогрессивное веб-приложение',
      firstProject: 'Первый коммерческий проект',
      firstScratchProject: 'Первый коммерческий проект, написанный с нуля',
      spa: 'Превратил сайт в одностраничное приложение',
      tryOne: `Поработал с {{0}}`,
      tryTwo: `Поработал с {{0}} и {{1}}`,
      tryThree: `Поработал с {{0}}, {{1}} и {{2}}`,
      tryOneGraph: `Поработал с {{0}} и графиками`,
      sellHouse: 'Дом успешно продан',
      formsTables: 'Много форм и таблиц',
      darkTheme: 'Темная тема',
      dynamicFormsRouting: 'Динамические формы, собственный роутинг',
      mobileDevelopment: 'Зарелизил приложение в {{0}} и {{1}}',
      fastDevelopment: 'Быстрая разработка',
    },
    project: {
      madfit: {
        text: 'Лендинг и сервис оформления подписок для мобильного фитнес-приложения',
      },
      madfitp: {
        text: 'Небольшая система управления контентом для мобильного фитнес-приложения',
      },
      vibe: {
        text: 'Лендинг новозеландского маркетинг диджитал-агентства',
      },
      tradease: {
        text: 'Новозеландский сайт управления строительными заказами',
      },
      t1online: {
        type: 'Мобильное приложение',
        text: 'Корпоративное мобильное приложение для сотрудников компании',
      },
      ninjal: {
        text: 'Лендинг новозеландского сервиса найма водителей грузовиков',
      },
      ninja: {
        text: 'Новозеландский сервис найма водителей грузовиков',
      },
      celebration: {
        text: 'Новогоднее мини-приложение для поздравления сотрудников компании',
      },
      ally: {
        text: 'Лендинг мобильного приложения для интерактивных фигурок {{0}}',
      },
      presentmel: {
        text: 'Лендинг новозеландского сервиса создания профиля соискателя',
      },
      presentmep: {
        text: 'Админка новозеландского сервиса создания профиля соискателя',
      },
      presentme: {
        text: 'Новозеландский сервис создания профиля соискателя',
      },
      dropdrone: {
        text: 'Сайт новозеландского сельскохозяйственного стартапа',
      },
      hatched: {
        text: 'Лендинг мобильного приложения-трекера для новорожденных малышей',
      },
      uls: {
        title: 'Единый Кабинет Пользователя',
        text: 'Единый кабинет пользователей компании {{0}}',
      },
      proximal: {
        text: 'Лендинг австралийской кофейни',
      },
      embp: {
        title: 'ЕМБП',
        text: 'Админка биометрической платформы для банка ВТБ',
      },
      tmf: {
        text: 'Сайт новозеландской строительной компании',
      },
      lite: {
        text: 'Лендинг сервиса новозеландского диджитал-агентства',
      },
      melissa: {
        text: 'Лендинг фитнес-блогера',
      },
      foodp: {
        text: 'Портал новозеландского сервиса заказа дисконтной еды в ресторанах',
      },
      food: {
        text: 'Лендинг новозеландского сервиса заказа дисконтной еды в ресторанах',
      },
      sds: {
        text: 'Корпоративный сервис для работы с документооборотом компании {{0}}',
      },
      strong: {
        text: 'Сайт мобильного фитнес-приложения',
      },
      glyphs2: {
        text: 'Домашний сайт новозеландского диджитал-агентства',
      },
      rogue: {
        text: 'Новозеландский сервис группового бронирования авиабилетов и отелей',
      },
      trucks: {
        text: 'Новозеландский сервис мониторинга передвижения грузовиков',
      },
      services: {
        text: 'Лендинг комплексных услуг новозеландского диджитал-агентства',
      },
      fcdc: {
        text: 'Админка сервиса управления мероприятиями',
      },
      saffron: {
        text: 'Целевая страница для продажи частного дома в Новой Зеландии',
      },
      whip: {
        text: 'Новозеландский сервис техосмотра автомобилей',
      },
      lazyazd: {
        text: 'Админка новозеландского сервиса доставки товаров',
      },
      lazyaz: {
        text: 'Веб-платформа новозеландского сервиса доставки товаров',
      },
      glyphs: {
        text: 'Домашний сайт новозеландского диджитал-агентства',
      },
      msp: {
        title: 'Бизнес-навигатор МСП',
        text: 'Сервис для предпринимателей, которые хотят открыть или расширить свой бизнес',
      },
    },
    subtitle: 'Скриншоты',
    screenshot: 'Скриншот',
    mobile: 'мобильного',
    screen: 'экрана проекта',
  },
  contact: {
    text: {
      part1: 'Нужна моя <0>помощь</0>',
      part2: 'Есть ко мне <0>предложение</0>',
      part3:
        'Отправьте мне <0>сообщение</0> на <1>{{0}}</1> или воспользуйтесь формой',
    },
    marker: 'Сейчас я живу здесь',
    form: {
      name: 'Имя',
      message: 'Сообщение',
      send: 'Отправить',
    },
    success: {
      thank: 'Сообщение отправлено. Спасибо',
      sent: 'Сообщение отправлено',
      callback: 'В ближайшее время я свяжусь с вами',
      ok: 'Хорошо',
    },
  },
  copyright: {
    crafted: 'Разработано',
    me: 'мной',
    with: 'с',
  },
  other: {
    more: 'Подробнее',
    see: 'Посмотреть',
    error: 'Ошибка соединения с сервером',
  },
}

export default RU
