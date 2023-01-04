import React from 'react'
import './about.css'
import ME from '../../assets/soup.gif'
import {FaAward} from'react-icons/fa'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'
import {MdSchool} from 'react-icons/md'

const About = () => {
  return (
    
    <section id='about'>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className='container about_container' >
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
      </div>

      <div className="about_content">
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward className='about_icon'  />
            <h5>Experience</h5>
            <small>1 Year Full-Stack Experience</small>
          </article>

          <article className='about_card'>
            <BsFillBookmarkCheckFill className='about_icon'  />
            <h5>Certification</h5>
            <small>Certified General Assembly Software Engineering Immersive Graduate</small>
          </article>

          <article className='about_card'>
            <MdSchool className='about_icon'  />
            <h5>Education</h5>
            <small>Bachelors Degree in Civil Engineering</small>
          </article>


        </div>
          <p className='blurb'> 
          Full-stack developer familiar using languages such as HTML, CSS, JavaScript and Python. 
          </p>
          <div className='lets-talk'>
            <a href='#contact' className='btn btn-primary' >Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About