import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/orders' element={<OrderReview/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
