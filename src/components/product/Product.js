import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

const Product = (props) => {
	return (
		<div id="product-detail" className="pd-20">
			<Row>
				<Col sm={6}>
					<ProductImage image={props.selectedItem.image} />
				</Col>
				<Col sm={6}>
					<ProductDescription details={props.selectedItem} />
				</Col>
			</Row>
		</div>
	);
};
export default Product;