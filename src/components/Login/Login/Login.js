import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading/Loading';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  // const [token] = useToken(user);

  // if (token) {
  //   navigate(from, { replace: true });
  // }

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Username'></label>
        <input ref={emailRef} type='email' name='email' id='' placeholder='Type your email' required />
        <label htmlFor='Password'></label>
        <input ref={passwordRef} type='password' name='password' id='' placeholder='Type your password' required />
        {errorElement}
        <p>
          New to Genius Car?{' '}
          <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>
            Please Register
          </Link>{' '}
        </p>
        <p>
          Forget Password?{' '}
          <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>
            Reset Password
          </button>{' '}
        </p>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
