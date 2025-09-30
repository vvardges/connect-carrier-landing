import React from "react";
import "./styles.css";

const BackgroundVideo = () => {
    return (
        <div className="video-container">
            <video
                className="bg-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/hero.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundVideo;
