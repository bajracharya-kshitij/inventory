import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

import Note7Pro from './images/redmi-note-7-pro.jpg';
import K20Pro from './images/redmi-k20-pro.jpg';
import PocophoneF1 from './images/pocophone-f1.jpg';
import Honor7x from './images/honor-7x.jpg'

const SimilarProducts = () => {

	const items = [
		{ name : "Note 7 Pro", image : Note7Pro }, 
		{ name : "K20 Pro", image : K20Pro },
		{ name : "Pocophone F1", image : PocophoneF1 }, 
		{ name : "Honor 7x", image : Honor7x }
	];
	
	const cards = [];
	for (const [index, value] of items.entries()) {
		cards.push(
			<Col sm={3}>
				<ProductCard item={value} />
			</Col>
		);
	}

	return (
		<div id="similar-products" className="pd-20">
			<h4 className="text-center">Similar Items</h4>
			<Row>{cards}</Row>
		</div>
	);
};

export default SimilarProducts;