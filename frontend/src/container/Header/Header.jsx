import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import images from '../../constants/images';

const Header = () => (
<div className='app__header app__wrapper section__padding' id='home'>
  <div className='app__wrapper_info'>
    <SubHeading title="Your Key to the Perfect Brew"/>
    <h1 className='app__header-1'>Where Every Cup is an Experience </h1>
    <p className='p__opensans' style={{margin:'2rem 0'}}> Whether you’re looking for a quiet corner to unwind, a place to connect with friends, or a moment of inspiration, our café is your haven for exceptional coffee and unforgettable experiences.</p>
<a href="#menu" className="custom__button">
  Explore Menu
</a>

  </div>
  <div className='app__wrapper_img'>
    <img src={images.mugheart} alt="header img" />
  </div>
</div>

);

export default Header;
