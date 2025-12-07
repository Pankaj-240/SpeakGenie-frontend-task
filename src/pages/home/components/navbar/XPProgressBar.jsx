import React from 'react'

const XPProgressBar = () => {
  return (
    <div className='flex w-full  justify-between '>
      <div className='border-2 border-green-100/50 
 w-10 h-10 rounded-full flex justify-center items-center font-semibold '>L3</div>
    <div className='w-60 flex flex-col justify-between '>
        <p className='text-[12px] font-bold'>XP PROGRESS</p>
        <div className='w-full h-1.5 bg-[#6ECF9F] rounded-4xl'>
            <div className='w-1/2 h-full bg-[#E2F5EC] rounded-4xl'></div>
        </div>
        <div className='flex justify-between'>
            <p className='text-[10px]'>42/100 XP</p>
            <p className='text-[10px]'>Next: L4</p>
        </div>
    </div>

    </div>
  )
}

export default XPProgressBar
