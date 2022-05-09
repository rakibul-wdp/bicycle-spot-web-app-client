import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
  const [user] = useAuthState(auth);

  const handleAddItem = (e) => {
    e.preventDefault();
    const email = user.email;
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplierName = e.target.supplierName.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    const item = { email, name, price, quantity, supplierName, description, img };

    fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((result) => {
        toast('Item Added');
        e.target.reset();
        console.log(result);
      });
  };
  return (
    <div>
      <div className='text-center my-4'>
        <h2>
          <span className='feature-heading'>ADD</span> NEW ITEM
        </h2>
        <hr className='features-horizontal' />
      </div>
      <form className='w-25 mx-auto form-container' onSubmit={handleAddItem}>
        <input className='form-input-field' type='text' name='name' id='' placeholder='Name' required />
        <input
          className='form-input-field'
          type='email'
          name='email'
          value={user?.email}
          id=''
          placeholder='Email'
          required
          readOnly
          disabled
        />
        <input className='form-input-field' type='number' name='price' id='' placeholder='Price' required />
        <input className='form-input-field' type='number' name='quantity' id='' placeholder='Quantity' required />
        <input
          className='form-input-field'
          type='text'
          name='supplierName'
          id=''
          placeholder='Supplier Name'
          required
        />
        <textarea
          className='form-input-field'
          type='text'
          name='description'
          id=''
          placeholder='Description'
          required
        />
        <input className='form-input-field' type='text' name='img' id='' placeholder='Image URL' required />
        <input className='form-input-field form-input-field-btn' type='submit' value='Add Item' />
      </form>
    </div>
  );
};

export default AddItem;
