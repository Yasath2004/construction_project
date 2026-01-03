import React from 'react'
import Header from "../common/header";
import Footer from "../common/footer"; 
import Hero from '../common/Hero';
import serviceimg from '../../assets/images/construction1.jpg';
import service2img from '../../assets/images/construction5.jpg';
import service3img from '../../assets/images/construction3.jpg';
import service4img from '../../assets/images/construction4.jpg';

const services = () => {
  return (
    <>
    <Header/>
    <main>
        <Hero preheading="quality, integrity, value" heading="services" text="Building dreams, one brick at a time." />
                    <section className='section-3 bg-light py-5'>
                      <div className='container-fluid py-5'>
                        <div className='section-header text-center mb-5'>
                          <span>our services</span>
                          <h2>our construction services</h2>
                          <p>we are a team of experienced professionals dedicated to delivering high-quality construction services tailored to your specific needs.</p>
                          </div>
                        <div className='row pt-4 justify-content-center'>
                            
                            <div className='col-md-3 col-lg-3'>
                              <div className='item'>
                                <div className='service-image'>
                                  <img src={serviceimg} alt='Service 1' className='w-100'/>
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
                            <div className='col-md-3 col-lg-3'>
                              <div className='item'>
                                <div className='service-image'>
                                  <img src={service2img} alt='Service 2' className='w-100'/>
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
                            <div className='col-md-3 col-lg-3'>
                              <div className='item'>
                                <div className='service-image'>
                                  <img src={service4img} alt='Service 4' className='w-100'/>
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
                        <div className='row pt-4 justify-content-center'>

                            <div className='col-md-3 col-lg-3'>
                              <div className='item'>
                                <div className='service-image'>
                                  <img src={service3img} alt='Service 3' className='w-100'/>
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
                            <div className='col-md-3 col-lg-3'>
                              <div className='item'>
                                <div className='service-image'>
                                  <img src={service4img} alt='Service 4' className='w-100'/>
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
                            <div className='col-md-3 col-lg-3'>
                              <div className='item'>
                                <div className='service-image'>
                                  <img src={service4img} alt='Service 4' className='w-100'/>
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

export default services
