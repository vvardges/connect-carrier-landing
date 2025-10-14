"use client";

import Image from "next/image";
import React, { useEffect,useState } from "react";
import { useTranslation } from "react-i18next";

import { useLandingFiles } from "@/hooks/useLandingFiles";

const About = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const { files, loading, error } = useLandingFiles();

  const slides = files
    .filter(file => file.fileType === "image")
    .map(file => file.fileUrl)
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  useEffect(() => {
    if(slides.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides]);

  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Text section */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2] max-[700px]:text-3xl">
                  {t("about.title")}
                </h2>
                <p className="mb-10 text-base leading-relaxed text-gray-800 dark:text-dark-8">
                  {t("about.paragraph1")}
                  <br /> <br />
                  {t("about.paragraph2")}
                  <br /> <br />
                  {t("about.paragraph3")}
                </p>
              </div>
            </div>

            {!loading && !error && <div className="w-full px-4 lg:w-1/2">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl">
                {slides.map((slide, i) => (
                  <Image
                    alt={String(slide)}
                    key={i}
                    src={slide}
                    fill
                    priority={i < 3}
                    className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-700 ${
                      i === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 w-2 rounded-full ${
                        index === i ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
