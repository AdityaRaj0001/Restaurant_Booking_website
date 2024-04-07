
const PaperBanner2 = () => {
    return (
      <div className='h-[20vh] relative w-full shadow-xl flex flex-col items-center justify-center'>
          <div className="absolute z-10 bottom-0 h-[10px] w-full bg-gradient-to-r from-[#8c7050] via-white to-[#8c7050]"></div>
          <img src="./paper-bg.jpg" className="object-cover h-full w-full"></img>
          <div className="w-full absolute h-full flex flex-col items-center justify-center">

          <p className="w-full text-center">1947 LONDON</p>
          <div className="w-4/5 px-4  flex justify-center gap-2  items-center">
            <div className="h-[2px] w-[10%] bg-black"></div>
            <p className="h-full flex px-2 items-center justify-center font-medium  text-center text-2xl ">
              FOLLOW US
            </p>
            <div className="h-[2px] w-[10%] bg-black"></div>
          </div>
          <p className="w-full text-center  mt-4 text-xl">@1947 LONDON</p>
          </div>
          
  
      </div>
    )
  }
  
  export default PaperBanner2