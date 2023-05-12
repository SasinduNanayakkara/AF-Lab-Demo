import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer"

const initialState = {
    books: [
    ],
    users: [
        {id: 1, name: "John Doe", email: "john@gmail.com", phoneNumber: "1234567890", books: []},
    ]
}

//create context
export const GlobalContext = createContext(initialState);



//provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
const removeBook = (id) => {
    dispatch({
        type: 'REMOVE_BOOK',
        payload: id
    });
}

const addBook = (book) => {
    dispatch({
        type: 'ADD_BOOK',
        payload: book
    });
}

const editBook = (book) => {
    dispatch({
        type: 'EDIT_BOOK',
        payload: book
    });
}

    return (
    <GlobalContext.Provider value={{users: state.users, books: state.books, removeBook, addBook, editBook}}>
        {children}
    </GlobalContext.Provider>);
};