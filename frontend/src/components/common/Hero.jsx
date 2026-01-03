import React from 'react'


const Hero = ({ preheading, heading, text }) => { 
  return (
    <section className='section-7'>
      <div className='hero d-flex align-items-center' >
        <div className='container'>
          <div className='text-left'>
        
            <span>{preheading}</span>
            <h1>{heading}</h1>
            <p>{text}</p>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Hero;

