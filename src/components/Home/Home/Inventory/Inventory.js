import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
  const { _id, name, img, description, price, quantity, supplierName } = inventory;
  const navigate = useNavigate();

  const navigateToStockDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
      <img width={'300px'} src={img} alt='' />
      <h2>{name}</h2>
      <p>Supplier: {supplierName}</p>
      <div className='inventory-p-q'>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <p>
        <small>{description}</small>
      </p>
      <button onClick={() => navigateToStockDetail(_id)}>Stock Update</button>
    </div>
  );
};

export default Inventory;
