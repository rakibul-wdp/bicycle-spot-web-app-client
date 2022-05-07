import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './components/Common/Header/Header';
import Home from './components/Home/Home/Home';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';

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
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
