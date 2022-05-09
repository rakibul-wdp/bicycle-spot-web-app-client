import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Common/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const [token] = useToken(user);
  const navigateLogin = () => {
    navigate('/login');
  };

  if (loading || updating) {
    return <Loading />;
  }

  if (token) {
    navigate('/home');
  }

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
    <div className='mx-auto form-container mt-5'>
      <h2 className='text-center'>Register</h2>
      <form onSubmit={handleRegister}>
        <input className='form-input-field' type='text' name='name' id='' placeholder='Type your name' required />
        <input className='form-input-field' type='email' name='email' id='' placeholder='Type your email' required />
        <input
          className='form-input-field'
          type='password'
          name='password'
          id=''
          placeholder='Type your password'
          required
        />
        <div className='text-center mb-3'>
          <input className='' onClick={() => setAgree(!agree)} type='checkbox' name='terms' id='terms' />
          <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor='terms'>
            Accept Terms and Condition
          </label>
        </div>
        <input disabled={!agree} className='form-input-field form-input-field-btn' type='submit' value='Register' />
      </form>
      <p className='text-center'>
        <span style={{ cursor: 'pointer' }} onClick={navigateLogin} className='text-primary'>
          Already Register...??? Login
        </span>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
