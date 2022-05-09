import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100 banner-img'
            src='https://tallypress.com/wp-content/uploads/2022/03/top-10-bicycle-shops-in-penang.png'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Grow Your Business</h3>
            <p>If you buy our stock or product you can more profit in your business.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 banner-img'
            src='https://www.hovecycles.com/inside-large.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>We are sale any kind of place</h3>
            <p>You can buy any king of country in this planet. We will delivery you.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 banner-img'
            src='https://content3.jdmagicbox.com/comp/zirakpur/p8/0172px172.x172.190305142505.f6p8/catalogue/nagpal-cycle-store-zirakpur-1zx0vp3fae.jpg?clr=333333'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Our product are very quality full.</h3>
            <p>In our stock product are world standard. We maintain it.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
