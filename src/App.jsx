/* eslint-disable react/prop-types */
import { Routes ,Route} from 'react-router-dom'
import './css/App.css'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { Navbar } from './components/Navbar'
import { MovieProvider } from './contexts/MovieContext'



function App() {


  return (
    <MovieProvider>
      <Navbar></Navbar>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </main>
    </MovieProvider>
  )
}


export default App
