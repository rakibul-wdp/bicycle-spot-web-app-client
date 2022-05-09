import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

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
      <h2>Add New Item</h2>
      <form onSubmit={handleAddItem}>
        <input type='text' name='name' id='' placeholder='Name' required />
        <input type='email' name='email' value={user?.email} id='' placeholder='Email' required readOnly disabled />
        <input type='number' name='price' id='' placeholder='Price' required />
        <input type='number' name='quantity' id='' placeholder='Quantity' required />
        <input type='text' name='supplierName' id='' placeholder='Supplier Name' required />
        <textarea type='text' name='description' id='' placeholder='Description' required />
        <input type='text' name='img' id='' placeholder='Image URL' required />
        <input type='submit' value='Add Item' />
      </form>
    </div>
  );
};

export default AddItem;
