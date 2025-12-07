import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full px-4 py-2 h-[74px] grid grid-cols-4 bg-white'>
     <div className=" flex flex-col items-center justify-between">
        <img src="https://app.speakgenie.com/images/Bottomnavbar/Home%20green.svg" alt="" />
        <p className='font-semibold text-xs text-[#9CA3AF]'>Home</p>
     </div>
     <div className=" flex flex-col items-center justify-between ">
        <img src="https://app.speakgenie.com/images/Bottomnavbar/Learn.svg" alt="" />
        <p className='font-semibold text-xs text-[#9CA3AF]'>Learn</p>
     </div>
     <div className=" flex flex-col items-center justify-between">
        <img className='py-1' src="https://app.speakgenie.com/images/Bottomnavbar/call.svg" alt="" />
        <p className='font-semibold text-xs text-[#9CA3AF]'>Call</p>
     </div>
     <div className=" flex flex-col items-center justify-between">
        <img  src="https://app.speakgenie.com/images/Bottomnavbar/profile%20new.png" alt="" />
        <p className='font-semibold text-xs text-[#9CA3AF]'>Profile</p>
     </div>
    </div>
  )
}

export default Footer
