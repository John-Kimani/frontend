import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Cart from './components/cart/Cart';
import Home from './components/home/Home';
import HomePage from './components/home/HomePage';
import NavbarComponent from './components/navbar/Navbar';
import PageNotFound404 from './components/errors/pagenotfound/404_page_not_found';
import ComingSoon from './components/comingsoon/ComingSoon';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavbarComponent />
        <Routes>
          <Route exact path='/coming-soon' element={ <ComingSoon />}/>
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/menu' element={<Home />} />
          <Route exact path='/' element={<HomePage />} />
          <Route path='*' element={<PageNotFound404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
