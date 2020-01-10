import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const SimilarProducts = (props) => {

	const cards = [];
	for (const [index, value] of props.items.entries()) {
		if (value != props.selectedItem) {
			cards.push(
				<Col sm={3} key={index}>
					<ProductCard item={value} updateSelectedItem={props.updateSelectedItem}/>
				</Col>
			);
		}
	}

	return (
		<div id="similar-products" className="pd-20">
			<h4 className="text-center">Similar Items</h4>
			<Row>{cards}</Row>
		</div>
	);
};

export default SimilarProducts;