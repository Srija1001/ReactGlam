/*import React from "react";
import './Products.css';

import c1_img from '../Components/Assets/c1.jpg';
import c2_img from '../Components/Assets/c2.jpg';
import c3_img from '../Components/Assets/c3.jpg';
import c4_img from '../Components/Assets/c4.jpg';
import c5_img from '../Components/Assets/c5.jpg';
import c6_img from '../Components/Assets/c6.jpg';
import c7_img from '../Components/Assets/c7.jpg';
import c8_img from '../Components/Assets/c8.jpg';
import c9_img from '../Components/Assets/c9.jpg';

const productData = [
  { img: c1_img, name: "Lips" },
  { img: c2_img, name: "Lip Balm" },
  { img: c3_img, name: "Shampoo" },
  { img: c4_img, name: "Face Wash" },
  { img: c5_img, name: "Kajal" },
  { img: c6_img, name: "Serums & Essence" },
  { img: c7_img, name: "Face Moisturizer & Day Cream" },
  { img: c8_img, name: "Shower Gels & Body Wash" },
  { img: c9_img, name: "Suncare" },
];

const Products = () => {
  return (
    <div className="products">
        <h3>Category</h3>
      <div className="product-list">
        {productData.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.img} alt={product.name} />
          </div>
        ))}
        </div>
    </div>
  );
};

export default Products; 
*/
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './Products.css';
import { ShopContext } from "../Components/Context/ShopContext";

const Products = () => {
  const { all_products } = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Get unique main categories
  const mainCategories = all_products.map(cat => ({
    name: cat.name,
    image: cat.image
  }));

  // Filter products based on selected category and search term
  const filteredProducts = selectedCategory 
    ? all_products.find(cat => cat.name === selectedCategory)?.products || []
    : all_products.flatMap(cat => cat.products);

  const searchedProducts = searchTerm 
    ? filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : filteredProducts;

  return (
    <div className="products-page">
      {/* Categories Section */}
      <div className="categories-section">
        
        <div className="category-list">
          {mainCategories.map((category, index) => (
            <div 
              className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
              key={index}
              onClick={() => setSelectedCategory(category.name)}
            >
              <img src={category.image} alt={category.name} />
              
            </div>
          ))}
          <div 
            className={`category-item ${!selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            <p>All Products</p>
            
          </div>
          <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
        </div>
      </div>

      {/* Search Bar */}
      

      {/* Products Section */}
      <div className="products-section">
        <h2>{selectedCategory || 'All Products'}</h2>
        <div className="product-list">
          {searchedProducts.length > 0 ? (
            searchedProducts.map((product) => (
              <div 
                className="product-item" 
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  <div className="product-prices">
                    <p className="new-price">{product.new_price}</p>
                    <p className="old-price">{product.old_price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-products">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
