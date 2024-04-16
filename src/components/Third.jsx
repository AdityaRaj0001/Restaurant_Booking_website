import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Third = () => {
  const containerRef = useRef(null);
  const screenWidth = window.innerWidth;

  useGSAP(
    () => {
      let imagedivs = gsap.utils.toArray(".imagediv");
      let storydivs = gsap.utils.toArray(".storydiv");
      let flowersbigarray = gsap.utils.toArray(".desktopflowersbig2");
      if (screenWidth > 768) {
        for (let i = 0; i < imagedivs.length; i++) {
          gsap.from([storydivs[i], imagedivs[i]], {
            opacity: 0,
            duration: 1.5,
            stagger: 0.4,
            scrollTrigger: {
              trigger: storydivs[i],
              start: "-100% top",
              end: "-100% top",
            },
          });
        }
      }
      for (let i = 0; i < flowersbigarray.length; i++) {
        gsap.from(flowersbigarray[i], {
          x: i === 1 ? "150px" : "-150px",
          duration: 2.5,
          scrollTrigger: {
            trigger: flowersbigarray[i],
            start: "-60% top",
            end: "-60% top",
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="h-auto w-full flex flex-col items-center justify-start pt-12 gap-2"
    >
      <p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">
        33 CHARLOTTE STREET, FITZROVIA, W1
      </p>
      <div className="w-4/5 px-4 sedan-regular flex justify-center  items-center">
        <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
        <p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
          WELCOME TO 1947 LONDON
        </p>
        <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
      </div>

      <p className="w-4/5 mt-4 text-center font-thin px-4 md:text-xl md:w-3/5">
        Based in London’s West End, our restaurant is situated in a beautiful
        dining space with an unrivalled ambience within walking distance from
        Goodge Street, Oxford Street and Tottenham Court Road.{" "}
      </p>
      <p className="w-4/5 mt-4 text-center font-thin px-4 md:text-xl md:w-3/5">
        From statement pieces of interior design to the perfectly judged
        lighting, 1947 London, is glamour and excellence personified at the same
        time providing a rare and easy elegance.{" "}
      </p>
      <p className="w-4/5 mt-4 text-center font-thin px-4 md:text-xl md:w-3/5">
        Modern Indian menu prepared by award-winning Michelin chef Krishnapal
        Negi
      </p>

      <div className="w-4/5 md:w-3/5 px-4 sedan-regular flex justify-center  items-center">
        <div className="h-[2px] w-[10%] bg-black"></div>
        <p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-[20px] md:text-3xl">
          WEEKDAY OFFER
        </p>
        <div className="h-[2px] w-[10%] bg-black"></div>
      </div>
      <p className="w-4/5 mt-4 text-center font-thin px-4 md:text-xl mb-8 md:w-3/5">
        Book a table online between the golden hour of 5-6pm, Tuesday to
        Thursday and get 20% off your entire bill – and yes, that includes
        drinks too!{" "}
      </p>

      <div className="h-auto md:h-[60vh]  mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] "
          alt="plant background"
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 "
          alt="plant background"
        ></img>
        <img
          src="./plant-bg big.png"
          className="absolute hidden xl:block left-0 z-20  -top-8 w-[18%] -scale-y-100"
          alt="plant background"
        ></img>
        <img
          src="./plant-bg big right.png"
          className="absolute hidden  xl:block right-0 z-20 -top-8 w-[18%] scale-y-100 "
          alt="plant background"
        ></img>
        <div className="imagediv h-[40%] w-3/4 md:w-1/3 overflow-hidden md:h-3/4 flex items-center justify-center">
          <img
            src="./home-about-image-1.jpg"
            className="h-full md:w-full transform transition-transform duration-500 hover:scale-110  object-cover"
          ></img>
        </div>
        <div className="storydiv h-auto w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
          <p className="text-violet-700 w-full text-center sedan-regular">
            INSPIRED BY 1947 INDIA
          </p>
          <h1 className="text-2xl text-center md:text-3xl sedan-regular">
            OUR STORY
          </h1>
          <p className="w-full md:w-4/5 text-center md:text-xl font-thin  mt-4">
            1947 London has been born out of a desire to bring to London an
            authentic taste of India in all its glory, reminiscent of recipes
            that evolved out of the movement of peoples and cultures during the
            1947 partition
          </p>

          <button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="h-auto md:h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] "
          alt="plant background"
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 "
          alt="plant background"
        ></img>
        <img
          src="./plantbgfiller.png"
          className="absolute hidden xl:block left-0 z-20  top-32 w-[10%] scale-y-100"
          alt="plant background"
        ></img>
        <img
          src="./plantbgfiller.png"
          className="absolute hidden  xl:block right-0 z-20 top-32 w-[10%] -scale-x-100 "
          alt="plant background"
        ></img>
        <div className="imagediv overflow-hidden h-[40%] w-3/4 md:order-2 md:w-1/3 md:h-3/4 flex items-center justify-center">
          <img
            src="./home-about-image-2.jpg"
            className="h-full md:w-full transform transition-transform duration-500 hover:scale-110 object-cover"
          ></img>
        </div>
        <div className="storydiv h-auto w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
          <p className="text-violet-700 w-full text-center sedan-regular">
            BY MICHELIN-EXPERIENCED CHEFS
          </p>
          <h1 className="text-2xl text-center md:text-3xl sedan-regular">
            THE MENU
          </h1>
          <p className="w-full md:w-4/5 text-center md:text-xl font-thin  mt-4">
            Prepared by our award-winning Michelin chef, explore a modern Indian
            cuisine featuring small plates, sharing bowls as well as biryanis,
            rice, breads and desserts inspired by much-loved recipes from the
            Indian Himalayas.
          </p>

          <button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="h-auto md:h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] "
          alt="plant background"
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 "
          alt="plant background"
        ></img>
        <img
          src="./plantbgfiller.png"
          className="absolute hidden xl:block left-0 z-20  top-32 w-[10%] scale-y-100"
          alt="plant background"
        ></img>
        <img
          src="./plantbgfiller.png"
          className="absolute hidden  xl:block right-0 z-20 top-32 w-[10%] -scale-x-100 "
          alt="plant background"
        ></img>
        <div className="imagediv overflow-hidden h-[40%] w-3/4  md:w-1/3 md:h-3/4 flex items-center justify-center">
          <img
            src="./home-about-image-4.jpg"
            className="h-full md:w-full transform transition-transform duration-500 hover:scale-110  object-cover"
          ></img>
        </div>
        <div className="storydiv h-auto w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
          <p className="text-violet-700 w-full text-center sedan-regular">
            STYLISH AND SWISH
          </p>
          <h1 className="text-2xl text-center md:text-3xl sedan-regular">
            COCKTAIL BAR
          </h1>
          <p className="w-full md:w-4/5 text-center md:text-xl font-thin  mt-4">
            Explore our bar and experience our drinks menu from the classics to
            something a little more modern like our signature Chai Martini,
            handcrafted by our experienced mixologists
          </p>

          <button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="h-auto md:h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] "
          alt="plant background"
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 "
          alt="plant background"
        ></img>
        <img
          src="./plant-bg big.png"
          className="absolute desktopflowersbig2 hidden xl:block left-0 z-20  -top-8 w-[18%] scale-y-100"
          alt="plant background"
        ></img>
        <img
          src="./plant-bg big right.png"
          className="absolute hidden desktopflowersbig2  xl:block right-0 z-20 -top-8 w-[18%] scale-y-100 "
          alt="plant background"
        ></img>
        <div className="imagediv overflow-hidden h-[40%] w-3/4 md:order-2  md:w-1/3 md:h-3/4 flex items-center justify-center">
          <img
            src="./home-about-image-5.jpg"
            className="h-full transform transition-transform duration-500 hover:scale-110 md:w-full  object-cover"
          ></img>
        </div>
        <div className="storydiv h-auto  w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
          <p className="text-violet-700 w-full text-center sedan-regular">
            CELEBRATE WITH US
          </p>
          <h1 className="text-2xl text-center md:text-3xl sedan-regular">
            SPECIAL OCCASIONS
          </h1>
          <p className="w-full md:w-4/5 text-center md:text-xl font-thin  mt-4">
            Whether you’re celebrating a birthday, anniversary, engagement,
            corporate function or looking to hire out our venue, we have the
            perfect party solution for you and your guests
          </p>

          <button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="h-auto md:h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] "
          alt="plant background"
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 "
          alt="plant background"
        ></img>
        <img
          src="./plantbgfiller.png"
          className="absolute hidden xl:block left-0 z-20  top-32 w-[10%] scale-y-100"
          alt="plant background"
        ></img>
        <img
          src="./plantbgfiller.png"
          className="absolute hidden  xl:block right-0 z-20 top-32 w-[10%] -scale-x-100 "
          alt="plant background"
        ></img>
        <div className="imagediv overflow-hidden h-[40%] w-3/4   md:w-1/3 md:h-3/4 flex items-center justify-center">
          <img
            src="./home-about-image-3.jpg"
            className="h-full transform transition-transform duration-500 hover:scale-110 md:w-full  object-cover"
          ></img>
        </div>
        <div className="storydiv  h-auto w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pb-4 px-8 ">
          <p className="text-violet-700 w-full text-center sedan-regular">
            OVER 20 YEARS EXPERIENCE
          </p>
          <h1 className="text-2xl text-center md:text-3xl sedan-regular">
            THE KITCHEN
          </h1>
          <p className="w-full md:w-4/5 text-center md:text-xl font-thin  mt-4">
            The kitchen is led by executive chef, Krishnapal Negi, a
            well-renowned award-winning Michelin culinary professional whose 20
            plus year experience stretches across London, Mumbai and Mauritius.
          </p>

          <button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Third;
