import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PromoCodeBar from './components/Promocode'
import Header from './components/Header'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Ourstory from './pages/OurStory'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PromoCodeBar />
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
