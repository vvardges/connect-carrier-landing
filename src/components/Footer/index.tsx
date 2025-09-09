import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[20px]"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="mb-10 w-full flex gap-y-10 flex-col items-center">
          <Link href="/" className="mb-2 inline-block max-w-[160px]">
            <Image
              src="/images/logo/logo-white.png"
              alt="logo"
              width={140}
              height={30}
              className="max-w-full"
            />
          </Link>

          <div className="w-full flex">
            <div className="mb-2 w-full flex gap-12 justify-center">
              <ul className="flex gap-x-10 flex-wrap">
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="mb-3 inline-block text-base text-gray-7"
                  >
                    How To Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="flex justify-center">
            <p className="text-base text-gray-7">
              © 2025 HAYWAY GROUP LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
