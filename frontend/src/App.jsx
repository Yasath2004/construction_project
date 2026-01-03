import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home  from './components/fontend/home.jsx';
import About from './components/fontend/About.jsx';
import Services from './components/fontend/services.jsx';
import Projects from './components/fontend/projects.jsx';
import Blogs from './components/fontend/Blogs.jsx';
import ContactUs from './components/fontend/ContactUs.jsx';


import './assets/css/style.scss';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
