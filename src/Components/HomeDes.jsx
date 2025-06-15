import React from 'react'
import './HomeDes.css'
const HomeDes = () => {
  return (
    <div className="HomeDes"> 
        <div className="HomeDes-Text">
            <h1>Welcome to Glamify</h1>
            <p>Your one-stop destination for all things beauty and fashion. Explore our wide range of products and find your perfect look.</p>
            <button>Shop Now</button>
        </div>
        <div className="HomeDes-Image">
            <img src="/Pictures/home1.jpg" alt="Glamify Home" />
        </div>

    </div>
  )
}

export default HomeDes