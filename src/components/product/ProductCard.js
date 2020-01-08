import React from 'react';
import ProductImage from './ProductImage';

const ProductCard = (props) => {

	return (
		<div className="text-center pd-t-20 clickable" onClick={() => props.updateSelectedItem(props.item)}>
			<ProductImage image={props.item.image} name={props.item.name} />
			<h6>{props.item.name}</h6>
		</div>
	);
};

export default ProductCard;