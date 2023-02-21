import React from "react";

import "../styles/Item.css";

const Item = ({ item, selectedItem, setSelectedItem }) => {
	const { name, price } = item;

	return (
		<div className="item">
			<div>{name} </div>
			<img src="" alt="img" />
			<div>{price}</div>
			<div style={{ display: "flex", gap: "20px" }}>
				{selectedItem.includes(item) ? (
					<button
						onClick={() => {
							const items = selectedItem.filter(
								(ele) => ele.name !== item.name
							);
							setSelectedItem([...items]);
						}}
					>
						Remove from cart
					</button>
				) : (
					<button
						onClick={() => {
							setSelectedItem([...selectedItem, item]);
						}}
					>
						Add to cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Item;
