import React from 'react'
//import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='mx-40'>    
        <Header />
        <main>
            <Outlet />
        </main>        
    </div>
  )
}

export default Layout