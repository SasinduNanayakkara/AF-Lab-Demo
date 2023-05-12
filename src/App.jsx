import { useState } from 'react'
import './App.css'
import {BookContext} from "./Context/BookContext"
import CreateBook from './Pages/Books/CreateBook'
import Books from './Pages/Books/Books';
import {GlobalProvider} from "./Context/GlobalState";
import PageRoutes from './Routes/PageRoutes';

function App() {

  const [bookName, setBookName] = useState('');
  const [showBooks, setShowBooks] = useState(false);

  return (

    <>
      {/* <div>
        <BookContext.Provider value={{bookName, setBookName, setShowBooks}}>
          {showBooks ? <Books/> : <CreateBook/>}
        </BookContext.Provider>
      </div> */}
    <GlobalProvider>
      <PageRoutes />
    </GlobalProvider>
       
    </>
  )
}

export default App
