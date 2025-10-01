import Book from "./Book/Book";
import "./Books.css";
import Btn from "../../components/Btn/Btn";
import { useState } from "react";
import AddWindow from "../../components/AddWindow/AddWindow";
import data from "../../data/data";
import z from "zod";

const Books = () => {
  const [ library, setLibrary ] = useState(data.books);
  const [ isBtnClicked, setClicked ] = useState(false);
  const [ editValue, setEditValue ] = useState(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

   const FormScheme = z.object({
      id: z.number(),
      title: z.string()
        .min(3, { message: "Name must have at least 3 characters" })
        .max(15, { message: "The name must not be longer than 15 characters." }),
      author: z.string()
        .min(3, { message: "Phone must have at least 3 characters" }),
      status: z.string()
    });

  const validateInputs = (book) => {
  const result = FormScheme.safeParse(book);

  if(!result.success){
          const fieldErrors: { [key: string]: string } = {};
          result.error.issues.map(err => {
          if(err.path[0]) fieldErrors[err.path[0] as string] = err.message;
            });
          setErrors(fieldErrors);
          return;
      }
      else{
        setErrors({})
        return true;
      }

  }

  const removeBooks = (bookID: string) => {
    setLibrary((prev) => prev.filter((book) => book.id != bookID));
  };
  const addNewBook = (newBook: {id: string, title: string, author: string, status: string}) => {
    if(validateInputs(newBook)){
      setLibrary((prev) => [...prev, newBook]);
      setClicked(false);
    }
  };
  const editBook = () => {
      if(validateInputs(editValue)) {
        setLibrary(prev => prev.map(book => book.id === editValue.id ? editValue : book));
        setClicked(false);
        resetEditValue();
      }
    }
 
  const handleEdit = (singleBook) => {
      setEditValue(singleBook);
      setClicked(true);
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
          editBook={editBook}
          setEditValue={setEditValue}
          title="Book"
          inputContentVariation="addMember"
          errors={errors}
        />}
    </div>
  );
};

export default Books;
