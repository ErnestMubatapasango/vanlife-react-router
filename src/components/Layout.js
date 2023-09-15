import React from 'react'
//import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Home/Footer'


function Layout() {
  return (
    <div className='mx-10 lg:mx-40'>    
        <Header />
        <main className='pt-0 md:pt-20'>
            <Outlet />
        </main>  
        <Footer />   
    </div>
  )
}

export default Layout