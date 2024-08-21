import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [mode, SetMode] = useState("dark");
	const setDarkMode = () => {
		document.querySelector("Body").setAttribute("data-theme", "dark");
		document.getElementById("theme-toggle").innerText = "Dark Mode";
	};
	const setLightMode = () => {
		document.querySelector("Body").setAttribute("data-theme", "light");
		document.getElementById("theme-toggle").innerText = "Light Mode";
	};

	const toggleTheme = (e) => {
		if (mode == "dark") {
			console.log(mode == "dark");
			SetMode("light");
			setLightMode();
		} else {
			SetMode("dark");
			setDarkMode();
		}
	};

	return (
		<div className='navbar-container'>
			<a href='/' className='navbar-anchor'>
				<h3 className='navbar-heading'> Where in the world?</h3>
			</a>
			<button className='navbar-toggle' onClick={toggleTheme}>
				{/* <img src='' alt='' /> */}
				<p id='theme-toggle'> Dark Mode</p>
			</button>
		</div>
	);
};

export default Navbar;
