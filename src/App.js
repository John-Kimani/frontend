import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Cart from './components/cart/Cart';
import Home from './components/home/Home';
import NavbarComponent from './components/navbar/Navbar';
import PageNotFound404 from './components/errors/pagenotfound/404_page_not_found';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavbarComponent />
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route exact path='/' element={<Home />} />
          <Route path='*' element={<PageNotFound404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
