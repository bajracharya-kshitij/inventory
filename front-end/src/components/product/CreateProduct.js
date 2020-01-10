import React, { Component } from 'react';

class CreateProduct extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item : {
				name : '',
				company : '',
				price : ''
			}
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
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label for="name">Name</label>
				<input type="text" name="name" onChange={this.handleChange} />
				<label for="company">Company</label>
				<input type="text" name="company" onChange={this.handleChange} />
				<label for="price">Price</label>
				<input type="text" name="price" onChange={this.handleChange} />
				<button type="submit">Create</button>
			</form>
		);
	};
};

export default CreateProduct;