import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Books from './components/Books'
import Members from './components/Members'

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to='/Books'>Books</Link>
        <Link to='/Members'>Members</Link>

        <Routes>
          <Route path='/Books' element={<Books />}/>
          <Route path='/Members' element={<Members />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
