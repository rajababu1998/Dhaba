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
              </div>
              <div className='col-lg-4'>
                <h5>Help</h5>
              </div>
              <div className='col-lg-4'>
                <Container>
                  <h5>Follow Us</h5>
                  <div className='social-media-icons d-flex justify-content-evenly'>
                    <a href='https://www.facebook.com/'>
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href=''>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href='baburaja1398'>
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