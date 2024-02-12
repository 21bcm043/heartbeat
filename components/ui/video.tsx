import React from "react";

type VideoProps = {
    src: string; // Path to the video file in the public folder
    width?: string; // Optional width of the video player
    height?: string; // Optional height of the video player
};

const VideoPlayer: React.FC<VideoProps> = ({ src, width = "100%", height = "auto" }) => {
    return (
        <video
            controls autoPlay loop muted
            width={width}
            height={height}
            className="rounded-xl "
        >
            <source src={src} type="video/mp4" />
        </video>
    );
};

export default VideoPlayer;
