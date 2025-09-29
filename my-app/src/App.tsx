import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu/Menu";
import { useEffect, useState } from "react";
import LoginWindow from "./components/LoginWindow/LoginWindow";
import data from "./data/data";
import Books from "./Pages/Books/Books";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Members from "./Pages/Members/Members";

//Pogledaj zod validacija
//Za dodavanje knjiga i dodavanje membera napravi zod validaciju
//Napravi validaciju tamo gdje je broj da baci error ukoliko to sto je korisnik upisao nije broj
//Napravi validaciju da stringovi ne mogu da budu kraci od 3 slova
//Ispod inputa gjde se baci error napisi to sto zood vrati
//

function App() {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") setUserLogged(true);
  }, []);

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
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Books" element={<Books />} />
              <Route path="/Members" element={<Members />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
}

export default App;
