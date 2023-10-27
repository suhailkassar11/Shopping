import React from 'react'
import shoe from '../../assets/images/shoe.png'
import bgtexture1 from '../../assets/images/texture1.jpg'
function HeroSection() {
  return (
    <main className=' flex flex-row justify-center items-center h-[400px]'style={{backgroundImage:`url(${bgtexture1})`,backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className=' pl-9 flex flex-row  items-center h-80 w-[60%] justify-between' >
          <div className='flex flex-col gap-3'>
            <h1 className='text-5xl font-serif'>Are you ready to </h1>
            <h1 className='font-bold text-6xl font-serif'>lead the way</h1>
            <p className='text-lg font-serif lg-hidden'>Welcome to the ultimate destination for fashionable footwear. Our collection combines style and comfort, offering the perfect shoes for every occasion. Step into a world of trendsetting designs and unbeatable comfort – where your journey to elevated fashion begins.</p>
          </div>
          <img className='h-[300px]' src={shoe} alt="" />
      </div>
        
    </main>
  )
}

export default HeroSection