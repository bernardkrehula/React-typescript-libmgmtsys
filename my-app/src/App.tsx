import './App.css'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import React, { useEffect, useState } from 'react'
import LoginWindow from './components/LoginWindow/LoginWindow'
import data from './data/data'
import Books from './components/Books/Books'
import Dashboard from './components/Dashboard/Dashboard'
import Members from './components/Members/Members'

function App() {
  const [ libraryData, setLibraryData ] = useState(data);
  const defaultIconsData = data.defaultIconElements;
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
  const addNewMember = (newMember) => {
    console.log(libraryData.members)
      setLibraryData(prev => ({...prev, members: [...prev.members, newMember]}))
  }
  const removeMember = (memberID) => {
    setLibraryData(prev => ({...prev, members: prev.members.filter(member => member.id != memberID)}))
  }

  const componentsArray: Record<string, {component: React.ComponentType<any>; props?: Record<string, any>}
    > = {
      Dashboard: {component: Dashboard, props: { data: libraryData}},
      Books: {component: Books, props: { data: libraryData.books }},
      Members: {component: Members, props: { data: libraryData.members, removeMember: removeMember, addNewMember: addNewMember }}
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
