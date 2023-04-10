import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OurStory from './pages/OurStory'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import Shopcollection from "./pages/ShopCollection"
import FAQ from "./pages/FAQ"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo-store" element={<HomePage />} />
          <Route path="/demo-store/our-story" element={<OurStory />} />
          <Route path="/demo-store/shop-collection" element={<Shopcollection />} />
          <Route path="/demo-store/faq" element={<FAQ />} />
          <Route path="/demo-store/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
