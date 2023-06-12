import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='bg-black w-screen mb-4 p-4 border border-sky-900'>
      <div className='flex justify-between md:justify-around'>
        <div>
          <Link to="/" className='hover:text-sky-700 duration-300 cursor-pointer'>
            TR4CKER
          </Link>
        </div>
        <div className='flex'>
          <div className='mr-4'>
            <Link to="/login" className='hover:text-sky-700 duration-300 cursor-pointer'>
              Login
            </Link>
          </div>
          <div>
            <a className='hover:text-sky-700 duration-300 cursor-pointer'>
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
