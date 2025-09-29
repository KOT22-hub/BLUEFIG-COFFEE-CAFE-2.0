import React from 'react';
import './SpecialMenu.css';
import images from '../../constants/images';
import data from '../../constants/data';
import { SubHeading, MenuItem } from '../../components';



const SpecialMenu = () => {


  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      {/* Title */}
      <div className='app__specialMenu-title'>
        <SubHeading title="Where Taste Meets Comfort" />
        <h1 className='headtext__cormorant'>Discover our Menu</h1>
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
               <p className='app__specialMenu_menu_sandwiches' style={{marginBottom:"15px",marginTop:"10px"}}>Scones</p>
            {data.scones.map((scone, index) => (
              <MenuItem key={scone.title + index} title={scone.title} price={scone.price} tags={scone.tags} />
            ))}
             <p className='app__specialMenu_menu_sandwiches' style={{marginBottom:"15px",marginTop:"10px"}}>Salads</p>
            {data.salads.map((salad, index) => (
              <MenuItem key={salad.title + index} title={salad.title} price={salad.price} tags={salad.tags} />
            ))}
             <p className='app__specialMenu_menu_sandwiches' style={{marginBottom:"15px",marginTop:"10px"}}>Wraps</p>
            {data.wraps.map((wrap, index) => (
              <MenuItem key={wrap.title + index} title={wrap.title} price={wrap.price} tags={wrap.tags} />
            ))}
              <p className='app__specialMenu_menu_sandwiches' style={{marginBottom:"15px",marginTop:"10px"}}>Pasta</p>
            {data.pastas.map((past, index) => (
              <MenuItem key={past.title + index} title={past.title} price={past.price} tags={past.tags} />
            ))}
             <p className='app__specialMenu_menu_sandwiches' style={{marginBottom:"15px",marginTop:"10px"}}>Steaks</p>
            {data.steaks.map((steak, index) => (
              <MenuItem key={steak.title + index} title={steak.title} price={steak.price} tags={steak.tags} />
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

            <p className='app__specialMenu_menu_sandwiches' style={{marginBottom:"15px",marginTop:"10px"}}>Open Sandwiches</p>
            {data.openSandwiches.map((sandwich, index) => (
              <MenuItem key={sandwich.title + index} title={sandwich.title} price={sandwich.price} tags={sandwich.tags} />
            ))}
              <p className='app__specialMenu_menu_sandwiches' style={{marginBottom:"15px",marginTop:"10px"}}>Quiches</p>
            {data.quiches.map((quich, index) => (
              <MenuItem key={quich.title + index} title={quich.title} price={quich.price} tags={quich.tags} />
            ))}
            <p className='app__specialMenu_menu_sandwiches' style={{marginBottom:"15px",marginTop:"10px"}}>Toasted Sandwiches</p>
            {data.toastedSandwiches.map((toast, index) => (
              <MenuItem key={toast.title + index} title={toast.title} price={toast.price} tags={toast.tags} />
            ))}
             <p className='app__specialMenu_menu_sandwiches' style={{marginBottom:"15px",marginTop:"10px"}}>Breakfast bowls</p>
            {data.bowls.map((bowl, index) => (
              <MenuItem key={bowl.title + index} title={bowl.title} price={bowl.price} tags={bowl.tags} />
            ))}
            <p className='app__specialMenu_menu_sandwiches' style={{marginBottom:"15px",marginTop:"10px"}}>Burgers</p>
            {data.burgers.map((burger, index) => (
              <MenuItem key={burger.title + index} title={burger.title} price={burger.price} tags={burger.tags} />
            ))}
            
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div style={{ marginTop: "15px" }}>
       <a
  href="https://moonlit-faloodeh-4a6648.netlify.app"
  className="custom__button"
  target="_blank"
  rel="noopener noreferrer"
>
  View More
</a>
      </div>


    </div>
  );
};

export default SpecialMenu;
