"use client"
import Image from "next/image";
import BackgroundVideo from "@/components/BackgroundVideo";
import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation()
  const heroImage = theme == "dark" ? "/images/hero.jpg" : "/images/hero-white.jpg";
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
        <div className="flex flex-wrap items-center justify-center text-center pt-[30px]">
        <p className="px-[20px] mx-auto max-w-[780px] text-base font-medium sm:text-lg sm:leading-[1.44] flex justify-center items-center text-gray-800 dark:text-dark-8  ">
            {t("hero.description")}
        </p>
        <div className="w-full px-4">
            <div
            className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
            data-wow-delay=".25s"
            >
            <div className="mt-16">
                <Image
                  src={heroImage}
                  alt="hero"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                  width={845}
                  height={316}
                />
            </div>
            <div className="absolute -left-9 bottom-0 z-[-1]">
                <svg
                width="134"
                height="106"
                viewBox="0 0 134 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle
                    cx="1.66667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 1.66667 104)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 16.3333 104)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 31 104)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 45.6667 104)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 60.3333 104)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 88.6667 104)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 117.667 104)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 74.6667 104)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 103 104)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 132 104)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 1.66667 89.3333)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 16.3333 89.3333)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 31 89.3333)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 45.6667 89.3333)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 89.3338)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 89.3338)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 89.3338)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 89.3338)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 103 89.3338)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 132 89.3338)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="74.6673"
                    r="1.66667"
                    transform="rotate(-90 1.66667 74.6673)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 31.0003)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 16.3333 74.6668)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 31.0003)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 31 74.6668)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 31 31.0003)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 45.6667 74.6668)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 31.0003)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 60.3333 74.6668)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 60.3333 31.0001)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 88.6667 74.6668)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 88.6667 31.0001)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 117.667 74.6668)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 117.667 31.0001)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 74.6667 74.6668)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 74.6667 31.0001)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 103 74.6668)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 103 31.0001)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 132 74.6668)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 132 31.0001)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 60.0003)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 16.3336)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 60.0003)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 16.3336)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 31 60.0003)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 31 16.3336)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 60.0003)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 16.3336)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 60.3333 60.0003)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 60.3333 16.3336)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 88.6667 60.0003)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 88.6667 16.3336)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 117.667 60.0003)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 117.667 16.3336)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 74.6667 60.0003)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 74.6667 16.3336)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 103 60.0003)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 103 16.3336)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 132 60.0003)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 132 16.3336)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 45.3336)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 1.66667 1.66683)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 45.3336)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 16.3333 1.66683)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 31 45.3336)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 31 1.66683)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 45.3336)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 45.6667 1.66683)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 45.3338)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 60.3333 1.66707)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 45.3338)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 88.6667 1.66707)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 45.3338)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 117.667 1.66707)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 45.3338)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 74.6667 1.66707)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 103 45.3338)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 103 1.66707)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 132 45.3338)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 132 1.66707)"
                    fill={point}
                />
                </svg>
            </div>
            <div className="absolute -right-6 -top-6 z-[-1]">
                <svg
                width="134"
                height="106"
                viewBox="0 0 134 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle
                    cx="1.66667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 1.66667 104)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 16.3333 104)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 31 104)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 45.6667 104)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 60.3333 104)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 88.6667 104)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 117.667 104)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 74.6667 104)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 103 104)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="104"
                    r="1.66667"
                    transform="rotate(-90 132 104)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 1.66667 89.3333)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 16.3333 89.3333)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 31 89.3333)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="89.3333"
                    r="1.66667"
                    transform="rotate(-90 45.6667 89.3333)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 89.3338)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 89.3338)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 89.3338)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 89.3338)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 103 89.3338)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="89.3338"
                    r="1.66667"
                    transform="rotate(-90 132 89.3338)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="74.6673"
                    r="1.66667"
                    transform="rotate(-90 1.66667 74.6673)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 31.0003)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 16.3333 74.6668)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 31.0003)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 31 74.6668)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 31 31.0003)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 45.6667 74.6668)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="31.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 31.0003)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 60.3333 74.6668)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 60.3333 31.0001)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 88.6667 74.6668)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 88.6667 31.0001)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 117.667 74.6668)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 117.667 31.0001)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 74.6667 74.6668)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 74.6667 31.0001)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 103 74.6668)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 103 31.0001)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="74.6668"
                    r="1.66667"
                    transform="rotate(-90 132 74.6668)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="31.0001"
                    r="1.66667"
                    transform="rotate(-90 132 31.0001)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 1.66667 60.0003)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 16.3336)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 16.3333 60.0003)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 16.3336)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 31 60.0003)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 31 16.3336)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 45.6667 60.0003)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 16.3336)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 60.3333 60.0003)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 60.3333 16.3336)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 88.6667 60.0003)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 88.6667 16.3336)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 117.667 60.0003)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 117.667 16.3336)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 74.6667 60.0003)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 74.6667 16.3336)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 103 60.0003)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 103 16.3336)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="60.0003"
                    r="1.66667"
                    transform="rotate(-90 132 60.0003)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="16.3336"
                    r="1.66667"
                    transform="rotate(-90 132 16.3336)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 1.66667 45.3336)"
                    fill={point}
                />
                <circle
                    cx="1.66667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 1.66667 1.66683)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 16.3333 45.3336)"
                    fill={point}
                />
                <circle
                    cx="16.3333"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 16.3333 1.66683)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 31 45.3336)"
                    fill={point}
                />
                <circle
                    cx="31"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 31 1.66683)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="45.3336"
                    r="1.66667"
                    transform="rotate(-90 45.6667 45.3336)"
                    fill={point}
                />
                <circle
                    cx="45.6667"
                    cy="1.66683"
                    r="1.66667"
                    transform="rotate(-90 45.6667 1.66683)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 60.3333 45.3338)"
                    fill={point}
                />
                <circle
                    cx="60.3333"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 60.3333 1.66707)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 88.6667 45.3338)"
                    fill={point}
                />
                <circle
                    cx="88.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 88.6667 1.66707)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 117.667 45.3338)"
                    fill={point}
                />
                <circle
                    cx="117.667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 117.667 1.66707)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 74.6667 45.3338)"
                    fill={point}
                />
                <circle
                    cx="74.6667"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 74.6667 1.66707)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 103 45.3338)"
                    fill={point}
                />
                <circle
                    cx="103"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 103 1.66707)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="45.3338"
                    r="1.66667"
                    transform="rotate(-90 132 45.3338)"
                    fill={point}
                />
                <circle
                    cx="132"
                    cy="1.66707"
                    r="1.66667"
                    transform="rotate(-90 132 1.66707)"
                    fill={point}
                />
                </svg>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  );
};

export default Hero;
