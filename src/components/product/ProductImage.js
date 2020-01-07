import React from 'react';
import './css/style.css';

const ProductImage = (props) => {
	return (
		<div>
			<img src={props.image} alt="Redmi Note 8 Pro" />
		</div>
	);
};

export default ProductImage;