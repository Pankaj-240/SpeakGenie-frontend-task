import React from 'react'
import XPProgressBar from './XPProgressBar'
import XPProgressBottom from "./XPProgressBottom";

const XPProgressSection = () => {
  return (
    <div className='h-[122px] w-[320px] bg-[#32B574] ml-4 rounded-4xl p-4 flex flex-col justify-between'>
        <XPProgressBar/>
        <XPProgressBottom/>
    </div>
  )
}

export default XPProgressSection
