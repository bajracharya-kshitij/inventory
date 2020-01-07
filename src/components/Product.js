import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

const Product = () => {
	return (
		<Container>
			<Row>
				<Col sm={6}>
					<ProductImage />
				</Col>
				<Col sm={6}>
					<ProductDescription />
				</Col>
			</Row>
		</Container>
	);
};
export default Product;