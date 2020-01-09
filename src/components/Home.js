import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Product from './product/Product';
import SimilarProducts from './product/SimilarProducts';

import Note8Pro from './product/images/redmi-note-8-pro.jpg';
import Note7Pro from './product/images/redmi-note-7-pro.jpg';
import K20Pro from './product/images/redmi-k20-pro.jpg';
import PocophoneF1 from './product/images/pocophone-f1.jpg';
import Honor7x from './product/images/honor-7x.jpg'

class Home extends Component {

  constructor(props) {
    super(props);

    var items = [
        { name : "Redmi Note 8 Pro", image : Note8Pro, company: "Xiaomi", price: "NRs. 29,999" }, 
        { name : "Redmi Note 7 Pro", image : Note7Pro, company: "Xiaomi", price: "NRs. 25,999" }, 
        { name : "Redmi K20 Pro", image : K20Pro, company: "Xiaomi", price: "NRs. 49,999" },
        { name : "Pocophone F1", image : PocophoneF1, company: "Xiaomi", price: "NRs. 33,999" }, 
        { name : "Honor 7x", image : Honor7x, company: "Huawei", price: "NRs. 32,000" }
     ];

    this.state = {
      items : items,
      selectedItem : items[0]
    };

    this.updateSelectedItem = this.updateSelectedItem.bind(this);
  }

  updateSelectedItem(item) {
    this.setState({
      selectedItem : item
    })
  }

  render() {
    return (
      <Container className="pd-t-50">
        <Product items={this.state.items} selectedItem={this.state.selectedItem}/>
        <SimilarProducts items={this.state.items} selectedItem={this.state.selectedItem} updateSelectedItem={this.updateSelectedItem}/>
      </Container>
  );
  }
}

export default Home;
