import React from 'react'

function Footer() {
  return (
    <div className='pt-40'>
        <hr  className='border-2 border-amber-300'/>
        <div className='pt-10 flex justify-between items-start'>
        <div className='space-y-2'>
            <h1 className='text-2xl leading-tight font-extrabold '><span className='text-amber-200'>#CAR</span>LIFE</h1>
            <h3 className='w-80 text-slate-400'>
                Streamline your car rental experience with our effortless<br/> Booking Process.Our user-friendly platform 
                allows you to compare, reserve, and manage rentals seamlessly.
            </h3>
        </div>

        <div className='space-y-2'>
            <h1 className='text-xl font-bold'>Our Company</h1>
            <ul className='space-y-1'>
                <li className='text-slate-400'>Home</li>
                <li className='text-slate-400'>About</li>
                <li className='text-slate-400'>Vans</li>
                <li className='text-slate-400'>Car Catalogue</li>
            </ul>
        </div>

        <div className='space-x-2'>
            <input className='indent-2 w-60 p-2 rounded-full bg-none border-2 border-amber-300 outline-none font-medium' type='email' placeholder='Enter your email here'  />
            <button className='border-slate-300 border-2 p-2 rounded-full text-slate-400 font-medium hover:text-amber-400'>Subscribe</button>
        </div>
    </div>
    </div>
    
  )
}

export default Footer