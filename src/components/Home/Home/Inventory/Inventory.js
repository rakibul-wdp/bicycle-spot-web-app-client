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
    <div className='inventory-container'>
      <img className='img-fluid inventory-image' src={img} alt='' />
      <h3 className='text-center'>{name}</h3>
      <p className='fw-bold'>Supplier: {supplierName}</p>
      <div className='inventory-p-q'>
        <p>Price: {price}</p>
        <p className='inventory-quantity'>Quantity: {quantity}</p>
      </div>
      <p>
        <small>{description.slice(0, 150)}...</small>
      </p>
      <button className='inventory-btn' onClick={() => navigateToStockDetail(_id)}>
        Stock Update
      </button>
    </div>
  );
};

export default Inventory;
