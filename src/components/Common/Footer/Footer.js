import React from 'react';
import './Footer.css';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='footer-container'>
      <div className='container footer-content py-5'>
        <div>
          <h3 className='text-white'>OUR CEO's STATEMENT</h3>
          <hr className='footer-hr' />
          <p className='footer-para'>
            Thanks to our great people, established crisis management and technological expertise, we were able to keep
            most of our operations up and running. This was crucial because we are a critical supplier for power and
            other essential services.
          </p>
          <img src='https://i.ibb.co/3sdMPFH/sign-light.png' alt='' />
        </div>
        <div>
          <h3 className='text-white'>QUICK LINKS</h3>
          <hr className='footer-hr' />
          <div className='d-flex'>
            <div>
              <p className='footer-link-para'>GROUND SHIPPING</p>
              <hr className='footer-link-hr' />
              <p className='footer-link-para'>AIR FRIGHT</p>
              <hr className='footer-link-hr' />
              <p className='footer-link-para'>SEA FRIGHT</p>
              <hr className='footer-link-hr' />
              <p className='footer-link-para'>SEA FIGHT</p>
              <hr className='footer-link-hr' />
              <p className='footer-link-para'>STORAGE PACKAGING</p>
              <hr className='footer-link-hr' />
            </div>
            <div>
              <p className='footer-link-para'>RAIL SHIPPING</p>
              <hr className='footer-link-hr' />
              <p className='footer-link-para'>LOGISTIC SOLUTIONS</p>
              <hr className='footer-link-hr' />
              <p className='footer-link-para'>CARGO SHIPPING</p>
              <hr className='footer-link-hr' />
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-white'>NEWSLETTER SIGNUP</h3>
          <hr className='footer-hr' />
          <p className='footer-para'>
            If you want receive our all weekly updates about new offers and discount, signup below.
          </p>
          <input type='email' name='email' id='' placeholder='Email Address' />
          <input type='submit' value='Send' />
        </div>
      </div>
      <div className='text-center p-5 footer-end'>
        <p className='text-white footer-text'>Copyright &copy; {date} Bicycle Spot</p>
      </div>
    </div>
  );
};

export default Footer;
