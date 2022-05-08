import React from 'react';

const AddItem = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplierName = e.target.supplierName.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    const item = { name, price, quantity, supplierName, description, img };

    fetch('http://localhost:5000/stock', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleAddItem}>
        <input type='text' name='name' id='' placeholder='Name' required />
        <input type='number' name='price' id='' placeholder='Price' required />
        <input type='number' name='quantity' id='' placeholder='Quantity' required />
        <input type='text' name='supplierName' id='' placeholder='Supplier Name' required />
        <textarea type='text' name='description' id='' placeholder='Description' required />
        <input type='text' name='img' id='' placeholder='Image URL' required />
        <input type='submit' value='Add Item' />
      </form>
    </div>
  );
};

export default AddItem;
