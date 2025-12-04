import React from 'react'
import Navbar from './components/navbar/Navbar'
import Icons from './components/main_action_icon.jsx/icons'
import Horizontal_story_section from './components/horizontal_story_carousels/Horizontal_story_section'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
    <nav >
      <Navbar/>
    </nav>
    <main className='flex-1 bg-[#F0FBF4]'>
      <Icons/>
      <Horizontal_story_section/>
    </main>
    <footer>
    <Footer/>
    </footer>      
    </div>

  )
}

export default App
