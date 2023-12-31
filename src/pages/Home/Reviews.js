import React from 'react'
import CustomButton from '../../components/CustomButton'
import { getReviewsData } from '../../api'
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs"
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"

function Reviews() {

    const [reviews, setReviews] = React.useState([])
    const [currentSlide, setCurrentSlide] = React.useState(1)

    React.useEffect(() => {
        async function loadReviews(){
            try{
                const data = await getReviewsData()
                setReviews(data)
            }
            catch(err){
                console.log(err)
            }
        }
        loadReviews()
    },[])
    
 
    const reviewElements = reviews.slice(0, currentSlide).map(review => {
        return(
            
                <div className='flex flex-col md:flex-row items-center gap-5 xl:mx-40' key={review.id}>
                    <img src={review.imageUrl} className='rounded-full border-4 border-amber-300 w-[15rem] h-[15rem] object-cover' alt='' />
                    <div className='flex flex-col justify-center space-y-4'>
                        <span className='text-amber-300 text-3xl'><FaQuoteLeft /></span><p>{review.experience}</p><span className='text-amber-300 text-3xl flex justify-end items-end'><FaQuoteRight/></span>
                        <h2 className='font-bold text-amber-300 text-center md:text-left text-lg'>{review.name}</h2>
                        <CustomButton 
                            title="View All Reviews"
                            containerStyles="border-amber-300 mx-auto border-2 hover:border-slate-300 rounded-full text-slate-400 font-medium"
                        />
                    </div>
                </div>
           
           
        )
    })
  return (
    <>
         <div className='flex flex-col justify-end items-end py-40'>
        <h3 className='text-md text-amber-300 font-medium uppercase'>360+ Happy Clients</h3>
        <h1 className='text-2xl md:text-4xl text-slate-400'>Our Clients Feedback</h1>
        <div className='pt-10'>
          
                <div className='flex flex-row'>
                    {reviewElements}
                </div>

                {/* onClick={() => setCurrentSlide(currentSlide - 1)}
                onClick={() => setCurrentSlide(currentSlide + 1)} */}
           
                       
            <div className='flex items-center justify-center gap-8 pt-10'>
                <button className='text-4xl text-slate-400 hover:text-amber-300' ><BsArrowLeftCircle /></button>
                <button className='text-4xl text-slate-400 hover:text-amber-300' ><BsArrowRightCircle /></button>
            </div>
        </div>    
    </div>

    <div className='bg-amber-300 rounded-3xl flex flex-col justify-center items-center gap-5 px-5 py-10'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white'>Subscribe To Our Newsletter</h1>
        <p className='text-white text-lg'>Get the latest updates on the #CARLIFE rental service</p>

        <div className='md:space-x-2 space-y-5'>
            <input className='indent-2 w-full lg:w-80 p-2 rounded-full bg-white text-center text-slate-400 outline-none' type='email' placeholder='Enter your email here'  />
            <button className='bg-white border-2 border-slate-400 p-2 rounded-full w-full lg:w-[10em]  font-medium text-slate-400'>Subscribe</button>
        </div>
    </div>
    </>
   
  )
}

export default Reviews
