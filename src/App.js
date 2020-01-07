import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Product from './components/product/Product';
import SimilarProducts from './components/product/SimilarProducts';

function App() {
  return (
      <Container className="pd-t-50">
        <Product />
        <SimilarProducts />
      </Container>
  );
}

export default App;
