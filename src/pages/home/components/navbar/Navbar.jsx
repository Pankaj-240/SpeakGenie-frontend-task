import React from 'react'
import User_dashboard from './User_dashboard'
import XP_progress_section from './XP_progress_section'

const Navbar = () => {
  return (
    <div className='h-50 bg-[#189F5A] rounded-b-4xl shadow-[0_30px_60px_-30px_rgba(39,205,124,.7)] flex flex-col justify-start items-center pt-2 gap-2'>
      <User_dashboard/>
      <XP_progress_section/>
    </div>
  )
}

export default Navbar
