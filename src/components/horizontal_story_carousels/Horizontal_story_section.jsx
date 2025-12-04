import React from 'react'
import Audio_stories from './Audio_stories'
import Stories_cards from './Stories_cards'
import Practice_with_humans from './Practice_with_humans'

const Horizontal_story_section = () => {
  return (
    <div className=' h-[888px] px-4'>
      <Audio_stories/>
      <Stories_cards/>
      <Practice_with_humans/> 
    </div>
  )
}

export default Horizontal_story_section
