
const Second = () => {
  return (
    <div className='h-[20vh] relative w-full shadow-xl'>
        <div className="absolute z-10 top-0 h-[10px] w-full bg-gradient-to-r from-[#8c7050] via-white to-[#8c7050]"></div>
        <img src="./paper-bg.jpg" className="object-cover h-full w-full"></img>
        <img src="./plantbgmobile.png" className="absolute left-0 z-20  -top-8 w-[17%] md:w-[5%] "></img>
        <img src="./plantbgmobile.png" className="absolute right-0 z-20  top-16 w-[14%] -scale-x-100 md:w-[5%] "></img>

    </div>
  )
}

export default Second