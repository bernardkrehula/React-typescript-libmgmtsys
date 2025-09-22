import './App.css'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import React, { useState } from 'react'
import LoginWindow from './components/LoginWindow/LoginWindow'
import data from './data/data'
import Books from './components/Books/Books'
import Dashboard from './components/Dashboard/DashBoard'
import Members from './components/Members/Members'

function App() {
  const defaultIconsData = data.defaultIconElements;
  const componentsArray: Record<string, React.ComponentType> = {
    Books,
    Dashboard,
    Members
  }
  const [ userLogged, isUserLogged ] = useState(false);


  const displayRoute = () => {
    return Object.values(defaultIconsData).map((icon, index) => {
      const { name, link } = icon;
      const Components = componentsArray[name]
      
      return(
        <>
         <Route path={link} element={<Components />}/> 
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
