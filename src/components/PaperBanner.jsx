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
          x: i===1?"150px":"-150px",
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
      className="h-[20vh] relative w-full  shadow-xl bg-repeat bg-[url(./paper-bg.jpg)]"
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
    </div>
  );
};

export default PaperBanner;
