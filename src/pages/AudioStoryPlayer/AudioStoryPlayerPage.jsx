import React from 'react'
import PlayerNavbar from './components/navbar/PlayerNavbar'
import PlayerMainSection from './components/main/PlayerMainSection'
import Footer from './components/footer/Footer'

const AudioStoryPlayerPage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <nav >
    <PlayerNavbar/>
      </nav>
      <main className='flex-1 bg-[#D2F3E3] px-4'>
    <PlayerMainSection/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default AudioStoryPlayerPage
