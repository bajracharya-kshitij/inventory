import React from 'react';
import ProductImage from './ProductImage';

const ProductCard = (props) => {

	return (
		<div className="product-card" onClick={() => props.updateSelectedItem(props.item)}>
			<ProductImage image={props.item.image} imageHash={props.item.imageHash} name={props.item.name} />
			<h6>{props.item.name}</h6>
		</div>
	);
};

export default ProductCard;