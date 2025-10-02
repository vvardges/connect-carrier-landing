'use client'

const images = [1, 2, 3, 4, 5];
import Image from "next/image";

export default function Media() {

  const videos = [
    { src: "/video/sample1.mp4" },
    { src: "/video/sample2.mp4" },
    { src: "/video/sample3.mp4" },
    { src: "/video/sample4.mp4" }
  ]

  return (
    <div className="relative min-h-screen pt-20 pb-8 bg-gray-100 dark:bg-gray-900 p-6 lg:pt-[200px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative w-full h-[300px] rounded-md overflow-hidden"
          >
            <Image
              src={`/images/about...../${image}.jpg`}
              alt={`Image ${image}`}
              fill
              style={{ objectFit: "cover", objectPosition: "100% 80%" }}
              className="rounded-md" 
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={`vid-${index}`}
          >
            <video 
              controls
              className="w-full h-auto rounded-md min-h-[300px]"
            >
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  )
}
