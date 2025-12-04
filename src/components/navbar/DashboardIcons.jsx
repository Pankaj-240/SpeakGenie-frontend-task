import React from 'react'
import {Moon,Gem} from 'lucide-react'
const DashboardIcons = () => {
  return (
    <div className='flex gap-2'>
        <div className='h-7 w-7 bg-[#ffffff33] rounded-full flex justify-center items-center mt-1' ><Moon size={18} /></div>
        <img className='h-10 w-[55px] object-fill' src="https://app.speakgenie.com/images/Homescreen/diamond.svg" alt="diamond" />
        <img className='mt-2 h-[21px] w-10' src="https://app.speakgenie.com/images/Homescreen/pro.svg" alt="pro" />
    </div>
  )
}

export default DashboardIcons
