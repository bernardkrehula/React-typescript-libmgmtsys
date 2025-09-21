import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './components/Books/Books'
import Members from './components/Members/Members'
import Menu from './components/Menu/Menu'
import DefaultPage from './components/DefaultPage/DefaultPage'
import Book from './components/Books/Book/Book'
import { useState } from 'react'
import LoginWindow from './components/LoginWindow/LoginWindow'

function App() {
  const [ userLogged, isUserLogged ] = useState(false);

  if(!userLogged){
    return(
      <>
        <LoginWindow />
      </>
    )
  } 
  else{
    return (
      <>
        <BrowserRouter>
          <div className='main'>
            <Menu /> 
            <div className='content'>
              <Routes>
                <Route path='/' element={<DefaultPage />}></Route>
                <Route path='/Books' element={<Books />}/>
                <Route path='/Members' element={<Members />}/>
              </Routes>
            </div>
          </div>
          </BrowserRouter>
      </>
    )
  }
}

export default App
