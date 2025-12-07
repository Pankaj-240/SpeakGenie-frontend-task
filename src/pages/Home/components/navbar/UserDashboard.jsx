import React from 'react'
import DashboardAvatar from './DashboardAvatar'
import DashboardIcons from './DashboardIcons'

const UserDashboard = () => {
  return (
    <div className=' h-[52px] w-[320px] flex justify-between ml-4'>
        <DashboardAvatar/>
        <DashboardIcons/>
    </div>
  )
}

export default UserDashboard
