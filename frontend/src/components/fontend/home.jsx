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
      <div className='container'>
        <div className='row'>

        <div className='col-md-3'>
          <h2>urbanEdge</h2>
          <p>© 2024 UrbanEdge Construction. All rights reserved.</p>
        </div>

        <div className='col-md-3'>
        </div>

        <div className='col-md-3'>
        </div>

        <div className='col-md-3'>
        </div>


       </div>
    </div>
    </footer>
    </>
  
  );
}

export default Home;