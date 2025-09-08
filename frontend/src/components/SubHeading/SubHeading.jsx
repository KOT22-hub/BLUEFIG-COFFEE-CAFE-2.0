import React from 'react';
import images from '../../constants/images';

const SubHeading = ({title}) => (
 <div className="subheading-spoon">
  <p className='p__cormorant' style={{color:"white"}}>{title}</p>
   <img src={images.spoon} alt="" />
</div>

);

export default SubHeading;
