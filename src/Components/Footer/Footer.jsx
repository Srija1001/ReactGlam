import React from 'react'
import './Footer.css';
import logo from '../Assets/logo.jpg';
import insta from '../Assets/insta.png';
import facebook from '../Assets/facebook.png';
import twitter from '../Assets/twitter.png';
const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <div className='footer-logo'>
                <img src={logo} alt="Glamify Logo" />

                <h1>Glamify</h1>
            </div>
            <div className='footer-links'>
                <ul className='footer-list'>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div className='footer-content'>
            
            <div className='social-links'>
                <div className='social-icons'>
                    <img src={insta} alt=""/>
                </div>
                <div className='social-icons'>
                    <img src={facebook} alt=""/>
                </div>
                <div className='social-icons'>
                    <img src={twitter} alt=""/>
                </div>
                <br/>
                <p>Follow us on social media!</p>
            </div>
            <p>© 2023 Glamify. All rights reserved.</p>
            
            </div>
        </footer>
    </div>
  )
}

export default Footer