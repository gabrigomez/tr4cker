import './App.css'
import { Routes, Route } from 'react-router'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>       
    </div>
  )
}

export default App
