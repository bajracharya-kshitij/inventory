import React, { Component } from 'react';

const CreateProduct = () => {
	return (
		<form>
			<label for="name">Name</label>
			<input type="text" name="Name" />
			<label for="company">Company</label>
			<input type="text" name="Company" />
			<label for="price">Price</label>
			<input type="text" name="Price" />
			<button type="submit">Create</button>
		</form>
	);
};

export default CreateProduct;