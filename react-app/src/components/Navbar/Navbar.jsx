import React from "react";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
	const [mode, SetMode] = useState("dark");
	return (
		<div className='navbar-container'>
			<a href='/' className="navbar-anchor">
				<h3 className='navbar-heading'> Where in the world?</h3>
			</a>
			<button className='navbar-toggle'>
				{/* <img src='' alt='' /> */}
				<p> Dark Mode</p>
			</button>
		</div>
	);
};

export default Navbar;
