import AuthContext from '../../context/AuthContext';

import { useContext } from 'react';
import { DashboardOptions } from './DashboardOptions';
import { LoginOptions } from './LoginOptions';
import { NavBarLogo } from '../Atoms/NavBarLogo';

export const NavBar = () => {
  const { logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("token");
    
  return (
    <div className='bg-black w-screen mb-4 p-4 border border-sky-900'>
      <div className='flex justify-between md:justify-around'>
        <NavBarLogo />
        <div className='flex'>
          {token ? (
            <DashboardOptions logoutUser={logoutUser} />            
          ) : (
            <LoginOptions />
          )}
        </div>
      </div>
    </div>
  )
};
