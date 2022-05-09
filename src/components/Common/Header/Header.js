import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../../Home/CustomLink/CustomLink';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
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
          {user && (
            <>
              <CustomLink to={'/manage'}>Manage Inventory</CustomLink>
              <CustomLink to={'/add'}>Add Item</CustomLink>
              <CustomLink to={'/myitems'}>My Items</CustomLink>
            </>
          )}
          {user ? <button onClick={handleSignOut}>Sign Out</button> : <CustomLink to={'/login'}>Login</CustomLink>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
