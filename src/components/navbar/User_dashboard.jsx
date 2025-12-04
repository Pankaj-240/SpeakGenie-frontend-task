import React from 'react'
import DashboardAvtar from './dashboardAvtar'
import DashboardIcons from './DashboardIcons'

const User_dashboard = () => {
  return (
    <div className=' h-[52px] w-[320px] flex justify-between ml-4'>
        <DashboardAvtar/>
        <DashboardIcons/>
    </div>
  )
}

export default User_dashboard
