import Book from "./Book/Book";
import './Books.css'
import Btn from "../Btn/Btn";
import { useState } from "react";
import AddWindow from "../AddWindow/AddWindow";

export type BookType = {
    id: string;
    title: string;
    author: string;
    status: string;
}
type BooksType = {
    booksData: BookType[];
}

const Books = ({data, removeBooks, addNewBook}: BooksType) => {
    const [ isAddBtnClicked, setClicked ] = useState(false);

    const DisplayBooks = () => {
        return data.map(singleBook => <Book singleBook={singleBook} removeBooks={removeBooks} addNewBook={addNewBook}/>) 
    }

    return(
        <div className="books">
            <div className="books-title">
                <h1>Books</h1>
                <Btn variation="add" onClick={() => setClicked(true)}>+ Add new book</Btn>
            </div>
            <table className="books-list">
                <thead className="books-header">
                    <tr>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="books-body">
                    {DisplayBooks()} 
                </tbody>
            </table>
            {isAddBtnClicked ? <AddWindow data={data} title='Book' inputContentVariation='addMember' setClicked={setClicked}/> : ''}
        </div>
    )
}

export default Books;