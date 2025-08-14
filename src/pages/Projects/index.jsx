import React, { useContext } from 'react';
import { LanguageContext } from '../../context/languageProvider';
import { ThemeContext } from '../../context/themeProvider'; 
import './projects.css';

function Projects() {
    const { translations } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext); 

    return(
        <section id='mywork' className={`projects-section ${theme}`}>
            <h1 className="projects-section__title">{translations.projectTitle}</h1>
            <div className="projects-section__container-cards">
                <div className={`projects-section__card ${theme}`}>
                    <img className="projects-section__card--img" src="/InvoiceApp.png" alt="Invoice App Overview" />
                    <h2 className="projects-section__card--title">{translations.projectTitle4}</h2>
                    <p className="projects-section__card--description">{translations.projectDescription4}</p>
                    <div className="projects-section__card--stack">
                        <div className={`projects-section__card--technology ${theme}`}>Tailwind</div>
                        <div className={`projects-section__card--technology ${theme}`}>Typescript</div>
                        <div className={`projects-section__card--technology ${theme}`}>ReactJS</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className={`projects-section__card--code ${theme}`} href="https://github.com/Rubenhdz20/Invoice-App" target="_blank">{translations.repositoryLink}</a>
                        <a className={`projects-section__card--code ${theme}`} href="https://www.figma.com/design/vxj33EYCE7h3ySmItGWI4X/invoice-app?node-id=0-1&t=C410bDeymgJRU7lK-1" target="_blank">Figma</a>
                        <a className={`projects-section__card--code ${theme}`} href="https://invoice-app.lat/" target="_blank">{translations.websiteLink}</a>
                    </div>
                </div>
                <div className={`projects-section__card ${theme}`}>
                    <img className="projects-section__card--img" src="/architecture.jpg" alt="Architecture website overview" />
                    <h2 className="projects-section__card--title">{translations.projectTitle1}</h2>
                    <p className="projects-section__card--description">{translations.projectDescription1}</p>
                    <div className="projects-section__card--stack">
                        <div className={`projects-section__card--technology ${theme}`}>Figma</div>
                        <div className={`projects-section__card--technology ${theme}`}>Html</div>
                        <div className={`projects-section__card--technology ${theme}`}>Css</div>
                        <div className={`projects-section__card--technology ${theme}`}>React</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className={`projects-section__card--code ${theme}`} href="https://github.com/Rubenhdz20/Architecture-Web-Portfolio" target="_blank">{translations.repositoryLink}</a>
                        <a className={`projects-section__card--code ${theme}`} href="https://www.figma.com/design/JkI7BmPPtXbEF56MYyD5qp/Architecture-Website-2.0?node-id=0-1&t=5QzAIg5BtN8P5ISL-1" target="_blank">Figma</a>
                        <a className={`projects-section__card--code ${theme}`} href="https://marianaarquitecta.com/" target="_blank">{translations.websiteLink}</a>
                    </div>
                </div>
                <div className={`projects-section__card ${theme}`}>
                    <img className="projects-section__card--img" src="/petweb.png" alt="Pet Adoption Website overview" />
                    <h2 className="projects-section__card--title">{translations.projectTitle6}</h2>
                    <p className="projects-section__card--description">{translations.projectDescription6}</p>
                    <div className="projects-section__card--stack">
                        <div className={`projects-section__card--technology ${theme}`}>Tailwind</div>
                        <div className={`projects-section__card--technology ${theme}`}>ReactJS</div>
                        <div className={`projects-section__card--technology ${theme}`}>NodeJs</div>
                        <div className={`projects-section__card--technology ${theme}`}>Api Rest</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className={`projects-section__card--code ${theme}`} href="https://github.com/Rubenhdz20/Pet-Adoption-Website" target="_blank">{translations.repositoryLink}</a>
                        <a className={`projects-section__card--code ${theme}`} href="https://www.figma.com/design/0uUpcAlHc62C93gJkczIAD/App-para-adopci%C3%B3n-de-mascotas--Copy---Copy-?node-id=61-139&t=zeF4Z7GbCcbJWCdW-1" target="_blank">Figma</a>
                    </div>
                </div>
                <div className={`projects-section__card ${theme}`}>
                    <img className="projects-section__card--img" src="/backgroundMovie.jpg" alt="The Grape Movie overview" />
                    <h2 className="projects-section__card--title">{translations.projectTitle2}</h2>
                    <p className="projects-section__card--description">{translations.projectDescription2}</p>
                    <div className="projects-section__card--stack">
                        <div className={`projects-section__card--technology ${theme}`}>Html</div>
                        <div className={`projects-section__card--technology ${theme}`}>Tailwind</div>
                        <div className={`projects-section__card--technology ${theme}`}>React</div>
                        <div className={`projects-section__card--technology ${theme}`}>Api Rest</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className={`projects-section__card--code ${theme}`} href="https://github.com/Rubenhdz20/The-Movie-Api-" target="_blank">{translations.repositoryLink}</a>
                        <a className={`projects-section__card--code ${theme}`} href="https://www.figma.com/design/4jalbvPeASOgYvCqzhZeVg/The-Movie-Api?node-id=4-789&t=VpJQ8TXCXOdfb6Hf-1" target="_blank">Figma</a>
                        <a className={`projects-section__card--code ${theme}`} href="https://grapetv.netlify.app/" target="_blank">{translations.websiteLink}</a>
                    </div>
                </div>
                <div className={`projects-section__card ${theme}`}>
                    <img className="projects-section__card--img" src="/fitnessApp.jpg" alt="My Fitness App Overview" />
                    <h2 className="projects-section__card--title">{translations.projectTitle5}</h2>
                    <p className="projects-section__card--description">{translations.projectDescription5}</p>
                    <div className="projects-section__card--stack">
                        <div className={`projects-section__card--technology ${theme}`}>Html</div>
                        <div className={`projects-section__card--technology ${theme}`}>Tailwind</div>
                        <div className={`projects-section__card--technology ${theme}`}>React</div>
                        <div className={`projects-section__card--technology ${theme}`}>TypeScript</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className={`projects-section__card--code ${theme}`} href="https://github.com/Rubenhdz20/My-Fitness-App" target="_blank">{translations.repositoryLink}</a>
                        <a className={`projects-section__card--code ${theme}`} href="https://www.figma.com/design/u2IcRwMMGtFXoxHcOauw9N/MyFitnessWeb?node-id=70-4&t=KXZr3HLN6GY54L9k-1" target="_blank">Figma</a>
                    </div>
                </div>
                <div className={`projects-section__card ${theme}`}>
                    <img className="projects-section__card--img" src="/foodProject.jpg" alt="Omnifood Project Overview" />
                    <h2 className="projects-section__card--title">{translations.projectTitle3}</h2>
                    <p className="projects-section__card--description">{translations.projectDescription3}</p>
                    <div className="projects-section__card--stack">
                        <div className={`projects-section__card--technology ${theme}`}>Html</div>
                        <div className={`projects-section__card--technology ${theme}`}>Css</div>
                        <div className={`projects-section__card--technology ${theme}`}>JavaScript</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className={`projects-section__card--code ${theme}`} href="https://github.com/Rubenhdz20/Omnifood-Project" target="_blank">{translations.repositoryLink}</a>
                        <a className={`projects-section__card--code ${theme}`} href="https://omnifood-aiweb.netlify.app/" target="_blank">{translations.websiteLink}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;