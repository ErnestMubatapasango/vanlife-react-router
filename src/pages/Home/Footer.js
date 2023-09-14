import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='py-5'>
        <hr  className='border-2 border-amber-300'/>
        <div className='pt-10 flex flex-col md:flex-row flex-wrap gap-y-5 justify-between items-start'>
            <div className='space-y-2'>
                <h1 className='text-2xl leading-tight font-extrabold '><span className='text-amber-300'>#CAR</span>LIFE</h1>
                <h3 className='w-50 md:w-80 text-slate-400'>
                    Discover the epitome of luxury and performance with our premium car rentals<br/>Unleash the thrill of driving top tier
                    vehicles, meticulously maintained to perfection.
                </h3>
            </div>

            <div className='space-y-2'>
                <h1 className='text-xl font-bold'>Our Company</h1>
                <ul className='space-y-1'>
                    <li className='text-slate-400'>Home</li>
                    <li className='text-slate-400'>About</li>
                    <li className='text-slate-400'>Cars</li>
                    <li className='text-slate-400'>Car Catalogue</li>
                </ul>
            </div>

            <div className='space-y-3 md:space-x-2'>
                <input className='indent-2 w-full md:w-60 p-2 rounded-full bg-none border-2 border-amber-300 outline-none font-medium' type='email' placeholder='Enter your email here'  />
                <button className='border-slate-300 w-full md:w-40 border-2 p-2 rounded-full text-slate-400 font-medium hover:text-amber-400'>Subscribe</button>
            </div>
        </div>
        <hr  className='border-2 border-amber-300 mt-10'/>
        <Link to='https://www.digitalbots.agency' target="_blank" className='flex justify-center pt-3 text-slate-400 font-medium'>Website Design: <span className='text-black hover:text-amber-400 '>Digital Bots Agency</span></Link>
    </div>
    
  )
}

export default Footer