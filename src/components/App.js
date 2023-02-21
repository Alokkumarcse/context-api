import { BrowserRouter, Route } from "react-router-dom";
import "../styles/App.css";

import Navbar from "./Navbar";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Route path="/" component={ProductPage} exact />
				<Route path="/cart" component={CartPage} />
			</div>
		</BrowserRouter>
	);
}

export default App;
