import React, { useState } from 'react'

const Login = ({handleLogin}) => {  // to get the function from 'app.jsx'

    const submitHandler=(e)=>{
        e.preventDefault() // to prevent the default behaviour of form (page refresh)

        handleLogin(email,password) // to get the email and password from 'app.jsx'

        // console.log("email is ",email)
        // console.log("password is ",password)

        setEmail("")
        setPassword("")
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showUsers, setShowUsers] = useState(false); // to show and hide the users list on button click
  return (
    <div>
        <div className='flex flex-col items-end'>
            {/* <div className='absolute border-2 border-emerald-600 rounded mt-7 mr-7 '>
            <div className='w-30 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded my-2 '>Users</div>
            <div className='w-30 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded mb-2 text-opacity-{0.1}'>e@e.com</div>
            <div className='w-30 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded mb-2 text-opacity-10'>e@e.com</div>
            <div className='w-30 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded mb-2 text-opacity-10'>e@e.com</div>
            <div className='w-30 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded mb-2 text-opacity-10'>e@e.com</div>
            <div className='w-30 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded mb-2 text-opacity-10'>e@e.com</div>

            </div> */}

            <div className='absolute border-2 border-emerald-600 rounded mt-7 mr-7 flex items-center flex-col '>
                    <button
                        type="button"
                        className='w-30 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded my-2 font-semibold  hover:bg-emerald-500'
                        onClick={() => setShowUsers((prev) => !prev)} // toggle the showUsers state on button click
                    >
                        Users
                    </button>
                    {showUsers && (  // if showUsers is true, then show the users list
                        <div>
                            <div className='w-40 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded mb-2 text-opacity-1'>aryan@ex.com</div>
                            <div className='w-40 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded mb-2 text-opacity-1'>lokesh@ex.com</div>
                            <div className='w-40 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded mb-2 text-opacity-1'>khanjan@ex.com</div>
                            <div className='w-40 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded mb-2 text-opacity-1'>rohit@ex.com</div>
                            <div className='w-40 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded mb-2 text-opacity-1'>harish@ex.com</div>
                            <div className='w-40 text-lg flex justify-center border-1 border-emerald-500 mx-3 rounded mb-2 text-opacity-1'>raghu@ex.com</div>
                            <div className='w-40 text-lg flex justify-center border-1 border-emerald-500 mx-3 mt-3 bg-emerald-700 rounded mb-2 text-opacity-1'>admin@me.com</div>
                            <div className='w-40 text-lg flex justify-center border-1 border-emerald-500 mx-3 mt-3 bg-emerald-700 rounded mb-2 text-opacity-1'>Password- '123'</div>
                        </div>
                    )}
                </div>    

        </div>
      <div id='login' className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl '>
        <form 
        onSubmit={(e)=>{
            submitHandler(e)  
        }}
        className='flex flex-col items-center justify-center'>    
            <input 
            required 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className='border-2 border-emerald-400 py-2 px-5 rounded-full text-2xl outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your Email'
            />
            <input 
            required 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className='border-2 border-emerald-400 py-2 px-5 rounded-full text-2xl outline-none mt-4 bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter your Password' 
            />
            <button className='mt-5 bg-emerald-400 py-2 px-5 rounded-full w-full text-2xl outline-none  placeholder:text-white'>Log In</button>
        </form>
        </div>
    </div>

    </div>
  )
}

export default Login
