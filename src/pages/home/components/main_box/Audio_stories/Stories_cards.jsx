import React from 'react'
import Storie_card from './Storie_card'
const Stories_cards = () => {
  let data = [{
    img:'https://app.speakgenie.com/audiostory/age14-16/coverimages/Choosing%20the%20Right%20Path.png',
    p1:"Choosing the right",
    p2:"path"
  },{
    img:"https://app.speakgenie.com/audiostory/age14-16/coverimages/The%20Fountain%20and%20the%20Mayor.png",
    p1:"The Fountain and the",
    p2:"Mayor"
  },
  {
    img:"https://app.speakgenie.com/audiostory/age14-16/coverimages/The%20Lesson%20of%20the%20Sapling%20%E2%80%93%20A%20Story%20on%20Bad%20Habits.png",
    p1:"The Lesson of the",
    p2:"Spaling"
  },
]
  return (
    <div className='h-[222px] flex gap-2.5 lg:gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden mt-2'>

      {data.map((obj)=>{
        return <Storie_card img={obj.img} p1={obj.p1} p2={obj.p2}/>
      })}

    </div>
  )
}

export default Stories_cards

