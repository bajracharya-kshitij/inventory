import React from 'react';
import './css/style.css';

const ProductImage = (props) => {
	// console.log(props.imageHash);
	const imageSrc = props.imageHash ? "/api/file/" + props.imageHash : props.image;
	return (
		<div>
			<img src={imageSrc} alt={props.name} />
		</div>
	);
};

export default ProductImage;