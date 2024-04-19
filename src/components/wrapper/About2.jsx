import React from 'react'
import About from '../../pages/About'
import { AboutPageProvider } from '../../context/aboutPage'

const About2 = () => {
  return (
    <AboutPageProvider>
        <About />
    </AboutPageProvider>
  )
}

export default About2