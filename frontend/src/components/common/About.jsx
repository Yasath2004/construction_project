import React from 'react'
import aboutImg from '../../assets/images/about-us.jpg'; 

const About = () => {
  return (
    <section className='section-2 py-5'>
                  <div className='container py-5'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <img src={aboutImg} alt="About Us" className='w-100'/>
    
                        </div>
                        <div className='col-md-6'>
                          <span>About Us</span>
                          <h2>We Build <br/>Your Dream Home</h2>
                          <p>At UrbanEdge Construction, we are dedicated to turning your dream home into a reality. With years of experience in the construction industry, our team of skilled professionals is committed to delivering high-quality craftsmanship and exceptional service.</p>
    
                          <p>Choose UrbanEdge Construction for your next project and experience the difference of working with a team that values integrity, quality, and customer satisfaction above all else.</p>
                        </div>
                    </div> 
                  </div>
                </section>
  )
}

export default About
