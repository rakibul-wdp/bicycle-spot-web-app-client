import { useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import Inventory from '../Home/Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
  const [inventories] = useInventories();
  const navigate = useNavigate();

  const navigateManage = () => {
    navigate('/manage');
  };
  return (
    <div className='container'>
      <h2 className='text-center my-5'>Inventory Item</h2>
      <div className='inventories-item'>
        {inventories.slice(0, 6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory} />
        ))}
      </div>
      <button className='d-block text-center my-5' onClick={() => navigateManage()}>
        Manage Inventory
      </button>
    </div>
  );
};

export default Inventories;
