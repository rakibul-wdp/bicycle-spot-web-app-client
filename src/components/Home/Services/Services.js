import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='container services-container'>
      <div className='text-center'>
        <h2 className='mt-5'>
          <span className='feature-heading'>Inventory</span> Items
        </h2>
        <hr className='features-horizontal mb-5' />
        <p className='services-para'>
          We will provide multiple features for service. Like air freight, time bound delivery etc.
        </p>
      </div>
      <div className='services-name my-5'>
        <div className='services-each-com'>
          <img src='https://i.ibb.co/KwsNfdG/icon10-1.png' alt='' />
          <p className='services-name-text'>Premium Services</p>
        </div>
        <div className='services-each-com'>
          <img src='https://i.ibb.co/sv25Tym/icon11.png' alt='' />
          <p className='services-name-text'>Express Services</p>
        </div>
        <div className='services-each-com'>
          <img src='https://i.ibb.co/b3HMHpr/icon12.png' alt='' />
          <p className='services-name-text'>Cargo Services</p>
        </div>
        <div className='services-each-com'>
          <img src='https://i.ibb.co/rfQkjjq/icon13.png' alt='' />
          <p className='services-name-text'>Courier Services</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
