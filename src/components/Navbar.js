import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<h1>React Context API </h1>
			<div className="links">
				<li>
					<Link to="/">Product</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
			</div>
		</div>
	);
};

export default Navbar;
