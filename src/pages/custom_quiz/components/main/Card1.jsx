import React from "react";
import { Sparkles } from 'lucide-react';

const Card1 = () => {
  return (
    <div className="h-40 w-full rounded-2xl p-5 bg-white shadow">
      <p className="tracking-wide text-xs text-[#31C969]">LEARN TAB</p>
      <h1 className="text-xl font-bold mt-1 ">Craft a custom quiz</h1>
      <p className="text-xs text-[#4B5563]">
        Pick a topic, choose difficulty, and we will build four fun questions
        instantly.
      </p>

      <div class="flex items-center gap-2 text-xs mt-4">
    
        <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-[#F0FDF4] text-[#15803D] text-[10px] ">
         <Sparkles size={15}/>
         AI Powered
        </span>
        <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-gray-500 text-[10px]">
          4 Questions
        </span>
        <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-gray-500 text-[10px]">
          Instant play
        </span>

      </div>
    </div>
  );
};

export default Card1;
