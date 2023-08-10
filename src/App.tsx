import { ArtistDetails } from './components/Pages/ArtistDetails';
import { AuthProvider } from './context/AuthContext';
import { Dashboard } from './components/Pages/Dashboard';
import { EditUserPage } from './components/Pages/EditUserPage';

import { Home } from './components/Pages/Home';
import { Login } from './components/Pages/Login';
import { NavBar } from './components/Organisms/NavBar';
import { SignIn } from './components/Pages/SignIn';

import { Routes, Route } from 'react-router';
import { Toaster } from 'react-hot-toast';
import './App.css'

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
            <Route path="/edit-user" element={<EditUserPage />} />
          </Routes>       
      </AuthProvider>
    </div>
  )
};

export default App;
