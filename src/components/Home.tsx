import React, { useEffect } from 'react';
import axios from 'axios';


export const Home = () => {
  const API_URL = "https://python-app.up.railway.app/api"
  
  useEffect(() => {
    const response = axios.get(API_URL)
    console.log(response)
  })

  return (
    <div className='w-screen'>
      <p className='text-3xl'>
        Tr4cker Home Component
      </p>
    </div>
  )
}
