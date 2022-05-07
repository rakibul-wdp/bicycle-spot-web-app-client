import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  // const [token] = useToken(user);
  const navigateLogin = () => {
    navigate('/login');
  };

  if (loading || updating) {
    return <Loading />;
  }

  // if (token) {
  //   navigate('/home');
  // }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log('Updated profile');
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='' placeholder='Type your name' required />
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='' placeholder='Type your email' required />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='' placeholder='Type your password' required />
        <input onClick={() => setAgree(!agree)} type='checkbox' name='terms' id='terms' />
        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor='terms'>
          Accept Terms and Condition
        </label>
        <input
          disabled={!agree}
          className='bg-primary border-0 rounded w-50 mx-auto mt-2'
          type='submit'
          value='Register'
        />
      </form>
      <p className='w-50 mx-auto'>
        <span style={{ cursor: 'pointer' }} onClick={navigateLogin} className='text-primary'>
          Login
        </span>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
