import React from 'react';
import './App.css';
import Product from './components/product/Product';
import SimilarProducts from './components/product/SimilarProducts';

function App() {
  return (
    <div className="App">
      <Product />
      <SimilarProducts />
    </div>
  );
}

export default App;
