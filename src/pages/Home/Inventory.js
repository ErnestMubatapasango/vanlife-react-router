import React from 'react'
import { Form, useLoaderData, useSearchParams } from 'react-router-dom'
import {GrLocation} from "react-icons/gr"
import {BsCalendar2Date} from "react-icons/bs"
import { getVans } from '../../api'


function Inventory() {
  
  const [dates, setDates] = React.useState([]);
  const [cars, setCars] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [params, setParams] = useSearchParams()

  function handleParams(key,value){
    setParams(prevParams => {
      if(prevParams === null){
        prevParams.delete(key)
      }
      else{
        prevParams.set(key,value)
      }
      return prevParams
    })
  }
  React.useEffect(() => {
    async function fetchData() {
      try {
     
        const data = await getVans(); 
        console.log(data)
        setCars(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  
  const carElements = cars.map(car => {
    return(
      <div className='w-[15em] h-[22em] flex flex-col gap-2 items-start shadow-2xl px-2 py-5 rounded-2xl' key={car.id}>
        <img src={car.imageUrl} alt='rental cars' className='rounded-xl w-full h-[12em]' />
        <h2 className='font-medium text-lg text-slate-400'>{car.title}</h2>
        <p className='text-amber-200'>${car.price}/day</p>
        <button className='bg-amber-200 text-slate-400 font-bold p-2 rounded-xl'>Rent Now</button>
      </div>
    )
  })
  
  React.useEffect(() => {
    // Function to generate date options dynamically
    function generateDateOptions() {
      const today = new Date();
      const numberOfDaysToAdd = 7; // You can adjust this number as needed
      const dateOptions = [];

      for (let i = 0; i < numberOfDaysToAdd; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dateOptions.push({
          value: date.toISOString().split('T')[0],
          text: date.toLocaleDateString(),
        });
      }

      return dateOptions;
    }

    // Populate the date options
    const generatedDates = generateDateOptions();
    setDates(generatedDates);
  }, []);

  return (
    <div className='-my-60'>
      <Form className='flex flex-row justify-around shadow-2xl bg-amber-200 rounded-3xl p-5'>
        <div className='flex flex-col gap-3 items-start justify-start'>
        <label className='font-medium text-lg flex items-center' htmlFor='location'><GrLocation />Location:</label>
         <select className='bg-amber-200'>
          <option className='bg-amber-100 text-slate-400' value="">Choose location</option>
          <option className='bg-amber-200 text-slate-400' value="byo">Bulawayo</option>
          <option className='bg-amber-200 text-slate-400' value="hre">Harare</option>
          <option className='bg-amber-200 text-slate-400' value="mte">Mutare</option> 
        </select>
        </div>

        <div className='flex flex-col items-start gap-3'>
          <label className='font-medium text-slate-400 text-lg flex items-center gap-1' htmlFor="dateSelect"><BsCalendar2Date />Select a Date:</label>
      
          <select className='bg-amber-200 text-slate-400' id="dateSelect" name="date">
            {dates.map((dateOption) => (
              <option className='bg-amber-200 text-slate-400' key={dateOption.value} value={dateOption.value}>
                {dateOption.text}
              </option>
            ))}
          </select>
        </div>
      
     

        <div className='flex flex-col items-start gap-3'>

          <label className='font-medium text-slate-400 text-lg flex items-center gap-1' htmlFor='return-date'><BsCalendar2Date />Return Date:</label>
          <select className='bg-amber-200 text-slate-400' id="dateSelect" name="date">
            {dates.map((dateOption) => (
              <option className='bg-amber-200 text-slate-400' key={dateOption.value} value={dateOption.value}>
                {dateOption.text}
              </option>
            ))}
          </select>
        </div>
      </Form>

      <div className='my-20'>
        <h1 className='text-3xl font-medium'>Car Catalogue</h1>
        <p>Explore the cars you might like</p>
        <div className='flex flex-row flex-wrap gap-3 my-5'>
          <button onClick={() => (handleParams("type","hatchback"))} className='rounded-full fonr-medium px-5 py-2 text-slate-400 bg-amber-200 hover:bg-amber-400'>Hatchback</button>
          <button onClick={() => (handleParams("type","suv"))} className='rounded-full fonr-medium px-5 py-2 text-slate-400 bg-amber-200 hover:bg-amber-400'>SUV</button>
          <button onClick={() => (handleParams("type","truck"))} className='rounded-full fonr-medium px-5 py-2 text-slate-400 bg-amber-200 hover:bg-amber-400'>Truck</button>
          <button onClick={() => (handleParams("type","minibus"))} className='rounded-full fonr-medium px-5 py-2 text-slate-400 bg-amber-200 hover:bg-amber-400'>Mini Bus</button>
          <button onClick={() => (handleParams("type","luxury"))} className='rounded-full fonr-medium px-5 py-2 text-slate-400 bg-amber-200 hover:bg-amber-400'>Luxury</button>
          <button onClick={() => (handleParams("type","fuelsaver"))} className='rounded-full fonr-medium px-5 py-2 text-slate-400 bg-amber-200 hover:bg-amber-400'>Fuel Saver</button>
        </div>
      </div>

      {
      loading?
       
      (<h1>Loading....</h1>) :
      (
      <div className='flex gap-3 flex-wrap justify-center items-center'>
          {carElements}
      </div>
      )
      }
    </div>
    
  )
}

export default Inventory