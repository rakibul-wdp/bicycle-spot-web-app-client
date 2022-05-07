import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Common/Header/Header';
import Home from './components/Home/Home/Home';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/inventory/:inventoryId'
          element={
            <RequireAuth>
              <InventoryDetail />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
