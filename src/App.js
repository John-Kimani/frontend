import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom"

import Cart from './components/cart/Cart';
import Home from './components/home/Home';
import NavbarComponent from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavbarComponent />
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
