import React from 'react'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
    <nav >
      <Navbar/>
    </nav>
    <main className='flex-1 bg-[#F5FEFA]'>
      main
    </main>
    <footer className='bg-indigo-800'>
    footer
    </footer>      
    </div>

  )
}

export default App
