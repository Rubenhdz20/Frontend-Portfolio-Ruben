import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    greeting: "Hello, I am ",
    role: "Frontend Developer",
    downloadCV: "Download CV",
    home: "Home",
    aboutMe: "About Me",
    myWork: "My Work",
    contact: "Contact",
    presentation: "I am a very young boy",
    aboutMeTitle: "Why should you work with me?",
    reason1: "I enjoy working in teams",
    reason2: "Strong passion for technology",
    reason3: "I learn fast and I am adaptable",
    reason4: "Communication is key",
    techTitle: "Technologies I enjoy experimenting with",
    projectTitle: "Projects",
    projectTitle1: "Architecture Website",
    projectDescription1: "This is a website created for a client, in which the idea is to showcase all of their work in a clean a professional way, I expertly navigated the challenges of building a dynamic, single-page application (SPA) utilizing React and React Router. ",
    repositoryLink: "View Repository",
    websiteLink: "View Website",
    projectTitle2: "Grape TV",
    projectDescription2: "Dynamic movie web application using React, integrating with The Movie Database API to display trending movies, categories, and search results.",
    projectTitle3: "Omnifood",
    projectDescription3: "I enhanced my web layout skills by adopting the BEM methodology, which significantly improved the structure and readability of my page designs. I delved into responsive design practices, focusing on the mobile-first approach to ensure optimal usability across various devices.",
    projectTitle4: "Salary Analysis",
    projectDescription4: "In this project I was able to apply mathematics and statistics solutions combined with Javascript, this approach has made me go beyond my logical thinking.",
    projectTitle5: "MyFitnessApp",
    projectDescription5: "Open Source Project to inform you about food, recipes and to track your meals, following a healthy diet, the idea is that anyone can use it freely and easily.",
    contactDescription: "Thank you for coming here. I hope this portfolio, made with a lot of love, has been to your liking. I am currently looking for new opportunities, my email is open! ",
    contactSpan: "Copied!",
    contactCredits: "Design & Built by Ruben",
  },
  es: {
    greeting: "Hola, mi nombre es ",
    role: "Desarrollador Frontend",
    downloadCV: "Descargar CV",
    home: "Inicio",
    aboutMe: "Sobre Mí",
    myWork: "Mi Trabajo",
    contact: "Contacto",
    presentation: "Soy una persona muy joven",
    aboutMeTitle: "Por qué deberías trabajar conmigo?",
    reason1: "Disfruto trabajar en equipo",
    reason2: "Gran pasión por la tecnología",
    reason3: "Aprendo rápido y soy adaptable",
    reason4: "La comunicación es fundamental",
    techTitle: "Tecnologías con las que me gusta experimentar",
    projectTitle: "Proyectos",
    projectTitle1: "Página web de arquitectura",
    projectDescription1: "Este es un sitio web creado para un cliente, en el que la idea es mostrar todo su trabajo de una manera limpia y profesional, superé los desafíos de construir una aplicación dinámica de una sola página (SPA) utilizando React y React Router. ",
    repositoryLink: "Ver Repositorio",
    websiteLink: "Ver Sitio Web",
    projectTitle2: "Uva TV",
    projectDescription2: "Aplicación web dinámica de películas que utiliza React y se integra con la API de The Movie Database para mostrar las películas de moda, las categorías y los resultados de búsqueda.",
    projectTitle3: "Omnifood",
    projectDescription3: "Profundicé en las prácticas de diseño responsivo, centrándome en el enfoque mobile-first para garantizar una usabilidad óptima en distintos dispositivos.",
    projectTitle4: "Análisis salarial",
    projectDescription4: "En este proyecto he podido aplicar soluciones matemáticas y estadísticas combinadas con Javascript, este enfoque me ha hecho ir más allá de mi pensamiento lógico.",
    projectTitle5: "MyFitnessApp",
    projectDescription5: "Proyecto de código abierto para informarte sobre alimentación, recetas y hacer un seguimiento de tus comidas, siguiendo una dieta saludable, la idea es que cualquiera pueda utilizarlo de forma libre y sencilla.",
    contactTitle: "Trabajemos juntos!",
    contactDescription: "Gracias por estar aquí. Espero que este portfolio, hecho con mucho cariño, haya sido de tu agrado. Actualmente estoy buscando nuevas oportunidades, mi email está abierto!  ",
    contactSpan: "Copiado!",
    contactCredits: "Diseñado & Construido por Ruben",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  const value = {
    language,
    translations: translations[language],
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };