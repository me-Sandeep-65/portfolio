import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

function Contact() {
  return (
    <div id='contacts' className='flex flex-col items-center justify-center w-full px-8 py-8'>
        <div className='text-4xl font-semibold py-8'>Lets Design Together</div>
        <p className='py-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo unde adipisci explicabo sit?</p>
        <p className='leading-none'>quae odio atque aperiam quos excepturi dolore voluptates, vero commodi!</p>
        <div className='py-16 flex'>
            <Input className='w-[400px] h-[52px] m-2 p-3 text-secondary-foreground bg-secondary text-md rounded-lg border' type="email" placeholder='Enter Your Email'></Input>
            <Button className='w-36 h-[52px] m-2 text-md font-semibold rounded-lg'>Contact Me</Button>
        </div>
    </div>
  )
}

export default Contact