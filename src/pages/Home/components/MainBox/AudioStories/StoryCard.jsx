import React from 'react'

const StoryCard = ({img,p1,p2}) => {
  return (
      <div className='w-[125px] flex flex-col justify-between'>
        <div className='h-[178px] border w-[125px] rounded-2xl'>
          <img className='rounded-2xl' src={img} alt="photo" />
        </div>
        <div className='flex flex-col items-center'>
        <p className='text-[12px] font-semibold text-[#111872]'>{p1}</p>
        <p className='text-[12px] font-semibold text-[#111872]'>{p2}</p>         
        </div>
      </div>

  )
}

export default StoryCard

