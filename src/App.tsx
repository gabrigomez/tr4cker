import './App.css'
import { Routes, Route } from 'react-router'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { Login } from './components/Login'
import { SignIn } from './components/SignIn'
import { Dashboard } from './components/Dashboard'

function App() {
  return (
    <div className=' font-orbit'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>       
    </div>
  )
}

export default App
