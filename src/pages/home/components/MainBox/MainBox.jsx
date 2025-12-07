import React from 'react'
import AudioStoriesSection from './AudioStories/AudioStoriesSection'
import StoryCards from './AudioStories/StoryCards'
import PracticeWithHumansSection from './PracticeWithHumans/PracticeWithHumansSection'
import JoinAndStartCall from './PracticeWithHumans/JoinAndStartCall'
import PracticeWithAISection from './PracticeWithAI/PracticeWithAISection'
import PracticeWithAICards from './PracticeWithAI/PracticeWithAICards'

const MainBox = () => {
  return (
    <div className=' h-[800px] lg:h-[900px] px-4'>
      <AudioStoriesSection/>
      <StoryCards/>
      <PracticeWithHumansSection/> 
      <JoinAndStartCall/>
      <PracticeWithAISection/>
      <PracticeWithAICards/>
    </div>
  )
}

export default MainBox
