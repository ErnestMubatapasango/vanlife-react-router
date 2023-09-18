import React from 'react'
//import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Home/Footer'


function Layout() {
  return (
    <div className='mx-4 sm:mx-5 md:mx-[3rem] lg:mx-40'>    
        <Header />
        <main className='pt-0 md:pt-10 xl:pt-20'>
            <Outlet />
        </main>  
        <Footer />   
    </div>
  )
}

export default Layout