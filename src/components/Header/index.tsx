"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageMenu from "@/components/Header/components/Language";
import Mood from "@/components/Header/components/Mood";
import MenuButton from "@/components/Header/components/MenuButton";
import NavLink from "./components/NavList";

const Header = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { t } = useTranslation();

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const navbarToggleHandler = () => {
      setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center max-[959px]:py-[7px] ${
          sticky
            ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-0">
              <Link
                href="/"
                className={`navbar-logo block`}
              >
                {pathUrl !== "/" ? (
                  <>
                    <Image
                      src={`/images/logo/logo-blue.png`}
                      alt="logo"
                      width={240}
                      height={30}
                      className="header-logo w-full dark:hidden max-w-[140px] pl-2"
                    />
                    <Image
                      src={`/images/logo/logo.png`}
                      alt="logo"
                      width={240}
                      height={30}
                      className="header-logo hidden dark:block max-w-[140px] pl-2"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={`${sticky ? "/images/logo/logo-blue.png" : "/images/logo/logo.png"}`}
                      alt="logo_black"
                      width={140}
                      height={30}
                      className="header-logo dark:hidden max-w-[140px] pl-2"
                    />
                    <Image
                      src={`/images/logo/logo.png`}
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo hidden dark:block max-w-[140px]  pl-2"
                    />
                  </>
                )}
              </Link>
            </div>
            
            <div className="flex w-full items-center justify-between px-4">
              <NavLink sticky={sticky} navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} onToggleHandler={navbarToggleHandler} />
              <div className="hidden items-center justify-end pr-1 md:flex lg:pr-0">
                <Link
                  href="/app/auth/login"
                  className={`px-7 py-3 text-base font-medium hover:opacity-70 text-dark dark:text-white ${
                      !sticky && pathUrl === "/" && "text-white"
                  }`}
                >
                {t("header.login")}
                </Link>
                <Link
                  href="/app/auth/register"
                  className={`rounded-lg px-6 py-3 text-base font-medium text-white duration-300 ease-in-out bg-primary hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20`}
                >
                  {t("header.register")}
                </Link>
              </div>
            </div>
            
            <div className="flex justity-center mr-2">
              <Mood sticky={sticky} />
              <MenuButton
                navbarOpen={navbarOpen}
                onToggleHandler={navbarToggleHandler}
                sticky={sticky}
              />
            </div>
              <LanguageMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;