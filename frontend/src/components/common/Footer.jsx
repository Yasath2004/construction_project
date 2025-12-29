import React from "react";

export default function Footer () {
  return (
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
        <hr/>
        <div className='text-center pt-5'>
          <div className='text-center'>Designed by ceygenic</div>
          </div>

       </div>
    </div>
    </footer>
    
  )
}

