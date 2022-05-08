import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';

const ManageInventory = () => {
  const navigate = useNavigate();
  const [inventories, setInventories] = useInventories();

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `http://localhost:5000/stock/${id}`;
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
    <div>
      <h2>Manage your Inventory</h2>
      <button onClick={() => navigateAddItem()}>Add New Item</button>
      {inventories.map((inventory) => (
        <li key={inventory._id}>
          {inventory.name} <button onClick={() => handleDelete(inventory._id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default ManageInventory;
