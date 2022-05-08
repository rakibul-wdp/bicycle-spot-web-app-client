import React from 'react';
import useInventories from '../../hooks/useInventories';
import ManageDetail from '../ManageDetail/ManageDetail';

const ManageInventory = () => {
  const [inventories] = useInventories();
  return (
    <div>
      <h2>Manage your Inventory</h2>
      {inventories.map((inventory) => (
        <ManageDetail key={inventory._id} inventory={inventory} />
      ))}
    </div>
  );
};

export default ManageInventory;
