import React from 'react'
import CustomButton from '../../components/CustomButton'
import { Link } from 'react-router-dom'

function Home() {

    //const [scrolling, setScrolling] = React.useState(false)
    // const [active, setActive] = React.useState("")
    // const handleNavLink = (link) => {
    //     setActive(link)
    // }
    // React.useEffect(() => {
    //     function handleScroll(){
    //         if(window.scrollY > 0){
    //             setScrolling(true)
    //         }
    //         else{
    //             setScrolling(false)
    //         }
            
    //     }
    //     window.addEventListener("scroll", handleScroll)
    //     return () => window.removeEventListener("scroll", handleScroll)
    // }, [])
  

  return (
    <div className='flex flex-col-reverse md:flex-row gap-y-8 items-start py-10 md:py-0 md:pt-10'>
        <div className='space-y-6 w-full md:w-1/2'>
            <h1 className='text-[30px] xs:text-[35px] md:text-[30px] lg:text-[42px]  text leading-tight font-extrabold'>Find, Book, or <span className='text-amber-300'>Rent</span><br /> a car quickly and easily!<br /></h1>

            <h3 className='font-light  text-[15px] xs:text-[17px]'>
                Streamline your car rental experience with our effortless<br/> Booking Process.Our user-friendly platform 
                allows you to compare, reserve, and manage rentals seamlessly.
            </h3>

            <Link to='vans'>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-amber-300 my-5 text-slate-500 rounded-full font-medium"
                />
            </Link>
          
        </div>

         {/* <div className='md:bg-hero-bg lg:h-screen bg-no-repeat md:w-1/2 md:ml-20 md:-mt-20'> */}
            <img src='hero1.png' alt='hero'className='w-full md:w-1/2 xl:-mt-20' /> 
        {/* </div> */}
            
            
    </div>
 
  )
}

export default Home