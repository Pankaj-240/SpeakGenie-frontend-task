import {Link} from 'react-router-dom'
import React from 'react'

const Main = () => {
  return (
    <div>
      <div className='bg-[#F0FBF4] min-h-screen flex flex-col items-center py-10 gap-5' >

        <div className='h-20 w-40 shadow bg-[#16BF75] flex justify-center items-center rounded-4xl'>
          <Link className='text-white/90' to='/home'>Home Screen</Link>
          </div>
        <div className='h-20 w-40 shadow bg-[#16BF75] flex justify-center items-center rounded-4xl'>
          <Link className='text-white/90' to='/player'>Now Playing</Link>
          </div>
        <div className='h-20 w-40 shadow bg-[#16BF75] flex justify-center items-center rounded-4xl'>
          <Link className='text-white/90' to='/quiz'>Custom Quiz</Link>
          </div>
      </div>
    </div>
  )
}

export default Main
