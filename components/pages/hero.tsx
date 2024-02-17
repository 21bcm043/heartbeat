
"use client";
import React from "react";

type VideoProps = {
    src: string; // Path to the video file in the public folder
    width?: string; // Optional width of the video player
    height?: string; // Optional height of the video player
};
import ReactPlayer from "react-player";

const VideoPlayer = ({ src, width = "500px", height = "400px" }: VideoProps) => {
    //video path

    return (
        <div>
            <ReactPlayer
                width={width}
                height={height}
                url={src}
                controls={true}
                // light is usefull incase of dark mode
                light={false}
                // picture in picture
                pip={true}
            />
            <source src={src} type="video/mp4" />
        </div>
    );
};

export default VideoPlayer;
