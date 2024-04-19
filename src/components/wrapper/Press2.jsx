import React from 'react'
import { PressPageProvider } from '../../context/pressPage'
import Press from '../../pages/Press'

const Press2 = () => {
  return (
    <PressPageProvider>
        <Press />
    </PressPageProvider>
  )
}

export default Press2