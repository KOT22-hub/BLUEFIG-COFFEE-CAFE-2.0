import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'



import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (<nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.bluefiglogo} alt="" style={{ height: "120px" }}/> <h1 className="navbar-title">Blue Fig Coffee Café</h1>


    </div>
  <ul className='app__navbar-links'>
  <li className='p__opensans'><a href="#home">Home</a></li>
  <li className='p__opensans'><a href="#menu">Menu</a></li>
  <li className='p__opensans'><a href="#reservations">Reservations</a></li>
  <li className='p__opensans'><a href="#contact">Contact</a></li>
</ul>

    <div>

    </div>
   <div className='app__navbar-smallscreen'>
  <GiHamburgerMenu 
    color='#fff' 
    fontSize={27} 
    onClick={() => setToggleMenu(true)} 
    aria-label="Open menu" 
  />
  {toggleMenu && (
    <div className='app__navbar-smallscreen_overlay flex_center slide-bottom'>
      <MdOutlineRestaurantMenu 
        fontSize={27} 
        className='overlay__close' 
        onClick={() => setToggleMenu(false)} 
        aria-label="Close menu"
      />
     <ul className='app__navbar-links-smallscreen'>
  <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
  <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
  <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
  <li><a href="#reservations" onClick={() => setToggleMenu(false)}>Reservations</a></li>
  <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
</ul>

    </div>
  )}
</div>



  </nav>)

};

export default Navbar;
