import React, {VFC} from 'react';
import './VideoBackground.css';

const VIDEO_WIDTH = 960;
const VIDEO_HEIGHT = 504;

export const VideoBackground: VFC = () => {
    return <div className="video-background">
        <iframe
            width={VIDEO_WIDTH}
            height={VIDEO_HEIGHT}
          src="https://www.youtube.com/embed/dlMCikRF1s8?playlist=dlMCikRF1s8&autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3"   
          title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
    </div>;
};
