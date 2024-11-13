import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-thanks'>
        <p className='footer-thanks-heading'>
          Enjoy Collecting Stats!
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link>vpennach@stevens.edu</Link>
            <Link>917.396.2971</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Links</h2>
            <Link to='https://github.com/vpennach'>Github</Link>
            <Link to='https://www.linkedin.com/in/vincent-pennachio-a2470921b/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="/HST-Logo.png" alt="Hockey Stat Tracker Logo" className="logo" />

            </Link>
          </div>
          <small class='website-rights'>HST © 2024</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;