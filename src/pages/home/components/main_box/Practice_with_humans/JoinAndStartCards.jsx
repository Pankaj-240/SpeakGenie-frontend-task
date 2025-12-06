import React from 'react'


const JoinAndStartCards = ({image,title,dis}) => {
  return (
      <div className='relative h-full  w-[80%] lg:w-[60%] rounded-2xl shrink-0 '>
        <img className='object-cover h-full w-full rounded-2xl brightness-70' src={image} alt="image" /> 

      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <div className='text-end '>
          <button className='text-xs bg-black/40 w-15 rounded-2xl backdrop-blur-l font-semibold py-1'>Be first!</button>
        </div>
        <div className='mt-2 flex flex-col gap-1' >
          <h3 className='text-sm font-semibold'>{title}</h3>
          <p className='text-xs'>{dis}</p>
        </div>
        <div className=' flex justify-center'>
          <button className='bg-white  w-full lg:w-80 rounded-2xl font-semibold text-sm py-1.5 text-[#16BF75]'>Joint & Start Call</button>
        </div>
      </div>
      </div>
  )
}

export default JoinAndStartCards
