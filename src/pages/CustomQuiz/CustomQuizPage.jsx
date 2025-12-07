import React from 'react'
import QuizNavbar from './components/navbar/QuizNavbar'
import Footer from './components/footer/Footer'
import QuizMainSection from './components/main/QuizMainSection'

const CustomQuizPage = () => {
  return (
    <div className='min-h-screen flex flex-col bg-[#F7FCF9]'>
    <nav >
      <QuizNavbar/>
    </nav>
    <main className='flex-1 px-5'>
    <QuizMainSection/>
    </main>
    <footer>
      <Footer/>
    </footer>      
    </div>
  )
}

export default CustomQuizPage
