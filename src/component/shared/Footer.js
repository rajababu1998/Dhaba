import React from 'react'

import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
        <section className='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 footer-foot'>
                <h5>Address</h5>
                <span>India Muzaffarpur</span>
                <h6>Email: <span>baburaja131998@gmail.com</span></h6>

                <h3>About</h3>
                <h6>This Food App is developed for Providing Food instantly</h6>
                <h6>It has <b>Established in 2022</b></h6>
                <h6>We are here to serve the food for the nation</h6>
              </div>
              <div className='col-lg-4'>
                <h5>Help</h5>
                <h6>This is build for project</h6>
              </div>
              <div className='col-lg-4'>
                <Container>
                  <h5>Follow Us</h5>
                  <div className='social-media-icons d-flex justify-content-evenly'>
                    <a href=''>
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href=''>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href=''>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href=''>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href=''>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </Container>
              </div>
            </div>

            <div className='row'>
              <div className='col-12 text-center'>
                <h6>Developed By: <span>Raja Babu</span></h6>  
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Footer