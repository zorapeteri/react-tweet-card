import React, { useRef } from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import css from './VideoButton.module.css';
import svg from 'assets/PlayIcon.svg';

const VideoButton = () => {
    const ref = useRef(null);
    return (
        <div {...className(globalClassName('videoButtonContainer'), css.videoButtonContainer)} ref={ref}>
            <div {...className(globalClassName('videoButton'), css.videoButton)} >
                <img src={svg} {...className(globalClassName('playIcon'), css.playIcon)} alt="" />
            </div>
        </div>
    );
};

export default VideoButton;
