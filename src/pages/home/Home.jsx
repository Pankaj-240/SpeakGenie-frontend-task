import Navbar from './components/navbar/Navbar'
import Icons from './components/main_action_icon.jsx/Icons'
import Footer from './components/footer/Footer'
import MainBox from './components/main_box/MainBox'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col bg-white text-white/90'>
    <nav >
      <Navbar/>
    </nav>
    <main className='flex-1 bg-[#F0FBF4]'>
      <Icons/>
      <MainBox/> 
    </main>
    <footer>
    <Footer/>
    </footer>      
    </div>
  )
}

export default Home