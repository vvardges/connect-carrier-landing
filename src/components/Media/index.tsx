'use client'

const images = [1, 2, 3, 4, 5];

export default function Media() {

  const videos = [
    { src: "/video/sample1.mp4" },
    { src: "/video/sample2.mp4" },
    { src: "/video/sample3.mp4" },
    { src: "/video/sample4.mp4" }
  ]

  return (
    // relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[30px] lg:pt-[200px]
    <div className="relative min-h-screen pt-20 pb-8 bg-gray-100 dark:bg-gray-900 p-6 lg:pt-[200px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
        {images.map((image, index) => (
          <div
            key={`img-${index}`}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center max-h-[250px]"
          >
            <img
              src={`/images/about/${image}.jpg`}
              alt={String(image)}
              className="max-w-full max-h-full rounded-md object-cover"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={`vid-${index}`}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <video 
              controls
              className="w-full h-auto rounded-md min-h-[250px]"
            >
              <source src={video.src} type="video/webm" />
            </video>
          </div>
        ))}
      </div>
    </div>
  )
}
