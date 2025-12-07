import React from 'react'
import PlayerImage from './PlayerImage'
import PlayerText from './PlayerText'
const PlayerMainSection = () => {
  return (
    <div className='flex flex-col items-center'>
      <PlayerImage/>
      <PlayerText/>
    </div>
  )
}

export default PlayerMainSection
