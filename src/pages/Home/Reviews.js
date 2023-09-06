import React from 'react'
import CustomButton from '../../components/CustomButton'
import { getReviewsData } from '../../api'
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs"
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        beforeChange: (current, next) => setCurrentSlide(next)
      };

    const reviewElements = reviews.slice(0, currentSlide).map((review, index) => {
        return(
            
                <div className='flex flex-row items-center gap-5 mx-40' key={index}>
                    <img src={review.imageUrl} className='rounded-full border-4 border-amber-300 w-[15rem] h-[15rem] object-cover' alt='' />
                    <div className='text-left space-y-4'>
                        <span className='text-amber-300 text-3xl'><FaQuoteLeft /></span><p>{review.experience}</p><span className='text-amber-300 text-3xl flex justify-end items-end'><FaQuoteRight/></span>
                        <h2 className='font-medium text-slate-400'>{review.name}</h2>
                        <CustomButton 
                            title="View All Reviews"
                            containerStyles="bg-amber-400 rounded-full text-slate-400 font-medium"
                        />
                    </div>
                </div>
           
           
        )
    })
  return (
    <div className='flex flex-col justify-end items-end py-40'>
        <h3 className='text-md text-amber-300 font-medium uppercase'>360+ Happy Clients</h3>
        <h1 className='text-4xl text-slate-400'>Our Clients Feedback</h1>
        <div className='pt-10'>
            
            <div className='flex flex-row'>
                {reviewElements}
            </div>
                       
            <div className='flex items-center justify-center gap-8 pt-10'>
                <button className='text-4xl text-slate-400' onClick={() => setCurrentSlide(currentSlide - 1)}><BsArrowLeftCircle /></button>
                <button className='text-4xl text-slate-400' onClick={() => setCurrentSlide(currentSlide + 1)}><BsArrowRightCircle /></button>
            </div>
        </div>
    
    </div>
  )
}

export default Reviews
