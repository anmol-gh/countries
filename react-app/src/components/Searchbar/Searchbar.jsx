import React from "react";
import "./Searchbar.css";
import { useState, useEffect } from "react";

const Searchbar = () => {
	const [input, setInput] = useState("");
	// UseState to filter using Region
	const [region, setRegion] = useState("");

	// Handles change in the input
	const inputChange = () => {
		const element = document.getElementById("input");
		setInput(element.value);
		console.log(input);
	};

	// Handles change in the dropdown
	const selectChange = (e) => {
		setRegion(e.target.value);
	};
	return (
		<div className='searchbar-container'>
			<input
				placeholder='Search for a country...'
				className='searchbar-input'
				id='input'
				onChange={inputChange}
			></input>
			<select
				name='Filter by Region'
				id='region'
				className='searchbar-select'
				onChange={selectChange}
			>
				<option value='All' className='searchbar-option'>
					All
				</option>
				<option value='Africa' className='searchbar-option'>
					Africa
				</option>
				<option value='America' className='searchbar-option'>
					America
				</option>
				<option value='Asia' className='searchbar-option'>
					Asia
				</option>
				<option value='Europe' className='searchbar-option'>
					Europe
				</option>
				<option value='Oceania' className='searchbar-option'>
					Oceania
				</option>
			</select>
		</div>
	);
};

export default Searchbar;
