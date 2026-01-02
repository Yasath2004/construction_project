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
        </main>
        <Footer />
    </>
  );
}

export default About;