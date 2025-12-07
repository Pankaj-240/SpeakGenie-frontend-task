import React from 'react'
import { Volume2,RotateCcw,SkipBack,Play,SkipForward ,Repeat,CircleGauge } from 'lucide-react';

const Controls = () => {
  return (
    <div className='px-4 h-20 flex justify-between items-center lg:px-100'>
        <Volume2 size={18} color='#374151'/>
        <RotateCcw size={18} color='#374151'/>
        <SkipBack fill='[#374151]' size={20}/>
        <div className='h-14 w-14 bg-[#0DA266] rounded-full flex justify-center items-center'>
            <Play fill='White' color='white' size={21}/>
        </div>
        <SkipForward fill='[#374151]' size={20} color='#374151'/>
        <Repeat size={18} color='#374151'/>
        <CircleGauge size={18} color='#374151'/>
    </div>
  )
}

export default Controls
