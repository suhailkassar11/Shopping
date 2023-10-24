import React, { useContext } from 'react'
import Layout from '../../component/layout/Layout'
import HeroSection from '../../component/heroSection/HeroSection'
import Filter from '../../component/filter/Filter'
import ProductCard from '../../component/productCart/ProductCart'
import Track from '../../component/track/Track'
import Testimonial from '../../component/testimonial/Testimonial'
import { useAuth } from '../../context/data/authContext'

const Home = () => {
  const {auth,setAuth}=useAuth()
  return (
    <Layout>
      <pre>{JSON.stringify(auth,null,4)}</pre>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home
