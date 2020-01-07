import React from 'react';
import ProductCard from './ProductCard';

import Note7Pro from './images/redmi-note-7-pro.jpg';
import K20Pro from './images/redmi-k20-pro.jpg';
import PocophoneF1 from './images/pocophone-f1.jpg';
import Honor7x from './images/honor-7x.jpg'

const SimilarProducts = () => {

	const note7Pro = {
		name : "Note 7 Pro",
		image : Note7Pro
	}

	const k20Pro = {
		name : "K20 Pro",
		image : K20Pro	
	}

	const pocophoneF1 = {
		name : "Pocophone F1",
		image : PocophoneF1	
	}

	const honor7x = {
		name : "Honor 7x",
		image : Honor7x
	}

	return (
		<div id="similar-products">
			<h4>Similar Items</h4>
			<ProductCard item={note7Pro} />
			<ProductCard item={k20Pro} />
			<ProductCard item={pocophoneF1}/>
			<ProductCard item={honor7x}/>
		</div>
	);
};

export default SimilarProducts;