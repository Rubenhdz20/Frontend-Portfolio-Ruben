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
                        <a className="projects-section__card--code" href="">Inspect the code</a>
                        <a className="projects-section__card--website" href="">Visit website</a>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default Projects;