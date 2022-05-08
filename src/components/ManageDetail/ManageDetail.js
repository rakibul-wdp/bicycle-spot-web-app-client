import React from 'react';
import useInventories from '../../hooks/useInventories';

const ManageDetail = ({ inventory }) => {
  const { name, _id } = inventory;
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
          console.log(data);
          const remaining = inventories.filter((inventory) => inventory._id !== id);
          setInventories(remaining);
        });
    }
  };
  return (
    <div>
      <h3>
        {name} <button onClick={() => handleDelete(_id)}>Delete</button>
      </h3>
    </div>
  );
};

export default ManageDetail;
