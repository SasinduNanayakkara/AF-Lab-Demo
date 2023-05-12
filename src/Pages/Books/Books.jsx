import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { Link } from "react-router-dom";
function Books() {
  const { books, removeBook } = useContext(GlobalContext);
  console.log(books);
  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        <div style={{  }}>
            <h3>Book title</h3>
          <h3>{book.title}</h3>
          <br/>
          <h3>Book author</h3>
          <h3>{book.author}</h3>
          <br/>
          <h3>Book publish date</h3>
          <h3>{book.publicationDate}</h3>
          <br/>
          <h3>copies</h3>
          <h3>{book.copies}</h3>
            <br/>
          <h3>Book id</h3>
          <h3>{book.id}</h3>
          <Link to={`/editBook/${book.id}`}><button>Edit</button></Link>
          <button onClick={() => removeBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Books;
