import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Login from './Pages/Login';


function App(){
  return (
    <div className="App">
      <BrowserRouter>  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/about" element={<About/>} />
        
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} /> 
        
      </Routes>
      
      </BrowserRouter>  
    </div>
    
    
    
  );
}

export default App;
