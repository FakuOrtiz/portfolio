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
    "head.resumeLink": "link en español drive",
    "head.changeLang": "english",

    "about.title": "sobre mí",
    "about.content":
      "+3 años de experiencia en desarrollo web. Me apasiona la tecnología y disfruto creando productos óptimos, accesibles y eficientes, siempre enfocados en el usuario. Me gusta el mate 🧉",

    "experience.title": "experiencia",
    "experience.content": [
      {
        title: "Curadeuda",
        date: "Sep 2022 - Actualidad",
        color: "#08C47C",
        exp: [
          "Lideré el frontend en la migración del proyecto principal a tecnologías más modernas, reduciendo errores y mejorando la experiencia de usuario, lo cual resultó en un aumento del 66% (400K) en la base de clientes.",
          "Desarrollé un Back Office para optimizar el trabajo en diversas áreas, incluyendo funcionalidades como un visor de documentos de clientes, un simulador de programas, modificación de datos y la integración con la API de Jira.",
          "Desarrollé una versión QA y Demo de la app para simular casos e identificar errores de manera eficiente.",
          "Creé de documentación completa de la API de la empresa, mejorando su accesibilidad y comprensión por parte de los partners.",
        ],
      },
    ],

    "projects.title": "proyectos",

    "knowledges.title": "conocimientos",
    "knowledges.langs": "Lenguajes",
    "knowledges.frameworks": "Frameworks y librerías",
    "knowledges.tools": "Herramientas y otros",

    "contact.title": "contacto",
  },
  en: {
    "head.hello": "hey, I'm",
    "head.subtitle": "frontend developer",
    "head.myResume": "my resume!",
    "head.resumeLink": "link in english drive",
    "head.changeLang": "español",

    "about.title": "about",
    "about.content":
      "+3 years of experience in web development. I'm passionate about technology and I enjoy creating optimal, accessible, and efficient products, always focused on the user. I like drinking mate 🧉",

    "experience.title": "experience",
    "experience.content": [
      {
        title: "Curadeuda",
        date: "Sep 2022 - Present",
        color: "#08C47C",
        exp: [
          "I led the frontend migration of the main project to more modern technologies, reducing errors and improving user experience, resulting in a 66% increase (400K) in the customer base.",
          "I developed a Back Office to optimize work across various areas, including functionalities such as a customer document viewer, program simulator, data modification, and integration with the Jira API.",
          "I developed a QA and Demo version of the app to simulate cases and identify errors efficiently.",
          "I created comprehensive documentation of the company's API, improving its accessibility and understanding for partners.",
        ],
      },
    ],

    "projects.title": "projects",

    "knowledges.title": "knowledges",
    "knowledges.langs": "Languages",
    "knowledges.frameworks": "Frameworks and libraries",
    "knowledges.tools": "Tools and others",


    "contact.title": "contact",
  },
} as const;
