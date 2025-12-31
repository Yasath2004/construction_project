import react from 'react';
import aboutImg from '../../assets/images/about-us.jpg'; 
import Header from '../common/header.jsx';
import Footer from '../common/footer.jsx';
import serviceimg from '../../assets/images/construction1.jpg';

 const Home = () => {
  return (
    <>
    <Header/>
    <main>
      {/* Hero Section */}
      <section className='section-1'>
        <div className='hero d-flex align-items-center' >
          <div className='container-fluid'>
            <div className='text-center'>
              <span>Welcome Amazing Constructions</span>
              <h1>crafting with<br/>percision and excellence</h1>
              <p>Building dreams, one brick at a time. <br/>Your vision, our expertise.</p>
              <div className='mt-4'>
              <a className='btn btn-primary'>contact now</a>
              <a className='btn btn-secondary ms-2'>view projects</a>
              </div>
            </div>  
          </div>
        </div>
      </section>


      {/* About Section */}
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

      {/* our Services*/}
            <section className='section-3 bg-light py-5'>
              <div className='container-fluid py-5'>
                <div className='section-header text-center mb-5'>
                  <span>our services</span>
                  <h2>our construction services</h2>
                  <p>we are a team of experienced professionals dedicated to delivering high-quality construction services tailored to your specific needs.</p>
                  </div>
                  <div className='row'>
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
                  </div>
              </div>
            </section>
    </main>
    <Footer/>
    </>
  
  );
}

export default Home;