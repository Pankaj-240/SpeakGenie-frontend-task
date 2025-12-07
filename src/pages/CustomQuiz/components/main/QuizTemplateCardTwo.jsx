import React from 'react'

const QuizTemplateCardTwo = () => {
  return (
    <div className="h-60 w-full rounded-2xl p-5 bg-white shadow mt-4">
      <p className="tracking-wide text-xs text-[#31C969]">STEP 1</p>
      <h2 className='font-semibold text-lg mt-1'>Choose a topic</h2>
      <input type="text" placeholder="e.g. “My school day” or “Planets in space”" className='w-full lg:w-[50%] h-10 bg-[#F9FAFB] border border-gray-200 rounded-xl pl-3 text-sm' />

    <div class="flex flex-wrap items-center gap-2 text-xs mt-4 pr-4">
    
        <span class="flex items-center gap-1 px-3 py-2 rounded-full  bg-slate-100 text-gray-950 text-[10px] ">
         My Best Friend
        </span>
        <span class="flex items-center gap-1 px-3 py-2 rounded-full bg-slate-100 text-gray-950 text-[10px]">
          Cricket Basics
        </span>
        <span class="flex items-center gap-1 px-3 py-2 rounded-full bg-slate-100 text-gray-950 text-[10px]">
          Solar System
        </span>

        <span class="flex items-center gap-1 px-3 py-2 rounded-full  bg-slate-100 text-gray-950 text-[10px] ">
        Healthy Habits
        </span>
        <span class="flex items-center gap-1 px-3 py-2 rounded-full bg-slate-100 text-gray-950 text-[10px]">
          Animals & Birds
        </span>
        <span class="flex items-center gap-1 px-3 py-2 rounded-full bg-slate-100 text-gray-950 text-[10px]">
          School Picnic
        </span>

    </div>


    </div>
  )
}

export default QuizTemplateCardTwo
