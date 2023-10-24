import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../component/layout/Layout'
import axios from 'axios'
import myContext from '../../context/data/myContext'

const Allproducts = () => {
  const [product,setProduct]=useState([])
  const GetProduct=async()=>{
      try {
          const {data}=await axios.get(`http://localhost:5001/api/product/getProducts`)
          const products=data.products
          
          setProduct(products)
      } catch (error) {
          console.log(error)
      }

  }
  useEffect(()=>{
      GetProduct()
  },[])
  const context = useContext(myContext)
    const { mode } = context
  return (
    <Layout>
      <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our All Products</h1>
                    <div className="h-1 w-20 bg-pink-600 rounded"></div>
                </div>
                <div className="flex flex-wrap -m-4">
                   {product.map((prod,index)=>(<div key={index} className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} key={index} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={prod.imageURL} alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>{prod.brand}</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{prod.name}</h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{prod.price}</p>
                                <div className=" flex justify-center">
                                    <button  type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>)) }                
                </div>
            </div>
        </section >
    </Layout>
  )
}

export default Allproducts
