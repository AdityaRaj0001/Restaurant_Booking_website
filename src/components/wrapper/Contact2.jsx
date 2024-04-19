import React from 'react'
import { ContactPageProvider } from '../../context/contactPage'
import Contact from '../../pages/Contact'


const Contact2 = () => {
  return (
    <ContactPageProvider>
        <Contact />
    </ContactPageProvider>
  )
}

export default Contact2