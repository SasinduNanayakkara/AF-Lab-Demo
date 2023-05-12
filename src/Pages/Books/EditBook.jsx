import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../Context/GlobalState';
import { useParams } from "react-router-dom";

function EditBook(props) {

    const {books, editBook} = useContext(GlobalContext);
    const {bookId} = useParams();
    console.log("bookId", bookId)
    const [selectedBook, setSelectedBook] = useState({
        id: '',
        title: '',
        author: '',
        publicationDate: '',
        copies: 0,
    });

    useEffect(() => {
        const currentBookId = bookId;
        const selectedBookData = books.find(book => book.id === currentBookId);
        setSelectedBook(selectedBookData);
    }, [bookId, books]);

    const onSubmit = () => {
        editBook(selectedBook);
    }

    const onChnage = (e) => {
        setSelectedBook({...selectedBook, [e.target.name]: e.target.value});
    }
console.log("selectedBook", selectedBook);
  return (
    <div style={{color: 'white'}}>
    <h1>Create Book</h1>
    <div>
        <input type="text" name='title' placeholder="Book Name" value={selectedBook.title} onChange={onChnage} />
        <br/>
        <input type="text" name='author' placeholder="Book Name" value={selectedBook.author} onChange={onChnage} />
        <br/>
        <input type="date" name='publicationDate' placeholder="Book Name" value={selectedBook.publicationDate} onChange={onChnage} />
        <br/>
        <input type="number" name='copies' placeholder="Book Name" value={selectedBook.copies} onChange={onChnage} />
        <br/>

        <button onClick={() => onSubmit()}>Edit</button>
    </div>
</div>
  )
}

export default EditBook