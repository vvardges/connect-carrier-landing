"use client"

import React from "react";
import { useTranslation } from "react-i18next";

import BackgroundVideo from "@/components/BackgroundVideo";

const Hero = () => {
  const { t } = useTranslation()
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
          <p className="px-[20px] mx-auto max-w-[779px] text-base font-medium sm:text-lg sm:leading-[1.44] flex justify-center items-center text-gray-800 dark:text-dark-8  ">
            {t("hero.description")}
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
