"use client"

import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'

function Projects() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (buttonRef.current) {
          buttonRef.current.click();
        }
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
        const clickedButton = (event.currentTarget).getAttribute('data-label');
    
        const parentElement = (event.currentTarget).parentElement;
        if (parentElement) {
          const siblingButtons = Array.from(parentElement.querySelectorAll('button'));
    
          siblingButtons.forEach((button) => {
            button.classList.remove('activeButton');

            if(button.getAttribute('data-label') === clickedButton){
                button.classList.add('activeButton');
            }
          });
        }

        var nextParent = parentElement?.nextElementSibling;

        if(clickedButton === 'all'){
            while (nextParent) {
                nextParent.classList.remove('hidden');

                nextParent = nextParent.nextElementSibling;
            }
        }
        else{
            while(nextParent){
                nextParent.classList.add('hidden');

                if(nextParent.id === clickedButton){
                    nextParent.classList.remove('hidden');
                }

                nextParent = nextParent.nextElementSibling;
            }
        }
    }

  return (
    <div id='projects' className='flex flex-col items-center justify-center w-full px-8 py-8'>
        <div className='text-4xl font-semibold py-8'>My Projects</div>
        <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo unde adipisci explicabo sit?</p>
        <p>Maxime ipsam sequi cupiditate quae odio atque aperiam quos excepturi dolore voluptates, vero commodi!</p>
        <div className='flex flex-row items-center justify-center py-16'>
            <Button variant={'secondary'} onClick={handleClick} data-label='all' className='border m-2 p-4 activeButton'>All</Button>
            <Button variant={'secondary'} onClick={handleClick} data-label='uiPro' className='border m-2 p-4'>UI/UX</Button>
            <Button variant={'secondary'} onClick={handleClick} data-label='webPro' className='border m-2 p-4' ref={buttonRef}>Web Design</Button>
            <Button variant={'secondary'} onClick={handleClick} data-label='appPro' className='border m-2 p-4'>App Design</Button>
            <Button variant={'secondary'} onClick={handleClick} data-label='graphicPro' className='border m-2 p-4'>Graphic Design</Button>
        </div>
        <div id='uiPro' className='flex flex-wrap my-8'>
            <div className='w-80'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image11.png' alt='project1' className='translate-x-10'/>
                    <img src='/image12.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6'/>
                </div>
                <div className='text-primary text-sm py-4'>UI/UX Design</div>
                <div className='text-md font-bold leading-none'>AirCalling Landing Page Design</div>
            </div>
            <div className='w-80 mx-4'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image13.png' alt='project1' className='translate-x-10'/>
                    <img src='/image14.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6 shadow-black shadow-lg'/>
                </div>
                <div className='text-primary text-sm py-4'>UI/UX Design</div>
                <div className='text-md font-bold leading-none'>Business Landing Page Design</div>
            </div>
            <div className='w-80'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image15.png' alt='project1' className='translate-x-10'/>
                    <img src='/image16.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6 shadow-black shadow-lg'/>
                </div>
                <div className='text-primary text-sm py-4'>UI/UX Design</div>
                <div className='text-md font-bold leading-none'>Ecom Web Page Design</div>
            </div>
        </div>
        <div id='webPro' className='flex flex-wrap my-8'>
            <div className='w-80'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image11.png' alt='project1' className='translate-x-10'/>
                    <img src='/image12.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6'/>
                </div>
                <div className='text-primary text-sm py-4'>Web Design</div>
                <div className='text-md font-bold leading-none'>AirCalling Landing Page Design</div>
            </div>
            <div className='w-80 mx-4'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image13.png' alt='project1' className='translate-x-10'/>
                    <img src='/image14.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6 shadow-black shadow-lg'/>
                </div>
                <div className='text-primary text-sm py-4'>Web Design</div>
                <div className='text-md font-bold leading-none'>Business Landing Page Design</div>
            </div>
            <div className='w-80'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image15.png' alt='project1' className='translate-x-10'/>
                    <img src='/image16.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6 shadow-black shadow-lg'/>
                </div>
                <div className='text-primary text-sm py-4'>Web Design</div>
                <div className='text-md font-bold leading-none'>Ecom Web Page Design</div>
            </div>
        </div>
        <div id='appPro' className='flex flex-wrap my-8'>
            <div className='w-80'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image11.png' alt='project1' className='translate-x-10'/>
                    <img src='/image12.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6'/>
                </div>
                <div className='text-primary text-sm py-4'>App Design</div>
                <div className='text-md font-bold leading-none'>AirCalling Landing Page Design</div>
            </div>
            <div className='w-80 mx-4'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image13.png' alt='project1' className='translate-x-10'/>
                    <img src='/image14.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6 shadow-black shadow-lg'/>
                </div>
                <div className='text-primary text-sm py-4'>App Design</div>
                <div className='text-md font-bold leading-none'>Business Landing Page Design</div>
            </div>
            <div className='w-80'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image15.png' alt='project1' className='translate-x-10'/>
                    <img src='/image16.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6 shadow-black shadow-lg'/>
                </div>
                <div className='text-primary text-sm py-4'>App Design</div>
                <div className='text-md font-bold leading-none'>Ecom Web Page Design</div>
            </div>
        </div>
        <div id='graphicPro' className='flex flex-wrap my-8'>
            <div className='w-80'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image11.png' alt='project1' className='translate-x-10'/>
                    <img src='/image12.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6'/>
                </div>
                <div className='text-primary text-sm py-4'>Graphic Design</div>
                <div className='text-md font-bold leading-none'>AirCalling Landing Page Design</div>
            </div>
            <div className='w-80 mx-4'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image13.png' alt='project1' className='translate-x-10'/>
                    <img src='/image14.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6 shadow-black shadow-lg'/>
                </div>
                <div className='text-primary text-sm py-4'>Graphic Design</div>
                <div className='text-md font-bold leading-none'>Business Landing Page Design</div>
            </div>
            <div className='w-80'>
                <div className='rounded-md bg-project px-[56px] relative'>
                    <img src='/image15.png' alt='project1' className='translate-x-10'/>
                    <img src='/image16.png' alt='project1' className='absolute h-5/6 bottom-0 -translate-x-6 shadow-black shadow-lg'/>
                </div>
                <div className='text-primary text-sm py-4'>Graphic Design</div>
                <div className='text-md font-bold leading-none'>Ecom Web Page Design</div>
            </div>
        </div>
    </div>
  )
}

export default Projects