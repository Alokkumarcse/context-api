import React, { useEffect, useState, useContext } from "react";

import Item from "./Item";
import "../styles/CartPage.css";
import { CartContext } from "./App";

const CartPage = () => {
	const [total, setTotal] = useState(0);

	const { selectedItem, setSelectedItem } = useContext(CartContext);

	// calculating total price
	useEffect(() => {
		let total = 0;
		if (selectedItem) {
			selectedItem.map((ele) => {
				total += ele.price;
				return total;
			});
			setTotal(total);
		}
	}, [selectedItem]);

	return (
		<div className="cart">
			<div>Total: {total} </div>
			{selectedItem.map((ele) => {
				return (
					<Item
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						key={ele.id}
						item={ele}
					/>
				);
			})}
		</div>
	);
};

export default CartPage;
