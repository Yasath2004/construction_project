import React from 'react'
import Header from "../common/header";
import Footer from "../common/footer"; 
import Hero from '../common/Hero';

import constructionimg from '../../assets/images/construction2.jpg';
import construction1img from '../../assets/images/construction6.jpg';
import construction2img from '../../assets/images/construction7.jpg';
import construction3img from '../../assets/images/construction8.jpg';

const Projects = () => {
  return (
   <>
    <Header/>
    <main>
        <Hero preheading="quality, integrity, value" 
        heading="projects" text="Building dreams, one brick at a time." />


         <section className='section-3 bg-light py-5'>
              <div className='container-fluid py-5'>
                <div className='section-header text-center mb-5'>
                  <span>our projects</span>
                  <h2>discover our diverse range of projects</h2>
                  <p>we are a team of experienced professionals dedicated to delivering high-quality construction services tailored to your specific needs.</p>
                  </div>
                  <div className='row pt-4'>
                    <div className='col-md-3 col-lg-3'>
                      <div className='item'>
                        <div className='service-image'>
                          <img src={constructionimg} alt='Service 1' className='w-100'/>
                          <div className='service-body'>
                            <div className='service-title'>
                              <h3>kolkata project</h3>
                              </div>
                              <div className='service-content'>
                                <p>We specialize in building custom homes, renovations, and additions that reflect your unique style and needs.</p>
                              </div>
                              <a href='#' className='btn btn-primary'>read more</a>
                          </div>
                          </div>
                      </div>
                    </div>
                    
                    <div className='col-md-3 col-lg-3'>
                      <div className='item'>
                        <div className='service-image'>
                          <img src={construction1img} alt='Service 1' className='w-100'/>
                          <div className='service-body'>
                            <div className='service-title'>
                              <h3>srilanka project</h3>
                              </div>
                              <div className='service-content'>
                                <p>We specialize in building custom homes, renovations, and additions that reflect your unique style and needs.</p>
                              </div>
                              <a href='#' className='btn btn-primary'>read more</a>
                          </div>
                          </div>
                      </div>
                    </div>
                    <div className='col-md-3 col-lg-3'>
                      <div className='item'>
                        <div className='service-image'>
                          <img src={construction2img} alt='Service 1' className='w-100'/>
                          <div className='service-body'>
                            <div className='service-title'>
                              <h3>india project</h3>
                              </div>
                              <div className='service-content'>
                                <p>We specialize in building custom homes, renovations, and additions that reflect your unique style and needs.</p>
                              </div>
                              <a href='#' className='btn btn-primary'>read more</a>
                          </div>
                          </div>
                      </div>
                    </div>
                    <div className='col-md-3 col-lg-3'>
                      <div className='item'>
                        <div className='service-image'>
                          <img src={construction3img} alt='Service 1' className='w-100'/>
                          <div className='service-body'>
                            <div className='service-title'>
                              <h3>residential construction</h3>
                              </div>
                              <div className='service-content'>
                                <p>We specialize in building custom homes, renovations, and additions that reflect your unique style and needs.</p>
                              </div>
                              <a href='#' className='btn btn-primary'>read more</a>
                          </div>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
            </section>
        </main>
        <Footer/>
   </>
  )
}

export default Projects