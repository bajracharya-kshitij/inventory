import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import CreateProduct from './components/product/CreateProduct';

const App = () => {
  return (
    <HashRouter>
      <ul className="navigation">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/create">Create</NavLink></li>
      </ul>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={CreateProduct}/>
      </div>
    </HashRouter>
  );
};

export default App;
