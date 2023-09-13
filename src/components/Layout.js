import React from 'react'
//import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Home/Footer'


function Layout() {
  return (
    <div className='mx-40 '>    
        <Header />
        <main className='my-20'>
            <Outlet />
        </main>  
        <Footer />   
    </div>
  )
}

export default Layout