import React from 'react'

function About() {

  const content = [
    {
      title:"Premium Fleet",
      description:`Our diverse selection of vehicles ensures there's a perfect match for every traveler. 
      From compact cars for urban adventures to spacious SUVs for family road trips, we have it all.`,
      imageUrl: "premium.png",
    },
    {
      title:"Customer-Centric Approach",
      description:`At #CARLIFE, you're not just a customer; you're part of our travel family. 
      We prioritize your comfort, safety, and satisfaction, offering personalized solutions for every need.`,
      imageUrl: "customer.png",
    },
    {
      title:"Quality Assurance",
      description:`We meticulously maintain our fleet to the highest industry standards. 
      Your safety and peace of mind are our top priorities, and our vehicles reflect that commitment.`,
      imageUrl: "quality.png",
    },
    {
      title:"Transparent Pricing",
      description:`No hidden fees or surprises. With #CARLIFE, you'll always know exactly what you're paying for. 
      Our competitive rates ensure exceptional value for your money.`,
      imageUrl: "pricing.png",
    },

  ]

  const contentElements = content.map((about, index) => {
    return(
      <div key={index} className='flex flex-col-reverse md:flex-row-reverse gap-5 items-center justify-center'>
        <div className='w-full md:w-1/2 space-y-3'>
          <h3 className='text-xl text-center md:text-left font-medium text-amber-400'>{about.title}</h3>
          <p className='text-center md:text-left'>{about.description}</p>
        </div>
        <img src={about.imageUrl} alt='' className=' w-full md:w-80' />
      </div>
    )
  })

  return (
    <div className='flex flex-col items-center mt-20'>
      <h1 className='text-2xl md:text-3xl font-medium text-amber-300 mb-10 uppercase'>About us</h1>

      <div className='flex flex-col-reverse md:flex-row  items-center gap-11'>
        <div className='w-full md:w-1/2 space-y-3'>
          <h2 className='font-bold text-slate-400 text-3xl'>Your Ultimate Car Rental Experience</h2>
          <p className='text-center '>
            Welcome to #CARLIFE, where your journey begins with unparalleled convenience 
            and exceptional service. We are more than just a car rental company; we're your 
            trusted partner in exploring the world on four wheels. At #CARLIFE, we're dedicated 
            to making your travel dreams come true with our fleet of top-quality vehicles and 
            commitment to customer satisfaction.
          </p>
        </div>
        <img src='about.jpg' alt='' className='w-full md:w-1/2 rounded-3xl' />
      </div>
      
      <div className='text-center mx-0 md:mx-60 my-20'>
        <h2 className='text-2xl text-amber-300 font-semibold uppercase  pb-3'>Our Story</h2>
        <p>
          Founded with a passion for travel and a deep appreciation for the freedom a reliable vehicle provides, 
          #CARLIFE has been serving travelers like you since 2015. Our story began with a simple 
          vision: to offer a car rental experience that's as smooth as the open road.
        </p>
      </div>

      <div className='space-y-8'>
        <h2 className='uppercase font-medium text-slate-400 text-2xl'>What Sets Us Apart</h2>
        <div className='flex flex-col gap-5 justify-center items-center'>
          {contentElements}
        </div>
      </div>

      <div className='text-center mx-0 md:mx-60 my-10'>
        <h2 className='text-2xl text-amber-300 font-semibold uppercase  pb-3'>Our Team</h2>
        <p>
          Behind #CARLIFE is a team of dedicated professionals who are passionate about cars, travel, 
          and providing you with an unforgettable experience. From our customer service representatives 
          to our skilled technicians, we're all here to ensure your journey is as smooth as possible.
        </p>
      </div>

      <div className='text-center mx-0 md:mx-60 my-10'>
        <h2 className='text-2xl text-amber-300 font-semibold uppercase  pb-3'>Our Commitment</h2>
        <p>
          Our commitment to you goes beyond just renting cars. We're dedicated to reducing our environmental 
          footprint and promoting responsible travel. That's why we continually invest in eco-friendly 
          vehicle options and sustainable practices
        </p>
      </div>

      <div className='text-center mx-0 md:mx-60 my-10'>
        <h2 className='text-2xl text-amber-300 font-semibold uppercase pb-3'>Join the #CARLIFE Community</h2>
        <p>
          Whether you're a frequent traveler or just planning your next adventure, we invite you to join the #CARLIFE 
          community. Discover the freedom of the open road with a rental experience like no other.

          At #CARLIFE, we don't just rent cars; we create memories. We look forward to being a part of your next adventure.

          Ready to start your journey? <span className='underline font-bold decoration-4 decoration-amber-300'>Book Your Car Now</span> and experience the #CARLIFE difference for yourself.
        </p>
      </div>


    </div>
  )
}

export default About