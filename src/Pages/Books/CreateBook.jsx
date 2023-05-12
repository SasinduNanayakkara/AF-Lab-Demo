import React, { useContext, useState } from 'react'
import { GlobalContext } from "../../Context/GlobalState";
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function CreateBook() {
    // const {setBookName, setShowBooks} = useContext(BookContext);
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publicationDate, setPublicationDate] = useState("")
    const [copies, setCopies] = useState(0)

    const {addBook} = useContext(GlobalContext);
    const navigate = useNavigate();
    const onSubmit = () => {
        const newBook = {
            id: uuid(),
            title: title,
            author: author,
            publicationDate: publicationDate,
            copies: copies
        }
        addBook(newBook);
        navigate('/books');
    }
  return (
    <div style={{color: 'white'}}>
        <h1>Create Book</h1>
        <div>
            <input type="text" placeholder="Book Name" onChange={(e) => setTitle(e.target.value)} />
            <br/>
            <input type="text" placeholder="Book Name" onChange={(e) => setAuthor(e.target.value)} />
            <br/>
            <input type="date" placeholder="Book Name" onChange={(e) => setPublicationDate(e.target.value)} />
            <br/>
            <input type="number" placeholder="Book Name" onChange={(e) => setCopies(e.target.value)} />
            <br/>

            <button onClick={() => onSubmit()}>Add</button>
        </div>
    </div>
  )
}

export default CreateBook