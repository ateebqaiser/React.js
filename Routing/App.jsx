import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/home/Home.jsx'
import About from './Pages/about/About.jsx'
import Service from './Pages/services/Service.jsx'
import NavBar from './components/navbar/NavBar.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/services' element={<Service></Service>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
