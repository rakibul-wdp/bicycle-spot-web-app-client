import React from 'react';
import CustomLink from '../../Home/CustomLink/CustomLink';
import './Header.css';

const Header = () => {
  return (
    <nav className='header-nav'>
      <div className='container nav-element'>
        <div className='nav-logo'>
          <img width={'125px'} src={'https://i.ibb.co/v1GwDf5/bicycle.png'} alt='' />
          <h1 className='nav-logo-heading'>
            <span>B</span>icycle Spot
          </h1>
        </div>
        <div>
          <CustomLink to={'/'}>Home</CustomLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
