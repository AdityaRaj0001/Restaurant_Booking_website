import React from 'react'
import { BookTableProvider } from '../../context/bookATable'
import BookATable from '../../pages/BookATable'

const BookATable2 = () => {
  return (
    <BookTableProvider>
        <BookATable />
    </BookTableProvider>
  )
}

export default BookATable2