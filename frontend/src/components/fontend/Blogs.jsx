import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import Hero from '../common/Hero'
import blogimg from '../../assets/images/construction8.jpg';

const Blogs = () => {
  return (
    <>
      <Header/>
    <main>
        <Hero preheading="quality, integrity, value" heading="blogs" text="Building dreams, one brick at a time." />
                   <section className='section-6 bg-light py-5'>
                      <div className='container'>
                        <div className='section-header text-center mb-5'>
                          <span>Blog and news</span>
                          <h2>articles and blog post</h2>
                          <p>we offer a diverse of array of construction services. spanning residential,commercial and industrial projects.</p>
                          </div>
                          <div className='row'>
                            <div className='col-md-4'>
                              <div className='card border-0 shadow'>
                                <div className='card-img-top'>
                                  <img src={blogimg} alt="" className='w-100' />
                                </div>
                                <div className='card-body p-4 '>
                                  <div className='mb-3'>
                                    <a href='#' className='title'>Dummy blog title</a>
                                  </div>
                                  <a href='#' className='btn btn-primary small'>read more</a>
        
                                </div>
        
                              </div>
                              </div>
                               <div className='col-md-4'>
                              <div className='card border-0 shadow'>
                                <div className='card-img-top'>
                                  <img src={blogimg} alt="" className='w-100' />
                                </div>
                                <div className='card-body p-4 '>
                                  <div className='mb-3'>
                                    <a href='#' className='title'>Dummy blog title</a>
                                  </div>
                                  <a href='#' className='btn btn-primary small'>read more</a>
        
                                </div>
        
                              </div>
                              </div>
                               <div className='col-md-4'>
                              <div className='card border-0 shadow'>
                                <div className='card-img-top'>
                                  <img src={blogimg} alt="" className='w-100' />
                                </div>
                                <div className='card-body p-4 '>
                                  <div className='mb-3'>
                                    <a href='#' className='title'>Dummy blog title</a>
                                  </div>
                                  <a href='#' className='btn btn-primary small'>read more</a>
        
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

export default Blogs
