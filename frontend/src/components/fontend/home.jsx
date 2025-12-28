import react from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import aboutImg from '../../assets/images/about-us.jpg'; 

 const Home = () => {
  return (
    <>
      <header>
      <div className='container py-3' >
             <Navbar expand="lg">
                  <Navbar.Brand href="#home" className='logo'>
                    <span>urbanEdge</span> construction</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto"> 
                      <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                      <Nav.Link href="#link"className='nav-link'>about us</Nav.Link>
                      <Nav.Link href="#link"className='nav-link'>services</Nav.Link>
                      <Nav.Link href="#link"className='nav-link'>projects</Nav.Link>
                      <Nav.Link href="#link"className='nav-link'>blog</Nav.Link>
                      <Nav.Link href="#link"className='nav-link'>contact us</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
               </Navbar>
      </div>
    </header>
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
    </main>
    <footer>
      <div className='container py-5'>
        <div className='row'>
        <div className='col-md-3'>
          <h3>urbanEdge</h3>
          <ul>
          <li>
            <a href="">© 2024 UrbanEdge Construction. All rights reserved.</a>
          </li>  
          </ul>
        </div>

        <div className='col-md-3'>
          <h3>Services</h3>
          <ul>
          <li>
            <a href="">Construction</a></li>
          <li>
            <a href="">Renovation</a></li>
          <li>
            <a href="">Project Management</a></li>
          <li>
            <a href="">Consultation</a></li>
          </ul>
        </div>

        <div className='col-md-3'>
          <h3>Contact Us</h3>
          <ul>
          <li><a href="">123 Main Street, Cityville, ST 12345</a></li>
          <li><a href="">Suite 100</a></li>
          <li><a className='email' href="">info@urbanedgeconstruction.com</a></li>
          <li><a className='email' href="">Phone: +1 (555) 123-4567</a></li>
          </ul>
        </div>

        <div className='col-md-3'>
          <h3>Follow Us</h3>
          <ul>
          <li><a href="">Facebook</a></li>
          <li><a href="">Twitter</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">LinkedIn</a></li>
          </ul>
        </div>
       </div>
    </div>
    </footer>
    </>
  
  );
}

export default Home;