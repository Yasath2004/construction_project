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
      <section className='section-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={aboutImg} alt="About Us" className='img-fluid rounded'/>

              </div>
            </div>
        </div>
      </section>

      

    </main>
    <footer>

    </footer>
    </>
  
  );
}

export default Home;