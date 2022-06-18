import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import { Routes, Route, Link } from "react-router-dom";
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/orders' element={<OrderReview/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
