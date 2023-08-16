import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex  flex-col items-center justify-center gap-11'>
        <p className='text-4xl text-center font-bold w-1/2'>Sorry the page you were looking for was not found</p>
        <Link to='/' className='bg-slate-400 text-black text-lg font-medium p-5 rounded-xl'>Return to home</Link>
    </div>
  )
}

export default NotFound