import { useEffect, useState } from 'react';

const useInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/stock')
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return [inventories, setInventories];
};

export default useInventories;
