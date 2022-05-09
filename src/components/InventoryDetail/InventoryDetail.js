import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './InventoryDetail.css';

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const navigate = useNavigate();
  const [reload, setReload] = useState(true);
  const [stock, setStock] = useState({});
  const { _id, img, name, description, price, quantity, supplierName } = stock;

  useEffect(() => {
    const url = `https://still-waters-92870.herokuapp.com/stock/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStock(data));
  }, [reload]);

  const handleDelivered = () => {
    const storeQuantity = parseInt(stock?.quantity);
    const quantity = storeQuantity - 1;
    if (quantity > 0) {
      fetch(`https://still-waters-92870.herokuapp.com/stock/${inventoryId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ quantity }),
      })
        .then((response) => response.json())
        .then((data) => {
          setReload(!reload);
        });
    } else {
      console.log('input number');
    }
  };

  const handelUpload = (e) => {
    e.preventDefault();
    const storeQuantity = parseInt(stock?.quantity);
    const newQuantity = parseInt(e.target.quantity.value);
    const quantity = storeQuantity + newQuantity;
    if (quantity > 0) {
      fetch(`https://still-waters-92870.herokuapp.com/stock/${inventoryId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ quantity }),
      })
        .then((response) => response.json())
        .then((data) => {
          e.target.reset();
          setReload(!reload);
        });
    } else {
      console.log('input number');
    }
  };

  const navigateManage = () => {
    navigate('/manage');
  };
  return (
    <div className='container'>
      <h2 className='text-center mt-5'>
        <span className='feature-heading'>INVENTORY</span> DETAILS
      </h2>
      <hr className='features-horizontal mb-5' />
      <div className='inventory-details-container'>
        <img className='img-fluid inventory-image' src={img} alt='' />
        <p>
          <small>Product Id: {_id}</small>
        </p>
        <h3>{name}</h3>
        <p>
          Supplier Name: <span className='fw-bold'>{supplierName}</span>
        </p>
        <div className='inventory-p-q inventory-details'>
          <p>Price: {price}</p>
          <p className='inventory-quantity'>Quantity: {quantity}</p>
        </div>
        <p className='w-50 mx-auto'>{description}</p>
        <div className='btn-form'>
          <button className='inventory-btn' onClick={handleDelivered}>
            Delivered
          </button>
          <form onSubmit={handelUpload}>
            <input type='number' name='quantity' id='' placeholder='Quantity' required />
            <input className='inventory-btn ms-1' type='submit' value='Restock Item' />
          </form>
        </div>
      </div>
      <button className='d-block inventories-btn mb-5' onClick={() => navigateManage()}>
        Manage Inventory
      </button>
    </div>
  );
};

export default InventoryDetail;
