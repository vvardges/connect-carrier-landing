import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex items-space">
            <div className="w-full px-4">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Your Partner in Transport
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  SIS TRANS company provides services in the field of land, sea, and air transport.
                  <br /> <br />
                  Thanks to many years of experience in the transport industry,
                  supported by a team of experienced drivers and trained logistics staff,
                  we have managed to expand our fleet to an impressive number of over 300 trucks,
                  and this number is continuously growing.
                  <br /> <br />
                  Our company attaches great importance to every aspect of customer service – from
                  accurate pricing to effective order fulfillment.
                  With us, you can be sure that your transport needs will be met
                  with the utmost care and professionalism.
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Know More
                </Link>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                  >
                    <Image
                      src="/images/about.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
