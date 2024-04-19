import React from 'react'
import { GalleryPageProvider } from '../../context/galleryPage'
import Gallery from '../../pages/Gallery'

const Gallery2 = () => {
  return (
    <GalleryPageProvider>
        <Gallery />
    </GalleryPageProvider>
  )
}

export default Gallery2