import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer> 
      <a href="#" className='footer_logo'>ZAIN</a>

      <ul className='permalinks'>
        <li><a href='#' > Home </a></li>
        <li><a href='#about' >About</a></li>
        <li><a href='#experience' >Experience</a></li>
        {/* <li><a href='#services' >Services</a></li> */}
        <li><a href='#portfolio' >Portfolio</a></li>
        {/* <li><a href='#testimonials' >Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/zain-amir/'> <BsLinkedin /> </a>
        <a href='github.com/ZainAmirZA'>< BsGithub /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Zain Amir. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer