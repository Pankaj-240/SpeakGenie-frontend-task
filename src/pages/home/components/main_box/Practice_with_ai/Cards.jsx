import React from 'react'
import Card from './Card'

const Cards = () => {

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
        return <Card img={obj.img} p1={obj.p1}/>
      })}

    </div>
  )
}

export default Cards
