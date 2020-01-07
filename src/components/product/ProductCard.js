import React from 'react';
import ProductImage from './ProductImage';

const ProductCard = (props) => {
	return (
		<div>
			<ProductImage image={props.item.image}/>
			<h6>{props.item.name}</h6>
		</div>
	);
};

export default ProductCard;