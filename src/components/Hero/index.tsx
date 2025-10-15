"use client"

import BackgroundVideo from "@/components/BackgroundVideo";
import React from "react";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
  const point = theme == "dark" ? "white" : "grey";
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px] h-[82vh]"
      >
      <div className="absolute left-0 top-0 -z-10 w-full h-full">
        <BackgroundVideo />
      </div>
      </section>
      <div className="bg-gray-2 dark:bg-dark-3">
        <div className="flex flex-wrap items-center justify-center text-center py-[30px]">
        <p className="px-[20px] mx-auto max-w-[780px] text-base font-medium sm:text-lg sm:leading-[1.44] flex justify-center items-center text-gray-800 dark:text-dark-8  ">
          It allows you to collaborate directly with some of the world’s largest companies without worrying about timely payments or reliability of partnerships.
          With our solution, you can carry out transport services for global corporations while gaining access to a transparent system of orders at the most competitive rates.
          What’s more, ConnectCarrier enables real-time route booking, giving you full control over scheduling and fleet efficiency.
          It’s a modern tool designed for carriers who want to grow their business with confidence and without unnecessary complications.
        </p>
        <div className="w-full px-4">
            <div
            className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
            data-wow-delay=".25s"
            >
            </div>
        </div>
        </div>
    </div>
    </>
  );
};

export default Hero;
