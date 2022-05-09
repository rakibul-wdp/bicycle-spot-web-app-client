import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Common/Loading/Loading';
import './SocialLogin.css';

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(googleUser || githubUser || facebookUser);

  let from = location.state?.from?.pathname || '/';
  if (googleLoading || githubLoading || facebookLoading) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (googleError || githubError || facebookError) {
    errorElement = (
      <p className='text-danger'>
        Error: {googleError?.message} {githubError?.message} {facebookError?.message}
      </p>
    );
  }
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <p className='text-center mb-0'>Or</p>
      <h2 className='text-center my-4'>Sign in with</h2>
      {errorElement}
      <div className='text-center'>
        <button className='google-btn' onClick={() => signInWithGoogle()}>
          <img src='https://i.ibb.co/cJy60qG/google.png' alt='' />
        </button>
        <button className='github-btn' onClick={() => signInWithGithub()}>
          <img src='https://i.ibb.co/QnJrmNr/github.png' alt='' />{' '}
        </button>
        <button className='facebook-btn' onClick={() => signInWithFacebook()}>
          <img src='https://i.ibb.co/M9gc7ps/facebook.png' alt='' />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
