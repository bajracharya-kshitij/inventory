import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Product from './product/Product';
import SimilarProducts from './product/SimilarProducts';

import Note8Pro from './product/images/redmi-note-8-pro.jpg';
import Note7Pro from './product/images/redmi-note-7-pro.jpg';
import K20Pro from './product/images/redmi-k20-pro.jpg';
import PocophoneF1 from './product/images/pocophone-f1.jpg';
import Honor7x from './product/images/honor-7x.jpg'
import NoPhotoAvailable from './product/images/no-photo-available.jpeg';

import axios from 'axios';

class Home extends Component {

  constructor(props) {
    super(props);

    var items = [
        { name : "Redmi Note 8 Pro", image : Note8Pro, company: "Xiaomi", price: "NRS 29,999" }, 
        { name : "Redmi Note 7 Pro", image : Note7Pro, company: "Xiaomi", price: "NRS 25,999" }, 
        { name : "Redmi K20 Pro", image : K20Pro, company: "Xiaomi", price: "NRS 49,999" },
        { name : "Pocophone F1", image : PocophoneF1, company: "Xiaomi", price: "NRS 33,999" }, 
        { name : "Honor 7x", image : Honor7x, company: "Huawei", price: "NRS 32,000" }
     ];

    this.state = {
      items : items,
      selectedItem : items[0],
      loading : true
    };

    this.updateSelectedItem = this.updateSelectedItem.bind(this);
  }

  componentDidMount() {
    var items = this.state.items;
    this.setState({loading : true});
    
    axios.get('/api/product/list')
          .then((response) => {
            response.data.forEach(function(item) {
              let hash = null;
              if (item.images.length > 0) {
                hash = item.images[0].hash;
              } 
              items.push({
                name : item.name,
                image : NoPhotoAvailable,
                imageHash : hash,
                company : item.company,
                price : item.price.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'NRS'
                        })
              });
            });
          })
          .then(() => this.setState({items: items, loading : false}));
  }

  updateSelectedItem(item) {
    this.setState({
      selectedItem : item
    })
  }

  render() {
    return (
      <Container className="pd-t-50">
        { this.state.loading ? <div>Loading...</div> :
          <div>
          <Product items={this.state.items} selectedItem={this.state.selectedItem}/>
          <SimilarProducts items={this.state.items} selectedItem={this.state.selectedItem} updateSelectedItem={this.updateSelectedItem}/>
          </div>
        }
      </Container>
    );
  }
}

export default Home;
