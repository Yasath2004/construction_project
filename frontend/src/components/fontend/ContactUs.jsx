import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import Hero from '../common/Hero'

const ContactUs = () => {
  return (
    <>
    <Header/>
    <main>
        <Hero preheading="quality, integrity, value" heading="contact us" text="Building dreams, one brick at a time." />
        
        <section className='section-9 py-5'>
            <div className='container'>
            <div className='section-header text-center mb-5'>
                  <span></span>
                  <h2>Contact Us</h2>
                  <p>Our dedicated experts are here to help you with any of your questions, contact us by<br/>filling out the form below and we will be in touch shortly</p>
                  </div>
                    <div className='row mt-5'>
                    <div className='col-md-3'>
                        <div className='card shadow border-0 md-3'>
                            <div className='card-body p-5'>
                                <h3 className='mt-4'>Call us</h3>
                                <a href='tel:+1234567890'>+1 234 567 890</a><br/>
                                <a href='tel:+1234567890'>+1 234 567 890</a>

                                <h3 className='mt-4'>Write to us</h3>
                                <a href='#'>info@example.com</a><br/>
                                <a href='#'>info@example2.com</a>

                                <h3 className='mt-4'>Address</h3>
                                <p>123 Main Street<br/>City, State, ZIP</p>

                            </div>
                        </div>
                    </div>


                    <div className='col-md-9'>
                        <div className='card shadow border-0'>
                            <div className='card-body p-4'>
                            <form action="">
                            <div className='row mb-4'>
                                <div className='col-md-6 mb-4'>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" className='form-control lg' placeholder='Your Name'/>
                                </div>

                                <div className='col-md-6 mb-4'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" className='form-control lg' placeholder='Your Email'/>    
                                </div>   
                            </div>
                            <div className='row mb-4'>
                                <div className='col-md-6 mb-4'>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" id="phone" className='form-control lg' placeholder='Your Phone'/>
                                </div>

                                <div className='col-md-6 mb-4'>
                                    <label htmlFor="Subject">subject</label>
                                    <input type="text" id="subject" className='form-control lg' placeholder='Your Subject'/>    
                                </div>   
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="3" className='form-control lg' placeholder='Your Message'></textarea>
                            </div>
                            <button type='submit' className='btn btn-primary mt-4'>Submit</button>

                        </form>
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

export default ContactUs
