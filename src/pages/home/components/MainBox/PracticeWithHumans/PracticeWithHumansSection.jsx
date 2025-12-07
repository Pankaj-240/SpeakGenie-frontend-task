import React from 'react'
import {Phone,MoveRight} from 'lucide-react'
const PracticeWithHumansSection = () => {
  return (
    <div className='flex justify-between mt-4'>
      <div className='flex items-center gap-2'>
        <Phone color='#9762F1' className='h-8 w-8 p-1 rounded-full bg-[#F1E8FF]'/>
        <h2 className='text-l font-semibold text-[#111827]'>Practice with humans</h2>
      </div>
      <div className='flex items-center'>
        <button className='text-[#16BF75] text-sm font-semibold'>Show all </button>
        <MoveRight size={18} color='#16BF75'/>
      </div>
    </div>
  )
}

export default PracticeWithHumansSection
