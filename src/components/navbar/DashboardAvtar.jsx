import React from 'react'

const DashboardAvtar = () => {
  return (
    <div className='flex w-[140px] justify-between items-center'>
         <img className='h-[46px] w-[46px] rounded-full' src="https://app.speakgenie.com/images/Profile/boy_default.png" alt="Avtar" />
      
      <div className='mt-2'>
        <p className='text-xs opacity-80'>Good Night</p>
        <p className='text-2xl font-semibold'>Lorenzo</p>
      </div>     
    </div>
  )
}

export default DashboardAvtar
