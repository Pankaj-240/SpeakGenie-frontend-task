import React from 'react'

const Bar = () => {
  return (
    <div className='px-4 pt-4 flex flex-col gap-1 lg:items-center '>
      <div className='h-2 w-full bg-[#D1D5DB] lg:w-[80%] rounded-2xl'></div>
      <div className='flex justify-between lg:w-[80%]'>
        <p className='text-sm font-semibold text-gray-600'>00:0</p>
        <p className='text-sm font-semibold text-gray-600'>2:18</p>
      </div>
    </div>
  )
}

export default Bar
