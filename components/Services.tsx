import React from 'react'

function Services() {
  return (
    <div id='services' className='flex flex-col items-center justify-center w-full px-8 py-4'>
        <div className='text-4xl font-semibold'>Services</div>
        <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo unde adipisci explicabo sit?</p>
        <p>Maxime ipsam sequi cupiditate quae odio atque aperiam quos excepturi dolore voluptates, vero commodi!</p>
        <div className='flex flex-row justify-around items-center py-6'>
            <div className='p-6 m-3 bg-secondary text-secondary-foreground rounded-md flex flex-col'>
                <img className='w-12' src="/image5.png" alt="img" />
                <div className='text-lg font-bold py-4'>UI/UX</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className='p-6 m-3 bg-secondary text-secondary-foreground rounded-md flex flex-col'>
                <img className='w-10' src="/image6.png" alt="img" />
                <div className='text-lg font-bold py-4'>Web Design</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className='p-6 m-3 bg-secondary text-secondary-foreground rounded-md flex flex-col'>
                <img className='w-7' src="/image7.png" alt="img" />
                <div className='text-lg font-bold py-4'>App Design</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className='p-6 m-3 bg-secondary text-secondary-foreground rounded-md flex flex-col'>
                <img className='w-14' src="/image8.png" alt="img" />
                <div className='text-lg font-bold py-4'>Graphic Design</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default Services