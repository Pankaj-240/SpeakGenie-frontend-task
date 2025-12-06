import React from 'react'
import { Sparkles,Ellipsis } from 'lucide-react'; 


const XP_Progress_bottm = () => {
  return (
    <div className='flex justify-between'>
      <Sparkles className='h-[27px] w-[27px] border border-green-100/30 p-1 rounded-lg o' />
        <p className='font-semibold text-[12px]' >122 XP</p>
        <Ellipsis size={25} opacity={5} />
    </div>
  )
}

export default XP_Progress_bottm
