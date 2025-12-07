import React from 'react'

const QuizTemplateCardThree = () => {
  return (
    <div className="h-88 w-full  rounded-2xl p-5 bg-white shadow mt-4">
      <p className="tracking-wide text-xs text-[#31C969]">STEP 1</p>
      <h2 className='font-semibold text-lg mt-1'>Pick a challenge level</h2>

      <div className='h-60 lg:w-[50%] grid grid-rows-[30%_40%_30%] gap-2 mt-2 '>
        <div className='shadow rounded-2xl p-2 bg-[#F2FDF6] '>
           <p className='text-sm font-semibold text-[#58BE7D]'>Easy</p>
            <p className='text-sm mt-1'>Short sentences & gentle vocabulary.</p>
        </div>
        <div className='border border-green-400/30 bg-[#FFFCF0] rounded-2xl p-2 flex flex-col justify-between'>
            <div>
            <p className='text-sm font-semibold text-[#EBB673]'>Medium</p>
           <p className='text-sm mt-1'>Everyday situations with details.</p>                
            </div>
           <button className='text-xs font-semibold w-fit px-2 text-green-600 p-1 bg-green-50 rounded-2xl'>Selected</button>            
        </div>
        <div className='shadow rounded-2xl p-2 bg-[#FBF6FF]'>
            <p className='text-sm font-semibold text-[#B878F1]'>Hard</p>
            <p className='text-sm mt-1'>Longer thinking and tricky choices.</p>
        </div>
      </div>
    </div>
  )
}

export default QuizTemplateCardThree
