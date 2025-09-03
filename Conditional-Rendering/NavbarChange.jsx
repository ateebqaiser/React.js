import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/home/Home.jsx'
import About from './Pages/about/About.jsx'
import Service from './Pages/services/Service.jsx'
import Contact from './Pages/contact/Contact.jsx'
import NavBar from './components/navbar/NavBar.jsx'
import Navbar2 from './components/navbar2/Navbar2.jsx'


function App() {
    const useNavbar=1
    function navbar(){
      if(useNavbar==1)
      {
        return <NavBar></NavBar>
      }
      else
      {
        return <Navbar2></Navbar2>
      }
    }
   
  return (
    <>
      <BrowserRouter>
      {navbar()}
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/services' element={<Service></Service>} ></Route>
          <Route path='/contact' element={<Contact></Contact>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
