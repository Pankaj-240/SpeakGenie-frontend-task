import React from 'react'
import XP_Progress_bar from './XP_Progress_bar'
import XP_Progress_bottm from "./XP_Progress_bottm";

const XP_progress_section = () => {
  return (
    <div className='h-[122px] w-[320px] bg-[#32B574] ml-4 rounded-4xl p-4 flex flex-col justify-between'>
        <XP_Progress_bar/>
        <XP_Progress_bottm/>
    </div>
  )
}

export default XP_progress_section
