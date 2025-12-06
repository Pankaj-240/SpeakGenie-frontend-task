import React from 'react'
import JoinAndStartCards from './JoinAndStartCards'
import image1 from '../../../../../assets/image1.jpeg'
import image2 from '../../../../../assets/image2.jpeg'
import image3 from '../../../../../assets/image3.jpeg'

const JoinAndStart_call = () => {

  let data= [{
    image:image1,
    title:"Favorite Animals",
    dis:"Tal about you favorite animals and pets"
  },{
    image:image2,
    title:"Hobbies & Fun",
    dis:"Share what you love to do in your free time"
  },
  ,{
    image:image3,
    title:"School Life",
    dis:"Chat about school,friends, and learning"
  },

]
  return (
    <div className='h-[150px] lg:h-[250px] mt-2 rounded-2xl flex overflow-x-scroll gap-2 [&::-webkit-scrollbar]:hidden'>
        {data.map((obj)=>{
        return <JoinAndStartCards image={obj.image} title={obj.title} dis={obj.dis}/>
        })}
    </div>
  )
}

export default JoinAndStart_call
