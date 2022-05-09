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
      const url = `http://localhost:5000/items?email=${email}`;
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
      const url = `http://localhost:5000/items?email=${email}`;
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
    <div>
      <h2>My Own Items Here </h2>
      {items.map((item) => (
        <li key={item._id}>
          {item.name} <button onClick={() => handleDelete(item._id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default MyItems;
