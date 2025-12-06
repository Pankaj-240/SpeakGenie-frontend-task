import Home from './pages/home/Home'
import Quiz from './pages/custom_quiz/Quiz'
import {Routes,Route} from 'react-router-dom'
import Player from './pages/audio_story_player/Player'
import Main from './components/Main'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/player' element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
