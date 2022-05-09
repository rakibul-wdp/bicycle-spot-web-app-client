import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Common/Loading/Loading';

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
      <h2>Sign in with</h2>
      {errorElement}
      <button onClick={() => signInWithGoogle()}>Sign in with Google</button>
      <button onClick={() => signInWithGithub()}>Sign in with Github</button>
      <button onClick={() => signInWithFacebook()}>Sign in with facebook</button>
    </div>
  );
};

export default SocialLogin;
