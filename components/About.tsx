import React from 'react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Slider } from './ui/slider'

function About() {
  return (
    <div id='aboutMe' className='flex flex-row w-full px-8 py-32'>
        <div className='w-1/2 flex flex-col items-center justify-center'>
          <div className='h-80 w-80 m-4 rounded-full flex items-center justify-center bg-gradient-to-t from-primary to-background relative'>
            <div className='h-[310px] w-[310px] absolute z-20 rounded-full bg-white'>
            </div>
            <div className='h-80 w-80 rounded-full absolute z-30 bg-transparent overflow-hidden shadow-[inset_0px_6px_5px_rgba(0,_0,_0,_0.47)]'>
              <img src="/image3.png" alt="img" />
            </div>
          </div>
          <img className='w-[390px] h-[233px] absolute z-30 -translate-y-28.5' src="/image4.png" alt="img" />
          <div className='absolute z-50 w-56 h-12 bg-primary opacity-50 -translate-y-35.75'></div>
        </div>
        <div className='w-1/2'>
          <div className='text-4xl font-semibold'>About Me</div>
          <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia dolores labore cumque necessitatibus aspernatur?</p>
          <Label htmlFor='ux' className='text-md font-semibold'>UX</Label>
          <Slider id='ux' disabled defaultValue={[90]} max={100}></Slider>
          <Label htmlFor='websiteDesign' className='text-md font-semibold'>Website Design</Label>
          <Slider id='websiteDesign' disabled defaultValue={[80]} max={100}></Slider>
          <Label htmlFor='appDesign' className='text-md font-semibold'>App Design</Label>
          <Slider id='appDesign' disabled defaultValue={[95]} max={100}></Slider>
          <Label htmlFor='graphicDesign' className='text-md font-semibold'>Graphic Design</Label>
          <Slider id='graphicDesign' disabled defaultValue={[80]} max={100}></Slider>
        </div>
    </div>
  )
}

export default About
