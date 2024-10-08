import React, { useContext } from 'react';
import { useState } from 'react';
import MobileMenu from '../../components/MobileMenu';
import { LanguageContext } from '../../context/languageProvider';
import { ThemeContext } from '../../context/themeProvider'; 
import './home.css'

function Home() {
    const { language, translations, toggleLanguage } = useContext(LanguageContext);
    const { theme, toggleTheme } = useContext(ThemeContext); 
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigation = [
        { name: translations.aboutMe, sectionId: 'about-me', href: '#about-me' },
        { name: translations.myWork, sectionId: 'mywork', href: '#mywork' },
        { name: translations.contact, sectionId: 'contact', href: '#contact' },
    ];

    function handleScroll(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    } 

    const toggleMobileMenu = () => {
        console.log(isMobileMenuOpen);
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleDownloadCV = () => {
        const fileUrl = language === 'en' ? '/CV_Frontend_RubenHernandez_EN.pdf' : '/CV_Frontend_RubenHernandez_ES.pdf';  
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = `CV_Frontend_RubenHernandez_${language === 'en' ? 'English' : 'Spanish'}.pdf`;
        link.click();
    };

    return(
        <>
            {isMobileMenuOpen && (
                    <>
                        <MobileMenu onClose={toggleMobileMenu} className={isMobileMenuOpen ? `mobile-container activein ${theme}` : `mobile-container activeout ${theme}`} />
                    </>
            )}
            <section id='home' className="hero-container">
                <img src="/backgroundImg.jpg" srcset="/backgroundMedium.jpg 602w, /backgroundLarge.jpg 1025w" alt="Creating the future of humanity" />
                <header className="hero-container__header">
                    <p className="hero-container__brandname">RubDev</p>
                    <nav className="hero-container__nav">
                        <svg className='hero__menu' viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMobileMenu}>
                        <path d="M0 18V15H27V18H0ZM0 10.5V7.5H27V10.5H0ZM0 3V0H27V3H0Z" fill="white"/>
                        </svg>
                        <ul className='hero__menu-desktop'>
                            {navigation.map((item, index) => (
                                <li key={index} className='hero__menu-desktop--li'>
                                    <a className='hero__menu-desktop--a' 
                                       href={item.href} 
                                       onClick={(e) => {
                                            e.preventDefault(); 
                                            handleScroll(item.sectionId);
                                        }}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li className='hero__menu-desktop--li' onClick={toggleTheme}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 0C10.9142 0 11.25 0.335786 11.25 0.75V3C11.25 3.41421 10.9142 3.75 10.5 3.75C10.0858 3.75 9.75 3.41421 9.75 3V0.75C9.75 0.335786 10.0858 0 10.5 0Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 17.25C10.9142 17.25 11.25 17.5858 11.25 18V20.25C11.25 20.6642 10.9142 21 10.5 21C10.0858 21 9.75 20.6642 9.75 20.25V18C9.75 17.5858 10.0858 17.25 10.5 17.25Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9247 3.07529C18.2176 3.36819 18.2176 3.84306 17.9247 4.13595L16.3338 5.72689C16.0409 6.01979 15.566 6.01979 15.2731 5.72689C14.9802 5.434 14.9802 4.95913 15.2731 4.66623L16.864 3.0753C17.1569 2.7824 17.6318 2.7824 17.9247 3.07529Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.72689 15.2731C6.01979 15.566 6.01979 16.0409 5.72689 16.3338L4.13595 17.9247C3.84306 18.2176 3.36819 18.2176 3.07529 17.9247C2.7824 17.6318 2.7824 17.1569 3.0753 16.864L4.66623 15.2731C4.95913 14.9802 5.434 14.9802 5.72689 15.2731Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.25 10.5C17.25 10.0858 17.5858 9.75 18 9.75H20.25C20.6642 9.75 21 10.0858 21 10.5C21 10.9142 20.6642 11.25 20.25 11.25H18C17.5858 11.25 17.25 10.9142 17.25 10.5Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.5C0 10.0858 0.335786 9.75 0.75 9.75H3C3.41421 9.75 3.75 10.0858 3.75 10.5C3.75 10.9142 3.41421 11.25 3 11.25H0.75C0.335786 11.25 0 10.9142 0 10.5Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2731 15.2731C15.566 14.9802 16.0409 14.9802 16.3338 15.2731L17.9247 16.864C18.2176 17.1569 18.2176 17.6318 17.9247 17.9247C17.6318 18.2176 17.1569 18.2176 16.864 17.9247L15.2731 16.3338C14.9802 16.0409 14.9802 15.566 15.2731 15.2731Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.07529 3.07529C3.36819 2.7824 3.84306 2.7824 4.13596 3.07529L5.72689 4.66623C6.01979 4.95913 6.01979 5.434 5.72689 5.72689C5.434 6.01979 4.95913 6.01979 4.66623 5.72689L3.07529 4.13596C2.7824 3.84306 2.7824 3.36819 3.07529 3.07529Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 7.5C8.84315 7.5 7.5 8.84315 7.5 10.5C7.5 12.1569 8.84315 13.5 10.5 13.5C12.1569 13.5 13.5 12.1569 13.5 10.5C13.5 8.84315 12.1569 7.5 10.5 7.5ZM6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5Z" fill="white"/>
                                </svg>
                            </li>
                            <li className='hero__menu-desktop--li' onClick={toggleLanguage}>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 3.75C0.3375 3.75 0 3.4125 0 3C0 2.5875 0.3375 2.25 0.75 2.25H6.75V0.75C6.75 0.3375 7.0875 0 7.5 0C7.9125 0 8.25 0.3375 8.25 0.75V2.25H11.6627C11.6753 2.24968 11.6881 2.24967 11.7008 2.25H14.25C14.6625 2.25 15 2.5875 15 3C15 3.4125 14.6625 3.75 14.25 3.75H12.2461C11.8598 5.0058 10.7672 8.11527 8.74697 10.7732C9.87784 12.0391 10.8018 12.7849 10.9339 12.8915C10.9438 12.8995 10.9501 12.9047 10.9501 12.9047C11.2782 13.1578 11.3391 13.6313 11.086 13.9547C10.9454 14.1516 10.7251 14.25 10.5001 14.25C10.3407 14.25 10.1813 14.1984 10.0407 14.0953C10.0388 14.0938 10.0357 14.0914 10.0316 14.0881C9.91831 13.9986 8.9751 13.2533 7.78319 11.9414C5.28162 14.7826 2.85697 16.2585 2.64128 16.3898L2.62973 16.3969C2.51254 16.4672 2.38129 16.5 2.25004 16.5C1.99223 16.5 1.74379 16.3687 1.60316 16.1297C1.39223 15.7734 1.50941 15.314 1.86566 15.1031C1.89219 15.0898 4.34557 13.6171 6.79922 10.7872C6.70979 10.6754 6.6199 10.5609 6.52974 10.4438C4.77193 8.16563 3.86724 6.41719 3.82974 6.34219C3.64224 5.97188 3.78755 5.52188 4.15318 5.33438C4.52349 5.14688 4.97349 5.29219 5.16099 5.65782C5.17037 5.67657 6.04693 7.36407 7.71099 9.52501C7.72721 9.54607 7.74342 9.56705 7.75963 9.58795C9.29457 7.4692 10.2336 5.04722 10.6675 3.75H0.75Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 19.5C19.9594 19.5 19.6828 19.3312 19.561 19.0453L18.4701 16.5H13.0299L11.9391 19.0453C11.775 19.425 11.3344 19.6031 10.9547 19.4391C10.575 19.275 10.3969 18.8344 10.561 18.4547L15.061 7.95469C15.1782 7.67812 15.45 7.5 15.75 7.5C16.05 7.5 16.3219 7.67812 16.4391 7.95469L20.9391 18.4547C21.1032 18.8344 20.925 19.275 20.5453 19.4391C20.4469 19.4813 20.3485 19.5 20.25 19.5ZM17.8273 15L15.75 10.1531L13.6728 15H17.8273Z" fill="white"/>
                                </svg>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className="hero-container__section">
                    <div className="hero-container__content">
                        <p>{translations.greeting}<span className='hero-container__name'>Ruben</span></p>
                        <p className='hero-container__position'>{translations.role}</p>
                        <button className={`hero-container__btn ${theme}`}  onClick={handleDownloadCV}>
                            {translations.downloadCV}

                            {theme === 'light' ? 
                                <svg className='hero-container__btn-svg' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 3C13.5 2.44772 13.0523 2 12.5 2C11.9477 2 11.5 2.44772 11.5 3V12.5858L8.20711 9.29289C7.81658 8.90237 7.18342 8.90237 6.79289 9.29289C6.40237 9.68342 6.40237 10.3166 6.79289 10.7071L11.7929 15.7071C12.1834 16.0976 12.8166 16.0976 13.2071 15.7071L18.2071 10.7071C18.5976 10.3166 18.5976 9.68342 18.2071 9.29289C17.8166 8.90237 17.1834 8.90237 16.7929 9.29289L13.5 12.5858V3Z" fill="#292F36"/>
                                    <path d="M3.5 14C4.05228 14 4.5 14.4477 4.5 15V19C4.5 19.2652 4.60536 19.5196 4.79289 19.7071C4.98043 19.8946 5.23478 20 5.5 20H19.5C19.7652 20 20.0196 19.8946 20.2071 19.7071C20.3946 19.5196 20.5 19.2652 20.5 19V15C20.5 14.4477 20.9477 14 21.5 14C22.0523 14 22.5 14.4477 22.5 15V19C22.5 19.7957 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2957 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7957 2.5 19V15C2.5 14.4477 2.94772 14 3.5 14Z" fill="#292F36"/>
                                </svg> 
                                :  
                                <svg className='hero-container__btn-svg' viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 1C11.5 0.447715 11.0523 0 10.5 0C9.94771 0 9.5 0.447715 9.5 1V10.5858L6.20711 7.29289C5.81658 6.90237 5.18342 6.90237 4.79289 7.29289C4.40237 7.68342 4.40237 8.31658 4.79289 8.70711L9.79289 13.7071C10.1834 14.0976 10.8166 14.0976 11.2071 13.7071L16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L11.5 10.5858V1Z" fill="white"/>
                                    <path d="M1.5 12C2.05228 12 2.5 12.4477 2.5 13V17C2.5 17.2652 2.60536 17.5196 2.79289 17.7071C2.98043 17.8946 3.23478 18 3.5 18H17.5C17.7652 18 18.0196 17.8946 18.2071 17.7071C18.3946 17.5196 18.5 17.2652 18.5 17V13C18.5 12.4477 18.9477 12 19.5 12C20.0523 12 20.5 12.4477 20.5 13V17C20.5 17.7957 20.1839 18.5587 19.6213 19.1213C19.0587 19.6839 18.2957 20 17.5 20H3.5C2.70435 20 1.94129 19.6839 1.37868 19.1213C0.81607 18.5587 0.5 17.7957 0.5 17V13C0.5 12.4477 0.947715 12 1.5 12Z" fill="white"/>
                                </svg>
                            }
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;