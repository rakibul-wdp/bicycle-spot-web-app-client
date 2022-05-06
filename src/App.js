import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Common/Header/Header';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
