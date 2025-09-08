import React from 'react';
import './SpecialMenu.css';
import images from '../../constants/images';
import data from '../../constants/data';
import { SubHeading, MenuItem } from '../../components';
import { Link } from 'react-router-dom';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    {/* Title */}
    <div className='app__specialMenu-title'>
      <SubHeading title="Where Taste Meets Comfort" />
      <h1 className='headtext__cormorant'>Savor Our Specials</h1>
    </div>

    {/* Menu Sections */}
    <div className='app__specialMenu-menu'>

      {/* Breakfast */}
      <div className='app__specialMenu-menu_breakfast flex__center'>
        <p className='app__specialMenu_menu_heading' style={{marginBottom:"15px",marginTop:"10px"}}>Breakfast</p>
        <div className='app__specialMenu_menu_items'>
          {data.breakfast.map((breakf, index) => (
            <MenuItem key={breakf.title + index} title={breakf.title} price={breakf.price} tags={breakf.tags} />
          ))}
        </div>
      </div>

      {/* Image */}
      <div className='app__specialMenu-menu_img'>
        <img src={images.redmug} alt="Red Mug" />
      </div>

      {/* Croissants + Open Sandwiches */}
      <div className='app__specialMenu-menu_croissant flex__center'>
        <p className='app__specialMenu_menu_heading'>Croissants</p>
        <div className='app__specialMenu_menu_items'>
          {data.croissants.map((croissant, index) => (
            <MenuItem key={croissant.title + index} title={croissant.title} price={croissant.price} tags={croissant.tags} />
          ))}

          {/* Open Sandwiches directly below Croissants */}
          <p className='app__specialMenu_menu_sandwiches' style={{marginBottom:"15px",marginTop:"10px"}}>Open Sandwiches</p>
          {data.openSandwiches.map((sandwich, index) => (
            <MenuItem key={sandwich.title + index} title={sandwich.title} price={sandwich.price} tags={sandwich.tags} />
          ))}
        </div>
      </div>

    </div>

    {/* View More Button */}
    <div style={{ marginTop: "15px" }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
