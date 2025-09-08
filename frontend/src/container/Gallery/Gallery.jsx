import React from 'react';

import './Gallery.css';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { SubHeading } from '../../components';

import images from '../../constants/images';

const Galleryimage = [images.eggs, images.moose, images.chocolatec, images.burger, images.fruits,images.steak,images.bubbletea,images.milkshake1,images.milkshake2]
const Gallery = () => {
  const scrollref = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollref
    if (direction === 'left') {
      current.scrollLeft -= 300

    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Taste in Focus" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: "#AAA", marginTop: "2rem" }}>Our gallery captures the heart of Blue Fig Coffee Café, from golden croissants fresh out the oven to mugs of coffee that glow with comfort. Take a visual journey through the moments that make our space special, crafted to be savored with both your eyes and your taste.</p>
        

      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollref}>
          {
            Galleryimage.map((img, index) => (
              <div className='app__gallery-images_card flex_center' key={`gallery_image-${index + 1}`}>
                <img src={img} alt="" />
                <a
                  href="https://www.instagram.com/bluefigmooikloof/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery__image-link"
                >
                  <BsInstagram className='gallery__image-icon' />
                </a>
              </div>


            ))




          }


        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />


        </div>

      </div>
    </div>

  )

};

export default Gallery;
