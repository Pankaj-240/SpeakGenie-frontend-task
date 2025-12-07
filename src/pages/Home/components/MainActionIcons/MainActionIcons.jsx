import React from 'react'
import { Video } from 'lucide-react';
const MainActionIcons = () => {
  return (
    <div className='w-full flex my-4 justify-around'>
      <div className='h-[105px] w-[85px]  flex flex-col items-center justify-between '>
        <div className='h-16 w-16 bg-[#E6F3FF] ring-5 ring-white rounded-full flex justify-center items-center'> <Video color='#2663EB'/></div>
        <div className='flex flex-col items-center'>
        <p className='font-semibold text-xs text-[#4D5764]'>Video </p>
        <p className='font-semibold text-xs text-[#4D5764]' >Learning</p>  
        </div>
        
      </div>
      <div className='h-[90px] w-[85px]  flex flex-col items-center justify-between '>
        <div className='h-16 w-16 bg-[#E6F9FF] ring-5 ring-white rounded-full flex justify-center items-center'>
          <img className='h-8 w-8 flex ' src="https://app.speakgenie.com/images/Homescreen/tabs/peercall.webp" alt="phone_icon" />
        </div>
        <p className='font-semibold text-xs text-[#4D5764]'>Peer Calls</p>
      </div>
      <div className='h-[90px] w-[85px]  flex flex-col items-center justify-between '>
        <div className='h-16 w-16 bg-[#FFF5E6] ring-5 ring-white rounded-full flex justify-center items-center'>
          <img className='h-8 w-8 flex ' src="https://app.speakgenie.com/images/Homescreen/tabs/stories.webp" alt="phone_icon" />
        </div>
        <p className='font-semibold text-xs text-[#4D5764]'>Stories</p>
      </div>
      <div className='h-[90px] w-[85px]  flex flex-col items-center justify-between '>
        <div className='h-16 w-16 bg-[#FFE6F0] ring-5 ring-white rounded-full flex justify-center items-center'>
          <img className='h-8 w-8 flex ' src="https://app.speakgenie.com/images/Homescreen/tabs/AIcalls.webp" alt="phone_icon" />
        </div>
        <p className='font-semibold text-xs text-[#4D5764]'>AI calls</p>
      </div>
    </div>
  )
}

export default MainActionIcons
