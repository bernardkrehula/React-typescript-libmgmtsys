import Book from "./Book/Book";
import "./Books.css";
import Btn from "../../components/Btn/Btn";
import { useState } from "react";
import AddWindow from "../../components/AddWindow/AddWindow";
import data from "../../data/data";

const Books = () => {
  const [ library, setLibrary ] = useState(data.books);
  const [ isBtnClicked, setClicked ] = useState(false);
  const [ editValue, setEditValue ] = useState(null);

  const removeBooks = (bookID: string) => {
    setLibrary((prev) => prev.filter((book) => book.id != bookID));
  };
  const addNewBook = (newBook: {id: string, title: string, author: string, status: string}) => {
    console.log(newBook)
    setLibrary((prev) => [...prev, newBook]);
  };
/*   const editBook = (singleBook) => setLibrary(prev => prev.map(book => book.id === singleBook.id ? {})) 
 */  
  const handleEdit = (singleBook: string) => {
      setEditValue(singleBook);
/*     editBook(singleBook);
 */    setClicked(true);
  };
  const resetEditValue = () => setEditValue(null);

  return (
    <div className="books">
      <div className="books-title">
        <h1>Books</h1>
        <Btn variation="add" onClick={() => setClicked(true)}>
          + Add new book
        </Btn>
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
        <tbody className="books-body">{library.map((singleBook, index) => (
            <Book
              key={index}
              handleEdit={handleEdit}
              singleBook={singleBook}
              removeBooks={removeBooks}
              addNewBook={addNewBook}
            />
          ))}</tbody>
      </table>
      {isBtnClicked &&
        <AddWindow
          data={library}
          editValue={editValue}
          addNewBook={addNewBook}
          setClicked={setClicked}
          resetEditValue={resetEditValue}
          title="Book"
          inputContentVariation="addMember"
        />}
    </div>
  );
};

export default Books;
