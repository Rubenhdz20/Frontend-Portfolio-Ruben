import React, { useContext } from 'react';
import { LanguageContext } from '../../context/languageProvider';
import './projects.css';

function Projects() {
    const { translations } = useContext(LanguageContext);

    return(
        <section id='mywork' className="projects-section">
            <h1 className="projects-section__title">{translations.projectTitle}</h1>
            <div className="projects-section__container-cards">
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/architecture.jpg" alt="Architecture website overview" />
                    <h2 className="projects-section__card--title">{translations.projectTitle1}</h2>
                    <p className="projects-section__card--description">{translations.projectDescription1}</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">FIGMA</div>
                        <div className="projects-section__card--technology">HTML</div>
                        <div className="projects-section__card--technology">CSS</div>
                        <div className="projects-section__card--technology">REACT</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/Architecture-Web-Portfolio" target="_blank">{translations.repositoryLink}</a>
                        <a className="projects-section__card--website" href="https://marianaarquitecta.com/" target="_blank">{translations.websiteLink}</a>
                    </div>
                </div>
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/backgroundMovie.jpg" alt="The Grape Movie overview" />
                    <h2 className="projects-section__card--title">{translations.projectTitle2}</h2>
                    <p className="projects-section__card--description">{translations.projectDescription2}</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">HTML</div>
                        <div className="projects-section__card--technology">TAILWIND</div>
                        <div className="projects-section__card--technology">REACT</div>
                        <div className="projects-section__card--technology">API REST</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/The-Movie-Api-" target="_blank">{translations.repositoryLink}</a>
                        <a className="projects-section__card--website" href="" target="_blank">{translations.websiteLink}</a>
                    </div>
                </div>
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/foodProject.jpg" alt="Omnifood Project Overview" />
                    <h2 className="projects-section__card--title">{translations.projectTitle3}</h2>
                    <p className="projects-section__card--description">{translations.projectDescription3}</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">HTML</div>
                        <div className="projects-section__card--technology">CSS</div>
                        <div className="projects-section__card--technology">JS</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/Omnifood-Project" target="_blank">{translations.repositoryLink}</a>
                        <a className="projects-section__card--website" href="https://omnifood-aiweb.netlify.app/" target="_blank">{translations.websiteLink}</a>
                    </div>
                </div>
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/salaryProject.jpg" alt="Salary Analysis Overview" />
                    <h2 className="projects-section__card--title">{translations.projectTitle4}</h2>
                    <p className="projects-section__card--description">{translations.projectDescription4}</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">HTML</div>
                        <div className="projects-section__card--technology">CSS</div>
                        <div className="projects-section__card--technology">JS</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/Salary-Analysis" target="_blank">{translations.repositoryLink}</a>
                        <a className="projects-section__card--website" href="https://salary-analisis.netlify.app/" target="_blank">{translations.websiteLink}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;