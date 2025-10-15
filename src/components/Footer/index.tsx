import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[20px]" data-wow-delay=".15s">
      <div className="container">
        <div className="mb-10 w-full flex gap-y-10 flex-col items-center">
          <Link href="/" className="mb-2 inline-block max-w-[160px]">
            <Image src="/images/logo/logo.png" alt="logo" width={140} height={30} className="max-w-full" />
          </Link>
          <div className="w-full flex">
            <div className="mb-2 w-full flex gap-12 justify-center">
              <ul className="flex gap-x-10 flex-wrap justify-center">
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-7">{t("footer.home")}</Link>
                </li>
                <li>
                  <Link href="#" className="mb-3 inline-block text-base text-gray-7">{t("footer.about")}</Link>
                </li>
                <li>
                  <Link href="/media" className="mb-3 inline-block text-base text-gray-7">{t("footer.media")}</Link>
                </li>
                <li>
                  <Link href="/#contact" className="mb-3 inline-block text-base text-gray-7">{t("footer.contact")}</Link>
                </li>
                <li>
                  <Link href="/register" className="mb-3 inline-block text-base text-gray-7">{t("footer.howToRegister")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="flex justify-center">
            <p className="text-center text-sm text-gray-400 sm:text-md">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
