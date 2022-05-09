import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import './ManageInventory.css';

const ManageInventory = () => {
  const navigate = useNavigate();
  const [inventories, setInventories] = useInventories();

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `https://still-waters-92870.herokuapp.com/stock/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = inventories.filter((inventory) => inventory._id !== id);
          setInventories(remaining);
        });
    }
  };

  const navigateAddItem = () => {
    navigate('/add');
  };
  return (
    <div className='container'>
      <div className='text-center my-4'>
        <h2>
          <span className='feature-heading'>MANAGE</span> INVENTORY
        </h2>
        <hr className='features-horizontal' />
      </div>
      <div className='text-center'>
        <button className='text-center add-new-item-btn mb-5' onClick={() => navigateAddItem()}>
          Add New Item
        </button>
      </div>
      {inventories.map((inventory) => (
        <div className='w-75 mx-auto my-4 manage-inventory-container' key={inventory._id}>
          <img className='manage-inventory-img' src={inventory.img} alt='' />
          <span className='manage-inventory-name'>{inventory.name}</span>
          <span className='manage-inventory-quantity'>Quantity: {inventory.quantity}</span>
          <span>
            <button className='manage-inventory-delete' onClick={() => handleDelete(inventory._id)}>
              Delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ManageInventory;
