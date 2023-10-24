import React, { useContext, useEffect, useState } from 'react'
import {FaUserTie } from 'react-icons/fa';
import myContext from '../../../context/data/myContext';
import Layout from '../../../component/layout/Layout';
import DashboardTab from './DashboardTab';
import axios from 'axios';

function Dashboard() {
    const context = useContext(myContext)
    const { mode} = context
    const [totalPro,setTotalPro]=useState()
    const [totalUser,setTotalUser]=useState()
    const GetProduct=async()=>{
        try {
            const {data}=await axios.get(`http://localhost:5001/api/product/getProducts`)
            const total=data.total
            setTotalPro(total);
            
        } catch (error) {
            console.log(error)
        }

    }
    const GetUser=async()=>{
        try {
            const {data}=await axios.get(`http://localhost:5001/api/auth/getUser`)
            const totalUsers=data.totalUsers
            setTotalUser(totalUsers)      
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
        GetProduct()
        GetUser()
    },[])
    
  return (
    <Layout>
        <section className="text-gray-600 body-font mt-10 mb-10 ">
            <div className="container px-5 mx-auto mb-10">
                <div className="flex flex-wrap -m-4 text-center justify-center content-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{totalPro}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Products</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>10</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Orders</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{totalUser}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Users</p>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardTab/>
        </section>
    </Layout>
  )
}

export default Dashboard
