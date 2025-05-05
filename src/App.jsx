import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Todo from './pages/Todo';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <div>
              <Navbar/>
          </div>

          <div>
                  <Routes>
                     <Route path='/' element={<Home />} />
                     <Route path='/about' element={<About />} />
                     <Route path='/contact' element={<Contact />} />
                     <Route path='/todo' element={<Todo />} />
                  </Routes>
          </div>

          <div>
            {/* Footer */}
            <Footer/>
          </div>
      </Router>
    </>
  )
}

export default App
