import React from 'react'
import { ArrowLeft } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='p-5'>
      <button className='h-10 w-22 bg-[#FFFFFF] shadow rounded-2xl flex items-center justify-center gap-2 text-[#15803D] font-semibold' ><ArrowLeft color='#15803D' size={18} /> Back</button>
    </div>
  )
}

export default Navbar
