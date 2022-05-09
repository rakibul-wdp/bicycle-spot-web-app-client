import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axiosPrivate from '../../api/axiosPrivate';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `https://still-waters-92870.herokuapp.com/items?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setItems(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate('/login');
        }
      }
    };
    getItems();
  }, [user]);

  const handleDelete = (id) => {
    const email = user?.email;
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `https://still-waters-92870.herokuapp.com/items?email=${email}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div className='container'>
      <div className='text-center my-4'>
        <h2>
          <span className='feature-heading'>MY</span> OWN ITEMS
        </h2>
        <hr className='features-horizontal' />
      </div>
      {items.map((item) => (
        <div className='w-75 mx-auto my-4 manage-inventory-container' key={item._id}>
          <img className='manage-inventory-img' src={item.img} alt='' />
          <span className='manage-inventory-name'>{item.name}</span>
          <span className='manage-inventory-quantity'>Quantity: {item.quantity}</span>
          <span>
            <button className='manage-inventory-delete' onClick={() => handleDelete(item._id)}>
              Delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
