import React from 'react'
import UserDashboard from './UserDashboard'
import XPProgressSection from './XPProgressSection'

const DashboardNavbar = () => {
  return (
    <div className='h-50 bg-[#189F5A] rounded-b-4xl shadow-[0_30px_60px_-30px_rgba(39,205,124,.7)] flex flex-col justify-start items-center pt-2 gap-2'>
      <UserDashboard/>
      <XPProgressSection/>
    </div>
  )
}

export default DashboardNavbar
