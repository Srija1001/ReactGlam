import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Components/Context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ShopContextProvider>
      {/* Wrapping the App component with ShopContextProvider to provide context to the entire app */}
    <App />
    </ShopContextProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
