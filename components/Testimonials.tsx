import React from 'react'
import Carousel from '@/components/Carousel'

function Testimonials() {
  return (
    <div id='testimonials' className='flex flex-col items-center justify-start w-full h-[600px] px-8 py-8 relative'>
        <div className='text-4xl font-semibold py-8'>Testimonials</div>
        <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo unde adipisci explicabo sit?</p>
        <p>Maxime ipsam sequi cupiditate quae odio atque aperiam quos excepturi dolore voluptates, vero commodi!</p>
        <Carousel />
    </div>
  )
}

export default Testimonials