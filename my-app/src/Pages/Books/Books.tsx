import Book from "./Book/Book";
import "./Books.css";
import Btn from "../../components/Btn/Btn";
import { useState } from "react";
import AddWindow from "../../components/AddWindow/AddWindow";
import data from "../../data/data";

const Books = () => {
  const [ library, setLibrary ] = useState(data.books);
  const [isBtnClicked, setClicked] = useState(false);
  const [editValue, setEditValue] = useState({});

  const removeBooks = (bookID: string) => {
    setLibrary((prev) => prev.filter((book) => book.id != bookID));
  };
  const addNewBook = (newBook) => {
    setLibrary((prev) => ({ ...prev, books: [...prev.books, newBook] }));
  };

  const handleEdit = (value) => {
    setEditValue(value);
    setClicked(true);
  };

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
      {isBtnClicked ? (
        <AddWindow
          data={data}
          editValue={editValue}
          addNewBook={addNewBook}
          setClicked={setClicked}
          title="Book"
          inputContentVariation="addMember"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Books;
