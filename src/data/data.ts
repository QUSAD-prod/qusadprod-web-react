import type { SiteData } from '../types';
import airportBoardIcon from '@/assets/images/projects/airport-board.png';
import blablacarLikeIcon from '@/assets/images/projects/blablacar-like.png';
import chatgptClientIcon from '@/assets/images/projects/chatgpt-client.png';
import cryptoTerminalIcon from '@/assets/images/projects/crypto-terminal.png';
import diarySchoolIcon from '@/assets/images/projects/diary-school.png';
import grandMobileIcon from '@/assets/images/projects/grand-mobile.png';
import nftGameIcon from '@/assets/images/projects/nft-game.png';
import quizGamesIcon from '@/assets/images/projects/quiz-games.png';
import referenceBooksIcon from '@/assets/images/projects/reference-books.png';
import sleepyAlarmIcon from '@/assets/images/projects/sleepy-alarm.png';
import weatherAppIcon from '@/assets/images/projects/weather-app.png';
import monetrixIcon from '@/assets/images/projects/monetrix.png';
import reserveIcon from '@/assets/images/projects/reserve.png';
import avatarImage from '@/assets/images/avatar.jpeg';

export const siteData: SiteData = {
  personalInfo: {
    nickname: 'QUSAD.prod',
    fullName: {
      ru: 'Дмитрий Островский',
      en: 'Dmitry Ostrovsky',
    },
    position: {
      ru: 'Middle Flutter Developer',
      en: 'Middle Flutter Developer',
    },
    email: 'qusad.prod@gmail.com',
    telegram: '@prodbyqusad',
    avatar: avatarImage,
    age: 19,
    country: {
      ru: 'Россия',
      en: 'Russia',
    },
    city: {
      ru: 'Рязань',
      en: 'Ryazan',
    },
    summary: {
      ru: 'Flutter разработчик, специализируюсь на создании кроссплатформенных мобильных приложений для Android и iOS. Разрабатываю приложения с нуля: от проектирования архитектуры до публикации в магазинах. Имею опыт работы над fintech приложениями, VPN сервисами, игровыми проектами и различными мобильными решениями. Работаю с нативными API платформ, интегрирую сторонние сервисы, проектирую пользовательские интерфейсы и управляю разработкой.',
      en: 'Flutter developer specializing in cross-platform mobile application development for Android and iOS. Develop applications from scratch: from architecture design to app store publication. Have experience working on fintech applications, VPN services, game projects, and various mobile solutions. Work with native platform APIs, integrate third-party services, design user interfaces, and manage development.',
    },
  },
  workExperience: [
    {
      id: 'freelance',
      position: {
        ru: 'Flutter Developer',
        en: 'Flutter Developer',
      },
      company: {
        ru: 'Фриланс',
        en: 'Freelance',
      },
      period: '06.2021 - 09.2023',
      description: {
        ru: 'Разработка кроссплатформенных мобильных приложений на Flutter для различных сфер деятельности. Реализовано более 10 проектов с полным циклом разработки от проектирования архитектуры до публикации в магазинах приложений. Проекты включали приложения для авиации, погоды, справочники, викторины и образовательные платформы.',
        en: 'Development of cross-platform mobile applications on Flutter for various business domains. Implemented more than 10 projects with a full development cycle from architecture design to app store publication. Projects included applications for aviation, weather, directories, quizzes, and educational platforms.',
      },
      responsibilities: {
        ru: [
          'Проектирование архитектуры приложений с нуля',
          'Разработка сложных анимаций и кастомных элементов интерфейса',
          'Интеграция платежных систем и блокчейн-технологий',
          'Работа с аппаратными компонентами (принтеры, терминалы)',
        ],
        en: [
          'Application architecture design from scratch',
          'Development of complex animations and custom UI elements',
          'Payment systems and blockchain technologies integration',
          'Working with hardware components (printers, terminals)',
        ],
      },
      techStack: ['Flutter', 'Dart', 'Provider', 'Firebase', 'Hive', 'REST API', 'GraphQL', 'Dio', 'Http', 'Intl', 'Camera', 'FlutterLocalNotifications', 'GoogleSignIn', 'GoogleMobileAds', 'TrustWalletCoreLib', 'QrFlutter', 'SunmiPrinterPlus', 'OpenVpnFlutter'],
      projects: [
        {
          id: 'airport-board',
          icon: airportBoardIcon,
          title: {
            ru: 'Tiksi Avia - Табло аэропорта',
            en: 'Tiksi Avia - Airport display board',
          },
          description: {
            ru: 'Приложение для отображения информации о рейсах в аэропорту',
            en: 'Application for displaying flight information at the airport',
          },
          detailedDescription: {
            ru: 'Мобильное приложение для отображения актуальной информации о рейсах в аэропорту. Реализованы функции просмотра расписания вылетов и прилетов, фильтрация рейсов по различным параметрам, поиск по номеру рейса или направлению, push-уведомления об изменениях статуса рейсов. Интерфейс разработан в стиле VKUI для единообразия и удобства пользователей. Включает административную панель для управления расписанием и настройки уведомлений.',
            en: 'Mobile application for displaying real-time flight information at the airport. Features include viewing departure and arrival schedules, filtering flights by various parameters, searching by flight number or destination, and push notifications about flight status changes. The interface is designed in VKUI style for consistency and user convenience. Includes an administrative panel for schedule management and notification settings.',
          },
          problemSolved: {
            ru: 'Проект успешно решил проблему информирования жителей населенного пункта Тикси о расписании и статусе рейсов местной авиакомпании, обеспечив своевременные уведомления и удобный доступ к актуальной информации.',
            en: 'The project successfully addressed the information needs of Tiksi residents regarding their local airline\'s flight schedules and statuses, providing timely notifications and convenient access to up-to-date information.',
          },
          technicalChallenges: {
            ru: 'Проект потребовал реализации сложной системы фильтрации и поиска рейсов с поддержкой множественных параметров, интеграции с Firebase для синхронизации расписания в реальном времени, разработки административной панели для управления данными, а также реализации push-уведомлений с учетом различных статусов рейсов. Особую сложность представляла адаптация интерфейса под стиль VKUI для обеспечения единообразия с экосистемой VK.',
            en: 'The project required implementing a complex flight filtering and search system with support for multiple parameters, Firebase integration for real-time schedule synchronization, developing an administrative panel for data management, and implementing push notifications considering various flight statuses. Particular complexity was presented by adapting the interface to VKUI style to ensure consistency with the VK ecosystem.',
          },
          technologies: ['Flutter', 'Dart', 'Provider', 'Firebase', 'Hive', 'Http', 'REST API'],
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/QUSAD-prod/tiksi_avia',
            },
            {
              label: 'APKPure',
              url: 'https://apkpure.net/tiksiavia/com.ArtemOslopov.tiksiAvia',
            },
          ],
          period: '2022',
        },
        {
          id: 'weather-app',
          icon: weatherAppIcon,
          title: {
            ru: 'Tiksi Weather - Приложение погоды',
            en: 'Tiksi Weather - Weather application',
          },
          description: {
            ru: 'Мобильное приложение для отслеживания погодных условий',
            en: 'Mobile application for tracking weather conditions',
          },
          detailedDescription: {
            ru: 'Мобильное приложение для отслеживания погодных условий с расширенным функционалом. Реализованы функции просмотра текущей погоды и прогноза на несколько дней вперед, выбор конкретной даты для просмотра прогноза, система отправки предупреждений пользователям через push-уведомления о неблагоприятных погодных условиях. Включает административную панель для управления настройками уведомлений и конфигурации приложения. Для монетизации приложения был внедрен рекламный баннер.',
            en: 'Mobile application for tracking weather conditions with advanced features. Includes viewing current weather and multi-day forecasts, selecting specific dates to view forecasts, and a system for sending warnings to users via push notifications about adverse weather conditions. Features an administrative panel for managing notification settings and application configuration. An advertising banner was integrated for application monetization.',
          },
          technologies: ['Flutter', 'Dart', 'Provider', 'Intl', 'Http', 'REST API', 'Firebase', 'GoogleMobileAds'],
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/QUSAD-prod/tiksi_weather',
            },
            {
              label: 'APKPure',
              url: 'https://apkpure.com/ru/tiksiweather/com.ArtemOslopov.tiksi_weather',
            },
          ],
          problemSolved: {
            ru: 'Проект решил критически важную проблему для жителей поселка Тикси в Арктическом регионе, где погодные условия меняются каждые 2-3 часа. Приложение обеспечивает интерактивные обновления прогноза погоды, своевременные оповещения об опасных погодных условиях и отчеты о неблагоприятных условиях, помогая жителям быть во всеоружии и принимать обоснованные решения в условиях сурового климата.',
            en: 'The project solved a critically important problem for residents of Tiksi village in the Arctic region, where weather conditions change every 2-3 hours. The application provides interactive weather forecast updates, timely alerts about dangerous weather conditions, and reports on adverse conditions, helping residents stay prepared and make informed decisions in harsh climate conditions.',
          },
          technicalChallenges: {
            ru: 'Проект потребовал реализации системы прогнозирования погоды с выбором конкретных дат для просмотра прогноза, интеграции с внешними API для получения актуальных метеорологических данных, разработки системы умных push-уведомлений о неблагоприятных погодных условиях с настраиваемыми параметрами, создания административной панели для управления конфигурацией приложения, а также интеграции рекламного баннера для монетизации с учетом требований к пользовательскому опыту.',
            en: 'The project required implementing a weather forecasting system with specific date selection for viewing forecasts, integrating with external APIs to obtain current meteorological data, developing a smart push notification system for adverse weather conditions with configurable parameters, creating an administrative panel for application configuration management, and integrating an advertising banner for monetization while considering user experience requirements.',
          },
          period: '2021',
        },
        {
          id: 'reference-books',
          icon: referenceBooksIcon,
          title: {
            ru: 'Yana Guide - Справочник Верхоянского района',
            en: 'Yana Guide - Verkhoyansk District Directory',
          },
          description: {
            ru: 'Справочник Верхоянского района с информацией о всех наслегах',
            en: 'Verkhoyansk District directory with information about all naslegs',
          },
          detailedDescription: {
            ru: 'Мобильное приложение-справочник для Верхоянского района. Реализован полный каталог всех наслегов с информацией об административных органах, правоохранительных структурах, медицинских учреждениях, образовательных организациях, обслуживающих организациях, службах безопасности, культурных и спортивных объектах, социальной сфере и торговых точках. Приложение включает удобную строку поиска для быстрого нахождения адресов и контактов организаций. Для каждой организации доступна детальная информация: адрес, email, телефон.',
            en: 'Mobile directory application for Verkhoyansk District. Features a complete catalog of all naslegs with information about administrative bodies, law enforcement structures, medical institutions, educational organizations, service organizations, security services, cultural and sports facilities, social sphere, and retail outlets. The application includes a convenient search bar for quickly finding addresses and contacts of organizations. Detailed information is available for each organization: address, email, phone number.',
          },
          problemSolved: {
            ru: 'Проект решил проблему доступа жителей Верхоянского района к контактной информации организаций и учреждений. Приложение объединило данные всех наслегов в единый справочник, обеспечив быстрый поиск адресов и контактов административных органов, медицинских, образовательных, правоохранительных и других организаций. Это упростило взаимодействие жителей с государственными и общественными службами района.',
            en: 'The project solved the problem of access for residents of Verkhoyansk District to contact information of organizations and institutions. The application consolidated data from all naslegs into a single directory, providing quick search for addresses and contacts of administrative bodies, medical, educational, law enforcement, and other organizations. This simplified the interaction of residents with state and public services in the district.',
          },
          technicalChallenges: {
            ru: 'Проект потребовал организации большого объема данных о различных организациях и учреждениях всех наслегов района, реализации эффективной системы поиска с поддержкой множественных категорий организаций, оптимизации работы с локальным хранилищем Hive для быстрого доступа к данным, синхронизации информации через Firebase, а также создания удобной навигации по структурированным данным с детальной информацией для каждой организации.',
            en: 'The project required organizing a large volume of data about various organizations and institutions of all naslegs in the district, implementing an efficient search system with support for multiple organization categories, optimizing work with local Hive storage for quick data access, synchronizing information through Firebase, and creating convenient navigation through structured data with detailed information for each organization.',
          },
          technologies: ['Flutter', 'Dart', 'Provider', 'Hive', 'Firebase'],
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/QUSAD-prod/yana_guide',
            },
            {
              label: 'APKPure',
              url: 'https://apkpure.com/ru/yana-guide/com.ArtemOslopov.yana_guide',
            },
          ],
          period: '2022',
        },
        {
          id: 'quiz-games',
          icon: quizGamesIcon,
          title: {
            ru: 'ЯАССР 100 - Викторина к 100-летию Образования Якутской АССР',
            en: 'YASSR 100 - Quiz for the 100th Anniversary of Yakut ASSR Formation',
          },
          description: {
            ru: 'Викторина к 100-летию Образования Якутской АССР',
            en: 'Quiz for the 100th Anniversary of Yakut ASSR Formation',
          },
          detailedDescription: {
            ru: 'Мобильное приложение-викторина, посвященная 100-летию образования Якутской АССР. Викторина охватывает все районы Республики Саха (Якутия), включая вопросы из 30 районов: от Абыйского до Усть-Майского. После успешного прохождения викторины пользователи получают сертификат, который автоматически отправляется на указанную почту в течение 24 часов. Приложение поддерживает создание статусов и позволяет делиться результатами прохождения с друзьями в социальных сетях. Проект реализован при поддержке ГАУ "Сахапечать".',
            en: 'Mobile quiz application dedicated to the 100th anniversary of the formation of Yakut ASSR. The quiz covers all districts of the Republic of Sakha (Yakutia), including questions from 30 districts: from Abyysky to Ust-Maysky. After successfully completing the quiz, users receive a certificate that is automatically sent to the specified email within 24 hours. The application supports creating statuses and allows sharing quiz results with friends on social networks. The project was implemented with the support of SAU "Sakhapechat".',
          },
          technologies: ['Flutter', 'Dart', 'Provider', 'Firebase'],
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/QUSAD-prod/yaaccr100',
            },
            {
              label: 'APKPure',
              url: 'https://apkpure.com/ru/яасср-100/com.ArtemOslopov.yaaccr100',
            },
          ],
          problemSolved: {
            ru: 'Проект способствовал популяризации знаний об истории и географии Республики Саха (Якутия) в преддверии 100-летия образования Якутской АССР. Викторина охватила все 30 районов республики, предоставив жителям и гостям региона интерактивный способ изучения культурного наследия и истории Якутии. Автоматическая выдача сертификатов мотивировала пользователей к участию, а возможность делиться результатами в социальных сетях способствовала распространению знаний о республике.',
            en: 'The project contributed to the popularization of knowledge about the history and geography of the Republic of Sakha (Yakutia) in anticipation of the 100th anniversary of the formation of Yakut ASSR. The quiz covered all 30 districts of the republic, providing residents and guests of the region with an interactive way to study the cultural heritage and history of Yakutia. Automatic certificate issuance motivated users to participate, and the ability to share results on social networks contributed to the spread of knowledge about the republic.',
          },
          technicalChallenges: {
            ru: 'Проект потребовал организации большого объема вопросов из 30 районов республики, реализации системы прохождения викторины с отслеживанием прогресса, автоматической генерации и отправки персонализированных сертификатов на email в течение 24 часов, интеграции с социальными сетями для возможности делиться результатами, а также создания удобного интерфейса для навигации по вопросам различных районов с сохранением результатов прохождения.',
            en: 'The project required organizing a large volume of questions from 30 districts of the republic, implementing a quiz completion system with progress tracking, automatic generation and sending of personalized certificates to email within 24 hours, integration with social networks for sharing results, and creating a convenient interface for navigating questions from various districts with saving completion results.',
          },
          period: '2022',
        },
        {
          id: 'diary-school',
          icon: diarySchoolIcon,
          title: {
            ru: 'Где Дневник - Оболочка для электронного дневника',
            en: 'Gde Dnevnik - Electronic diary wrapper',
          },
          description: {
            ru: 'Мобильная оболочка для школьного электронного дневника Рязани и Москвы',
            en: 'Mobile wrapper for school electronic diary of Ryazan and Moscow',
          },
          detailedDescription: {
            ru: 'Мобильное приложение-оболочка для доступа к школьным электронным дневникам Рязани и Москвы. Приложение решает проблему неудобных стандартных веб-оболочек электронных дневников, предоставляя современный и интуитивно понятный мобильный интерфейс. Интерфейс разработан на основе VKUI дизайн-системы, переписанной с React на Flutter для обеспечения единообразия и знакомого пользовательского опыта. Реализована упрощенная система входа через VK ID с возможностью привязки аккаунтов, что избавляет пользователей от необходимости запоминать сложные логины и пароли. Приложение предоставляет удобный доступ к расписанию уроков, оценкам и домашним заданиям. Дополнительно реализована функциональность, позволяющая учащимся самостоятельно вносить домашние задания и заметки в дневник, если учитель не успел или не смог это сделать своевременно, обеспечивая непрерывность ведения учебной документации.',
            en: 'Mobile application wrapper for accessing school electronic diaries of Ryazan and Moscow. The application solves the problem of inconvenient standard web wrappers of electronic diaries by providing a modern and intuitive mobile interface. The interface is designed based on VKUI design system, rewritten from React to Flutter to ensure consistency and familiar user experience. Implemented simplified login system through VK ID with account linking capability, eliminating the need for users to remember complex usernames and passwords. The application provides convenient access to class schedules, grades, and homework. Additionally, functionality has been implemented that allows students to independently enter homework and notes into the diary if the teacher did not have time or was unable to do so in a timely manner, ensuring continuity of educational documentation.',
          },
          technologies: ['Flutter', 'Dart', 'MobX', 'Dio', 'REST API', 'WebViewCookieManager', 'Provider', 'WebView', 'Hive', 'Intl'],
          tags: [{ ru: '# Первый Flutter проект', en: '# First Flutter Project' }],
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/semgoSE/diary-school',
            },
            {
              label: 'VK',
              url: 'https://vk.com/gde_dnevnik',
            },
          ],
          technicalChallenges: {
            ru: 'Проект представлял особую сложность, так как это был первый большой проект и первый опыт работы с Flutter. Основные технические вызовы включали изучение Flutter фреймворка с нуля, адаптацию VKUI дизайн-системы с React на Flutter, что потребовало глубокого понимания обеих технологий и создания кастомных виджетов для воссоздания компонентов VKUI. Реализация интеграции с WebView для отображения веб-контента электронных дневников требовала работы с cookies через webview_cookie_manager и синхронизации состояния между нативным кодом и веб-контентом. Настройка авторизации через VK ID и привязка аккаунтов потребовала работы с OAuth протоколом и управления сессиями. Организация state management с использованием MobX и Provider для первого проекта создавала дополнительные сложности в понимании архитектуры приложения. Работа с локальным хранилищем Hive и интернационализацией через intl также требовала изучения новых инструментов.',
            en: 'The project presented particular complexity as it was the first large project and first experience with Flutter. Main technical challenges included learning Flutter framework from scratch, adapting VKUI design system from React to Flutter, which required deep understanding of both technologies and creating custom widgets to recreate VKUI components. Implementing WebView integration for displaying electronic diary web content required working with cookies through webview_cookie_manager and synchronizing state between native code and web content. Setting up VK ID authorization and account linking required working with OAuth protocol and session management. Organizing state management using MobX and Provider for the first project created additional complexities in understanding application architecture. Working with local Hive storage and internationalization through intl also required learning new tools.',
          },
          problemSolved: {
            ru: 'Проект решил проблему неудобства стандартных веб-оболочек электронных дневников, которые имели устаревший интерфейс и сложную систему входа. Приложение предоставило современный мобильный интерфейс с упрощенной авторизацией через VK ID и возможностью привязки аккаунтов, что значительно улучшило пользовательский опыт. Дополнительно была решена проблема несвоевременного заполнения дневников учителями - реализована функциональность, позволяющая учащимся самостоятельно вносить домашние задания и заметки, обеспечивая непрерывность ведения учебной документации и повышая актуальность информации в дневнике.',
            en: 'The project solved the problem of inconvenience of standard web wrappers of electronic diaries, which had an outdated interface and complex login system. The application provided a modern mobile interface with simplified authorization through VK ID and account linking capability, significantly improving user experience. Additionally, the problem of untimely diary filling by teachers was solved - functionality was implemented that allows students to independently enter homework and notes, ensuring continuity of educational documentation and increasing the relevance of information in the diary.',
          },
          period: '2021',
        },
        {
          id: 'sleepy-alarm',
          icon: sleepyAlarmIcon,
          title: {
            ru: 'Sleepy - Новый подход ко сну',
            en: 'Sleepy - A New Approach to Sleep',
          },
          description: {
            ru: 'Приложение для здорового сна с умным будильником',
            en: 'Healthy sleep application with smart alarm',
          },
          detailedDescription: {
            ru: 'Мобильное приложение для улучшения качества сна, основанное на анализе более 200 научных исследований. Уникальная особенность - установка времени сна вместо времени пробуждения, что позволяет просыпаться в правильной фазе сна. Реализован интуитивный круговой селектор времени, автоматический расчет времени пробуждения и установка будильника, сохранение статистики сна. Включает настройки выбора мелодии будильника и управления вибрацией. Интерфейс выполнен в материальном дизайне с темной темой.',
            en: 'Mobile application for improving sleep quality, based on the analysis of more than 200 scientific studies. Unique feature - setting sleep time instead of wake-up time, allowing to wake up in the correct sleep phase. Features an intuitive circular time selector, automatic wake-up time calculation and alarm setting, sleep statistics tracking. Includes alarm melody selection and vibration control settings. Interface designed in material design with dark theme.',
          },
          technicalChallenges: {
            ru: 'Проект потребовал глубокой проработки кастомных элементов интерфейса и плавных анимаций, а также решения сложной задачи обеспечения надежной работы будильника, включая его функционирование в беззвучном режиме и предотвращение блокировки системой.',
            en: 'The project required deep development of custom UI elements and smooth animations, as well as solving the complex task of ensuring reliable alarm functionality, including its operation in silent mode and preventing system blocking.',
          },
          problemSolved: {
            ru: 'Проект решил проблему пробуждения в неправильной фазе сна, которая приводит к чувству разбитости и усталости. Приложение помогает пользователям просыпаться в легкой фазе сна, обеспечивая более бодрое и комфортное пробуждение. Благодаря научно обоснованному алгоритму расчета времени пробуждения и отслеживанию статистики сна, пользователи могут улучшить качество своего отдыха и общее самочувствие.',
            en: 'The project solved the problem of waking up in the wrong sleep phase, which leads to feelings of fatigue and exhaustion. The application helps users wake up in the light sleep phase, ensuring a more alert and comfortable awakening. Thanks to the scientifically-based algorithm for calculating wake-up time and sleep statistics tracking, users can improve their rest quality and overall well-being.',
          },
          technologies: ['Flutter', 'Dart', 'Provider', 'Hive', 'FlutterLocalNotifications'],
          tags: [{ ru: '# Первый фриланс проект', en: '# First Freelance Project' }],
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/QUSAD-prod/sleepy',
            },
            {
              label: 'APKPure',
              url: 'https://apkpure.com/ru/sleepy-новый-подход-ко-сну/com.ArtemOslopov.sleepy',
            },
          ],
          period: '2021',
        },
        {
          id: 'chatgpt-client',
          icon: chatgptClientIcon,
          title: {
            ru: 'Photo AI Mentor - ChatGPT клиент с фотосканированием',
            en: 'Photo AI Mentor - ChatGPT client with photo scanning',
          },
          description: {
            ru: 'Клиент ChatGPT с возможностью сканирования фотографий для получения ответов (аналог Photomath, но с нейросетью)',
            en: 'ChatGPT client with photo scanning capability to get answers (analog to Photomath but with a neural network)',
          },
          detailedDescription: {
            ru: 'Инновационное для 2023 года мобильное приложение, объединяющее возможности ChatGPT с компьютерным зрением. Приложение позволяло решать не только математические уравнения, но и любые текстовые задачи - как по фотографии, так и при ручном вводе текста. Пользователи могли фотографировать учебные задачи, документы, тексты или любые вопросы, после чего приложение автоматически распознавало содержимое изображения и отправляло его в нейросеть для получения подробных ответов и решений. Приложение представляло собой инновационное решение даже для 2023 года, аналог Photomath, но с использованием возможностей нейросети для более широкого спектра задач.',
            en: 'Innovative for 2023 mobile application combining ChatGPT capabilities with computer vision. The application allowed solving not only mathematical equations, but also any text tasks - both from photos and through manual text input. Users could photograph educational tasks, documents, texts, or any questions, after which the application automatically recognized the image content and sent it to the neural network to receive detailed answers and solutions. The application was an innovative solution even for 2023, an analog to Photomath, but using neural network capabilities for a wider range of tasks.',
          },
          technologies: ['Flutter', 'Dart', 'Provider', 'Firebase', 'Camera', 'Dio', 'REST API', 'Intl', 'Hive', 'GraphQlFlutter', 'GoogleSignIn'],
          tags: [{ ru: 'Любимый проект', en: 'Favorite Project' }],
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/QUSAD-prod/photo_ai_mentor',
            },
          ],
          technicalChallenges: {
            ru: 'Проект потребовал решения сложных технических задач по реализации сканирования и обрезки фотографий с выделением текста и последующей передачей в ChatGPT. Особую сложность представляло то, что подобных решений на рынке на тот момент еще не существовало, а в России только начали узнавать о ChatGPT, что означало отсутствие готовых решений и необходимость разработки с нуля.',
            en: 'The project required solving complex technical challenges in implementing photo scanning and cropping with text extraction and subsequent transmission to ChatGPT. The particular difficulty was that similar solutions did not exist on the market at that time, and in Russia they were just beginning to learn about ChatGPT, which meant the absence of ready-made solutions and the need to develop from scratch.',
          },
          problemSolved: {
            ru: 'Проект был призван решить проблему недоступности ChatGPT для широкой аудитории в России в 2023 году и предоставить универсальный инструмент для решения различных типов задач - не только математических, как в существующих решениях типа Photomath, но и любых текстовых задач. Приложение должно было упростить доступ к возможностям нейросети через удобный мобильный интерфейс с поддержкой работы с фотографиями. К сожалению, проект не был выпущен в сторы.',
            en: 'The project was designed to solve the problem of ChatGPT inaccessibility for the general public in Russia in 2023 and provide a universal tool for solving various types of tasks - not only mathematical ones, as in existing solutions like Photomath, but also any text tasks. The application was supposed to simplify access to neural network capabilities through a convenient mobile interface with photo support. Unfortunately, the project was not released to app stores.',
          },
          period: '2023',
        },
        {
          id: 'nft-game',
          icon: nftGameIcon,
          title: {
            ru: 'Samurai Versus - NFT токен игра',
            en: 'Samurai Versus - NFT token game',
          },
          description: {
            ru: 'Игра в стиле самураев с коллекционированием уникальных NFT и развитием персонажей',
            en: 'Samurai-themed game with unique NFT collecting and character development',
          },
          detailedDescription: {
            ru: 'Игровое мобильное приложение с интеграцией NFT токенов в тематике самураев. Приложение позволяет игрокам собирать, владеть и использовать уникальные NFT токены, связанные с игровыми персонажами, оружием и предметами. Реализована игровая механика с использованием блокчейн-технологий для обеспечения уникальности и владения цифровыми активами. Игроки могут взаимодействовать с NFT коллекциями, участвовать в игровых событиях и развивать своих персонажей-самураев.',
            en: 'Mobile game application with NFT token integration in a samurai theme. The application allows players to collect, own, and use unique NFT tokens associated with game characters, weapons, and items. Game mechanics are implemented using blockchain technologies to ensure uniqueness and ownership of digital assets. Players can interact with NFT collections, participate in game events, and develop their samurai characters.',
          },
          technologies: ['Flutter', 'Dart', 'Hive', 'Provider', 'Dio', 'REST API', 'TrustWalletCoreLib', 'QrFlutter'],
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/QUSAD-prod/samurai_app',
            },
          ],
          technicalChallenges: {
            ru: 'Проект потребовал решения сложных технических задач по интеграции NFT кошелька с игровой логикой. Основные вызовы включали синхронизацию блокчейн-транзакций с игровыми механиками покупки и продажи NFT, реализацию системы фарма (добычи ресурсов) с привязкой к блокчейну, разработку сложного дизайна интерфейса для работы с NFT коллекциями и обеспечение надежной связи между игровыми событиями и блокчейн-операциями.',
            en: 'The project required solving complex technical challenges in integrating an NFT wallet with game logic. Main challenges included synchronizing blockchain transactions with game mechanics for buying and selling NFTs, implementing a farming system (resource extraction) linked to the blockchain, developing a complex interface design for working with NFT collections, and ensuring reliable connection between game events and blockchain operations.',
          },
          problemSolved: {
            ru: 'Проект был направлен на создание игрового приложения, объединяющего развлечения с возможностью владения и торговли цифровыми активами через NFT токены. Приложение должно было предоставить игрокам возможность зарабатывать и владеть уникальными игровыми предметами в формате NFT, создавая новый уровень взаимодействия с игровым контентом. К сожалению, проект не был завершен и выпущен в сторы - разработка была заморожена на этапе реализации основных механик.',
            en: 'The project was aimed at creating a game application that combines entertainment with the ability to own and trade digital assets through NFT tokens. The application was supposed to provide players with the opportunity to earn and own unique game items in NFT format, creating a new level of interaction with game content. Unfortunately, the project was not completed and released to app stores - development was frozen at the stage of implementing core mechanics.',
          },
          period: '2023',
        },
        {
          id: 'crypto-terminal',
          icon: cryptoTerminalIcon,
          title: {
            ru: 'Web 3 Pay - Терминал для криптоплатежей',
            en: 'Web 3 Pay - Terminal for cryptocurrency payments',
          },
          description: {
            ru: 'Терминальное приложение для криптовалютных платежей и печати чеков',
            en: 'Terminal application for cryptocurrency payments and check printing',
          },
          detailedDescription: {
            ru: 'Терминальное приложение для приема криптовалютных платежей с полным циклом обработки транзакций. Реализованы функции генерации QR-кодов для отображения на терминале, которые клиенты сканируют для осуществления платежа, отслеживание статуса платежа в реальном времени, автоматическая печать чеков после успешного завершения транзакции. Приложение обеспечивает безопасную обработку криптовалютных платежей и ведение истории транзакций.',
            en: 'Terminal application for accepting cryptocurrency payments with a full transaction processing cycle. Features include generating QR codes for display on the terminal, which customers scan to make payments, real-time payment status tracking, and automatic check printing after successful transaction completion. The application provides secure cryptocurrency payment processing and transaction history management.',
          },
          technologies: ['Flutter', 'Dart', 'Provider', 'Dio', 'REST API', 'Firebase', 'Intl', 'SunmiPrinterPlus'],
          tags: [{ ru: 'Любимый проект', en: 'Favorite Project' }],
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/QUSAD-prod/crypto_terminal',
            },
          ],
          technicalChallenges: {
            ru: 'Проект потребовал решения сложных технических задач по работе с Android терминалом и его встроенным принтером чеков. Основные вызовы включали интеграцию с аппаратным принтером терминала Sunmi, обеспечение надежной печати чеков с корректным форматированием, синхронизацию статусов платежей в реальном времени через Firebase, генерацию и отображение QR-кодов для сканирования клиентами, а также обработку различных сценариев транзакций и ошибок при работе с криптовалютными платежами.',
            en: 'The project required solving complex technical challenges in working with an Android terminal and its built-in receipt printer. Main challenges included integration with Sunmi terminal hardware printer, ensuring reliable receipt printing with correct formatting, real-time payment status synchronization through Firebase, generating and displaying QR codes for customer scanning, as well as handling various transaction scenarios and errors when working with cryptocurrency payments.',
          },
          problemSolved: {
            ru: 'Проект решил проблему отсутствия удобных и доступных решений для приема криптовалютных платежей через терминалы в розничной торговле. Приложение позволило бизнесу принимать платежи в криптовалюте, предоставляя клиентам простой способ оплаты через сканирование QR-кода, а продавцам - автоматическую печать чеков и отслеживание статуса транзакций в реальном времени. Это расширило возможности оплаты для предприятий и способствовало популяризации криптовалютных платежей в повседневной торговле.',
            en: 'The project solved the problem of the lack of convenient and accessible solutions for accepting cryptocurrency payments through terminals in retail trade. The application allowed businesses to accept cryptocurrency payments, providing customers with a simple payment method through QR code scanning, and sellers with automatic receipt printing and real-time transaction status tracking. This expanded payment options for businesses and contributed to the popularization of cryptocurrency payments in everyday commerce.',
          },
          period: '2023',
        },
        {
          id: 'vpn-app',
          title: {
            ru: 'Cool VPN - Приложение для безопасного VPN подключения',
            en: 'Cool VPN - Application for secure VPN connection',
          },
          description: {
            ru: 'Быстрое и безопасное VPN подключение с защитой данных и анонимностью',
            en: 'Fast and secure VPN connection with data protection and anonymity',
          },
          detailedDescription: {
            ru: 'Мобильное приложение Cool VPN для безопасного VPN подключения по протоколу OpenVPN. Приложение позволяет пользователям подключаться к предустановленным VPN серверам, обеспечивая защищенное и анонимное интернет-соединение. Реализованы функции быстрого подключения/отключения, выбор сервера из списка доступных, отображение статуса подключения и статистики использования трафика. Приложение обеспечивает шифрование трафика и защиту данных пользователей при работе в интернете.',
            en: 'Mobile application Cool VPN for secure VPN connection using OpenVPN protocol. The application allows users to connect to pre-configured VPN servers, providing secure and anonymous internet connection. Features include quick connect/disconnect, server selection from available list, connection status display, and traffic usage statistics. The application provides traffic encryption and user data protection when working on the internet.',
          },
          technologies: ['Flutter', 'Dart', 'Provider', 'Firebase', 'GoogleSignIn', 'Hive', 'OpenVpnFlutter'],
          links: [
            {
              label: 'GitHub',
              url: 'https://github.com/QUSAD-prod/cool_vpn',
            },
          ],
          technicalChallenges: {
            ru: 'Проект потребовал решения сложных технических задач по интеграции OpenVPN протокола в мобильное приложение. Основные вызовы включали работу с нативными VPN API платформ Android и iOS, управление жизненным циклом VPN подключения, обработку различных состояний подключения и ошибок, синхронизацию конфигураций серверов через Firebase, обеспечение стабильной работы VPN соединения в фоновом режиме и корректную обработку переключений между сетями.',
            en: 'The project required solving complex technical challenges in integrating OpenVPN protocol into a mobile application. Main challenges included working with native VPN APIs of Android and iOS platforms, managing VPN connection lifecycle, handling various connection states and errors, synchronizing server configurations through Firebase, ensuring stable VPN connection operation in background mode, and correctly handling network switching.',
          },
          problemSolved: {
            ru: 'Проект был направлен на решение проблемы обеспечения безопасного и анонимного доступа к интернету для пользователей мобильных устройств. Приложение должно было предоставить простой и удобный способ подключения к VPN серверам по протоколу OpenVPN, обеспечивая защиту данных пользователей, обход географических ограничений и сохранение приватности при работе в сети. К сожалению, проект не был выпущен в сторы.',
            en: 'The project was aimed at solving the problem of providing secure and anonymous internet access for mobile device users. The application was supposed to provide a simple and convenient way to connect to VPN servers using OpenVPN protocol, ensuring user data protection, bypassing geographical restrictions, and maintaining privacy when working online. Unfortunately, the project was not released to app stores.',
          },
          period: '2023',
        },
        {
          id: 'blablacar-like',
          icon: blablacarLikeIcon,
          title: {
            ru: 'Поездки РФ - Приложение для совместных поездок',
            en: 'Poezdki RF - Carpooling application',
          },
          description: {
            ru: 'Приложение для поиска и организации совместных поездок',
            en: 'Application for finding and organizing carpooling trips',
          },
          detailedDescription: {
            ru: 'Мобильное приложение для поиска и организации совместных поездок, аналогичное BlaBla Car. Приложение позволяет водителям публиковать информацию о предстоящих поездках, а пассажирам - находить и бронировать места в автомобилях. Реализованы функции поиска поездок по маршруту и дате, бронирования мест, общения между пользователями, управления профилем и историей поездок. В рамках проекта выполнялась работа по исправлению багов готового приложения, добавлению новых параметров поездки и внедрению системы push-уведомлений через Firebase для информирования пользователей о важных событиях.',
            en: 'Mobile application for finding and organizing carpooling trips, similar to BlaBla Car. The application allows drivers to publish information about upcoming trips, and passengers to find and book seats in cars. Features include searching for trips by route and date, booking seats, communication between users, profile management, and trip history. As part of the project, work was carried out to fix bugs in the existing application, add new trip parameters, and implement a push notification system through Firebase to inform users about important events.',
          },
          technologies: ['Flutter', 'Dart', 'Provider', 'Firebase'],
          links: [
            {
              label: 'APKPure',
              url: 'https://apkpure.com/fr/поездки-рф/com.sprestay.poezdkirf',
            },
          ],
          technicalChallenges: {
            ru: 'Проект потребовал работы с существующим кодом готового приложения, что представляло дополнительные сложности. Основные задачи включали исправление критических и некритических багов в различных модулях приложения, добавление новых параметров поездки в существующую структуру данных без нарушения текущей функциональности, а также интеграцию системы push-уведомлений через Firebase для информирования пользователей о бронированиях, изменениях в поездках и других важных событиях. Работа с готовым кодом требовала глубокого понимания существующей архитектуры и аккуратной интеграции новых функций.',
            en: 'The project required working with existing code of a ready-made application, which presented additional challenges. Main tasks included fixing critical and non-critical bugs in various application modules, adding new trip parameters to the existing data structure without breaking current functionality, as well as integrating a push notification system through Firebase to inform users about bookings, trip changes, and other important events. Working with existing code required deep understanding of the current architecture and careful integration of new features.',
          },
          problemSolved: {
            ru: 'Участие в проекте способствовало улучшению пользовательского взаимодействия с приложением для совместных поездок. Исправление багов повысило стабильность и надежность приложения, добавление новых параметров поездки расширило возможности для более точного описания маршрутов и условий, а внедрение push-уведомлений через Firebase обеспечило своевременное информирование пользователей о важных событиях, таких как подтверждение бронирования, изменения в поездках и сообщения от других участников. Это улучшило общий пользовательский опыт и повысило удобство использования приложения.',
            en: 'Participation in the project contributed to improving user interaction with the carpooling application. Bug fixes increased the stability and reliability of the application, adding new trip parameters expanded opportunities for more accurate description of routes and conditions, and implementing push notifications through Firebase ensured timely notification of users about important events, such as booking confirmations, trip changes, and messages from other participants. This improved the overall user experience and increased the convenience of using the application.',
          },
          period: '2023',
        },
      ],
    },
    {
      id: 'grand-mobile',
      position: {
        ru: 'Middle Flutter Developer',
        en: 'Middle Flutter Developer',
      },
      company: {
        ru: 'Dynamic Technologies TOO',
        en: 'Dynamic Technologies TOO',
      },
      period: '07.2024 - 10.2024',
      description: {
        ru: 'Разработка кроссплатформенной игровой версии MMORPG Grand Mobile на Flutter. Dynamic Technologies TOO - компания, владеющая игрой Grand Mobile. Проект включал полную миграцию игрового движка с нативных платформ на единую кроссплатформенную кодовую базу, реализацию новых игровых функций и создание системы управления игрой с нуля.',
        en: 'Development of a cross-platform game version of MMORPG Grand Mobile on Flutter. Dynamic Technologies TOO is the company that owns the Grand Mobile game. The project included complete migration of the game engine from native platforms to a unified cross-platform codebase, implementation of new game features, and creation of a game management system from scratch.',
      },
      responsibilities: {
        ru: [
          'Миграция игрового движка с нативных платформ (Swift, Java/Kotlin) на Flutter',
          'Проектирование единой архитектуры для кроссплатформенной реализации',
          'Интеграция игрового движка через platform channels',
          'Реализация сложных игровых механик (мультиплеер, синхронизация состояния, экономика, бизнес-системы)',
          'Работа с большими объемами данных и оптимизация производительности для MMORPG',
        ],
        en: [
          'Migration of game engine from native platforms (Swift, Java/Kotlin) to Flutter',
          'Designing unified architecture for cross-platform implementation',
          'Integrating game engine through platform channels',
          'Implementing complex game mechanics (multiplayer, state synchronization, economy, business systems)',
          'Working with large data volumes and performance optimization for MMORPG',
        ],
      },
      techStack: ['Flutter', 'Dart', 'Bloc', 'Dio', 'REST API', 'GetIt', 'Hive', 'GoRouter', 'SharedPreferences', 'Retrofit', 'FlutterFileDownloader', 'Crypto', 'Logger', 'Equatable', 'Intl'],
      projects: [
        {
          id: 'grand-mobile-game',
          icon: grandMobileIcon,
          title: {
            ru: 'Grand Mobile - MMORPG с открытым миром',
            en: 'Grand Mobile - Open world MMORPG',
          },
          description: {
            ru: 'Крупномасштабная онлайн MMORPG с открытым миром и RP механиками',
            en: 'Large-scale online MMORPG with open world and RP mechanics',
          },
          detailedDescription: {
            ru: 'Разработка кроссплатформенной игровой версии крупномасштабной MMORPG с открытым миром на Flutter на основе существующего нативного кода. Grand Mobile - это онлайн игра с RP (role play) механиками, разработанная для компании Dynamic Technologies TOO, где игроки взаимодействуют в мультиплеере, создавая свои истории в живом виртуальном мире. Проект включал миграцию функциональности с нативных платформ на единую кроссплатформенную кодовую базу, реализацию новых игровых функций, включая систему работы и карьеры, бизнес-механики, криминальные миссии, гонки на автомобилях, кастомизацию персонажей с более чем 300 нарядами, выбор из сотен транспортных средств от классических советских машин до современных суперкаров. Приложение доступно в Google Play, App Store и RuStore с более чем 10 миллионами загрузок.',
            en: 'Development of a cross-platform game version of a large-scale MMORPG with open world on Flutter based on existing native code. Grand Mobile is an online game with RP (role play) mechanics, developed for Dynamic Technologies TOO company, where players interact in multiplayer, creating their stories in a living virtual world. The project included migrating functionality from native platforms to a unified cross-platform codebase, implementing new game features, including work and career system, business mechanics, criminal missions, car racing, character customization with over 300 outfits, selection from hundreds of vehicles from classic Soviet cars to modern supercars. The application is available on Google Play, App Store, and RuStore with over 10 million downloads.',
          },
          technologies: ['Flutter', 'Dart', 'Bloc', 'Dio', 'REST API', 'GetIt', 'Hive', 'GoRouter', 'SharedPreferences', 'Retrofit', 'FlutterFileDownloader', 'Crypto', 'Logger', 'Equatable', 'Intl'],
          tags: [{ ru: '# Самый сложный проект', en: '# Most Complex Project' }],
          links: [
            {
              label: 'Website',
              url: 'https://grnd.game',
            },
            {
              label: 'Google Play',
              url: 'https://play.google.com/store/apps/details?id=com.grand.launcher',
            },
            {
              label: 'App Store',
              url: 'https://apps.apple.com/ru/app/grand-mobile-твой-мир/id6741001464',
            },
            {
              label: 'RuStore',
              url: 'https://www.rustore.ru/catalog/app/com.grand.cr',
            },
            {
              label: 'VK',
              url: 'https://vk.com/grandmobile',
            },
            {
              label: 'YouTube',
              url: 'https://www.youtube.com/channel/UCXBEpDlLUCwo-0O0gmW0T-g',
            },
            {
              label: 'Discord',
              url: 'https://discord.com/invite/grnd',
            },
          ],
          technicalChallenges: {
            ru: 'Проект представлял исключительную сложность, так как требовал полной миграции игрового движка с нативных платформ (Swift для iOS и Java/Kotlin для Android) на Flutter. Основная задача заключалась в переносе игрового движка и создании с нуля всей оболочки и системы управления игрой, опираясь исключительно на предыдущую нативную реализацию. Основные технические вызовы включали: глубокий анализ и понимание существующего нативного кода на двух разных платформах, проектирование единой архитектуры для кроссплатформенной реализации, создание системы управления игровым состоянием с использованием Bloc, интеграцию игрового движка через платформо-специфичные каналы (platform channels), реализацию сложных игровых механик (мультиплеер, синхронизация состояния, экономика, бизнес-системы) с нуля, работу с большими объемами данных и оптимизацию производительности для обеспечения плавной работы MMORPG, реализацию системы загрузки и обновления контента через flutter_file_downloader, обеспечение безопасности данных через crypto, настройку логирования через logger для отладки сложной системы, работу с equatable для эффективного сравнения состояний. Проект требовал глубокого понимания как нативных платформ, так и Flutter экосистемы, а также способности создавать сложные системы управления игровым процессом.',
            en: 'The project presented exceptional complexity as it required complete migration of the game engine from native platforms (Swift for iOS and Java/Kotlin for Android) to Flutter. The main task was to port the game engine and create from scratch the entire wrapper and game management system, relying solely on the previous native implementation. Main technical challenges included: deep analysis and understanding of existing native code on two different platforms, designing a unified architecture for cross-platform implementation, creating a game state management system using Bloc, integrating the game engine through platform-specific channels, implementing complex game mechanics (multiplayer, state synchronization, economy, business systems) from scratch, working with large data volumes and performance optimization to ensure smooth MMORPG operation, implementing content download and update system through flutter_file_downloader, ensuring data security through crypto, setting up logging through logger for debugging complex systems, working with equatable for efficient state comparison. The project required deep understanding of both native platforms and Flutter ecosystem, as well as the ability to create complex game process management systems.',
          },
          problemSolved: {
            ru: 'Проект решил критическую проблему необходимости поддержки двух отдельных кодовых баз для iOS и Android, что создавало сложности в синхронизации функциональности, увеличении времени разработки и поддержки. Миграция на Flutter позволила создать единую кроссплатформенную кодовую базу, значительно сократив время разработки новых функций и исправления багов. Новая реализация обеспечила единообразный пользовательский опыт на обеих платформах, упростила процесс обновлений и позволила быстрее внедрять новые игровые механики. Созданная с нуля система управления игрой на Flutter обеспечила более гибкую архитектуру для дальнейшего развития проекта, лучшую производительность и возможность легкого масштабирования функциональности.',
            en: 'The project solved the critical problem of needing to maintain two separate codebases for iOS and Android, which created difficulties in synchronizing functionality, increasing development and maintenance time. Migration to Flutter allowed creating a unified cross-platform codebase, significantly reducing time for developing new features and fixing bugs. The new implementation ensured a consistent user experience on both platforms, simplified the update process, and allowed faster implementation of new game mechanics. The game management system created from scratch on Flutter provided a more flexible architecture for further project development, better performance, and the ability to easily scale functionality.',
          },
          period: '2024',
        },
      ],
    },
    {
      id: 'finconnect',
      position: {
        ru: 'Lead Flutter Developer',
        en: 'Lead Flutter Developer',
      },
      company: {
        ru: 'АО "Финконект"',
        en: 'JSC "Finconnect"',
      },
      period: '04.2025 - настоящее время',
      description: {
        ru: 'Разработка архитектуры кроссплатформенного fintech приложения с нуля. Проектирование и реализация системы управления состоянием, интеграция с финансовыми API, разработка безопасных механизмов аутентификации и работы с платежными системами.',
        en: 'Architecture development for a cross-platform fintech application from scratch. Designing and implementing state management system, integrating with financial APIs, developing secure authentication mechanisms and payment system integration.',
      },
      responsibilities: {
        ru: [
          'Проектирование и разработка архитектуры fintech приложения с нуля',
          'Разработка безопасных механизмов аутентификации и авторизации',
          'Интеграция с финансовыми API и платежными системами',
          'Реализация работы с криптографией для обеспечения безопасности данных',
          'Составление технических заданий для backend разработчиков',
        ],
        en: [
          'Designing and developing fintech application architecture from scratch',
          'Developing secure authentication and authorization mechanisms',
          'Integrating with financial APIs and payment systems',
          'Implementing cryptography for data security',
          'Setting technical specifications for backend developers',
        ],
      },
      techStack: ['Flutter', 'Dart', 'Bloc', 'Intl', 'AutoRoute', 'GetIt', 'Hive', 'Talker', 'Dio', 'Crypto', 'WebView', 'WebSocket', 'REST API'],
      projects: [
        {
          id: 'monetrix',
          icon: monetrixIcon,
          title: {
            ru: 'Monetrix',
            en: 'Monetrix',
          },
          description: {
            ru: 'Универсальный дашборд с автообновлением и подключением всех финансовых продуктов',
            en: 'Universal dashboard with automatic update and connection of all financial products',
          },
          detailedDescription: {
            ru: 'Кроссплатформенное fintech приложение для комплексного управления личными финансами. Monetrix предоставляет универсальный дашборд с автоматическим обновлением данных и возможностью подключения всех финансовых продуктов в одном месте. Приложение позволяет пользователям подключать банковские счета, брокерские счета, данные по кредитам и интегрироваться с Госуслугами для получения полной картины финансового состояния. Реализован персональный финансовый помощник "Кэшик" с чат-интерфейсом на основе 3D-аватара, который предоставляет индивидуальный анализ с рекомендациями для эффективного управления финансами. Приложение включает систему определения уровня риска пользователя, отслеживание финансового состояния в различных временных периодах (день, неделя, месяц, год), а также предоставляет персональные решения для улучшения финансовой жизни.',
            en: 'Cross-platform fintech application for comprehensive personal finance management. Monetrix provides a universal dashboard with automatic data updates and the ability to connect all financial products in one place. The application allows users to connect bank accounts, brokerage accounts, loan data, and integrate with government services to get a complete picture of their financial status. A personal financial assistant "Keshik" with a chat interface based on a 3D avatar has been implemented, which provides individual analysis with recommendations for effective financial management. The application includes a user risk level determination system, financial status tracking in various time periods (day, week, month, year), and provides personalized solutions to improve financial life.',
          },
          problemSolved: {
            ru: 'Проект решает проблему фрагментации финансовой информации пользователей, которая обычно разбросана по множеству различных сервисов и приложений. Monetrix объединяет все финансовые продукты в едином дашборде с автоматическим обновлением данных, избавляя пользователей от необходимости вручную отслеживать состояние счетов в разных банках, брокерских компаниях и других финансовых сервисах. Персональный финансовый помощник с индивидуальным анализом помогает пользователям принимать обоснованные финансовые решения, получать рекомендации по управлению финансами и улучшать свое финансовое состояние шаг за шагом.',
            en: 'The project solves the problem of fragmentation of users\' financial information, which is usually scattered across many different services and applications. Monetrix combines all financial products in a single dashboard with automatic data updates, freeing users from the need to manually track account statuses in different banks, brokerage companies, and other financial services. The personal financial assistant with individual analysis helps users make informed financial decisions, receive recommendations for financial management, and improve their financial condition step by step.',
          },
          technicalChallenges: {
            ru: 'Проект потребовал решения сложных технических задач по интеграции с множественными финансовыми API различных банков и брокерских компаний. Основные вызовы включали проектирование и разработку архитектуры fintech приложения с нуля с использованием Bloc для управления состоянием, создание унифицированного интерфейса для подключения различных финансовых сервисов (банки, брокеры, кредитные организации, Госуслуги), реализацию системы автоматического обновления финансовых данных с учетом различных форматов API и протоколов, разработку персонального финансового помощника с чат-интерфейсом и 3D-аватаром, создание системы индивидуального анализа и генерации рекомендаций на основе финансовых данных пользователя, реализацию системы определения уровня риска, интеграцию с Firebase для синхронизации данных, настройку push-уведомлений через OneSignal для информирования пользователей о важных событиях, работу с локальным хранилищем Hive для кэширования данных, реализацию навигации через AutoRoute, настройку логирования и мониторинга через Talker, а также обеспечение безопасности финансовых данных с использованием криптографии.',
            en: 'The project required solving complex technical challenges in integrating with multiple financial APIs from various banks and brokerage companies. Main challenges included designing and developing fintech application architecture from scratch using Bloc for state management, creating a unified interface for connecting various financial services (banks, brokers, credit organizations, government services), implementing an automatic financial data update system considering various API formats and protocols, developing a personal financial assistant with chat interface and 3D avatar, creating an individual analysis system and generating recommendations based on user financial data, implementing a risk level determination system, integrating with Firebase for data synchronization, setting up push notifications through OneSignal to inform users about important events, working with local Hive storage for data caching, implementing navigation through AutoRoute, setting up logging and monitoring through Talker, as well as ensuring security of financial data using cryptography.',
          },
          technologies: ['Flutter', 'Dart', 'Bloc', 'Intl', 'AutoRoute', 'GetIt', 'Hive', 'Talker', 'Dio', 'Crypto', 'WebView', 'WebSocket', 'REST API'],
          links: [
            {
              label: 'Google Play',
              url: 'https://play.google.com/store/apps/details?id=com.finconect.monetrix',
            },
          ],
          period: '2025',
        },
      ],
    },
    {
      id: 'intellera',
      position: {
        ru: 'Lead Flutter Developer',
        en: 'Lead Flutter Developer',
      },
      company: {
        ru: 'Intellera LLC',
        en: 'Intellera LLC',
      },
      period: '11.2025 - настоящее время',
      description: {
        ru: 'Полная разработка мультиплатформенного VPN приложения Reserve VPN для Android и iOS с нуля. Самостоятельное проектирование архитектуры, выбор протокола XRAY core, продумывание пользовательских взаимодействий и минималистичного интерфейса. Управление разработкой, выбор стратегических локаций для VPN серверов, интеграция с нативными системными API, разработка системы подписок и обеспечение безопасности данных. Приложение получило более 1300 пользователей за первый день релиза в App Store без вложений в рекламу.',
        en: 'Full development of cross-platform VPN application Reserve VPN for Android and iOS from scratch. Independent architecture design, XRAY core protocol selection, user interaction design and minimalist interface development. Development management, strategic VPN server location selection, native system API integration, subscription system development and data security. The application received over 1300 users on the first day of App Store release without advertising investments.',
      },
      responsibilities: {
        ru: [
          'Полная разработка мобильного приложения для Android и iOS с нуля',
          'Самостоятельное проектирование архитектуры приложения и выбор технологического стека',
          'Выбор и интеграция протокола XRAY core для VPN подключений',
          'Продумывание пользовательских взаимодействий и минималистичного UI/UX дизайна',
          'Управление разработкой и принятие технических решений',
          'Реализация интеграции с нативными VPN API iOS и Android для системного уровня подключения',
          'Разработка системы подписок с интеграцией платежных систем',
          'Оптимизация производительности для обеспечения стабильного VPN соединения',
        ],
        en: [
          'Full mobile application development for Android and iOS from scratch',
          'Independent application architecture design and technology stack selection',
          'XRAY core protocol selection and integration for VPN connections',
          'User interaction design and minimalist UI/UX development',
          'Development management and technical decision making',
          'Implementing integration with native iOS and Android VPN APIs for system-level connection',
          'Developing subscription system with payment system integration',
          'Performance optimization to ensure stable VPN connection',
        ],
      },
      techStack: ['Flutter', 'Dart', 'GoRouter', 'Firebase', 'GetIt', 'Bloc', 'GoogleSignIn', 'Slang', 'Talker', 'Hive', 'Dio', 'FlutterVless', 'UrlLauncher', 'SignInWithApple', 'VpnConnectionDetector', 'REST API'],
      projects: [
        {
          id: 'reserve-vpn',
          icon: reserveIcon,
          title: {
            ru: 'Reserve VPN',
            en: 'Reserve VPN',
          },
          description: {
            ru: 'Мультиплатформенное VPN приложение на XRAY core для обеспечения приватности и безопасности',
            en: 'Cross-platform VPN application on XRAY core for privacy and security',
          },
          detailedDescription: {
            ru: 'Мультиплатформенное VPN приложение Reserve VPN, разработанное на базе XRAY core для обеспечения максимальной приватности и безопасности пользователей. Приложение предоставляет простой и интуитивный интерфейс с минималистичным подходом: There are no randoms in Reserve. You\'re here to disappear. We just gave you a button, press it. Реализована система аутентификации через Email/Password, Google Sign-In и Apple Sign-In. Приложение включает 8 тщательно отобранных VPN серверов в стратегически важных локациях: Россия (Москва), Нидерланды (Амстердам), Германия (Франкфурт), Финляндия (Хельсинки), Великобритания (Лондон), Франция (Париж), Швеция (Стокгольм) и Австрия (Вена). Каждый сервер выбран с учетом скорости, стабильности и смысла, а не просто для количества. Реализована система подписок, защищенное хранение и выдача VPN конфигураций, интеграция с системными VPN API iOS и Android для нативного подключения. Приложение поддерживает локализацию на русском и английском языках. За первый день релиза в App Store приложение получило более 1300 довольных пользователей без вложений в рекламу.',
            en: 'Cross-platform VPN application Reserve VPN, developed on XRAY core base for maximum user privacy and security. The application provides a simple and intuitive interface with a minimalist approach: There are no randoms in Reserve. You\'re here to disappear. We just gave you a button, press it. Implemented authentication system through Email/Password, Google Sign-In, and Apple Sign-In. The application includes 8 carefully selected VPN servers in strategically important locations: Russia (Moscow), Netherlands (Amsterdam), Germany (Frankfurt), Finland (Helsinki), United Kingdom (London), France (Paris), Sweden (Stockholm), and Austria (Vienna). Each server is selected considering speed, stability, and purpose, not just for quantity. Implemented subscription system, secure storage and distribution of VPN configurations, integration with native iOS and Android VPN APIs for native connection. The application supports localization in Russian and English. On the first day of release in App Store, the application received over 1300 satisfied users without advertising investments.',
          },
          problemSolved: {
            ru: 'Проект решает проблему избыточности и сложности большинства VPN приложений на рынке, которые предлагают сотни серверов без гарантии качества. Reserve VPN фокусируется на качестве, а не количестве, предоставляя тщательно отобранные серверы с гарантией скорости и стабильности. Приложение решает проблему приватности и безопасности пользователей в интернете, предоставляя простой инструмент для "исчезновения" в сети без лишней возни. Минималистичный подход и автоматическая защита избавляют пользователей от необходимости разбираться в сложных настройках VPN, делая приватность доступной одним нажатием кнопки.',
            en: 'The project solves the problem of redundancy and complexity of most VPN applications on the market, which offer hundreds of servers without quality guarantees. Reserve VPN focuses on quality, not quantity, providing carefully selected servers with guaranteed speed and stability. The application solves the problem of user privacy and security on the internet, providing a simple tool for "disappearing" online without unnecessary hassle. The minimalist approach and automatic protection free users from the need to understand complex VPN settings, making privacy accessible with one button press.',
          },
          technicalChallenges: {
            ru: 'Проект потребовал решения сложных технических задач по интеграции XRAY core в мультиплатформенное приложение. Основные вызовы включали интеграцию с нативными VPN API iOS и Android для обеспечения системного уровня подключения, реализацию системы аутентификации с поддержкой Email/Password, Google Sign-In и Apple Sign-In, создание защищенной системы хранения и выдачи VPN конфигураций с шифрованием, разработку системы подписок с интеграцией платежных систем, реализацию автоматического подключения к VPN с обработкой различных сетевых сценариев (Wi-Fi, мобильные данные, переключение сетей), работу с ограничениями мобильных операторов в некоторых регионах, которые могут блокировать VPN подключения через мобильный интернет, оптимизацию производительности для обеспечения стабильного соединения, реализацию локализации на русском и английском языках, а также обеспечение безопасности данных пользователей и VPN конфигураций.',
            en: 'The project required solving complex technical challenges in integrating XRAY core into a cross-platform application. Main challenges included integration with native iOS and Android VPN APIs to ensure system-level connection, implementing authentication system with support for Email/Password, Google Sign-In, and Apple Sign-In, creating a secure system for storing and distributing VPN configurations with encryption, developing a subscription system with payment system integration, implementing automatic VPN connection with handling of various network scenarios (Wi-Fi, mobile data, network switching), working with mobile operator restrictions in some regions that may block VPN connections through mobile internet, performance optimization to ensure stable connection, implementing localization in Russian and English, as well as ensuring security of user data and VPN configurations.',
          },
          technologies: ['Flutter', 'Dart', 'GoRouter', 'Firebase', 'GetIt', 'Bloc', 'GoogleSignIn', 'Slang', 'Talker', 'Hive', 'Dio', 'FlutterVless', 'UrlLauncher', 'SignInWithApple', 'VpnConnectionDetector', 'REST API'],
          tags: [{ ru: 'Любимый проект', en: 'Favorite Project' }],
          links: [
            {
              label: 'App Store',
              url: 'https://apps.apple.com/ru/app/reserve-vpn/id6755535358',
            },
          ],
          period: '2025',
        },
      ],
    },
  ],
  education: [
    {
      id: 'samsung-it-school',
      institution: {
        ru: 'Samsung IT School',
        en: 'Samsung IT School',
      },
      specialization: {
        ru: 'Android Java Developer',
        en: 'Android Java Developer',
      },
      period: '2020-2021',
      location: {
        ru: 'Рязань, Россия',
        en: 'Ryazan, Russia',
      },
      url: 'https://www.innovationcampus.ru/itschool/',
      certificateNumber: '1123582659',
    },
    {
      id: 'geekbrains-python',
      institution: {
        ru: 'GeekBrains',
        en: 'GeekBrains',
      },
      specialization: {
        ru: 'Интенсив «Python для начинающих»',
        en: 'Intensive «Python for Beginners»',
      },
      period: '2020',
      location: {
        ru: 'Онлайн',
        en: 'Online',
      },
      url: 'https://gb.ru',
      certificateNumber: '0851338',
    },
    {
      id: 'html-academy',
      institution: {
        ru: 'HTML Academy',
        en: 'HTML Academy',
      },
      specialization: {
        ru: 'Базовый курс по созданию сайтов с использованием HTML и CSS',
        en: 'Basic course on website creation using HTML and CSS',
      },
      period: '2019',
      location: {
        ru: 'Онлайн',
        en: 'Online',
      },
      url: 'https://htmlacademy.ru',
    },
    {
      id: 'cityhack-ryazan',
      type: 'hackathon',
      institution: {
        ru: 'Хакатон CITYHACK РЯЗАНЬ',
        en: 'CITYHACK RYAZAN Hackathon',
      },
      specialization: {
        ru: 'Приложение для фиксации дорожных нарушений',
        en: 'Road violation reporting application',
      },
      description: {
        ru: 'Команда «SMEh» (ОГАУ ДО «Центр цифрового образования»). Разработка прототипа телеграмм бота для ГИБДД с отправкой фото нарушений. Цифровой урбанистический хакатон.',
        en: 'Team «SMEh» (Center for Digital Education). Development of a Telegram bot prototype for traffic police with photo violation reporting. Digital urban hackathon.',
      },
      period: '16.11.2020',
      location: {
        ru: 'Рязань, Россия',
        en: 'Ryazan, Russia',
      },
      award: {
        ru: '2 место — команда «SMEh»',
        en: '2nd Place — Team «SMEh»',
      },
    },
    {
      id: 'rgrty',
      institution: {
        ru: 'РГРТУ им. В.Ф.Уткина',
        en: 'Ryazan State Radio Engineering University',
      },
      specialization: {
        ru: 'Фундаментальная информатика и информационные технологии',
        en: 'Fundamental Informatics and Information Technologies',
      },
      period: '2023 - 2028',
      location: {
        ru: 'Рязань, Россия',
        en: 'Ryazan, Russia',
      },
      url: 'https://rsreu.ru',
    },
  ],
};

