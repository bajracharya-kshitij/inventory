import React from 'react';
import './App.css';
import Product from './components/Product';
import SimilarProducts from './components/SimilarProducts';

function App() {
  return (
    <div className="App">
      <Product />
      <SimilarProducts />
    </div>
  );
}

export default App;
