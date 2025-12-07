import HomePage from './pages/Home/HomePage'
import CustomQuizPage from './pages/CustomQuiz/CustomQuizPage'
import {Routes,Route} from 'react-router-dom'
import AudioStoryPlayerPage from './pages/AudioStoryPlayer/AudioStoryPlayerPage'
import Main from './components/Main'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/quiz' element={<CustomQuizPage/>}/>
        <Route path='/player' element={<AudioStoryPlayerPage/>}/>
      </Routes>
    </div>
  )
}

export default App
