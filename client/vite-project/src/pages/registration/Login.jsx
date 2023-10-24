import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/data/authContext'

function Login() {
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const navigate=useNavigate()
    const {auth,setAuth}=useAuth()

    const HandleSubmit=async(e)=>{
        try {
            e.preventDefault()
            const res = await axios.post(`http://localhost:5001/api/auth/login`,{Email,Password})
            if(res && res.data.success){
                alert(res.data.message)
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token,
                })
                localStorage.setItem('auth',JSON.stringify(res.data))
                navigate("/")
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <form onSubmit={HandleSubmit}>
                    <div>
                        <input type="email"
                            name='email'
                            value={Email}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Email'
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={Password}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Password'
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        type='submit'
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Login
                        </button>
                    </div>
                    </form>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login