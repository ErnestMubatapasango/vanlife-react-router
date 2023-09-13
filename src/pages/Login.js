import React from 'react'
import { Form, redirect, useActionData, useLoaderData} from 'react-router-dom'

async function fakeLoginUserCred({email, password}){
  if(email === "tawaz@gmail.com" && password === "tawaz123"){
    localStorage.setItem("loggedIn", true);
    return {
      email: email,
      token: "bajhfahieuiwuoeio483u30qu0edfslajp"
    }
  }
  throw new Error("Couldn't find user with those credentials")
}

export function LoginLoader({request}){

  return new URL(request.url).searchParams.get("message")
}

export async function LoginAction({request}){
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  
  try{
    await fakeLoginUserCred({email, password})
    return redirect(pathname)
  }
  catch(err){
    return err.message
  }
}


function Login() {

  const message = useLoaderData()
  //const navigate = useNavigate()
  const error = useActionData()
  // const [formData, setFormData] = React.useState({
  //   email: "",
  //   password:""
  // })
  
  // function handleChange(event){
  //   const {name, value} = event.target
  //   setFormData(prevFormData => ({
  //      ...prevFormData, [name]: value
  //   }))
  // }
  // function handleSubmit(event){
  //   event.preventDefault()
  //   console.log(formData)
  //   //to add authentication
  //   navigate("/host",{replace: true})
  // }
  
  return (
    <div className='flex flex-col justify-center items-center pt-10 bg-amber-300 mx-60 rounded-3xl'>
        <h1 className='text-3xl'>Sign into your account</h1>
        {message && <h3 className='text-red-500 font-bold pt-2'>{message}</h3>}
        {error && <h3 className='text-red-500 font-bold pt-2'>{error}</h3>}
        {/* <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-8 py-5'>
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
            onChange={handleChange}
          /> 
          <button className='bg-amber-400 p-2 rounded-2xl text-xl font-bold hover:bg-amber-200 text-slate-500'>Log in</button>
        </form> */}
        <Form method='post' replace className='flex flex-col justify-center gap-8 py-5'>
          <input 
            type="email"
            placeholder='Email Address'
            name='email'
            className='p-2 rounded-xl w-[300px] indent-2 outline-none text-slate-500'
          />
          <input 
            type="password"
            placeholder='Password'
            name='password'
            className='p-2 rounded-xl w-[300px] indent-2 outline-none text-slate-500'
          />
          <button className='bg-amber-200 p-2 rounded-2xl text-xl font-bold hover:bg-amber-400 text-slate-500'>Login</button>
        </Form>
    </div>
  )
}

export default Login