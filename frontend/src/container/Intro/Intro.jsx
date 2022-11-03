import React from 'react';
import { threelittlewords } from '../../constants';
import { hautedolci } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();

  return (
    <div>
    <div className="app__video">
      <div className="callNow">
      </div>
      <video
        ref={vidRef}
        className="video-style"
        autoPlay={true}
        src={threelittlewords}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
    </div>
    <div className="app__navbar-smallscreen">
      <video
      className="video-style"
        ref={vidRef}
        autoPlay={true}
        src={hautedolci}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      </div>
    </div>
  );
};

export default Intro;