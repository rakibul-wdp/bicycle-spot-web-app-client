import { useEffect, useState } from 'react';

const useInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch('https://still-waters-92870.herokuapp.com/stock')
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return [inventories, setInventories];
};

export default useInventories;
