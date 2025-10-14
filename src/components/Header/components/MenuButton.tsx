import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface MenuButtonProps {
  navbarOpen: boolean;
  onToggleHandler: () => void;
  sticky: boolean;
}

export default function MenuButton({
  navbarOpen,
  onToggleHandler,
  sticky,
}: MenuButtonProps) {
    const pathUrl = usePathname();
  
    return(
        <button
            onClick={onToggleHandler}
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="block rounded-lg px-3 lg:hidden"
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
    )
}