import React from 'react'

const Stories_cards = () => {
  return (
    <div className='h-[222px] flex gap-2.5 overflow-x-scroll [&::-webkit-scrollbar]:hidden mt-2'>

      <div className='w-[125px] flex flex-col justify-between'>
        <div className='h-[178px] border w-[125px] rounded-2xl'>
          <img className='rounded-2xl' src="https://app.speakgenie.com/audiostory/age14-16/coverimages/Choosing%20the%20Right%20Path.png" alt="photo" />
        </div>
        <div className='flex flex-col items-center'>
        <p className='text-[12px] font-semibold text-[#111872]'>Choosing the right</p>
        <p className='text-[12px] font-semibold text-[#111872]'>path</p>         
        </div>
      </div>

      <div className='w-[125px]  flex flex-col justify-between'>
        <div className='h-[178px] border w-[125px] rounded-2xl'>
          <img className='rounded-2xl' src="https://app.speakgenie.com/audiostory/age14-16/coverimages/The%20Fountain%20and%20the%20Mayor.png" alt="photo" />
        </div>
        <div className='flex flex-col items-center'>
        <p className='text-[12px] font-semibold text-[#111872]'>The Fountain and the</p>
        <p className='text-[12px] font-semibold text-[#111872]'>Mayor</p>         
        </div>
      </div>


      <div className='w-[125px]  flex flex-col justify-between'>
        <div className='h-[178px] border w-[125px] rounded-2xl'>
          <img className='rounded-2xl' src="https://app.speakgenie.com/audiostory/age14-16/coverimages/The%20Lesson%20of%20the%20Sapling%20%E2%80%93%20A%20Story%20on%20Bad%20Habits.png" alt="photo" />
        </div>
        <div className='flex flex-col items-center'>
        <p className='text-[12px] font-semibold text-[#111872]'>The Lesson of the</p>
        <p className='text-[12px] font-semibold text-[#111872]'>Spaling</p>         
        </div>
      </div>
    </div>
  )
}

export default Stories_cards

