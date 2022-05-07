import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const [stock, setStock] = useState({});
  const { _id, img, name, description, price, quantity, supplierName } = stock;

  useEffect(() => {
    const url = `http://localhost:5000/stock/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStock(data));
  }, []);

  const handleDelivered = () => {
    setStock(parseInt(quantity) - 1);
    console.log(typeof parseInt(quantity));
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
    </div>
  );
};

export default InventoryDetail;
