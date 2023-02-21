import React, { createContext, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/App.css";

import Navbar from "./Navbar";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";

// create context for selectedItem
export const CartContext = createContext(null);
console.log(CartContext);

function App() {
	// create state for store selected products
	const [selectedItem, setSelectedItem] = useState([]);

	return (
		<CartContext.Provider value={{ selectedItem, setSelectedItem }}>
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Route path="/" exact>
						<ProductPage />
					</Route>
					<Route path="/cart">
						<CartPage />
					</Route>
				</div>
			</BrowserRouter>
		</CartContext.Provider>
	);
}

export default App;
