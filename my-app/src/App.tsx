import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import React, { useEffect, useState } from "react";
import LoginWindow from "./components/LoginWindow/LoginWindow";
import data from "./data/data";
import Books from "./components/Books/Books";
import Dashboard from "./components/Dashboard/Dashboard";
import Members from "./components/Members/Members";
//Pojednostavi rute
//Pogledaj zod validacija 
//Za dodavanje knjiga i dodavanje membera napravi zod validaciju
//Napravi validaciju tamo gdje je broj da baci error ukoliko to sto je korisnik upisao nije broj
//Napravi validaciju da stringovi ne mogu da budu kraci od 3 slova
//Ispod inputa gjde se baci error napisi to sto zood vrati 
//

function App() {
  const [libraryData, setLibraryData] = useState(data);
  const defaultIconsData = data.defaultIconElements;
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") setUserLogged(true);
  }, []);

  const displayRoute = () => {
    return Object.values(defaultIconsData).map((icon) => {
      const { name, link } = icon;
      const ComponentData = componentsArray[name];
      const { component: Components, props } = ComponentData;

      return (
        <>
          <Route path={link} element={<Components {...props} />} />
        </>
      );
    });
  };

  //Premjestiti te funkcije u books, members
  const removeBooks = (bookID) => {
    setLibraryData((prev) => ({
      ...prev,
      books: prev.books.filter((book) => book.id != bookID),
    }));
  };
  const addNewBook = (newBook) => {
    setLibraryData((prev) => ({ ...prev, books: [...prev.books, newBook] }));
  };
  const addNewMember = (newMember) => {
    setLibraryData((prev) => ({
      ...prev,
      members: [...prev.members, newMember],
    }));
  };
  const removeMember = (memberID) => {
    setLibraryData((prev) => ({
      ...prev,
      members: prev.members.filter((member) => member.id != memberID),
    }));
  };

  const componentsArray: Record<
    string,
    { component: React.ComponentType<any>; props?: Record<string, any> }
  > = {
    Dashboard: { component: Dashboard, props: { data: libraryData } },
    Books: {
      component: Books,
      props: {
        data: libraryData.books,
        removeBooks: removeBooks,
        addNewBook: addNewBook,
      },
    },
    Members: {
      component: Members,
      props: {
        data: libraryData.members,
        removeMember: removeMember,
        addNewMember: addNewMember,
      },
    },
  };

  if (!userLogged) {
    return (
      <>
        <LoginWindow
          loginInfo={data.defaultLoginInfo}
          setUserLogged={setUserLogged}
        />
      </>
    );
  } else {
    return (
      <>
        <div className="main">
          <Menu setUserLogged={setUserLogged} />
          <div className="content">
            <Routes>{displayRoute()}</Routes>
          </div>
        </div>
      </>
    );
  }
}

export default App;
