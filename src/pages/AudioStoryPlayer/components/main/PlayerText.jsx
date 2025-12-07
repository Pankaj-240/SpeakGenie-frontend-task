import React from 'react'
import { Heart,ClipboardCheck } from 'lucide-react'; 

const PlayerText = () => {
  return (
    <div className='h-40 w-80 lg:w-120 py-4 flex flex-col  gap-4 p-2'>
        <div className='flex justify-between'>
            <div >
                <h1 className='text-xl font-bold text-[#111827]'>The Melody of friendship</h1>
                <p class="text-sm text-gray-600 ">A heartwarming story about friendship and courage</p>
            </div>
            <div className='w-10 py-3 '><Heart size={18}/></div>
        </div>
        <div className='h-10 bg-[#099C68] rounded-xl flex justify-center items-center gap-1'>
         <ClipboardCheck color='white' size={18}/>
         <div className='text-sm font-semibold text-white'>Test Your Understanding</div>
         <span className='text-xs font-bold text-white px-2  rounded-2xl bg-[#57C194]'>7 Questions</span> 
        </div>      
    </div>
  )
}

export default PlayerText
