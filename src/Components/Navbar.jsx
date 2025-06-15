import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu,setMenu]  = React.useState("Home");
  return(


    <div className="Navbar">
      <div className="NavLogo">
        <img src="/Pictures/logo.jpg" alt="Glamify Logo" />
          <h1>Glamify</h1>
      </div>
      <ul className="NavMenu">
        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Products")}}><Link style={{textDecoration:'none'}} to='/Products'>Products</Link>{menu==="Products"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Orders")}}><Link style={{textDecoration:'none'}} to='/Orders '>Orders</Link>{menu==="Orders"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Tube Return")}}><Link style={{textDecoration:'none'}} to='/TubeReturn'>Tube Return</Link>{menu==="Tube Return"?<hr/>:<></>}</li>
      </ul>
      <div className="NavLogin">
        <Link to='/Cart'><img src="/Pictures/cart.png" alt="Cart"/></Link>
        <div className="Cart-count">0</div>
        <Link to='/Login'><button >Login</button></Link>
        
      </div>
      
      
    </div>
  
    
  );
}

export default Navbar;