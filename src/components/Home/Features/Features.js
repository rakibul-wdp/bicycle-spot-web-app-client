import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className='container my-5'>
      <div className='text-center'>
        <h2>
          <span className='feature-heading'>OUR</span> FEATURES
        </h2>
        <hr className='features-horizontal' />
        <p className='mb-5'>
          We will provide multiple features for service. Like air freight, time bound delivery etc.
        </p>
      </div>
      <div className='features-items'>
        <div className='features-item'>
          <img className='features-image' src='https://i.ibb.co/dkJJ4wf/features-1.png' alt='' />
          <div className='features-text'>
            <h4>ECONOMICAL AIR FLIGHT</h4>
            <hr className='features-hr' />
            <p>
              If you buy our product or stock we will delivery your as soon as possible because we delivery product by
              airplane.
            </p>
          </div>
        </div>
        <div className='features-item'>
          <img className='features-image' src='https://i.ibb.co/q1fCNvn/features-2.png' alt='' />
          <div className='features-text'>
            <h4>WAREHOUSING</h4>
            <hr className='features-hr' />
            <p>
              We also stock product in our big room that call warehousing and we have enough product so don't worry you
              get.
            </p>
          </div>
        </div>
        <div className='features-item'>
          <img className='features-image' src='https://i.ibb.co/Srmnjyd/features-3.png' alt='' />
          <div className='features-text'>
            <h4>SAME DAY DELIVERY</h4>
            <hr className='features-hr' />
            <p>
              You need argent delivery no problem we will delivery in one day of any kind of place. Fell free to order.
            </p>
          </div>
        </div>
        <div className='features-item'>
          <img className='features-image' src='https://i.ibb.co/HrYbQhp/features-4.png' alt='' />
          <div className='features-text'>
            <h4>PACKAGING STORAGE</h4>
            <hr className='features-hr' />
            <p>
              Our product or stock qualitifull thats why we delivery it so carefully and you get product with package.
            </p>
          </div>
        </div>
        <div className='features-item'>
          <img className='features-image' src='https://i.ibb.co/58jn10t/features-5.png' alt='' />
          <div className='features-text'>
            <h4>TIME BOUND DELIVERIES</h4>
            <hr className='features-hr' />
            <p>
              If you tell us how many time or under how many days you need product you can tell us thats why we give
              you.
            </p>
          </div>
        </div>
        <div className='features-item'>
          <img className='features-image' src='https://i.ibb.co/T8n6s7h/features-6.png' alt='' />
          <div className='features-text'>
            <h4>MULTI TRANSPORT</h4>
            <hr className='features-hr' />
            <p>
              Not only airplane but also we delivery product any kind of vehicle like track or human depend on your
              place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
