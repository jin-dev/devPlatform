import React from "react";

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {

}

const BackgroundVideo: React.FC<VideoProps> = (props) => {
    return (
        <video autoPlay muted loop id='background-video'>
            <source src ="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
        </video>
    )
}

export default BackgroundVideo;

