import React from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { getVans } from '../../api'

function Catalogue() {

    const [loading, setLoading] = React.useState(true)
    const [params, setParams] = useSearchParams()
    const [cars, setCars] = React.useState([])
    const [visibleCars, setVisibleCars] = React.useState(4)
    const navigate = useNavigate()
    const typeFilter = params.get('type')

    console.log(typeFilter)

    const activeStyle = {
      fontWeight: 'bold',
      backgroundColor: '#FFB300',
     
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

    const displayedCars = typeFilter ? cars.filter(car => car.type === typeFilter) : cars
    const carElements = displayedCars.slice(0, visibleCars).map(car => {
        return(
            <Link key={car.id}>
                <div className='w-[13em] h-[20em] flex flex-col gap-2 items-start shadow-2xl px-2 py-4 rounded-2xl' >
                    <img src={car.imageUrl} alt='rental cars' className='rounded-2xl w-[14rem] h-[10rem] object-contain' />
                    <h2 className='font-medium text-lg text-black'>{car.title}</h2>
                    <p className='text-amber-400'>${car.price}/day</p>
                    <button className='bg-amber-300 text-black w-full font-bold p-2 rounded-xl'>Rent Now</button>
                </div>
            </Link>

        )
      })
      

    function handleParams(key,value){
      setParams(prevParams => {
        if(value === null){
          prevParams.delete(key)
        }
        else{
          prevParams.set(key,value)
        }
        return prevParams
      })
    }
  return (
    <div>
      <div className='mt-40'>
        <h3 className='text-md text-amber-300 font-medium uppercase'>Car Catalogue</h3>
        <h1 className='text-2xl md:text-4xl text-slate-400'>Explore the cars you might like</h1>
        <div className='flex flex-row flex-wrap gap-3 my-5 items-center'>
          <button onClick={() => (handleParams("type","hatchback"))} style={typeFilter === "hatchback" ? activeStyle : null } className='rounded-full font-medium px-5 py-2 text-slate-400 bg-amber-300 hover:bg-amber-400'>Hatchback</button>
          <button onClick={() => (handleParams("type","suv"))} style={typeFilter === "suv" ? activeStyle : null } className='rounded-full font-medium px-5 py-2 text-slate-400 bg-amber-300 hover:bg-amber-400'>SUV</button>
          <button onClick={() => (handleParams("type","truck"))} style={typeFilter === "truck" ? activeStyle : null } className='rounded-full font-medium px-5 py-2 text-slate-400 bg-amber-300 hover:bg-amber-400'>Truck</button>
          <button onClick={() => (handleParams("type","minibus"))} style={typeFilter === "minibus" ? activeStyle : null } className='rounded-full font-medium px-5 py-2 text-slate-400 bg-amber-300 hover:bg-amber-400'>Mini Bus</button>
          <button onClick={() => (handleParams("type","luxury"))} style={typeFilter === "luxury" ? activeStyle : null } className='rounded-full font-medium px-5 py-2 text-slate-400 bg-amber-300 hover:bg-amber-400'>Luxury</button>
          {typeFilter && <button onClick={() => setParams()} className='underline text-slate-400'>Clear Filters</button>}
        </div>
      </div>

      {
      loading?
       
      (<h1>Loading....</h1>) :
      (
      <div className='flex flex-col'>
        <div className='flex flex-wrap gap-5 md:gap-0 justify-center md:justify-between items-center'>
            {carElements}
        </div>
        { visibleCars === 8 ? 
          <button 
          onClick={() => navigate("/vans")}
          className='bg-amber-300 hover:bg-amber-400 text-black mt-10 ml-auto text-right rounded-full p-3 font-bold'
        >
            Load More
        </button>
         : <button 
          onClick={() => setVisibleCars(visibleCars + 4)}
          className='bg-amber-300 hover:bg-amber-400 text-black mt-10 ml-auto text-right rounded-full p-3 font-bold'
        >
            Load More
        </button>}
      </div>
      )
      }
    </div>
  )
}

export default Catalogue