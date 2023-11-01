import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const navigate=useNavigate()
    const[name,setName]=useState("")
    const[brand,setBrand]=useState("")
    const[gender,setGender]=useState("")
    const[category,setCategory]=useState("")
    const[price,setPrice]=useState()
    const[is_in_inventory,setIs_In_Inventory]=useState(false)
    const[items_left,setItems_Left]=useState("")
    const[imageURL,setImageURL]=useState("")

    const CreateProduct=async(e)=>{
        e.preventDefault();
        try {
            const res= await axios.post(`${import.meta.env.VITE_APP_API}/api/product/createProducts`,{name,brand,gender,category,price,is_in_inventory,items_left,imageURL})
            if(res && res.data.success){
                alert("product create successfull")
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error)
        } 
    }

    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <form onSubmit={CreateProduct} className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            name='name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='brand'
                            value={brand}
                            onChange={(e)=>setBrand(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product brand'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='gender'
                            value={gender}
                            onChange={(e)=>setGender(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='type of product or gender'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Price'
                        />
                    </div>
                    <div>
                        <input type="checkbox"
                            name='inventory'
                            value={is_in_inventory}
                            onChange={(e)=>setIs_In_Inventory(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='is_in_inventory'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='itemsLeft'
                            value={items_left}
                            onChange={(e)=>setItems_Left(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='items Left'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageUrl'
                            value={imageURL}
                            onChange={(e)=>setImageURL(e.target.value)}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='imageUrl'
                        />
                    </div>
                    
                    <div className=' flex justify-center mb-3'>
                        <button type='submit'
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                 
                </form>
            </div>
        </div>
    )
}

export default AddProduct