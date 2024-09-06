import './projects.css';

function Projects() {
    return(
        <section id='mywork' className="projects-section">
            <h1 className="projects-section__title">Projects</h1>
            <div className="projects-section__container-cards">
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/architecture.jpg" alt="Architecture website overview" />
                    <h2 className="projects-section__card--title">Architecture Website</h2>
                    <p className="projects-section__card--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, praesentium? Debitis natus voluptatibus perspiciatis blanditiis aliquid itaque officiis? Expedita minus tempore facilis. Tempora natus optio modi ipsum recusandae laboriosam cum!</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">FIGMA</div>
                        <div className="projects-section__card--technology">HTML</div>
                        <div className="projects-section__card--technology">CSS</div>
                        <div className="projects-section__card--technology">REACT</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/Architecture-Web-Portfolio" target="_blank">View Repository</a>
                        <a className="projects-section__card--website" href="https://marianaarquitecta.com/" target="_blank">Visit Website</a>
                    </div>
                </div>
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/backgroundMovie.jpg" alt="The Grape Movie overview" />
                    <h2 className="projects-section__card--title">The Grape Movies</h2>
                    <p className="projects-section__card--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, praesentium? Debitis natus voluptatibus perspiciatis blanditiis aliquid itaque officiis? Expedita minus tempore facilis. Tempora natus optio modi ipsum recusandae laboriosam cum!</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">HTML</div>
                        <div className="projects-section__card--technology">TAILWIND</div>
                        <div className="projects-section__card--technology">REACT</div>
                        <div className="projects-section__card--technology">API REST</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/The-Movie-Api-" target="_blank">View Repository</a>
                        <a className="projects-section__card--website" href="" target="_blank">Visit Website</a>
                    </div>
                </div>
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/foodProject.jpg" alt="Omnifood Project Overview" />
                    <h2 className="projects-section__card--title">Omnifood</h2>
                    <p className="projects-section__card--description">Website based on AI for improve your diet</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">HTML</div>
                        <div className="projects-section__card--technology">CSS</div>
                        <div className="projects-section__card--technology">JS</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/Omnifood-Project" target="_blank">View Repository</a>
                        <a className="projects-section__card--website" href="https://omnifood-aiweb.netlify.app/" target="_blank">Visit Website</a>
                    </div>
                </div>
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/salaryProject.jpg" alt="Salary Analysis Overview" />
                    <h2 className="projects-section__card--title">Salary Analysis</h2>
                    <p className="projects-section__card--description">In this project I was able to apply mathematics and statistics solutions combined with Javascript, this approach has made me go beyond my logical thinking</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">HTML</div>
                        <div className="projects-section__card--technology">CSS</div>
                        <div className="projects-section__card--technology">JS</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/Salary-Analysis" target="_blank">View Repository</a>
                        <a className="projects-section__card--website" href="https://salary-analisis.netlify.app/" target="_blank">Visit Website</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;