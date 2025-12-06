import React from 'react'
import Audio_stories from './Audio_stories/Audio_stories'
import Stories_cards from './Audio_stories/Stories_cards'
import Practice_with_humans from './Practice_with_humans/Practice_with_humans'
import JoinAndStart_call from './Practice_with_humans/JoinAndStart_call'
import Practice_with_ai from './Practice_with_ai/Practice_with_ai'
import Cards from './Practice_with_ai/cards'

const MainBox = () => {
  return (
    <div className=' h-[800px] lg:h-[900px] px-4'>
      <Audio_stories/>
      <Stories_cards/>
      <Practice_with_humans/> 
      <JoinAndStart_call/>
      <Practice_with_ai/>
      <Cards/>
    </div>
  )
}

export default MainBox
