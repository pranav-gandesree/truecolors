import React from 'react';
import Slider from '../components/slider/Slider';
import Template from '../components/template/Template';
import AboutHome from '../components/aboutHome/AboutHome';

import image4 from "../assets/Insta.jpg"
import image5 from "../assets/14.jpg"
import image16 from "../assets/img16.jpg"
import image8 from "../assets/img8.jpg"
import image17 from "../assets/img17.jpg"

const images = [
  { url: image4},
  { url: image5  },
  { url: image8 },
  { url: image16},
  { url: image17 },
];


export default function Home() {
  return (
    <div>
      {/* <img src={logo} alt="Logo" style={{ width: '300px', height: 'auto', position:'relative' }}/> */}
      <Template/>
      <Slider images={images}/>
      <AboutHome/>
    </div>
  )
}

