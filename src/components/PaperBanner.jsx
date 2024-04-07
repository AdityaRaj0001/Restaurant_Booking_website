const PaperBanner = () => {
  return (
    <div className='h-[20vh] relative w-full shadow-xl bg-repeat bg-[url(./paper-bg.jpg)]'>
        <div className="absolute z-10 top-0 h-[10px] w-full bg-gradient-to-r from-[#8c7050] via-white to-[#8c7050]"></div>
       
        <img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
        <img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
        <img src="./plant-bg big.png" className="absolute hidden xl:block left-0 z-20  -top-8 w-[18%]" alt="plant background"></img>
        <img src="./plant-bg big.png" className="absolute hidden  xl:block right-0 z-20 -top-8 w-[18%] -scale-x-100 " alt="plant background"></img>
    </div>
  );
};

export default PaperBanner;
