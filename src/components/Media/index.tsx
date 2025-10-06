'use client'

import {useEffect, useState} from "react";
import Image from "next/image";
import NotFound from "@/components/NotFound";

type File = {
    fileName: string;
    fileType: string;
    fileUrl: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Media() {
  const [activeTab, setActiveTab] = useState('images');
  const [files, setFiles] = useState<File[]>([]);
  const handleFetch = async () => {
      try {
          const response = await fetch(`${apiUrl}/File/Get/Landing`);
          const data = await response.json();
          setFiles(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  useEffect(() => {
      handleFetch();
  }, []);

  if(files.length === 0) return (
      <NotFound />
  )

  return (
      <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[30px] lg:pt-[200px]">
          <div className="container">
              <div className="flex gap-4 mb-6">
                <button
                  className={`px-4 py-2 rounded-md font-semibold transition ${
                    activeTab === 'images' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('images')}
                >
                  Images
                </button>
                <button
                  className={`px-4 py-2 rounded-md font-semibold transition ${
                    activeTab === 'videos' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('videos')}
                >
                  Videos
                </button>
              </div>

              {activeTab === 'images' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                  {files.filter(file => file.fileType === "image").map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[300px] rounded-md overflow-hidden bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500"
                    >
                      <Image
                        src={image.fileUrl}
                        alt={image.fileName}
                        loading="lazy"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-md"
                      />
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'videos' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {files.filter(file => file.fileType === "video").map((video, index) => (
                    <div key={`vid-${index}`} className="w-full">
                      <video
                        controls
                        className="w-full h-auto rounded-md min-h-[300px] bg-black"
                      >
                        <source src={video.fileUrl} type="video/mp4" />
                      </video>
                    </div>
                  ))}
                </div>
              )}
        </div>
      </section>
  );
}
