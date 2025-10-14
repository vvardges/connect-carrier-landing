import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const languageOptions = {
    en: { name: "En", icon: "/images/flags/us.png" },
    ru: { name: "Ru", icon: "/images/flags/ru.png" },
    pl: { name: "Pl", icon: "/images/flags/pl.png" },
    de: { name: "De", icon: "/images/flags/de.png" },
  };
  const lang = i18n.language?.split("-")[0] || "en";
  const { theme } = useTheme();
  const toggleLangMenu = () => setIsOpen(!isOpen);
  const selectedLanguage = languageOptions[lang as keyof typeof languageOptions] || languageOptions.en;

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return(
    <div className="relative inline-block mr-2" ref={menuRef}>
      <div
        onClick={toggleLangMenu}
        className={"flex items-center cursor-pointer p-1 mb-1 min-w-max"}
      >
        <img
          src={selectedLanguage.icon}
          alt={selectedLanguage.name}
          className="w-[24px] h-[17px] bg-white shadow-[0_0_6px_rgba(0,0,0,0.6)]"
        />
      </div>

      {isOpen && (
        <div
          className={`absolute top-[110%] left-0 z-50 rounded-lg shadow-md ${
            theme === "dark" ? "bg-gray-900" : "bg-gray-300"
          }`}
        >
          {Object.entries(languageOptions).map(([code, { icon }]) => (
            <div
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`flex items-center gap-2 p-1.5 cursor-pointer transition-colors duration-150 ${
                theme === "dark"
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-200"
              }`}
            >
              <img
                src={icon}
                alt={selectedLanguage.name}
                className="w-[24px] h-[17px]"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}