import Book from "./Book/Book";
import './Books.css'
import Btn from "../Btn/Btn";

export type BookType = {
    id: string;
    title: string;
    author: string;
    status: string;
}
type BooksType = {
    booksData: BookType[];
}

const Books = ({booksData}: BooksType) => {

    const DisplayBooks = () => {
        return booksData.map(singleBook => <Book singleBook={singleBook}/>) 
    }

    return(
        <div className="books">
            <div className="books-title">
                <h1>Books</h1>
                <Btn variation="add">+ Add new book</Btn>
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
        </div>
    )
}

export default Books;