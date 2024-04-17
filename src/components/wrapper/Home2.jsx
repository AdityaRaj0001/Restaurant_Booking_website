import React from 'react'
import { LandingPageProvider } from '../../context/landingPage'
import Home from '../../pages/Home'

const Home2 = () => {
  return (
    <LandingPageProvider>
      <Home />
    </LandingPageProvider>
  )
}

export default Home2