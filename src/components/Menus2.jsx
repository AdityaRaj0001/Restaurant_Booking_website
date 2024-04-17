import React from 'react'
import { MenuPageProvider } from '../context/menuPage'
import Menus from '../pages/Menus'

const Menus2 = () => {
  return (
    <MenuPageProvider>
        <Menus />
    </MenuPageProvider>
  )
}

export default Menus2