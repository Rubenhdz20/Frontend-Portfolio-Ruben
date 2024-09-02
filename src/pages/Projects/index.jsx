import '../Projects/projects.css';

function Projects() {
    return(
        <section className="projects-section">
            <h1 className="projects-section__title">Projects</h1>
            <div className="projects-section__container-cards">
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/architecture.jpg" alt="Architecture website overview" />
                    <h2 className="projects-section__card--title">Architecture Website</h2>
                    <p className="projects-section__card--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, praesentium? Debitis natus voluptatibus perspiciatis blanditiis aliquid itaque officiis? Expedita minus tempore facilis. Tempora natus optio modi ipsum recusandae laboriosam cum!</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">React</div>
                        <div className="projects-section__card--technology">React</div>
                        <div className="projects-section__card--technology">React</div>
                        <div className="projects-section__card--technology">React</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/Architecture-Web-Portfolio" target="_blank">Inspect the code</a>
                        <a className="projects-section__card--website" href="https://marianaarquitecta.com/" target="_blank">Visit website</a>
                    </div>
                </div>
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/backgroundMovie.jpg" alt="The Grape Movie overview" />
                    <h2 className="projects-section__card--title">The Grape Movies</h2>
                    <p className="projects-section__card--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, praesentium? Debitis natus voluptatibus perspiciatis blanditiis aliquid itaque officiis? Expedita minus tempore facilis. Tempora natus optio modi ipsum recusandae laboriosam cum!</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">React</div>
                        <div className="projects-section__card--technology">React</div>
                        <div className="projects-section__card--technology">React</div>
                        <div className="projects-section__card--technology">React</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/The-Movie-Api-" target="_blank">Inspect the code</a>
                        <a className="projects-section__card--website" href="" target="_blank">Visit website</a>
                    </div>
                </div>
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/foodProject.jpg" alt="Omnifood Project Overview" />
                    <h2 className="projects-section__card--title">Omnifood</h2>
                    <p className="projects-section__card--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, praesentium? Debitis natus voluptatibus perspiciatis blanditiis aliquid itaque officiis? Expedita minus tempore facilis. Tempora natus optio modi ipsum recusandae laboriosam cum!</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">React</div>
                        <div className="projects-section__card--technology">React</div>
                        <div className="projects-section__card--technology">React</div>
                        <div className="projects-section__card--technology">React</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/Omnifood-Project" target="_blank">Inspect the code</a>
                        <a className="projects-section__card--website" href="https://omnifood-aiweb.netlify.app/" target="_blank">Visit website</a>
                    </div>
                </div>
                <div className="projects-section__card">
                    <img className="projects-section__card--img" src="/salaryProject.jpg" alt="Salary Analysis Overview" />
                    <h2 className="projects-section__card--title">Salary Analysis</h2>
                    <p className="projects-section__card--description">Being able to apply mathematics and basic statistics combined with Javascript has made me go beyond my logical thinking, solving percentage problems in which I create discount coupons to apply it to products and reduce their prices,</p>
                    <div className="projects-section__card--stack">
                        <div className="projects-section__card--technology">HTML</div>
                        <div className="projects-section__card--technology">CSS</div>
                        <div className="projects-section__card--technology">Javascript</div>
                    </div>
                    <div className="projects-section__card--links">
                        <a className="projects-section__card--code" href="https://github.com/Rubenhdz20/Salary-Analysis" target="_blank">Inspect the code</a>
                        <a className="projects-section__card--website" href="" target="_blank">Visit website</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;