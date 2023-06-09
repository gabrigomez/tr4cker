import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Keyhole, SignOut, UserCircle, UserCirclePlus } from '@phosphor-icons/react';


export const NavBar = () => {
  const { logoutUser } = useContext(AuthContext)
  const token = localStorage.getItem("token")
    
  return (
    <div className='bg-black w-screen mb-4 p-4 border border-sky-900'>
      <div className='flex justify-between md:justify-around'>
        <div>
          <Link to="/" className='text-pink-500 hover:text-sky-700 duration-300 cursor-pointer font-bold'>
            TR4CKER
          </Link>
        </div>
        <div className='flex'>
          {token ? (
            <div className='flex'>
              <div className='mr-4 flex items-center group'>
                <UserCircle className='text-2xl mr-1 group-hover:text-sky-700 cursor-pointer' />
                <Link to="/dashboard" className='group-hover:text-sky-700 duration-300 cursor-pointer'>
                  Dashboard
                </Link>
              </div>
              <div className='mr-4 flex items-center group'>
                <SignOut className='text-2xl mr-1 group-hover:text-sky-700 cursor-pointer' />
                <button onClick={logoutUser} className='group-hover:text-sky-700 duration-300 cursor-pointer'>
                  Log out
                </button>
              </div>
            </div>            
          ) : (
            <div className='flex'>
              <div className='mr-4 flex items-center group'>
                <Keyhole className='text-2xl mr-1 group-hover:text-sky-700 cursor-pointer' />
                <Link to="/login" className='group-hover:text-sky-700 duration-300 cursor-pointer'>
                  Login
                </Link>
              </div>
              <div className='mr-4 flex items-center group'>
                <UserCirclePlus className='text-2xl mr-1 group-hover:text-sky-700 cursor-pointer' />
                <Link to="/sign-in" className='group-hover:text-sky-700 duration-300 cursor-pointer'>
                  Sign in
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
