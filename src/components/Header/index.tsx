"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
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

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme } = useTheme();

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
              <div>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li
                          key={index}
                          className={`group relative flex ${
                            menuItem.title === "Login" || menuItem.title === "Register"
                              ? "sm:hidden"
                              : ""
                          }`}
                        >
                        {pathUrl !== "/" ? (
                           <Link
                            onClick={navbarToggleHandler}
                            scroll={true}
                            href={menuItem.path}
                            className={`ud-menu-scroll flex py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <Link
                            scroll={true}
                            href={menuItem.path}
                            className={`ud-menu-scroll flex py-2 text-base transition-all duration-200 lg:inline-flex lg:px-0 lg:py-6 group-hover:scale-110
                              ${sticky && theme !== "dark" ? "text-dark" : "text-white"}
                              
                            `}
                          >
                            {menuItem.title}
                          </Link>
                        )}
                      </li>
                      ) : (
                        <li className="submenu-item group relative" key={index}>
                          {pathUrl !== "/" ? (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                                sticky
                                  ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                                  : "text-white"
                              }`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          )}
                          <div
                            className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "!-left-[25px]" : "hidden"
                            }`}
                          >
                            {menuItem?.submenu?.map((submenuItem: any, i) => (
                              <Link
                                href={submenuItem.path}
                                key={i}
                                className={`block rounded px-4 py-[10px] text-sm ${
                                  pathUrl === submenuItem.path
                                    ? "text-primary"
                                    : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                }`}
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              </div>
              <div className="hidden items-center justify-end pr-1 sm:flex lg:pr-0">
                <Link
                  href="/app/auth/login"
                  className={`px-7 py-3 text-base font-medium hover:opacity-70 text-dark dark:text-white ${
                      !sticky && pathUrl === "/" && "text-white"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/app/auth/register"
                  className={`rounded-lg px-6 py-3 text-base font-medium text-white duration-300 ease-in-out bg-primary hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20`}
                >
                  Register
                </Link>
              </div>
            </div>
            <div className="flex justity-center">
         
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="block rounded-lg px-3 ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                    pathUrl === "/" && sticky
                      ? "bg-dark dark:bg-white"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? "opacity-0 " : " "
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                    pathUrl === "/" && sticky
                      ? "bg-dark dark:bg-white"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                    pathUrl === "/" && sticky
                      ? "bg-dark dark:bg-white"
                      : "bg-white"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;