import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import menuData from "@/components/Header/menuData";

type NavLink = {
    navbarOpen: boolean;
    setNavbarOpen: Dispatch<SetStateAction<boolean>>;
    onToggleHandler: () => void
    sticky: boolean;
}

export default function NavLink({ navbarOpen, sticky, setNavbarOpen, onToggleHandler } : NavLink) {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const pathUrl = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 960);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("navbarCollapse");
      const toggler = document.getElementById("navbarToggler");

      if (
        menu &&
                toggler &&
                !menu.contains(event.target as Node) &&
                !toggler.contains(event.target as Node)
      ) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return(
    <div>
      <nav
        id="navbarCollapse"
        className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
          navbarOpen
            ? "visibility top-full opacity-100"
            : "invisible top-[120%] opacity-0"
        }`}
      >
        <ul className="block lg:ml-1 lg:flex lg:gap-x-7 xl:ml-14 xl:gap-x-12">
          {menuData.map((menuItem, index) =>
            menuItem.path ? (
              <li
                key={index}
                className={`group relative flex ${
                  menuItem.title === "header.login" || menuItem.title === "header.register"
                    ? "md:hidden" : ""
                }`}
              >
                {pathUrl !== "/" ? (
                  <Link
                    onClick={onToggleHandler}
                    scroll={false}
                    href={menuItem.path}
                    className={"ud-menu-scroll whitespace-nowrap flex py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6"}
                  >
                    {t(menuItem.title)}
                  </Link>
                ) : (
                  <Link
                    onClick={onToggleHandler}
                    scroll={true}
                    href={menuItem.path}
                    className={`ud-menu-scroll flex py-2 text-base transition-all duration-200 whitespace-nowrap
                            lg:inline-flex lg:px-0 lg:py-6 group-hover:scale-110
                            ${isMobile
                    ? (theme !== "dark" ? "text-dark" : "text-white")
                    : (sticky && theme !== "dark" ? "text-dark" : "text-white")
                  }
                        `}
                  >
                    {t(menuItem.title)}
                  </Link>
                )}
              </li>
            ) : (
              <li className="submenu-item group relative" key={index}>
                {pathUrl !== "/" ? (
                  <button
                    onClick={() => handleSubmenu(index)}
                    className={"ud-menu-scroll flex items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6"}
                  >
                    {t(menuItem.title)}

                    <span className="pl-1">
                      <svg
                        className={"duration-300 lg:group-hover:rotate-180"}
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
                    {t(menuItem.title)}

                    <span className="pl-1">
                      <svg
                        className={"duration-300 lg:group-hover:rotate-180"}
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
              </li>
            ),
          )}
        </ul>
      </nav>
    </div>
  )
}