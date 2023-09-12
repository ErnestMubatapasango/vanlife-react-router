import React from 'react'
import CustomButton from '../../components/CustomButton'

function Home() {

    function handleScroll(){
        
    }

  return (
    <div className='flex  items-start justify-between pt-20 '>
        <div className='space-y-5'>
            <h1 className='text-[42px] leading-tight font-extrabold'>Find, Book, or <span className='text-amber-300'>Rent</span><br /> a car quickly and easily!<br /></h1>

            <h3 className='font-light'>
                Streamline your car rental experience with our effortless<br/> Booking Process.Our user-friendly platform 
                allows you to compare, reserve, and manage rentals seamlessly.
            </h3>

            <CustomButton
                title="Explore Cars"
                containerStyles="bg-amber-300 text-black rounded-full font-medium"
                handleClick={handleScroll}
            />
        </div>

         <div className='bg-hero-bg h-screen bg-no-repeat  ml-40 -mt-20'>
            <img src='hero.png' alt='hero'className='w-[65em] mt-20 -ml-20' /> 
        </div>
            
            
    </div>
 
  )
}

export default Home