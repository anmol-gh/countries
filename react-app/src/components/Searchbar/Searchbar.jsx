import React from "react";
import "./Searchbar.css";
const Searchbar = () => {
	return (
		<div className='searchbar-container'>
			<input
				placeholder='Search for a country...'
				className='searchbar-input'
			></input>
			<select name='Filter by Region' id='region' className='searchbar-select'>
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
