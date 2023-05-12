export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_BOOK': 
            return {
                books: state.books.filter(book => book.id !== action.payload)
            }
        case 'ADD_BOOK':
            return {
                books: [...state.books, action.payload]
            }
        case 'EDIT_BOOK':
            const updatedBook = action.payload;
            const updateBooks = state.books.map(book => {
                if (book.id === updatedBook.id) {
                    return updatedBook;
                }
                return book;
            });
            return {
                users: updateBooks

            }
        default:
            return state;
    }
}