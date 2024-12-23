const common = {
  title: {
    home: 'Главная',
    about: 'Обо мне',
    skills: 'Навыки',
    experience: 'Опыт',
    portfolio: 'Портфолио',
    vlog: 'Влог',
    contact: 'Контакты',
    language: 'Русский',
  },
  occupationLead: 'Ведущий фронтенд разработчик',
  portfolio: {
    scratchDevelopment: 'Разработка с нуля',
    support: 'поддержка проекта',
  },
  projects: {
    ally: 'Лендинг мобильного приложения для интерактивных фигурок {{0}}',
    cmsFit: 'Cистема управления контентом для мобильного фитнес-приложения',
  },
}

const RU = {
  title: common.title,
  month: {
    january: 'январь',
    february: 'февраль',
    march: 'март',
    april: 'апрель',
    may: 'май',
    june: 'июнь',
    july: 'июль',
    august: 'август',
    september: 'сентябрь',
    october: 'октябрь',
    november: 'ноябрь',
    december: 'декабрь',
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
      part3: 'ютубер',
    },

    subtitle: 'Баннер',
  },
  about: {
    text: `Я инженер-программист, занимаюсь <0>фронтенд разработкой</0>. Создаю <1>проекты</1> любой сложности и воплощаю в жизнь {{0}} идеи. Веду собственный <2>${common.title.vlog}</2> на <3>{{2}}</3>. Живу в Окленде, Новая Зеландия`,
    feature: {
      projects: {
        label: 'Разработал {{0}} коммерческих проектов',
        text: `В моем портфолио разноплановые коммерческие проекты - от одностраничных лендингов до крупных веб-приложений. Большинство из них в <0>${common.title.portfolio}</0>`,
      },
      position: {
        label: 'Ведущий фронтенд разработчик',
        text: `Разрабатываю проекты с нуля, пишу бизнес-логику, верстаю, оптимизирую и поддерживаю код. Планирую и оцениваю задачи, провожу код-ревью и обучаю. Подробнее в <0>${common.title.skills}</0>`,
      },
      vlogger: {
        label: 'Автор роликов на {{0}}',
        extraLabel: 'и автор роликов на {{0}}',
        text: `Запустил собственный канал на {{1}}. Рассказываю о своем пути в программировании и жизни, а также делюсь опытом и знаниями. Подробнее во <0>${common.title.vlog}</0> или на <1>{{1}}</1>`,
      },
      experience: {
        label: 'Опыт разработки {{0}} лет',
        text: `Первый сайт сделал в {{0}} лет. Прошел путь от верстальщика до тимлида фронтенд разработки. Работаю в новозеландской компании и консультирую по фронтенд разработке. Подробнее в <0>${common.title.experience}</0>`,
      },
      organizing: {
        label: 'Организованный и автономный',
        text: 'Большинство проектов я разработал самостоятельно. Мне нравится брать на себя всю клиентскую часть проекта от обсуждения концепции до финальной реализации и поддержки на продакшне',
      },
      programming: {
        label: 'Люблю программировать',
        text: `Фронтенд - мое основное хобби. Экспериментирую с {{0}} и {{1}}. Интересуюсь кроссплатформенной и бекенд-разработкой. Мой <0>${common.title.vlog}</0> также связан с программированием`,
      },
      growing: {
        label: 'Постоянно учусь',
        text: 'Регулярно "затачиваю пилу", изучаю новые технологии, документации, статьи, курсы, ролики, книги и доклады. В постоянном поиске новых методов и инструментов повышения моей эффективности',
      },
      perfect: {
        label: 'Склонный к перфекционизму',
        text: 'Высокое качество - мой главный принцип. В каждый проект я вкладываю всего себя. Сила дедлайна, опыт и мысль "все хорошо, что в меру" помогают мне сосредоточиться на скорости и результате. Немного душнила',
      },
      education: {
        label: 'Два высших образования',
        text: 'Окончил "Московский государственный университет приборостроения и информатики" и "Всероссийский государственный институт кинематографии". Учеба в последнем хорошо прокачала мои гибкие навыки',
      },
      actor: {
        label: 'Бывший профессиональный актер',
        text: 'Когда-то я снимался в кино, сериалах и рекламе, проводил мероприятия ведущим, подрабатывал аниматором и играл в учебном театре. Но после опомнился и ушел в программирование',
      },
      sport: {
        label: 'Занимаюсь спортом',
        text: 'Физические нагрузки особенно актуальны для разработчика и каждый день я занимаюсь спортом. Мне нравится калистеника, велосипед, бег, хайкинг и фитнес. Недавно открыл для себя серфинг',
      },
      travel: {
        label: 'Путешественник',
        text: 'Побывал в {{0}} странах. Релоцировался в Новую Зеландию. Когда-то взобрался на вершину Фудзиямы, посетил Хоббитон и остался жив после встречи с диким медведем на Перевале Дятлова',
      },
      love: {
        label: 'Счастливый муж',
        text: '<0>Она</0> - мой главный источник вдохновения и лучший друг. Мы вместе уже {{0}} лет. Однажды я разработал прогрессивное веб-приложение для предложения ей руки и сердца',
      },
      coffee: {
        label: 'Кофеман',
        text: '"Программист - это человек, превращающий кофе в код". Свой рабочий день я начинаю с кружечки ароматного кофе. После поездки в Японию полюбил чай матча',
      },
    },
    subtitle: 'Аватар и социальные сети',
  },
  skills: {
    text: 'Разрабатываю <0>приложения</0>, <1>многостраничные сайты</1>, <2>лендинги</2> и <3>админки</3>. Любимый стек - <4>{{0}}</4> + <4>{{1}}</4> + <4>{{2}}</4> + <4>{{3}}</4>. Делаю <5>{{4}}-ролики</5> в {{5}}',
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
        text: 'Для любой задачи нахожу понятное и оптимальное решение. Знаю в каких случаях нужно использовать конкретный метод, паттерн, библиотеку или инструмент',
      },
      markup: {
        label: 'Верстаю семантично, кроссбраузерно и {{0}}',
        text: 'Верстаю макеты пиксель в пиксель. Использую семантичные теги, не болею "диватозом". Тестирую во всех современных браузерах. Забочусь о доступности. Верстаю письма',
      },
      patterns: {
        label: 'Применяю множество паттернов и приемов',
        text: 'Использую мемоизацию, виртуализацию, ленивую загрузку, деструктуризацию, декоратор, каррирование, делегирование, рекурсию, модуль, фабрику, наблюдатель, прокси, примесь, троттлинг, дебаунс..',
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
        label: 'Планирую и декомпозирую задачи',
        text: 'Планирую бэклог, группирую, декомпозирую и оцениваю задачи. Применяю методологии {{0}} и {{1}}. Пользуюсь таск-менеджерами',
      },
      mentor: {
        label: 'Провожу код-ревью и обучаю',
        text: 'Занимаюсь менторством, даю обратную связь по пулл-реквестам и делюсь опытом. Разработал корпоративную программу стажировки. Есть опыт проведения собеседований',
      },
      vlog: {
        label: 'Создаю ролики для {{0}}',
        text: 'Пишу и редактирую сценарий, планирую съемку, снимаю, монтирую, делаю цветокоррекцию, обрабатываю звук, создаю обложки и публикую видео',
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
  },
  experience: {
    text: `<0>${common.occupationLead}</0> в <1>{{0}}</1>. Профессионально занимаюсь фронтенд разработкой {{1}} лет. Рассказываю о своем пути в программировании и жизни, а также делюсь опытом и знаниями в своем <2>${common.title.vlog}е</2>`,
    projects: 'Проекты',
    tools: 'Основные технологии',
    duties: 'Ключевые обязанности',
    achievements: 'Достижения',
    current: 'Текущая должность',
    occupation: {
      lead: common.occupationLead,
      teamLead: 'Руководитель команды фронтенд разработки',
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
          'Успешно разработал несколько масштабных приложений для крупных заказчиков',
        resultForeign:
          'Успешно разработал с нуля множество разноплановых зарубежных проектов',
        resultApp:
          'Успешно разработал множество компонентов и разделов для крупного приложения',
        pathLead: 'Прошел путь от рядового разработчика до тимлида',
        pathFront: 'Вырос из верстальщика во фронтенд разработчика',
        internship: 'Разработал корпоративную программу стажировки',
        mentor: 'Обучил несколько стажеров',
        mobile:
          'Разработал корпоративное мобильное приложение на {{0}} и самостоятельно зарелизил его в магазины',
        interview:
          'Провел множество собеседований и нанял дюжину разработчиков',
        technologies:
          'Изучил и применил на практике большое количество технологий и библиотек',
        technologiesBase: 'Прокачал {{0}}, {{1}} и {{2}}',
        speed:
          'Поставил личный рекорд скорости завершения проекта - {{0}} день',
        independent: 'Достиг высокого уровня автономности и организованности',
        visa: 'Релоцировался в Новую Зеландию по рабочей визе от компании',
        work: 'Развил навык работы в команде',
        orders: 'Обработал тысячи заявок',
        hardware: 'Приобрел большой опыт работы с софтом и железом',
        softSkills: 'Прокачал коммуникативные навыки',
        architecture:
          'Спроектировал собственную идеальную архитектуру для веб-приложений',
        animations:
          'Разработал несколько лендингов с продвинутой красивой анимацией',
        interfaces:
          'Создал большое количество многофункциональных интерфейсов с кастомными графиками, аналитикой, таблицами, формами и дэшбордами',
        businessLogic:
          'Разработал крупное финансовое приложение с обширной бизнес-логикой и сложными математическими расчетами и формулами на клиенте',
      },
      feature: {
        busyFull: 'полная занятость',
        busyPart: 'частичная занятость',
        remote: 'удаленно',
        office: 'в офисе',
        hybrid: 'гибридный график',
        moscow: 'Москва, Россия',
        auckland: 'Окленд, Новая Зеландия',
      },
    },
    subtitle: 'Этапы',
    next: 'Вперед',
    back: 'Назад',
    refresh: 'Обновить',
    continue: 'Продолжение следует',
    stepper: {
      step1:
        'Сделал первый многостраничный сайт в {{0}} лет. Закончил школу и поступил в "Московский государственный университет приборостроения и информатики". Параллельно с учебой в МГУПИ устроился <0>инженером технической поддержки</0> в компанию {{1}}',
      step2: 'Работал <0>инженером технической поддержки</0> в компании {{0}}',
      step3:
        'Окончил МГУПИ. Расширял кругозор в других сферах деятельности. Решил стать актером и поступил во "Всероссийский государственный институт кинематографии"',
      step4:
        'Параллельно с учебой во ВГИК создавал пет-проекты и учился программировать',
      step5:
        'Прошел интервью, выполнил тестовые задания и устроился <0>верстальщиком</0> в компанию {{0}}',
      step6: 'Работал <0>верстальщиком</0> в {{0}}',
      step7:
        'Получил повышение до <0>фронтенд разработчика</0> в компании {{0}}',
      step8:
        'Работал <0>фронтенд разработчиком</0> в {{0}}. В свободное время делал коммерческий проект для компании {{1}}',
      step9:
        'Получил оффер от компании {{0}} на должность <0>фронтенд разработчика</0>. Принял решение перейти из {{1}} в {{2}}',
      step10:
        'Работал <0>фронтенд разработчиком</0> в {{0}}. Окончил ВГИК и получил второе высшее образование',
      step11:
        'Договорился с {{0}} о продолжении сотрудничества по проектам в режиме частичной занятости. Получил несколько офферов на позицию <0>фронтенд разработчика</0>, выбрал компанию {{1}}',
      step12: 'Работал <0>фронтенд разработчиком</0> в компании {{0}}',
      step13: 'Стал <0>сеньор фронтенд разработчиком</0> в компании {{0}}',
      step14: 'Работал <0>сеньор фронтенд разработчиком</0> в {{0}}',
      step15:
        'Расширил зону ответственности и получил повышение до <0>руководителя команды фронтенд разработки</0> в компании {{0}}',
      step16:
        'Работал <0>руководителем команды фронтенд разработки</0> в {{0}}. Продолжал сотрудничество по проектам с {{1}}',
      step17:
        'Переключился на мобильную разработку. С нуля разработал кроссплатформенное корпоративноке мобильное приложение и зарелизил его в магазинах {{0}} и {{1}}. Набрал команду для дальнейшего развития приложения',
      step18:
        'Получил предложение от {{0}} на должность <0>ведущего фронтенд разработчика</0> с возможностью релокации в Новую Зеландию. Завершил все задачи, передал проекты преемнику в {{1}} и принял предложение о переходе в {{0}}',
      step19:
        'Работал <0>ведущим фронтенд разработчиком</0> в новозеландской компании {{0}}. Проводил консультации по фронтенд разработке',
      step20:
        'Переехал в Черногорию. Занимался оформлением документов для рабочей визы в Новую Зеландию от компании {{0}}. Запустил свой <0>канал на {{1}}</0>. Получил рабочую визу',
      step21:
        'Переехал в Новую Зеландию по рабочей визе от компании {{0}}. Работал, обживался, налаживал отношения с хоббитами и альпаками',
      step22:
        'Договорился с {{0}} о плавном поиске новой работы, так как компания начала сворачивать свою основную деятельность. Прошел интервью, выполнил тестовое задание и получил оффер от компании {{1}} на позицию <0>ведущего фронтенд разработчика</0>. Ждал обновления рабочей визы и параллельно сотрудничал с {{2}} по проектам',
      step23:
        'Получил обновленную рабочую визу и устроился <0>ведущим фронтенд разработчиком</0> в компанию {{0}}',
    },
  },
  portfolio: {
    limit:
      'Некоторые проекты без {{0}}, над которыми я работал и которые могу показать {{1}}',
    developed: 'Разработано в',
    filter: {
      all: 'Все',
      app: 'Приложение',
      site: 'Сайт',
      landing: 'Лендинг',
      admin: 'Админка',
    },
    mobileApp: 'Мобильное приложение',
    feature: {
      wholeDevelopment: `${common.portfolio.scratchDevelopment}, развитие, ${common.portfolio.support}`,
      scratchSupportDevelopment: `${common.portfolio.scratchDevelopment}, ${common.portfolio.support}`,
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
      newArchitecture: 'Опробовал новую модульную архитектуру проекта',
    },
    project: {
      'ally-2': {
        text: common.projects.ally,
      },
      'strongher-cms': {
        text: common.projects.cmsFit,
      },
      pridefit: {
        text: 'Страница сервиса оформления подписок для мобильного фитнес-приложения',
      },
      'ally-cms': {
        text: 'Cистема управления контентом для мобильного приложения интерактивных фигурок {{0}}',
      },
      'pridefit-cms': {
        text: common.projects.cmsFit,
      },
      madfit: {
        text: 'Лендинг и сервис оформления подписок для мобильного фитнес-приложения',
      },
      'madfit-cms': {
        text: common.projects.cmsFit,
      },
      'vibe-media': {
        text: 'Лендинг маркетинг диджитал-агентства',
      },
      tradease: {
        text: 'Сайт управления строительными заказами',
      },
      't1-online': {
        title: 'Т1 Онлайн',
        text: 'Корпоративное мобильное приложение для сотрудников компании',
      },
      'road-ninja-landing': {
        text: 'Лендинг сервиса найма водителей грузовиков',
      },
      'road-ninja': {
        text: 'Сервис найма водителей грузовиков',
      },
      celebration: {
        text: 'Новогоднее мини-приложение для поздравления сотрудников компании',
      },
      ally: {
        text: common.projects.ally,
      },
      'present-me-landing': {
        text: 'Лендинг сервиса создания профиля соискателя',
      },
      'present-me-portal': {
        text: 'Админка сервиса создания профиля соискателя',
      },
      'present-me': {
        text: 'Сервис создания профиля соискателя',
      },
      dropdrone: {
        text: 'Сайт сельскохозяйственного стартапа',
      },
      'just-hatched': {
        text: 'Лендинг мобильного приложения-трекера для новорожденных малышей',
      },
      uls: {
        text: 'Единый кабинет пользователей компании',
      },
      'proximal-coffee': {
        text: 'Лендинг кофейни',
      },
      embp: {
        title: 'ЕМБП',
        text: 'Админка биометрической платформы для банка ВТБ',
      },
      tmf: {
        text: 'Сайт строительной компании',
      },
      '7glyphs-lite': {
        text: 'Лендинг сервиса диджитал-агентства',
      },
      'melissa-chalmers': {
        text: 'Лендинг фитнес-блогера',
      },
      foodprint: {
        text: 'Мобильное приложение сервиса заказа дисконтной еды в ресторанах',
      },
      'foodprint-portal': {
        text: 'Портал сервиса заказа дисконтной еды в ресторанах',
      },
      'foodprint-landing': {
        text: 'Лендинг сервиса заказа дисконтной еды в ресторанах',
      },
      sds: {
        text: 'Корпоративный сервис для работы с документооборотом компании',
      },
      strongher: {
        text: 'Сайт мобильного фитнес-приложения',
      },
      '7glyphs-2': {
        text: 'Домашний сайт диджитал-агентства',
      },
      'rogue-travel': {
        text: 'Сервис группового бронирования авиабилетов и отелей',
      },
      'quarry-trucks': {
        text: 'Сервис мониторинга передвижения грузовиков',
      },
      'service-packages': {
        text: 'Лендинг комплексных услуг диджитал-агентства',
      },
      fcdc: {
        text: 'Админка сервиса управления мероприятиями',
      },
      '12-saffron': {
        text: 'Целевая страница для продажи частного дома в Новой Зеландии',
      },
      'whip-around': {
        text: 'Сервис техосмотра автомобилей',
      },
      'lazyaz-dashboard': {
        text: 'Админка сервиса доставки товаров',
      },
      lazyaz: {
        text: 'Веб-платформа сервиса доставки товаров',
      },
      '7glyphs': {
        text: 'Домашний сайт диджитал-агентства',
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
  vlog: {
    description:
      '<0>Всем привет! {{0}}</0><0>Меня зовут Миша. Профессионально занимаюсь фронтенд разработкой {{1}} лет. Создаю проекты любой сложности и воплощаю в жизнь UI/UX идеи. Прошел путь от верстальщика до тимлида. Работаю в новозеландской компании {{2}}</0><0>В апреле 2023 переехал из России в Новую Зеландию. {{3}}</0><0>На этом канале я рассказываю о своем пути в программировании и жизни, а также делюсь опытом и знаниями. Надеюсь, будет интересно и, может быть, даже немного полезно {{4}}</0><0>Всем мира и любви {{5}}</0>',
    sort: {
      new: 'Новые',
      old: 'Старые',
    },
    video: {
      'day-in-a-life-montenegro': {
        title:
          'Один день из жизни программиста в Черногории {{0}} Удаленная работа',
        text: 'Подробно покажу свой будний день в Черногории и как я работаю удаленно на новозеландскую компанию. Мне нравится смотреть подобные ролики, решил сделать свой',
      },
      'my-dreamdesk': {
        title: 'Мое рабочее место мечты {{0}} Новый сетап без мониторов',
        text: 'Сделал то, о чем давно мечтал - создал красивое и удобное рабочее место. В этом ролике я подробно расскажу и покажу, как оно устроено, какими девайсами я пользуюсь, почему часто работаю стоя и почему мне не нужен большой монитор',
      },
      'day-in-a-life-new-zealand': {
        title:
          'День из жизни программиста в Новой Зеландии {{0}} От первого лица',
        text: 'Мне подарили {{0}}, и когда-нибудь я буду снимать, как рассекаю на серфе по волнам Тихого океана в Новой Зеландии. А пока я приглашаю вас провести со мной один будний день в этой далекой и прекрасной стране моими глазами, то есть от первого лица',
      },
      'how-i-became-software-engineer': {
        title:
          'Как я стал программистом в 27 лет {{0}} Из актера в разработчика',
        text: 'В этом ролике я поделюсь историей о том как я кардинально сменил профессию в 27 лет и стал фронтенд разработчиком. Я расскажу о себе, с какими трудностями сталкивался, где и как учился, что мне помогало и как я нашел первую работу в {{0}}',
      },
    },
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
  message: {
    stopWar: 'Мои родственники живут в России и в Украине. <0>НЕТ ВОЙНЕ</0>',
    newYear: '<0>С Новым Годом и Рождеством!</0>',
    halloween: 'Счастливого <0>Хэллоуина</0>',
  },
}

export default RU
