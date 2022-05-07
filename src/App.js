import  "./Styles/global.css"
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import LeftNav from './components/LeftNav'
import Page from './components/Page'
import RightNav from './components/RightNav'
import Index from './components/Index'

const App = () => {  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <div className="wrapper">
    <LeftNav/>
    <Routes>
      <Route path="/" element={<Page index={0} isHome={true}/>} />
    </Routes>
    <Routes>
      <Route path="/news/:id" element={<Index/>} />
    </Routes>
    <Routes>
      <Route path="/latest-news" element={<Page index={1} />} />
    </Routes><Routes>
      <Route path="/market" element={<Page index={2}/>} />
    </Routes><Routes>
      <Route path="/premium" element={<Page index={3} />} />
    </Routes><Routes>
      <Route path="/recommended-for-you" element={<Page index={0}/>} />
    </Routes>
    <RightNav/>
      </div>
    </div>
    </BrowserRouter>
    </>
  )
}
export default App
