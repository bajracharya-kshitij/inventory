import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

import RedmiNote8Pro from './images/redmi-note-8-pro.jpg';

const Product = () => {
	return (
		<div id="product-detail" className="pd-20">
			<Row>
				<Col sm={6}>
					<ProductImage image={RedmiNote8Pro} />
				</Col>
				<Col sm={6}>
					<ProductDescription />
				</Col>
			</Row>
		</div>
	);
};
export default Product;