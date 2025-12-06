import React from 'react'
import {Sparkles,MoveRight} from 'lucide-react'

const Practice_with_ai = () => {
  return (
    <div className='flex justify-between mt-4'>
      <div className='flex items-center gap-2'>
        <div className='h-8 w-8 border border-green-100/30 flex justify-center items-center rounded-full bg-[#FFE4E6]'>🤖</div>
        <h2 className='text-l font-semibold text-[#111827]'>Practice with AI </h2>
      </div>
      <div className='flex items-center'>
        <button className='text-[#16BF75] text-sm font-semibold'>Show all </button>
        <MoveRight size={18} color='#16BF75'/>
      </div>
    </div>
  )
}

export default Practice_with_ai
