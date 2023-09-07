import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slidea from "../../imges/slidea.png"
import slideb from "../../imges/slideb.jpg"
import slidec from "../../imges/slidec.jpg"

 const Slider = () => {
    const [index,setindex]=useState(0)
    const handleSelct= (selctIndex)=> {
        setindex(selctIndex)
    }
  return (
    <Carousel activeIndex={index} onSelect={handleSelct} data-bs-theme="dark" className='slider'>
    <Carousel.Item>
      <img  
      style={{ height: '400px'}}
        className="d-block w-100"
        src={slidea}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  
      style={{ height: '400px'}}
        className="d-block w-100"
        src={slideb}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  
      style={{ height: '400px'}}
        className="d-block w-100"
        src={slidec}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
export default Slider;