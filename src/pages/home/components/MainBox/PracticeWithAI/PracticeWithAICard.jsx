import React from 'react'

const PracticeWithAICard = ({img,p1}) => {
  return (
      <div className='w-[150px] h-full flex flex-col justify-between'>
        <div className='h-[155px] border w-[155px] rounded-2xl'>
          <img className='rounded-2xl h-[155px] w-[155px]' src={img} alt="photo" />
        </div>
        <div className='flex flex-col items-center'>
        <p className='text-[12px] font-semibold text-[#111872]'>{p1}</p>       
        </div>
      </div>
  )
}

export default PracticeWithAICard
