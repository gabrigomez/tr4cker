import './App.css'
import { Routes, Route } from 'react-router'
import { Home } from './components/Pages/Home'
import { NavBar } from './components/NavBar'
import { Login } from './components/Pages/Login'
import { SignIn } from './components/Pages/SignIn'
import { Dashboard } from './components/Pages/Dashboard'
import { AuthProvider } from './context/AuthContext'
import { EditUser } from './components/Pages/EditUser'
import { ArtistDetails } from './components/Pages/ArtistDetails'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='font-orbit'>
      <AuthProvider>
        <NavBar />
        <Toaster
          position="bottom-center"
        />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/artist-details/:id" element={<ArtistDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit-user" element={<EditUser />} />
          </Routes>       
      </AuthProvider>
    </div>
  )
}

export default App
