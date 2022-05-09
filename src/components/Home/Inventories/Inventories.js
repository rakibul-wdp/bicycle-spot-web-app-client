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
      <h2 className='text-center mt-5'>
        <span className='feature-heading'>Inventory</span> Items
      </h2>
      <hr className='features-horizontal mb-5' />
      <div className='inventories-item'>
        {inventories.slice(0, 6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory} />
        ))}
      </div>
      <button className='d-block inventories-btn' onClick={() => navigateManage()}>
        Manage Inventory
      </button>
    </div>
  );
};

export default Inventories;
