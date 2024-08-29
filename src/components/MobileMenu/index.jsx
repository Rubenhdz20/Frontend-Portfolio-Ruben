import './MobileMenu.css';

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'AboutMe', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Contact', href: '#' },
]

const MobileMenu = ({ className, onClose }) => {
    
  return (
    <nav className={className}>
      <svg className='mobile-close' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClose}>
        <path d="M31.6668 10.6835L29.3168 8.3335L20.0002 17.6502L10.6835 8.3335L8.3335 10.6835L17.6502 20.0002L8.3335 29.3168L10.6835 31.6668L20.0002 22.3502L29.3168 31.6668L31.6668 29.3168L22.3502 20.0002L31.6668 10.6835Z" fill="white"/>
      </svg>
      <ul className='mobile-list'>
        <li className='mobile-list__item'>
          <a className="mobile-list__link" onClick={() => {
              onClose();
              const aboutUsSection = document.getElementById('home');
              if (aboutUsSection) {
                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            Home
          </a>
        </li>
        <li className='mobile-list__item'>
          <a className="mobile-list__link" onClick={() => {
              onClose();
              const weDoSection = document.getElementById('aboutMe');
              if ( weDoSection) {
                weDoSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            About Me
          </a>
        </li>
        <li className='mobile-list__item'>
          <a className="mobile-list__link" onClick={() => {
                onClose();
                const ourWorkSection = document.getElementById('projects');
                if (ourWorkSection) {
                  ourWorkSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
            Projects
          </a>
        </li>
        <li className='mobile-list__item'>
          <a className="mobile-list__link" onClick={() => {
              onClose();
              const contactSection = document.getElementById('contact');
              if ( contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            Contact
          </a>
        </li>
        <div className='mobile-list__item--container'>
            <li className='mobile-list__item--functions'>
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
            <li className='mobile-list__item--functions'>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 3.75C0.3375 3.75 0 3.4125 0 3C0 2.5875 0.3375 2.25 0.75 2.25H6.75V0.75C6.75 0.3375 7.0875 0 7.5 0C7.9125 0 8.25 0.3375 8.25 0.75V2.25H11.6627C11.6753 2.24968 11.6881 2.24967 11.7008 2.25H14.25C14.6625 2.25 15 2.5875 15 3C15 3.4125 14.6625 3.75 14.25 3.75H12.2461C11.8598 5.0058 10.7672 8.11527 8.74697 10.7732C9.87784 12.0391 10.8018 12.7849 10.9339 12.8915C10.9438 12.8995 10.9501 12.9047 10.9501 12.9047C11.2782 13.1578 11.3391 13.6313 11.086 13.9547C10.9454 14.1516 10.7251 14.25 10.5001 14.25C10.3407 14.25 10.1813 14.1984 10.0407 14.0953C10.0388 14.0938 10.0357 14.0914 10.0316 14.0881C9.91831 13.9986 8.9751 13.2533 7.78319 11.9414C5.28162 14.7826 2.85697 16.2585 2.64128 16.3898L2.62973 16.3969C2.51254 16.4672 2.38129 16.5 2.25004 16.5C1.99223 16.5 1.74379 16.3687 1.60316 16.1297C1.39223 15.7734 1.50941 15.314 1.86566 15.1031C1.89219 15.0898 4.34557 13.6171 6.79922 10.7872C6.70979 10.6754 6.6199 10.5609 6.52974 10.4438C4.77193 8.16563 3.86724 6.41719 3.82974 6.34219C3.64224 5.97188 3.78755 5.52188 4.15318 5.33438C4.52349 5.14688 4.97349 5.29219 5.16099 5.65782C5.17037 5.67657 6.04693 7.36407 7.71099 9.52501C7.72721 9.54607 7.74342 9.56705 7.75963 9.58795C9.29457 7.4692 10.2336 5.04722 10.6675 3.75H0.75Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 19.5C19.9594 19.5 19.6828 19.3312 19.561 19.0453L18.4701 16.5H13.0299L11.9391 19.0453C11.775 19.425 11.3344 19.6031 10.9547 19.4391C10.575 19.275 10.3969 18.8344 10.561 18.4547L15.061 7.95469C15.1782 7.67812 15.45 7.5 15.75 7.5C16.05 7.5 16.3219 7.67812 16.4391 7.95469L20.9391 18.4547C21.1032 18.8344 20.925 19.275 20.5453 19.4391C20.4469 19.4813 20.3485 19.5 20.25 19.5ZM17.8273 15L15.75 10.1531L13.6728 15H17.8273Z" fill="white"/>
                </svg>
            </li>
        </div>
        
      </ul>
    </nav>
  );
};

export default MobileMenu;