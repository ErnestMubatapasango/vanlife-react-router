import React from 'react'
import { Form,useSearchParams } from 'react-router-dom'
import {ImLocation2} from "react-icons/im"
import {BsCalendar2Date, BsFillCarFrontFill} from "react-icons/bs"
import {MdOutlineImageSearch} from "react-icons/md"
import { getVans } from '../../api'


function Inventory() {
  
  const [dates, setDates] = React.useState([]);

  

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
    <div className='md:pt-20'>
      <Form className='flex flex-row flex-wrap gap-5 md:gap-0 md:justify-around shadow-2xl bg-amber-300 rounded-3xl p-5'>
        <div className='flex flex-col gap-3 items-start justify-start'>
        <label className='font-medium text-slate-700  text-lg flex items-center' htmlFor='location'><ImLocation2 />Location:</label>
         <select className='bg-amber-200 text-slate-400 rounded-lg border-2 p-2 border-slate-400 outline-none'>
          <option className='bg-amber-200 text-slate-400' value="">Choose location</option>
          <option className='bg-amber-200 text-slate-400' value="byo">Bulawayo</option>
          <option className='bg-amber-200 text-slate-400' value="hre">Harare</option>
          <option className='bg-amber-200 text-slate-400' value="mte">Mutare</option> 
        </select>
        </div>

        <div className='flex flex-col items-start gap-3'>
          <label className='font-medium text-slate-700 text-lg flex items-center gap-1' htmlFor="dateSelect"><BsCalendar2Date />Select a Date:</label>
      
          <select className='bg-amber-200 text-slate-400 rounded-lg border-2 p-2 border-slate-400 outline-none' id="dateSelect" name="date">
            {dates.map((dateOption) => (
              <option className='bg-amber-200 text-slate-400' key={dateOption.value} value={dateOption.value}>
                {dateOption.text}
              </option>
            ))}
          </select>
        </div>
      
     

        <div className='flex flex-col items-start gap-3'>

          <label className='font-medium text-slate-700 text-lg flex items-center gap-1' htmlFor='return-date'><BsCalendar2Date />Return Date:</label>
          <select className='bg-amber-200 text-slate-400 rounded-lg border-2 p-2 border-slate-400 outline-none' id="dateSelect" name="date">
            {dates.map((dateOption) => (
              <option className='bg-amber-200 text-slate-400' key={dateOption.value} value={dateOption.value}>
                {dateOption.text}
              </option>
            ))}
          </select>
        </div>

        <button className='flex flex-row bg-slate-700 text-amber-200 text-lg hover:text-amber-400 hover:bg-slate-500 items-center p-4 m-5 rounded-xl justify-center font-medium'>
          <MdOutlineImageSearch />
          Search
        </button>
      </Form>
      </div>
    
  )
}

export default Inventory