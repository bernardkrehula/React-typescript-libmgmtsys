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
  const [ libraryData, setLibraryData ] = useState(data);
  const defaultIconsData = data.defaultIconElements;
  const componentsArray: Record<string, {component: React.ComponentType<any>; props?: Record<string, any>}
  > = {
    Dashboard: {component: Dashboard, props: { data: libraryData}},
    Books: {component: Books, props: {}},
    Members: {component: Members, props: { members: libraryData.members  }}
  }
  const [ userLogged, isUserLogged ] = useState(false);


  const displayRoute = () => {
    return Object.values(defaultIconsData).map(icon => {
      const { name, link } = icon;
      const ComponentData = componentsArray[name];
      const { component: Components, props } = ComponentData;
      
      return(
        <>
         <Route path={link} element={<Components {...props}/>}/> 
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

export default App;
