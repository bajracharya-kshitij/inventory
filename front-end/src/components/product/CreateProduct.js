import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class CreateProduct extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item : {
				name : '',
				company : '',
				price : ''
			},
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
		item[name] = value;
		this.setState({item});
	}

	handleSubmit(event) {
		this.setState({
			showAlert : true
		})
		event.preventDefault();
		const {item} = this.state;

		fetch('/api/product/create', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(item)
		});
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
							<button type="submit" className="btn btn-success pull-right">Create</button>
						</form>
					</Col>
				</Row>
			</Container>
		);
	};
};

export default CreateProduct;