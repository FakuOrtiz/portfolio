export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "head.hello": "hola, soy",
    "head.subtitle": "desarrollador frontend",
    "head.myResume": "mi cv!",
    "head.resumeLink":
      "https://docs.google.com/document/d/1hIRuTowDMU7vhruxi_stL7Qb7xEKrPPe3Kqer7-r1pA/edit?usp=sharing",
    "head.changeLang": "english",

    "about.title": "Sobre mí",
    "about.content":
      "+3 años de experiencia en desarrollo web. Empecé programando en Java con Spring Boot pero me enamoré del Frontend. A la hora de diseñar y desarrollar, me enfoco 100% en la experiencia del usuario.",

    "experience.title": "Experiencia",
    "experience.content": [
      {
        title: "Curadeuda",
        date: "Sep 2022 - Actualidad",
        exp: [
          "Lideré el frontend en la migración del proyecto principal a tecnologías más modernas, reduciendo errores y mejorando la experiencia de usuario, lo cual resultó en un aumento del 66% (400K) en la base de clientes.",
          "Desarrollé un Back Office para optimizar el trabajo en diversas áreas, incluyendo funcionalidades como un visor de documentos de clientes, un simulador de programas, modificación de datos y la integración con la API de Jira.",
          "Desarrollé una versión QA y Demo de la app para simular casos e identificar errores de manera eficiente.",
          "Creé de documentación completa de la API de la empresa, mejorando su accesibilidad y comprensión por parte de los partners.",
        ],
      },
    ],

    "projects.title": "Proyectos",

    "knowledges.title": "Conocimientos",
    "knowledges.langs": "Lenguajes",
    "knowledges.frameworks": "Frameworks y librerías",
    "knowledges.tools": "Herramientas y otros",

    "contact.title": "Contacto",
  },
  en: {
    "head.hello": "hey, I'm",
    "head.subtitle": "frontend developer",
    "head.myResume": "my resume!",
    "head.resumeLink":
      "https://docs.google.com/document/d/1isbPIU4MCxBKs0onPVqZ2O96oyCFYUyc5ZOj6auKwg0/edit?usp=sharing",
    "head.changeLang": "español",

    "about.title": "About",
    "about.content":
      "+3 years of experience in web development. I started programming in Java with Spring Boot but fell in love with Frontend development. When I'm designing and developing, I focus 100% on the user experience.",

    "experience.title": "Experience",
    "experience.content": [
      {
        title: "Curadeuda",
        date: "Sep 2022 - Now",
        exp: [
          "I led the frontend migration of the main project to more modern technologies, reducing errors and improving user experience, resulting in a 66% increase (400K) in the customer base.",
          "I developed a Back Office to optimize work across various areas, including functionalities such as a customer document viewer, program simulator, data modification, and integration with the Jira API.",
          "I developed a QA and Demo version of the app to simulate cases and identify errors efficiently.",
          "I created comprehensive documentation of the company's API, improving its accessibility and understanding for partners.",
        ],
      },
    ],

    "projects.title": "Projects",

    "knowledges.title": "Knowledges",
    "knowledges.langs": "Languages",
    "knowledges.frameworks": "Frameworks and libraries",
    "knowledges.tools": "Tools and others",

    "contact.title": "Contact",
  },
} as const;
