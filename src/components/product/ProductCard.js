import React from 'react';
import ProductImage from './ProductImage';

const ProductCard = (props) => {
	return (
		<div className="text-center pd-t-20">
			<ProductImage image={props.item.image}/>
			<h6>{props.item.name}</h6>
		</div>
	);
};

export default ProductCard;