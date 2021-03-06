import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import Home from './components/Home/Home/Home';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import ManageInventory from './components/ManageInventory/ManageInventory';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';

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
        <Route
          path='/manage'
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route
          path='/add'
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route
          path='/myitems'
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
