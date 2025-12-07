import React from 'react'
import PracticeWithAICard from './PracticeWithAICard'

const PracticeWithAICards = () => {

   let data = [{
    img:'https://app.speakgenie.com/images/Homescreen/Practice%20with%20Ai/doremon.svg',
    p1:"Talk with Doraemon",

  },{
    img:"https://app.speakgenie.com/images/Homescreen/Practice%20with%20Ai/spiderman.svg",
    p1:"Talk with Spider Man",
  },
  {
    img:"https://app.speakgenie.com/images/call/shinchan.png",
    p1:"Talk with Shincha",
  },
]   

  return (
    <div className='h-[180px] flex gap-2.5 overflow-x-scroll [&::-webkit-scrollbar]:hidden mt-2'>

      {data.map((obj)=>{
        return <PracticeWithAICard img={obj.img} p1={obj.p1}/>
      })}

    </div>
  )
}

export default PracticeWithAICards
