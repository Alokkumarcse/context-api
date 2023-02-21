import React, { useState } from "react";
import { Chance } from "chance";

import "../styles/ProductPage.css";

import Item from "./Item";

const ProductPage = () => {
	// generate the ramdom data using chance library
	const chance = new Chance(1234);
	const productArray = [...Array(20)].map(() => ({
		id: chance.guid(),
		name: chance.name(),
		price: chance.floating({ min: 5, max: 1000, fixed: 2 }),
		image: chance.url({ extensions: ["jpg", "png", "gif"] }),
		address: {
			street: chance.street(),
			city: chance.city(),
			state: chance.state(),
			zip: [chance.zip(), chance.zip(), chance.zip()],
		},
	}));

	// create product state to store products
	const [products] = useState(productArray);
	// create state for store selected products
	const [selectedItem, setSelectedItem] = useState([]);

	return (
		<div className="container">
			{products.map((item) => {
				return (
					<Item
						item={item}
						key={item.id}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
					/>
				);
			})}
		</div>
	);
};

export default ProductPage;
