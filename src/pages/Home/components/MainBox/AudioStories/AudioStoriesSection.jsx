import React from 'react'
import {Sparkles,MoveRight} from 'lucide-react'
const AudioStoriesSection = () => {
  return (
    <div className='flex justify-between mt-4'>
      <div className='flex items-center gap-2'>
        <Sparkles color='#16BF75' className='h-8 w-8 border border-green-100/30 p-1 rounded-full bg-[#E6F9F0]' />
        <h2 className='text-l font-semibold text-[#111827]'>Audio Stories</h2>
      </div>
      <div className='flex items-center'>
        <button className='text-[#16BF75] text-sm font-semibold'>Show all </button>
        <MoveRight size={18} color='#16BF75'/>
      </div>
    </div>
  )
}

export default AudioStoriesSection
