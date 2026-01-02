import React from "react";
import Header from "../common/header";
import Footer from "../common/footer"; 
import{default as AboutNEW} from '../common/About.jsx';

const About = () => {
  return (
    <>
        <Header />
        <main>
             <section className='section-7'>
                  <div className='hero d-flex align-items-center' >
                    <div className='container'>
                      <div className='text-left'>
                        <span>quality, integrity, value</span>
                        <h1>about us</h1>
                        <p>Building dreams, one brick at a time.</p>
                      </div>  
                    </div>
                  </div>
            </section>
            
            <AboutNEW />

            {/* our team */}
            <section className="section-8">
              <div className="container">
              <div className='section-header text-center mb-5'>
                  <span>team</span>
                  <h2>our professional team</h2>
                  <p>We are a team of experienced professionals dedicated to delivering high-quality construction services tailored to your specific needs.</p>
                  
                  </div>
                </div>

            </section>
        </main>
        <Footer />
    </>
  );
}

export default About;