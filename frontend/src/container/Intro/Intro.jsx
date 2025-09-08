import React, { useRef, useEffect } from 'react';
import './Intro.css';
import images from '../../constants/images';

const Intro = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 40) {  // stop at 40s
        video.currentTime = 0;        // reset
        video.play();                 // replay
      }
    };

    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  return (
    <div className='app__video'>
      <video
        ref={videoRef}
        src={images.bluevid}
        type="video/mp4"
        autoPlay
        muted
        className="app__video-content"
      />
    </div>
  );
};

export default Intro;
