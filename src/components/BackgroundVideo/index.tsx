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
      <div className="w-full px-4">
        <div
          className="hero-content wow fadeInUp mx-auto max-w-[760px] flex items-end justify-center text-center h-[79vh]"
          data-wow-delay=".2s"
          >
          <h1 className="text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-4xl lg:leading-[1.2] max-[700px]:text-3xl">
            ConnectCarrier is an innovative platform that brings carriers and shippers together in one place
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;