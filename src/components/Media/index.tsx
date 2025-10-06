'use client'

import { useState } from "react";
import Image from "next/image";

const images = [1, 2, 3, 4, 5];

// const videos = [
//   { src: "/video/sample1.mp4" },
//   { src: "/video/sample2.mp4" },
//   { src: "/video/sample3.mp4" },
//   { src: "/video/sample4.mp4" }
// ];

export default function Media() {
  const [activeTab, setActiveTab] = useState('images');

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Coming Soon
      </h1>
    </div>
    // <div className="relative min-h-screen pt-20 pb-8 bg-gray-100 dark:bg-gray-900 p-6 lg:pt-[200px]">
      
    //   <div className="flex gap-4 mb-6">
    //     <button
    //       className={`px-4 py-2 rounded-md font-semibold transition ${
    //         activeTab === 'images' 
    //           ? 'bg-blue-600 text-white' 
    //           : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
    //       }`}
    //       onClick={() => setActiveTab('images')}
    //     >
    //       Images
    //     </button>
    //     <button
    //       className={`px-4 py-2 rounded-md font-semibold transition ${
    //         activeTab === 'videos' 
    //           ? 'bg-blue-600 text-white' 
    //           : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
    //       }`}
    //       onClick={() => setActiveTab('videos')}
    //     >
    //       Videos
    //     </button>
    //   </div>

    //   {activeTab === 'images' && (
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
    //       {images.map((image, index) => (
    //         <div 
    //           key={index} 
    //           className="relative w-full h-[300px] rounded-md overflow-hidden bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500"
    //         >
    //           Uncomment and use actual images
    //           <Image
    //             src={`/images/about/${image}.jpg`}
    //             alt={`Image ${image}`}
    //             fill
    //             style={{ objectFit: "cover" }}
    //             className="rounded-md" 
    //             priority={index === 0}
    //           />
    //           Image {image}
    //         </div>
    //       ))}
    //     </div>
    //   )}

    //   {activeTab === 'videos' && (
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {videos.map((video, index) => (
    //         <div key={`vid-${index}`} className="w-full">
    //           <video 
    //             controls
    //             className="w-full h-auto rounded-md min-h-[300px] bg-black"
    //           >
    //             <source src={video.src} type="video/mp4" />
    //           </video>
    //         </div>
    //       ))}
    //     </div>
    //   )}

    // </div>
  );
}
