import React from 'react';

const ProductDescription = (props) => {
	return (
		<div className="description">
			<div>Name: {props.details.name}</div>
			<div>Category: Mobile Phones</div>
			<div>Company: {props.details.company}</div>
			<div>Price: {props.details.price}</div>
		</div>
	);
};

export default ProductDescription;