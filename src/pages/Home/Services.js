import React from 'react'
import {BsCalendar2Date, BsFillCarFrontFill} from "react-icons/bs"
import {MdOutlineImageSearch} from "react-icons/md"
import {BiSupport} from "react-icons/bi"
import {FaThumbsUp}  from "react-icons/fa"
import {ImPriceTags} from "react-icons/im"


function Services() {
  return (
    <div className=''>
        <div className='text-center pt-[7rem]'>
            <h3 className='text-md text-amber-300 font-medium'>HOW IT WORKS</h3>
            <h1 className='text-2xl md:text-4xl text-slate-400'>Our 3-Step Process</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 text-center pt-10 divide-y-2 md:divide-y-0 space-y-3 md:divide-x-2 divide-amber-300 divide-dashed'>
            <div className='flex flex-col items-center gap-2 pt-3 md:pt-0'>
                <span className="text-5xl text-slate-400"><MdOutlineImageSearch /></span>
                <h2 className='font-bold text-xl text-amber-300'>Choose a location</h2>
                <p>Select a location from the options above</p>
            </div>

            <div className='flex flex-col items-center gap-2 pt-3 md:pt-0'>
                <span className="text-5xl text-slate-400"><BsCalendar2Date /></span>
                <h2 className='font-bold text-xl text-amber-300'>Pick a date</h2>
                <p>pick a date on which to book the car</p>
            </div>

            <div className='flex flex-col items-center gap-2 pt-3 md:pt-0'>
                <span className="text-5xl text-slate-400"><BsFillCarFrontFill /></span>
                <h2 className='font-bold text-xl text-amber-300'>Choose a Car</h2>
                <p>select a car of from the available list</p>
            </div>
            </div>
        </div>

        <div className='pt-40 grid grid-cols-1 md:grid-cols-2 gap-10'>
            <img src="raize-white.png" alt='toyota gr' />
            <div>
                <h3 className='text-md text-amber-300 font-medium'>BEST SERVICES</h3>
                <h1 className=' text-2xl md:text-4xl text-slate-400 '>Get the best experience<br /> with our rental deals</h1>
                <div className='space-y-5 mt-10'>
                    <div className='flex flex-row items-start gap-4'>
                        <FaThumbsUp className='bg-amber-300 text-slate-500 p-3 rounded-lg text-6xl' />
                        <div>
                            <h2 className='font-bold text-xl'>Deals for any budget</h2>
                            <p>Rent a car for as low as $15/day</p>
                        </div>
                       
                    </div>
                    <div className='flex flex-row items-start gap-4'>
                        <ImPriceTags className='bg-amber-300 text-slate-500 p-3 rounded-lg text-6xl' />
                        <div>
                            <h2 className='font-bold text-xl'>Best price guaranteed</h2>
                            <p>If you find a lower price than us. We'll<br /> refund you 100% of the difference</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-start gap-4'>
                        <BiSupport className='bg-amber-300 text-slate-500 p-3 rounded-lg text-6xl' />
                        <div>
                            <h2 className='font-bold text-xl'>24/7 Support</h2>
                            <p>We are available to assist you at any time, day or night.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Services