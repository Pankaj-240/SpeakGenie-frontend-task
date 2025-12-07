import DashboardNavbar from './components/navbar/DashboardNavbar'
import MainActionIcons from './components/MainActionIcons/MainActionIcons'
import Footer from './components/footer/Footer'
import MainBox from './components/MainBox/MainBox'

const HomePage = () => {
  return (
    <div className='min-h-screen flex flex-col bg-white text-white/90'>
    <nav >
      <DashboardNavbar/>
    </nav>
    <main className='flex-1 bg-[#F0FBF4]'>
      <MainActionIcons/>
      <MainBox/> 
    </main>
    <footer>
    <Footer/>
    </footer>      
    </div>
  )
}

export default HomePage