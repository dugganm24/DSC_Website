import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='images/DSC.png' alt='DSC Logo' className='navbar-logo-img' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
          {button && <Button 
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--navbar'
                      >
                      CONTACT US
                      </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
