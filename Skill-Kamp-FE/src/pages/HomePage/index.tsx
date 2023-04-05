import React from 'react'
import Slider from '../../components/Slider'
import Categories from '../../components/Categories'
import { useState } from 'react'

const index = () => {
  const [count, setCount] = useState(0)
  const images = [
    './Happy kids-Materials/Banner1.png',
    './Happy kids-Materials/Banner2.png',
    './Happy kids-Materials/Banner3.png',
    './Happy kids-Materials/Banner4- Our story.png'
  ];
  return (
    <div>
      <Slider images={images} />
      <Categories />
    </div>
  )
}

export default index