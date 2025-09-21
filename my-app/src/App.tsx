import './App.css'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import { useState } from 'react'
import LoginWindow from './components/LoginWindow/LoginWindow'
import data from './data/data'

function App() {
  const defaultIconsData = data.defaultIconElements;
  const [ userLogged, isUserLogged ] = useState(false);

  const displayRoute = () => {
    return Object.values(defaultIconsData).map(icon => {
      const { name, link } = icon;
      
      return(
        <>
         <Route path={link} element={name}/>
        </>
      )
    })
  }


  if(userLogged){
    return(
      <>
        <LoginWindow />
      </>
    )
  } 
  else{
    return (
      <>
          <div className='main'>
            <Menu /> 
            <div className='content'>
              <Routes>
                {displayRoute()}
              </Routes>
            </div>
          </div>
      </>
    )
  }
}

export default App
