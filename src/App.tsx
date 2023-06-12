import './App.css'
import { Routes, Route } from 'react-router'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { Login } from './components/Login'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>       
    </div>
  )
}

export default App
