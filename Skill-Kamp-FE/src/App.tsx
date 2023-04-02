import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SliderComponent from './components/Slider'

function App() {
  const [count, setCount] = useState(0)
  const images = [
    './Happy kids-Materials/Banner1.png',
    './Happy kids-Materials/Banner2.png',
    './Happy kids-Materials/Banner3.png',
    './Happy kids-Materials/Banner4- Our story.png'
  ];

  return (
    <div className="App">
      <SliderComponent images={images} />
    </div>
  )
}

export default App
