import React from 'react';
import './css/style.css';

const ProductImage = (props) => {
	return (
		<div>
			<img src={props.image} alt={props.name} />
		</div>
	);
};

export default ProductImage;