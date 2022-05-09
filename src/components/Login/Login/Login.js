import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading/Loading';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import useToken from '../../../hooks/useToken';
import './Login.css';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const from = location.state?.from?.pathname || '/';
  const [token] = useToken(user);

  if (token) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };

  if (loading || sending) {
    return <Loading />;
  }

  const navigateRegister = (event) => {
    navigate('/register');
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    } else {
      toast('please enter your email address');
    }
  };
  return (
    <div className='mx-auto form-container'>
      <h2 className='text-center'>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className='form-input-field'
          ref={emailRef}
          type='email'
          name='email'
          id=''
          placeholder='Type your email'
          required
        />
        <input
          className='form-input-field'
          ref={passwordRef}
          type='password'
          name='password'
          id=''
          placeholder='Type your password'
          required
        />
        {errorElement}
        <div className='login-text-link'>
          <p>
            <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>
              Please Register...!
            </Link>{' '}
          </p>
          <p>
            <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>
              Forget Password...?
            </button>{' '}
          </p>
        </div>
        <button className='form-input-field form-input-field-btn'>Login</button>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
