import React from 'react'
import './News.css'

const News = () => {
  return (
    <div className='news'>
        <h1>Get Exclusive Offers</h1>
        <p>Stay updated with the latest and exclusive offers from Glamify. Subscribe to our newsletter and be the first to know about new arrivals, special discounts, and more!</p>
        
        <div>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default News