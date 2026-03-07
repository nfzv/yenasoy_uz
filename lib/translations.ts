import { Language } from "@/context/LanguageContext";

type TranslationKeys = {
  // Navigation
  nav: {
    about: string;
    services: string;
    benefits: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  
  // About Section
  about: {
    title: string;
    description: string;
    systemClasses: {
      title: string;
      subtitle: string;
      classes: {
        name: string;
        size: string;
        features: string;
      }[];
    };
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
    contactForPricing: string;
    categories: {
      title: string;
      description: string;
      items: {
        name: string;
        description: string;
      }[];
    }[];
  };
  
  // Benefits Section
  benefits: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    info: {
      title: string;
      phone: string;
      email: string;
      telegram: string;
    };
  };
  
  // Footer
  footer: {
    copyright: string;
    rights: string;
  };
};

const translations: Record<Language, TranslationKeys> = {
  ru: {
    nav: {
      about: "О нас",
      services: "Услуги",
      benefits: "Преимущества",
      contact: "Контакты",
    },
    hero: {
      title: "Услуги промышленной автоматизации",
      subtitle: "Комплексные решения для автоматизации производственных линий: от диагностики и поддержки до разработки новых систем ПЛК и ЧМИ",
      cta: "Связаться с нами",
    },
    about: {
      title: "О компании Yenasoy",
      description: "Мы предоставляем полный спектр услуг промышленной автоматизации для производственных предприятий любого масштаба. Наша команда специализируется на программировании ПЛК, разработке ЧМИ, диагностике и техническом обслуживании автоматизированных систем. Мы работаем с системами различной сложности — от простых линий до высокоплотных интегрированных производств.",
      systemClasses: {
        title: "Классы сложности систем",
        subtitle: "Мы работаем с системами любой сложности",
        classes: [
          {
            name: "Простая линия",
            size: "До 30 м, ≤5 двигателей/ПЧ, ≤15 датчиков",
            features: "Базовые пуск/стоп/блокировки. Без сложной синхронизации",
          },
          {
            name: "Средняя линия",
            size: "30–100 м, 6–15 двигателей/ПЧ, 16–50 датчиков",
            features: "Несколько конвейерных зон. Базовый ЧМИ и аварийная сигнализация",
          },
          {
            name: "Сложная линия",
            size: "100–200 м, 16–40 двигателей/ПЧ, 50–120 датчиков",
            features: "Интеграция машин. Логика накопления и заторов. Несколько ЧМИ / расширенная сигнализация",
          },
          {
            name: "Высокосложная система",
            size: "200 м+ или высокоплотная автоматизация, 40+ двигателей/ПЧ, 120+ датчиков",
            features: "Несколько интегрированных машин. Отслеживание / рецептуры. Расширенная диагностика. Интеграция системы безопасности",
          },
        ],
      },
    },
    services: {
      title: "Наши услуги",
      subtitle: "Полный спектр услуг промышленной автоматизации",
      contactForPricing: "Свяжитесь с нами для расчёта стоимости",
      categories: [
        {
          title: "Быстрая поддержка",
          description: "Услуги для устранения непредвиденных сбоев, остановок производства и срочной диагностики",
          items: [
            {
              name: "Удалённая диагностика / Устранение неисправностей",
              description: "Удалённая диагностика ПЛК/ЧМИ, анализ аварий, расследование отказов",
            },
            {
              name: "Удалённое восстановление / Перезапуск",
              description: "Исправление отказа, безопасный перезапуск линии, удалённое инженерное вмешательство",
            },
            {
              name: "Выезд на объект — диагностика",
              description: "Осмотр на месте, анализ ПЛК/ЧМИ, операционное тестирование",
            },
            {
              name: "Аварийное восстановление на объекте",
              description: "Экстренный выезд, немедленное восстановление производства, стабилизация системы",
            },
          ],
        },
        {
          title: "Плановые инженерные проекты",
          description: "Плановые улучшения, модернизации и проекты по разработке автоматизации",
          items: [
            {
              name: "Малая модификация ПЛК",
              description: "Корректировка логики датчиков, таймеров, блокировок; незначительные изменения аварийной сигнализации",
            },
            {
              name: "Стандартная модификация ПЛК",
              description: "Изменение последовательности, добавление устройств, обновление логики конвейерных зон",
            },
            {
              name: "Модификация ЧМИ (HMI)",
              description: "Новые экраны, аварийная сигнализация, визуализация данных",
            },
          ],
        },
        {
          title: "Новая разработка автоматизации",
          description: "Создание новых систем автоматизации с нуля",
          items: [
            {
              name: "Новая программа ПЛК",
              description: "Программирование ПЛК, проектирование логики, подготовка к вводу в эксплуатацию",
            },
            {
              name: "Пакет ПЛК + ЧМИ",
              description: "Программа ПЛК, дизайн ЧМИ, аварийная сигнализация и диагностика",
            },
            {
              name: "Полный программный пакет линии",
              description: "ПЛК + ЧМИ + система диагностики + поддержка запуска + передача документации",
            },
          ],
        },
        {
          title: "Документация и доступ к системе",
          description: "Передача документации и обучение персонала",
          items: [
            {
              name: "Пакет передачи документации",
              description: "Резервная копия ПЛК, резервная копия ЧМИ, список ввода-вывода, список аварий, системная документация",
            },
            {
              name: "Передача доступа / Передача обслуживания",
              description: "Передача паролей системы, архив резервных копий, обучение технического персонала",
            },
          ],
        },
        {
          title: "Дополнительные опции",
          description: "Расширение стандартных пакетов дополнительными компонентами",
          items: [
            {
              name: "Дополнительное оборудование",
              description: "Двигатели/ПЧ, датчики, пневматические приводы, сервооси, экраны ЧМИ",
            },
            {
              name: "Интеграция и расширенные функции",
              description: "Интеграция внешних машин, системы рецептур, штрихкодирование/отслеживание, расширенная диагностика, интеграция защитного ПЛК",
            },
          ],
        },
      ],
    },
    benefits: {
      title: "Почему выбирают нас",
      subtitle: "Преимущества работы с Yenasoy",
      items: [
        {
          title: "Удалённая и выездная поддержка",
          description: "Быстрая диагностика и устранение неисправностей как удалённо, так и с выездом на объект",
        },
        {
          title: "Масштабируемые решения",
          description: "Работаем с системами любой сложности — от простых линий (S) до высокосложных интегрированных систем (XL)",
        },
        {
          title: "Полный цикл услуг",
          description: "От экстренного восстановления до плановой модернизации и разработки новых систем",
        },
        {
          title: "Полная документация",
          description: "Передача всей документации, резервных копий и обучение вашего технического персонала",
        },
        {
          title: "Индивидуальный подход",
          description: "Для долгосрочных партнёров и крупных проектов — индивидуальные условия сотрудничества",
        },
        {
          title: "Экспертиза в ПЛК и ЧМИ",
          description: "Глубокие знания программирования ПЛК, разработки ЧМИ и систем промышленной автоматизации",
        },
      ],
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Оставьте заявку и мы свяжемся с вами для обсуждения вашего проекта",
      form: {
        name: "Имя",
        namePlaceholder: "Ваше имя",
        phone: "Телефон",
        phonePlaceholder: "+998 XX XXX XX XX",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Сообщение",
        messagePlaceholder: "Опишите ваш проект или вопрос...",
        submit: "Отправить в Telegram",
      },
      info: {
        title: "Контактная информация",
        phone: "Телефон",
        email: "Email",
        telegram: "Telegram",
      },
    },
    footer: {
      copyright: "© 2026 Yenasoy",
      rights: "Все права защищены",
    },
  },
  uz: {
    nav: {
      about: "Biz haqimizda",
      services: "Xizmatlar",
      benefits: "Afzalliklar",
      contact: "Aloqa",
    },
    hero: {
      title: "Sanoat avtomatlashtirish xizmatlari",
      subtitle: "Ishlab chiqarish liniyalarini avtomatlashtirish uchun kompleks yechimlar: diagnostika va qo'llab-quvvatlashdan yangi PLC va HMI tizimlarini ishlab chiqishgacha",
      cta: "Biz bilan bog'laning",
    },
    about: {
      title: "Yenasoy kompaniyasi haqida",
      description: "Biz har qanday miqyosdagi ishlab chiqarish korxonalari uchun sanoat avtomatlashtirishning to'liq xizmatlar spektrini taqdim etamiz. Bizning jamoamiz PLC dasturlash, HMI ishlab chiqish, avtomatlashtirilgan tizimlarni diagnostika qilish va texnik xizmat ko'rsatishga ixtisoslashgan. Biz turli murakkablikdagi tizimlar bilan ishlaymiz — oddiy liniyalardan yuqori zichlikdagi integratsiyalashgan ishlab chiqarishlargacha.",
      systemClasses: {
        title: "Tizim murakkabligi sinflari",
        subtitle: "Biz har qanday murakkablikdagi tizimlar bilan ishlaymiz",
        classes: [
          {
            name: "Oddiy liniya",
            size: "30 m gacha, ≤5 motor/ChP, ≤15 datchik",
            features: "Asosiy ishga tushirish/to'xtatish/blokirovkalar. Murakkab sinxronizatsiyasiz",
          },
          {
            name: "O'rta liniya",
            size: "30–100 m, 6–15 motor/ChP, 16–50 datchik",
            features: "Bir nechta konveyer zonalari. Asosiy HMI va avariya signalizatsiyasi",
          },
          {
            name: "Murakkab liniya",
            size: "100–200 m, 16–40 motor/ChP, 50–120 datchik",
            features: "Mashinalar integratsiyasi. To'planish va tiqilib qolish logikasi. Bir nechta HMI / kengaytirilgan signalizatsiya",
          },
          {
            name: "Yuqori murakkablikdagi tizim",
            size: "200 m+ yoki yuqori zichlikdagi avtomatlashtirish, 40+ motor/ChP, 120+ datchik",
            features: "Bir nechta integratsiyalashgan mashinalar. Kuzatish / retseptlar. Kengaytirilgan diagnostika. Xavfsizlik tizimi integratsiyasi",
          },
        ],
      },
    },
    services: {
      title: "Bizning xizmatlarimiz",
      subtitle: "Sanoat avtomatlashtirishning to'liq xizmatlar spektri",
      contactForPricing: "Narxni hisoblash uchun biz bilan bog'laning",
      categories: [
        {
          title: "Reaktiv qo'llab-quvvatlash",
          description: "Kutilmagan nosozliklar, ishlab chiqarishni to'xtatish va shoshilinch diagnostika uchun xizmatlar",
          items: [
            {
              name: "Masofaviy diagnostika / Nosozliklarni bartaraf etish",
              description: "PLC/HMI masofaviy diagnostikasi, avariyalarni tahlil qilish, nosozliklarni tekshirish",
            },
            {
              name: "Masofaviy tiklash / Qayta ishga tushirish",
              description: "Nosozlikni tuzatish, liniyani xavfsiz qayta ishga tushirish, masofaviy muhandislik aralashuvi",
            },
            {
              name: "Obyektga chiqish — diagnostika",
              description: "Joyida tekshiruv, PLC/HMI tahlili, operatsion sinov",
            },
            {
              name: "Obyektda favqulodda tiklash",
              description: "Shoshilinch chiqish, ishlab chiqarishni darhol tiklash, tizimni barqarorlashtirish",
            },
          ],
        },
        {
          title: "Rejalashtirilgan muhandislik loyihalari",
          description: "Rejalashtirilgan yaxshilanishlar, modernizatsiya va avtomatlashtirish loyihalarini ishlab chiqish",
          items: [
            {
              name: "Kichik PLC modifikatsiyasi",
              description: "Datchiklar, taymerlar, blokirovkalar logikasini sozlash; avariya signalizatsiyasidagi kichik o'zgarishlar",
            },
            {
              name: "Standart PLC modifikatsiyasi",
              description: "Ketma-ketlikni o'zgartirish, qurilmalar qo'shish, konveyer zonalari logikasini yangilash",
            },
            {
              name: "HMI modifikatsiyasi",
              description: "Yangi ekranlar, avariya signalizatsiyasi, ma'lumotlarni vizualizatsiya qilish",
            },
          ],
        },
        {
          title: "Yangi avtomatlashtirish ishlab chiqish",
          description: "Noldan yangi avtomatlashtirish tizimlarini yaratish",
          items: [
            {
              name: "Yangi PLC dasturi",
              description: "PLC dasturlash, logikani loyihalash, ishga tushirishga tayyorlash",
            },
            {
              name: "PLC + HMI paketi",
              description: "PLC dasturi, HMI dizayni, avariya signalizatsiyasi va diagnostika",
            },
            {
              name: "Liniyaning to'liq dasturiy paketi",
              description: "PLC + HMI + diagnostika tizimi + ishga tushirishni qo'llab-quvvatlash + hujjatlarni topshirish",
            },
          ],
        },
        {
          title: "Hujjatlar va tizimga kirish",
          description: "Hujjatlarni topshirish va xodimlarni o'qitish",
          items: [
            {
              name: "Hujjatlarni topshirish paketi",
              description: "PLC zaxira nusxasi, HMI zaxira nusxasi, kirish-chiqish ro'yxati, avariyalar ro'yxati, tizim hujjatlari",
            },
            {
              name: "Kirish huquqini topshirish / Xizmat ko'rsatishni topshirish",
              description: "Tizim parollarini topshirish, zaxira nusxalari arxivi, texnik xodimlarni o'qitish",
            },
          ],
        },
        {
          title: "Qo'shimcha variantlar",
          description: "Standart paketlarni qo'shimcha komponentlar bilan kengaytirish",
          items: [
            {
              name: "Qo'shimcha uskunalar",
              description: "Motorlar/ChP, datchiklar, pnevmatik aktuatorlar, servo o'qlar, HMI ekranlar",
            },
            {
              name: "Integratsiya va kengaytirilgan funksiyalar",
              description: "Tashqi mashinalar integratsiyasi, retsept tizimlari, shtrix-kodlash/kuzatish, kengaytirilgan diagnostika, xavfsizlik PLC integratsiyasi",
            },
          ],
        },
      ],
    },
    benefits: {
      title: "Nega bizni tanlashadi",
      subtitle: "Yenasoy bilan ishlashning afzalliklari",
      items: [
        {
          title: "Masofaviy va chiqib boruvchi qo'llab-quvvatlash",
          description: "Nosozliklarni tez diagnostika qilish va bartaraf etish — masofadan ham, obyektga chiqib ham",
        },
        {
          title: "Masshtablanadigan yechimlar",
          description: "Har qanday murakkablikdagi tizimlar bilan ishlaymiz — oddiy liniyalardan (S) yuqori murakkablikdagi integratsiyalashgan tizimlargacha (XL)",
        },
        {
          title: "Xizmatlarning to'liq sikli",
          description: "Favqulodda tiklashdan rejalashtirilgan modernizatsiya va yangi tizimlarni ishlab chiqishgacha",
        },
        {
          title: "To'liq hujjatlar",
          description: "Barcha hujjatlar, zaxira nusxalarni topshirish va texnik xodimlaringizni o'qitish",
        },
        {
          title: "Individual yondashuv",
          description: "Uzoq muddatli hamkorlar va yirik loyihalar uchun — hamkorlikning individual shartlari",
        },
        {
          title: "PLC va HMI bo'yicha ekspertiza",
          description: "PLC dasturlash, HMI ishlab chiqish va sanoat avtomatlashtirish tizimlarini chuqur bilish",
        },
      ],
    },
    contact: {
      title: "Biz bilan bog'laning",
      subtitle: "So'rov qoldiring va biz loyihangizni muhokama qilish uchun siz bilan bog'lanamiz",
      form: {
        name: "Ism",
        namePlaceholder: "Ismingiz",
        phone: "Telefon",
        phonePlaceholder: "+998 XX XXX XX XX",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Xabar",
        messagePlaceholder: "Loyihangiz yoki savolingizni tasvirlab bering...",
        submit: "Telegramga yuborish",
      },
      info: {
        title: "Aloqa ma'lumotlari",
        phone: "Telefon",
        email: "Email",
        telegram: "Telegram",
      },
    },
    footer: {
      copyright: "© 2026 Yenasoy",
      rights: "Barcha huquqlar himoyalangan",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      benefits: "Benefits",
      contact: "Contact",
    },
    hero: {
      title: "Industrial Automation Services",
      subtitle: "Comprehensive solutions for production line automation: from diagnostics and support to development of new PLC and HMI systems",
      cta: "Contact Us",
    },
    about: {
      title: "About Yenasoy",
      description: "We provide a full range of industrial automation services for manufacturing enterprises of any scale. Our team specializes in PLC programming, HMI development, diagnostics and maintenance of automated systems. We work with systems of varying complexity — from simple lines to high-density integrated productions.",
      systemClasses: {
        title: "System Complexity Classes",
        subtitle: "We work with systems of any complexity",
        classes: [
          {
            name: "Simple Line",
            size: "Up to 30 m, ≤5 motors/VFDs, ≤15 sensors",
            features: "Basic start/stop/interlocks. No complex synchronization",
          },
          {
            name: "Medium Line",
            size: "30–100 m, 6–15 motors/VFDs, 16–50 sensors",
            features: "Multiple conveyor zones. Basic HMI and alarm signaling",
          },
          {
            name: "Complex Line",
            size: "100–200 m, 16–40 motors/VFDs, 50–120 sensors",
            features: "Machine integration. Accumulation and jam logic. Multiple HMI / extended alarms",
          },
          {
            name: "High-Complexity System",
            size: "200 m+ or high-density automation, 40+ motors/VFDs, 120+ sensors",
            features: "Multiple integrated machines. Tracking / recipes. Advanced diagnostics. Safety system integration",
          },
        ],
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Full range of industrial automation services",
      contactForPricing: "Contact us for pricing",
      categories: [
        {
          title: "Fast Support",
          description: "Services for resolving unexpected failures, production downtime and urgent diagnostics",
          items: [
            {
              name: "Remote Diagnostics / Troubleshooting",
              description: "Remote PLC/HMI diagnostics, failure analysis, fault investigation",
            },
            {
              name: "Remote Recovery / Restart",
              description: "Failure correction, safe line restart, remote engineering intervention",
            },
            {
              name: "On-Site Diagnostics",
              description: "On-site inspection, PLC/HMI analysis, operational testing",
            },
            {
              name: "Emergency On-Site Recovery",
              description: "Emergency dispatch, immediate production recovery, system stabilization",
            },
          ],
        },
        {
          title: "Planned Engineering Projects",
          description: "Planned improvements, upgrades and automation development projects",
          items: [
            {
              name: "Minor PLC Modification",
              description: "Sensor, timer, interlock logic adjustments; minor alarm changes",
            },
            {
              name: "Standard PLC Modification",
              description: "Sequence changes, device additions, conveyor zone logic updates",
            },
            {
              name: "HMI Modification",
              description: "New screens, alarm signaling, data visualization",
            },
          ],
        },
        {
          title: "New Automation Development",
          description: "Creating new automation systems from scratch",
          items: [
            {
              name: "New PLC Program",
              description: "PLC programming, logic design, commissioning preparation",
            },
            {
              name: "PLC + HMI Package",
              description: "PLC program, HMI design, alarm signaling and diagnostics",
            },
            {
              name: "Full Line Software Package",
              description: "PLC + HMI + diagnostics system + startup support + documentation handover",
            },
          ],
        },
        {
          title: "Documentation & System Access",
          description: "Documentation handover and staff training",
          items: [
            {
              name: "Documentation Handover Package",
              description: "PLC backup, HMI backup, I/O list, alarm list, system documentation",
            },
            {
              name: "Access Transfer / Maintenance Handover",
              description: "System password transfer, backup archive, technical staff training",
            },
          ],
        },
        {
          title: "Additional Options",
          description: "Extending standard packages with additional components",
          items: [
            {
              name: "Additional Equipment",
              description: "Motors/VFDs, sensors, pneumatic actuators, servo axes, HMI screens",
            },
            {
              name: "Integration & Advanced Features",
              description: "External machine integration, recipe systems, barcode/tracking, advanced diagnostics, safety PLC integration",
            },
          ],
        },
      ],
    },
    benefits: {
      title: "Why Choose Us",
      subtitle: "Benefits of working with Yenasoy",
      items: [
        {
          title: "Remote & On-Site Support",
          description: "Fast diagnostics and troubleshooting both remotely and on-site",
        },
        {
          title: "Scalable Solutions",
          description: "We work with systems of any complexity — from simple lines (S) to high-complexity integrated systems (XL)",
        },
        {
          title: "Full Service Cycle",
          description: "From emergency recovery to planned upgrades and new system development",
        },
        {
          title: "Complete Documentation",
          description: "Handover of all documentation, backups and training for your technical staff",
        },
        {
          title: "Individual Approach",
          description: "Individual terms of cooperation for long-term partners and large projects",
        },
        {
          title: "PLC & HMI Expertise",
          description: "Deep knowledge of PLC programming, HMI development and industrial automation systems",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "Leave a request and we will contact you to discuss your project",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        phone: "Phone",
        phonePlaceholder: "+998 XX XXX XX XX",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Describe your project or question...",
        submit: "Send to Telegram",
      },
      info: {
        title: "Contact Information",
        phone: "Phone",
        email: "Email",
        telegram: "Telegram",
      },
    },
    footer: {
      copyright: "© 2026 Yenasoy",
      rights: "All rights reserved",
    },
  },
};

export function getTranslations(lang: Language): TranslationKeys {
  return translations[lang];
}

export default translations;
