import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateBook from '../Pages/Books/CreateBook'
import Books from '../Pages/Books/Books';
import EditBook from '../Pages/Books/EditBook';
function PageRoutes() {
  return (
    <Router>   
        <Routes>
            <Route path="/" element={<CreateBook />} />
            <Route path="/books" element={<Books />} />
            <Route path='/editBook/:id' element={<EditBook/>} />
        </Routes>
    </Router>
  )
}

export default PageRoutes;