import React, { useState, useRef, useContext } from 'react';
import { LanguageContext } from '../../context/languageProvider';
import './contact.css';

function ContactMe() {
    const [copied, setCopied] = useState(false); 
    const copiedTextRef = useRef(null); 
    const { translations } = useContext(LanguageContext);

    const handleEmailClick = () => {
        const email = 'rubhernandez42@gmail.com';
        window.location.href = `mailto:${email}`;
    };

    const copyToClipboard = async () => {
        try {
          const buttonText = document.getElementById('copyButton').textContent;
          await navigator.clipboard.writeText(buttonText);
          setCopied(true); 
        } catch (err) {
          console.error('Failed to copy text:', err);
        }
    };
    
    const handleCopyClick = () => {
        copyToClipboard();
        setTimeout(() => {
          setCopied(false); 
        }, 1000); 
    };

    return(
        <section id='contact' className='section-contact'>
            <h1 className='section-contact__title'>{translations.contactTitle}</h1>
            <div className='section-contact__container-description'>
                <p className='section-contact__description'>{translations.contactDescription}
                </p>
            </div>
            <div className='section-contact__email'>
                <button  className='section-contact__email--user' id="copyButton" onClick={handleCopyClick}>rubhernandez42@gmail.com</button>
                {copied && (
                    <span ref={copiedTextRef} className='contact__container--message'>
                        {translations.contactSpan}
                    </span>
                )}
                <button className='section-contact__email--send' onClick={handleEmailClick}>
                    <svg className='section-contact__email--svg' viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 10C0.5 4.75329 4.7533 0.5 10 0.5H24C29.2467 0.5 33.5 4.75329 33.5 10V15C33.5 20.2467 29.2467 24.5 24 24.5H10C4.75329 24.5 0.5 20.2467 0.5 15V10Z" fill="white" stroke="#010C15"/>
                        <path d="M23.5378 6.32194L15.8828 13.9588C16.1098 14.283 16.3028 14.6332 16.4578 15.0043L18.3678 19.5924L23.5378 6.32095V6.32194ZM14.5358 12.615L22.1918 4.97714L8.88877 10.1349L13.4878 12.0414C13.8569 12.1941 14.2083 12.3864 14.5358 12.615ZM26.1538 4.77163L20.1268 20.2409C19.7468 21.2186 18.6498 21.7204 17.6778 21.3622C17.441 21.2749 17.2249 21.1397 17.043 20.9651C16.8611 20.7905 16.7173 20.5803 16.6208 20.3476L14.7108 15.7595C14.3391 14.8654 13.627 14.155 12.7308 13.7842L8.13077 11.8787C7.17677 11.4827 6.74077 10.3823 7.15877 9.41859C7.26126 9.18311 7.40946 8.9702 7.59482 8.79213C7.78017 8.61406 7.99903 8.47435 8.23877 8.38105L23.7448 2.36634C24.0817 2.23088 24.4511 2.19727 24.807 2.26968C25.163 2.34209 25.4897 2.51732 25.7466 2.77358C26.0034 3.02983 26.1791 3.35578 26.2517 3.71087C26.3242 4.06596 26.2905 4.4345 26.1548 4.77063L26.1538 4.77163Z" fill="#010C15"/>
                    </svg>
                </button>
            </div>
            <div className='section-contact__media'>
                <a href="https://github.com/Rubenhdz20" target="_blank" rel="noopener noreferrer">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0001 0C8.95576 0 0 9.18083 0 20.5063C0 29.5667 5.73062 37.2532 13.6773 39.9648C14.6768 40.1546 15.0439 39.5199 15.0439 38.9783C15.0439 38.4893 15.0252 36.8738 15.0167 35.1604C9.45253 36.4008 8.27845 32.7409 8.27845 32.7409C7.36868 30.3706 6.05783 29.7405 6.05783 29.7405C4.2433 28.4677 6.1946 28.4938 6.1946 28.4938C8.203 28.6385 9.26054 30.607 9.26054 30.607C11.0443 33.7421 13.9393 32.8356 15.0806 32.3118C15.26 30.9863 15.7784 30.0818 16.3503 29.5697C11.9081 29.051 7.23818 27.2927 7.23818 19.4353C7.23818 17.1966 8.01948 15.3672 9.29897 13.9312C9.09129 13.4146 8.40676 11.329 9.49268 8.50439C9.49268 8.50439 11.1722 7.95323 14.9941 10.6064C16.5894 10.1519 18.3004 9.92417 20.0001 9.91645C21.6998 9.92417 23.412 10.1519 25.0104 10.6064C28.8278 7.95323 30.505 8.50439 30.505 8.50439C31.5936 11.329 30.9087 13.4146 30.701 13.9312C31.9833 15.3672 32.7593 17.1965 32.7593 19.4353C32.7593 27.3114 28.0806 29.0457 23.6271 29.5533C24.3444 30.1897 24.9836 31.4377 24.9836 33.3508C24.9836 36.0945 24.9604 38.3028 24.9604 38.9783C24.9604 39.5239 25.3204 40.1634 26.3343 39.962C34.2766 37.2474 40 29.5636 40 20.5063C40 9.18083 31.0455 0 20.0001 0Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/ruben-hernandez-alvarado/" target="_blank" rel="noopener noreferrer">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z" fill="white"/>
                    </svg>
                </a>
            </div>
            <p className='section-contact__credits'>{translations.contactCredits}</p>
        </section>

    )
}

export default ContactMe;