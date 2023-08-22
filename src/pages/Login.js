import React from 'react'
import { useLoaderData } from 'react-router-dom'


export function LoginLoader({request}){

  return new URL(request.url).searchParams.get("message")
}

function Login() {

  const message = useLoaderData()
  const [formData, setFormData] = React.useState({
    email: "",
    password:""
  })
  
  function handleChange(event){
    const {name, value} = event.target
    setFormData(prevFormData => ({
       ...prevFormData, [name]: value
    }))
  }
  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
  }
  
  return (
    <div className='flex flex-col justify-center items-center pt-10 bg-amber-100 mx-60 rounded-3xl'>
        <h1 className='text-3xl'>Sign into your account</h1>
        {message && <h3 className='text-red-500 font-bold pt-2'>{message}</h3>}
        <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-8 py-5'>
          <input 
            type='email' 
            placeholder='Email address' 
            className='p-2 rounded-xl w-[300px] indent-2 outline-none text-slate-500'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />

          <input 
            type='password' 
            placeholder='Password' 
            className='p-2 rounded-xl w-[300px] indent-2 outline-none text-slate-500'
            name='password' 
            value={formData.password}
          /> 
          <button className='bg-amber-400 p-2 rounded-2xl text-xl font-bold hover:bg-amber-200 text-slate-500'>Log in</button>
        </form>
    </div>
  )
}

export default Login