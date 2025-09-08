import React from 'react';
import './Menu.css';
import menu1 from '../../../assets/menuPhotos/IMG_0607.jpg';
import menu2 from '../../../assets/menuPhotos/IMG_0608.jpg';
import menu3 from '../../../assets/menuPhotos/IMG_0609.jpg';

const Menu = () => (
  <div className="menu-scroll-container">
    {[menu1, menu2, menu3].map((img, idx) => (
      <div className="menu-scroll-image" key={idx}>
        <img src={img} alt={`Menu ${idx + 1}`} />
      </div>
    ))}
  </div>
);

export default Menu;
