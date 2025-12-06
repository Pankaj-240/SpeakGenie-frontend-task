import React from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

const Player = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <nav >
    <Navbar/>
      </nav>
      <main className='flex-1 bg-[#D2F3E3] px-4'>
    <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Player
