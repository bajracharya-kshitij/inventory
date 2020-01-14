import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class CreateProduct extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item : {
				name : '',
				company : '',
				price : ''
			},
			image : null,
			showAlert : false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		let item = {...this.state.item};
		if (name === 'image') {
			this.setState({image : target.files[0]});
		} else {
			item[name] = value;
		}
		this.setState({item});
	}

	handleSubmit(event) {
		this.setState({
			showAlert : true
		})
		event.preventDefault();
		const {item} = this.state;

		const data = new FormData();
		data.append('name', this.state.item.name);
		data.append('company', this.state.item.company);
		data.append('price', this.state.item.price);
		data.append('image', this.state.image);
		
		axios.post('/api/product/create', data);

		event.target.reset();

		setTimeout(() => {
			this.setState({
				showAlert : false
			});
		}, 1000);
	}

	render() {
		const alertBox = this.state.showAlert ? <div className={`alert alert-success`}>Product Added</div> : null;
		return (
			<Container className="pd-t-20">
				<h3>Create Product</h3>
				<Row className="pd-t-20">
					<Col xs={12} sm={6} md={4}>
						{alertBox}
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input type="text" name="name" className="form-control" onChange={this.handleChange} />
							</div>
							<div className="form-group">
								<label htmlFor="company">Company</label>
								<input type="text" name="company" className="form-control" onChange={this.handleChange} />
							</div>
							<div className="form-group">
								<label htmlFor="price">Price</label>
								<input type="text" name="price" className="form-control" onChange={this.handleChange} />
							</div>
							<div className="form-group">
								<label htmlFor="image">Image</label>
								<input type="file" name="image" className="form-control" onChange={this.handleChange} />
							</div>
							<button type="submit" className="btn btn-success pull-right">Create</button>
						</form>
					</Col>
				</Row>
			</Container>
		);
	};
};

export default CreateProduct;