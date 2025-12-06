import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

const Quiz = () => {
  return (
    <div className='min-h-screen flex flex-col bg-[#F7FCF9]'>
    <nav >
      <Navbar/>
    </nav>
    <main className='flex-1 px-5'>
    <Main/>
    </main>
    <footer>
      <Footer/>
    </footer>      
    </div>
  )
}

export default Quiz
