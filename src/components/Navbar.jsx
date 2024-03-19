import React from 'react'
import Sidebar from './Sidebar'
const Navbar = () => {
  return (
    <div className='h-[75px] z-10 fixed top-0 w-full bg-transparent'>
        <div className='mobile-nav flex justify-between text-white items-center px-4 h-full w-full'>
            <a className='w-1/4 h-4/5 flex items-center justify-center'>LOGO</a>
            <span className='w-1/4'>Phone</span>
            <button className='w-1/4 p-2' >Book Table</button>
            <Sidebar/>
            
        </div>
    </div>
  )
}

export default Navbar
