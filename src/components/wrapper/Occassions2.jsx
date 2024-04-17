import React from 'react'
import { OccasionPageProvider } from '../../context/occasionPage'
import Occassions from '../../pages/Occassions'

const Occassions2 = () => {
  return (
    <OccasionPageProvider>
        <Occassions />
    </OccasionPageProvider>
  )
}

export default Occassions2