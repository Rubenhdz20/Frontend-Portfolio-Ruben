import React from 'react';
import { useState } from 'react';
import MobileMenu from '../../components/MobileMenu';
import '../Home/home.css'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'AboutMe', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
]

function Home() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        console.log(isMobileMenuOpen);
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return(
        <>
            {isMobileMenuOpen && (
                    <>
                        <MobileMenu onClose={toggleMobileMenu} className={isMobileMenuOpen ? 'mobile-container activein' : 'mobile-container activeout'} />
                    </>
            )}
            <section className="hero-container">
                <img src="/backgroundImg.jpg" alt="Creating code with my laptop" />
                <header className="hero-container__header">
                    <p className="hero-container__brandname">RubDev</p>
                    <nav className="hero-container__nav">
                        <svg className='hero__menu' viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMobileMenu}>
                        <path d="M0 18V15H27V18H0ZM0 10.5V7.5H27V10.5H0ZM0 3V0H27V3H0Z" fill="white"/>
                        </svg>
                        <ul className='hero__menu-desktop'>
                            <li className='hero__menu-desktop--li'>
                                {/* <a  onClick={() => {
                                    const aboutUsSection = document.getElementById('about-us');
                                    if (aboutUsSection) {
                                        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                    }}>
                                    Sobre Nosotros
                                </a> */}
                            </li>
                            <li className='hero__menu-desktop--li'>
                                {/* <a  onClick={() => {
                                    const weDoSection = document.getElementById('whatwedo');
                                    if ( weDoSection) {
                                        weDoSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                    }}>
                                    Lo que hacemos
                                </a> */}
                            </li>
                            <li className='hero__menu-desktop--li'>
                                {/* <a  onClick={() => {
                                    const ourWorkSection = document.getElementById('our-work');
                                    if (ourWorkSection) {
                                    ourWorkSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                    }}>
                                    Nuestro Trabajo
                                </a> */}
                            </li>
                            <li className='hero__menu-desktop--li'>
                                {/* <a  onClick={() => {
                                    const contactSection = document.getElementById('contact-section');
                                    if ( contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                    }}>
                                    Contacto
                                </a> */}
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className="hero-container__section">
                    <div className="hero-container__content">
                        <p>Hello, I am Ruben</p>
                        <p>Frontend Developer</p>
                        <button className="hero-container__btn">
                            Download CV
                            <svg className='hero-container__btn-svg' viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 1C11.5 0.447715 11.0523 0 10.5 0C9.94771 0 9.5 0.447715 9.5 1V10.5858L6.20711 7.29289C5.81658 6.90237 5.18342 6.90237 4.79289 7.29289C4.40237 7.68342 4.40237 8.31658 4.79289 8.70711L9.79289 13.7071C10.1834 14.0976 10.8166 14.0976 11.2071 13.7071L16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L11.5 10.5858V1Z" fill="white"/>
                            <path d="M1.5 12C2.05228 12 2.5 12.4477 2.5 13V17C2.5 17.2652 2.60536 17.5196 2.79289 17.7071C2.98043 17.8946 3.23478 18 3.5 18H17.5C17.7652 18 18.0196 17.8946 18.2071 17.7071C18.3946 17.5196 18.5 17.2652 18.5 17V13C18.5 12.4477 18.9477 12 19.5 12C20.0523 12 20.5 12.4477 20.5 13V17C20.5 17.7957 20.1839 18.5587 19.6213 19.1213C19.0587 19.6839 18.2957 20 17.5 20H3.5C2.70435 20 1.94129 19.6839 1.37868 19.1213C0.81607 18.5587 0.5 17.7957 0.5 17V13C0.5 12.4477 0.947715 12 1.5 12Z" fill="white"/>
                        </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;