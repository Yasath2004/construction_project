import react from 'react';
import aboutImg from '../../assets/images/about-us.jpg'; 
import Header from '../common/header.jsx';
import Footer from '../common/footer.jsx';
import About from '../common/About.jsx';  

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import serviceimg from '../../assets/images/construction1.jpg';
import service2img from '../../assets/images/construction5.jpg';
import service3img from '../../assets/images/construction3.jpg';
import service4img from '../../assets/images/construction4.jpg';

import constructionimg from '../../assets/images/construction2.jpg';
import construction1img from '../../assets/images/construction6.jpg';
import construction2img from '../../assets/images/construction7.jpg';
import construction3img from '../../assets/images/construction8.jpg';

import blogimg from '../../assets/images/construction8.jpg';

import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';

import avatarimg from '../../assets/images/author-2.jpg';

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
                        <a className='btn btn-primary large'>contact now</a>
                        <a className='btn btn-secondary ms-2 large'>view projects</a>
                        </div>
                      </div>  
                    </div>
                  </div>
            </section>


            {/* About Section */}
            <About />
            {/* our Services*/}
            <section className='section-3 bg-light py-5'>
              <div className='container-fluid py-5'>
                <div className='section-header text-center mb-5'>
                  <span>our services</span>
                  <h2>our construction services</h2>
                  <p>we are a team of experienced professionals dedicated to delivering high-quality construction services tailored to your specific needs.</p>
                  </div>
                  <div className='row pt-4'>
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
                  </div>
              </div>
            </section>

            {/*why choose us */}
            <section className='section-4 py-5'>
              <div className='container py-5'>
                <div className='section-header text-center mb-5'>
                  <span>why choose us</span>
                  <h2>discover our diverse range of projects</h2>
                  <p>we are a team of experienced professionals dedicated to<br/> delivering high-quality construction services tailored to your specific needs.</p>
                  </div>
                  <div className='row pt-4'>
                    <div className='col-md-4'>
                      <div className='card shadow border-0 p.4'>
                        <div className='card-icon'>
                          <img src={Icon1} alt='icon' />
                        </div>
                        <div className='card-title mt-3'>
                          <h3>experienced team</h3>
                          <p>Our team has years of experience in the construction industry, ensuring quality and reliability.</p>
                          
                        </div>

                      </div>

                    </div>
                    <div className='col-md-4'>
                      <div className='card shadow border-0 p.4'>
                        <div className='card-icon'>
                          <img src={Icon2} alt='icon' />
                        </div>
                        <div className='card-title mt-3'>
                          <h3>experienced team</h3>
                          <p>Our team has years of experience in the construction industry, ensuring quality and reliability.</p>
                          
                        </div>

                      </div>

                    </div>
                      <div className='col-md-4'>
                      <div className='card shadow border-0 p.4'>
                        <div className='card-icon'>
                          <img src={Icon3} alt='icon' />
                        </div>
                        <div className='card-title mt-3'>
                          <h3>cutting-edge solutions</h3>
                          <p>Our team has years of experience in the construction industry, ensuring quality and reliability.</p>
                          
                        </div>

                      </div>

                    </div>
                    </div>

              </div>
            </section>
              
            {/* our projects */}
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
            {/* section-5 */}
            <section className='section-5 py-5'>
              <div className='container py-5'>
                <div className='section-header text-center mb-5'>
                  <span>Testimonnials</span>
                  <h2>what people are saying about us</h2>
                  <p>we offer a diverse of array of construction services. spanning residential,commercial and industrial projects.</p>
                  </div>
                      <Swiper
                      modules={[Pagination]}
                      spaceBetween={50}
                      slidesPerView={3}
                      pagination={{ clickable: true }}

                    >
                      <SwiperSlide>
                        <div className='card shadow border-0'>
                          <div className='card-body p-5'>
                            <div className='rating'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            </div>
                            <div className='content py-4 mb-4'>
                              <p>"Amazing Constructions transformed our vision into reality with their exceptional craftsmanship and attention to detail. Highly recommend!"</p>
                            </div>
                            <div className='d-flex meta'>
                              <div>
                                <img src={avatarimg} alt='client' width={50} />
                              </div>
                              <div className='ps-3'>
                                <div className='name'>jhone deo</div>
                                <div>ceo,hazar company</div>
                              </div>
                          </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='card shadow border-0'>
                          <div className='card-body p-5'>
                            <div className='rating'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            </div>
                            <div className='content py-4'>
                              <p>"Amazing Constructions transformed our vision into reality with their exceptional craftsmanship and attention to detail. Highly recommend!"</p>
                            </div>
                            <br/>
                            <div className='d-flex meta'>
                              <div>
                                <img src={avatarimg} alt='client' width={50} />
                              </div>
                              <div className='ps-3'>
                                <div className='name'>jhone deo</div>
                                <div>ceo,hazar company</div>
                              </div>
                          </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='card shadow border-0'>
                          <div className='card-body p-5'>
                            <div className='rating'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            </div>
                            <div className='content py-4'>
                              <p>"Amazing Constructions transformed our vision into reality with their exceptional craftsmanship and attention to detail. Highly recommend!"</p>
                            </div>
                            <br/>
                            <div className='d-flex meta'>
                              <div>
                                <img src={avatarimg} alt='client' width={50} />
                              </div>
                              <div className='ps-3'>
                                <div className='name'>jhone deo</div>
                                <div>ceo,hazar company</div>
                              </div>
                          </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='card shadow border-0'>
                          <div className='card-body p-5'>
                            <div className='rating'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            </div>
                            <div className='content py-4'>
                              <p>"Amazing Constructions transformed our vision into reality with their exceptional craftsmanship and attention to detail. Highly recommend!"</p>
                            </div>
                            <br/>
                            <div className='d-flex meta'>
                              <div>
                                <img src={avatarimg} alt='client' width={50} />
                              </div>
                              <div className='ps-3'>
                                <div className='name'>jhone deo</div>
                                <div>ceo,hazar company</div>
                              </div>
                          </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      ...
                                </Swiper>
              </div>
            </section>
            
            {/* blog section */}

            <section className='section-6 bg-light py-5'>
              <div className='container'>
                <div className='section-header text-center mb-5'>
                  <span>blog and news</span>
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
  
  );
}

export default Home;