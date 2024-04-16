import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const PaperBanner = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      let flowersbigarray = gsap.utils.toArray(".desktopflowersbig");
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
      className="h-auto py-8 relative w-full  shadow-xl bg-repeat bg-[url(./paper-bg.jpg)]"
    >
      <div className="absolute z-10 top-0 h-[10px] w-full bg-gradient-to-r from-[#8c7050] via-white to-[#8c7050]"></div>
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
        className="absolute desktopflowersbig hidden xl:block left-0 z-20  -top-8 w-[18%]"
        alt="plant background"
      ></img>
      <img
        src="./plant-bg big.png"
        className="absolute desktopflowersbig hidden  xl:block right-0 z-20 -top-8 w-[18%] -scale-x-100 "
        alt="plant background"
      ></img>
      <div className="w-full h-[100%] flex  justify-center">
        <div className="w-full md:w-1/5 pt-4 flex flex-col gap-2 items-center ">
          <div className="review-stars w-full h-[20px] flex items-center justify-center  gap-1">
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
          </div>
          <p className="w-3/5 text-center sedan-regular text-[15px] font-thin">
            ONE OF THE BEST INDIAN RESTAURANTS IN LONDON
          </p>
          <p className="w-full text-center sedan-regular text-[10px]">SPECTATOR LIFE</p>
        </div>
        <div className="hidden w-full md:w-1/5 pt-4 md:flex flex-col gap-2 items-center ">
          <div className="review-stars w-full h-[20px] flex items-center justify-center  gap-1">
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
          </div>
          <p className="w-3/5 text-center sedan-regular text-[15px]  font-thin">
          LONDON’S BEST NEW RESTAURANT OPENING
          </p>
          <p className="w-full text-center sedan-regular text-[10px]">THE
RESIDENT</p>
        </div>
        <div className="hidden w-full md:w-1/5 pt-4 md:flex flex-col gap-2 items-center ">
          <div className="review-stars w-full h-[20px] flex items-center justify-center  gap-1">
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
            <img
              className="h-full"
              src="https://www.1947london.com/wp-content/themes/1947-London/images/purple-star.png"
              alt=""
            ></img>
          </div>
          <p className="w-3/5 text-center sedan-regular text-[15px]  font-thin">
          THE BEST RESTAURANTS IN LONDON RIGHT NOW
          </p>
          <p className="w-full text-center sedan-regular text-[10px]">WEDDING IDEAS
MAGAZINE</p>
        </div>
      </div>
    </div>
  );
};

export default PaperBanner;
