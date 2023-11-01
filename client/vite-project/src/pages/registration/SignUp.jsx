import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

function Signup() {
    const [Name,setName]=useState("")
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const [image,setImage]=useState(null)
    const navigate=useNavigate()
    const HandleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const res= await axios.post(`${import.meta.env.VITE_APP_API}/api/auth/register`,{Name,Email,Password,image})
            if(res && res.data.success){
                alert("register successfull")
                navigate('/logIn')
            }
            console.log(res.data)
        } catch (error) {
            console.log(error)

        }
    }
   
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <form onSubmit={HandleSubmit}>
                    <div>
                        <input type="text"
                            name='Name'
                            value={Name}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Full Name'
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="email"
                            name='email'
                            value={Email}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Email'
                            onChange={(e)=>setEmail(e.target.value)}
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
                    <div>
                        <input
                            type="file"
                            value={image}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='photo'
                            onChange={(e)=>setImage(e.target.value)}
                        />
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        type='submit'
                            className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                            Signup
                        </button>
                    </div>
                </form>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup