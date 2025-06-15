import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import TubeReturn from './Pages/TubeReturn';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import offerbanner from './Components/Assets/offerbanner.jpg'
import ShopContextProvider from './Components/Context/ShopContext';
function App(){
  return (
    <div className="App">
      <BrowserRouter>  
      <Navbar />
      <div className="main-Content">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/tubereturn" element={<TubeReturn/>} />
        <Route path="/products" element={<Products banner={offerbanner}/>} >
          <Route path=":productId" element={<Products/>} />
        </Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} /> 
        
      </Routes>
      <Footer/>
      </div>
      <ShopContextProvider/>
      </BrowserRouter>  
    </div>
    
    
    
  );
}

export default App;
