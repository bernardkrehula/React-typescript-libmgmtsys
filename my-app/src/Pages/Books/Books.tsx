import Book from "./Book/Book";
import "./Books.css";
import Btn from "../../components/Btn/Btn";
import { useState } from "react";
import AddWindow from "../../components/AddWindow/AddWindow";

export type BookType = {
  id: string;
  title: string;
  author: string;
  status: string;
};
type BooksType = {
  booksData: BookType[];
};

const Books = ({ data, removeBooks, addNewBook }: BooksType) => {
  const [isBtnClicked, setClicked] = useState(false);
  const [editValue, setEditValue] = useState({});

  const DisplayBooks = () => {
    return data.map((singleBook, index) => (
      <Book
        key={index}
        handleEdit={handleEdit}
        singleBook={singleBook}
        removeBooks={removeBooks}
        addNewBook={addNewBook}
      />
    ));
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
        <tbody className="books-body">{DisplayBooks()}</tbody>
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
