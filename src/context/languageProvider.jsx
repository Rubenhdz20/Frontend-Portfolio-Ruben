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
    presentation: [
      "I’m excited to share a little about my journey with you. I am a dedicated front-end developer with over 2 years of experience creating responsive, user-friendly, and impactful web applications using modern JavaScript technologies. What drives me is a passion for solving real-world problems through intuitive design and clean code.",
      "My journey into tech began with a curiosity to understand how websites and mobile applications work, and how they can transform the way we live. This curiosity quickly evolved into a deep commitment to continuous learning and staying up-to-date with emerging technologies. Whether it’s experimenting with new frameworks or collaborating with peers to gain fresh perspectives, I’m always refining my craft and pushing my boundaries.",
      "Before transitioning into software development, I studied business administration, which has given me a unique perspective on problem-solving and the importance of understanding the big picture in companies. I approach projects not just from a technical standpoint but with a strategic, user-first mindset. I’ve learned to bridge the gap between technology and business, delivering solutions that not only work but make a tangible impact on users and businesses alike.",
      "For me, being a great human and helping others are my most important values. I believe that by building efficient and meaningful digital experiences, I can optimize people’s lives and contribute positively to society. My goal as a developer isn’t just to write code but to create tools that empower and improve how we live and interact.",
      "Whether I'm developing a simple feature or tackling complex problems, my focus is always on delivering value through thoughtful, innovative solutions. Let’s connect and create something amazing together."
    ],
    aboutMeTitle: "Why should you work with me?",
    reason1: "I enjoy working in teams",
    reason2: "Strong passion for technology",
    reason3: "I learn fast and I am adaptable",
    reason4: "Communication is key",
    techTitle: "Technologies I enjoy experimenting with",
    projectTitle: "Projects",
    projectTitle1: "Architecture Website",
    projectDescription1: "This website was expertly crafted as a single-page application (SPA) using React and React Router to showcase a client's portfolio in a clean and professional manner",
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
    presentation: [
      "Me entusiasma poder compartir un poco de mi trayectoria contigo. Soy un desarrollador front-end comprometido, con más de 2 años de experiencia creando aplicaciones web responsivas, fáciles de usar y de gran impacto, utilizando tecnologías modernas de JavaScript. Lo que me impulsa es mi pasión por resolver problemas del mundo real a través de un diseño intuitivo y un código limpio.",
      "Mi camino en la tecnología comenzó con la curiosidad de entender cómo funcionan los sitios web y las aplicaciones móviles, y cómo pueden transformar la manera en que vivimos. Esta curiosidad rápidamente evolucionó en un compromiso profundo con el aprendizaje continuo y en mantenerme al día con las tecnologías emergentes. Ya sea experimentando con nuevos frameworks o colaborando con colegas para obtener nuevas perspectivas, siempre estoy refinando mi habilidad y superando mis propios límites.",
      "Antes de hacer la transición al desarrollo de software, estudié administración de empresas, lo que me ha dado una perspectiva única sobre la resolución de problemas y la importancia de comprender la visión global en las compañías. En los proyectos, no solo me enfoco desde el punto de vista técnico, sino que adopto un enfoque estratégico y centrado en el usuario. He aprendido a cerrar la brecha entre la tecnología y los negocios, entregando soluciones que no solo funcionan, sino que también generan un impacto tangible en los usuarios y las empresas por igual.",
      "Para mí, ser una buena persona y ayudar a los demás son los valores más importantes. Creo que al construir experiencias digitales eficientes y significativas, puedo optimizar la vida de las personas y contribuir de manera positiva a la sociedad. Mi objetivo como desarrollador no es solo escribir código, sino crear herramientas que empoderen y mejoren cómo vivimos e interactuamos.",
      "Ya sea que esté desarrollando una característica sencilla o enfrentándome a problemas complejos, siempre me concentro en entregar valor a través de soluciones innovadoras y reflexivas. Conectemos y creemos algo asombroso juntos."
    ],
    aboutMeTitle: "Por qué deberías trabajar conmigo?",
    reason1: "Disfruto trabajar en equipo",
    reason2: "Gran pasión por la tecnología",
    reason3: "Aprendo rápido y soy adaptable",
    reason4: "La comunicación es fundamental",
    techTitle: "Tecnologías con las que me gusta experimentar",
    projectTitle: "Proyectos",
    projectTitle1: "Página web de arquitectura",
    projectDescription1: "Este sitio web fue expertamente diseñado como una aplicación de una sola página (SPA) utilizando React y React Router para mostrar la cartera de un cliente de una manera limpia y profesional.",
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