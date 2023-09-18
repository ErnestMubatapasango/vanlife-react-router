import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex  flex-col items-center justify-center gap-5'>
        <img src='notfound.png' alt='404 page not found' className='w-80' />
        <p className='text-xl text-center font-medium w-1/2'>Sorry the page you are looking for was not found</p>
        <Link to='/' className='bg-amber-400 text-black text-md font-bold p-3 rounded-full'>Return to Home</Link>
    </div>
  )
}

export default NotFound