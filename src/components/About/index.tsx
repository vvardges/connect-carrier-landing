"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const About = () => {
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
                  Your Partner in Transport
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color text-white">
                  ConnectCarrier company provides services in the field of land,
                  sea, and air transport.
                  <br /> <br />
                  Thanks to many years of experience in the transport industry,
                  supported by a team of experienced drivers and trained
                  logistics staff, we have managed to expand our fleet to an
                  impressive number of over 300 trucks, and this number is
                  continuously growing.
                  <br /> <br />
                  Our company attaches great importance to every aspect of
                  customer service – from accurate pricing to effective order
                  fulfillment. With us, you can be sure that your transport
                  needs will be met with the utmost care and professionalism.
                </p>
              </div>
            </div>

            {/* Image slider */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl">
                {slides.map((slide, i) => (
                  <Image
                    alt={String(slide)}
                    key={slide}
                    src={`/images/about/${slide}.jpg`}
                    fill
                    priority={i === 0}
                    className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-700 ${
                      i === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Dots navigation */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
