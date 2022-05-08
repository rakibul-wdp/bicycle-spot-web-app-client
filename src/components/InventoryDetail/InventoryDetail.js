import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const navigate = useNavigate();
  const [reload, setReload] = useState(true);
  const [stock, setStock] = useState({});
  const { _id, img, name, description, price, quantity, supplierName } = stock;

  useEffect(() => {
    const url = `http://localhost:5000/stock/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStock(data));
  }, [reload]);

  const handleDelivered = () => {
    const storeQuantity = parseInt(stock?.quantity);
    const quantity = storeQuantity - 1;
    if (quantity > 0) {
      fetch(`http://localhost:5000/stock/${inventoryId}`, {
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
      fetch(`http://localhost:5000/stock/${inventoryId}`, {
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
    <div className='text-center'>
      <h2>This inventory detail and private</h2>
      <img width={'300px'} src={img} alt='' />
      <p>
        <small>Product Id: {_id}</small>
      </p>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Supplier Name: {supplierName}</p>
      <p className='w-50 mx-auto'>{description}</p>
      <button onClick={handleDelivered}>Delivered</button>
      <form onSubmit={handelUpload}>
        <input type='number' name='quantity' id='' placeholder='Quantity' required />
        <input type='submit' value='Restock Item' />
      </form>
      <button className='d-block text-center my-5' onClick={() => navigateManage()}>
        Manage Inventory
      </button>
    </div>
  );
};

export default InventoryDetail;
