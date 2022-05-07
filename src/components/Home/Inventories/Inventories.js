import React, { useEffect, useState } from 'react';
import Inventory from '../Home/Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch('InventoryItems.json')
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div className='container'>
      <h2 className='text-center my-5'>Inventory Item</h2>
      <div className='inventories-item'>
        {inventories.slice(0, 6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory} />
        ))}
      </div>
    </div>
  );
};

export default Inventories;
