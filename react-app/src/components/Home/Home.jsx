import React from "react";
import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:8000/").then((res) => {
			setCountries(res.data);
			res.data.map((country) => {
				console.log(country.name);
			});
		});
	}, []);

	return (
		<div className='home-container'>
			{countries.map((country) => (
				<a
					className='countries'
					key={country.name}
					href={`/country?q=${country.name}`}
				>
					<img
						className='country-img'
						src={country.flags.png}
						alt={country.name}
					></img>
					<div className='country-details'>
						<h2 className='country-name'>{country.name}</h2>
						<p>
							<span className='country-details-span'>Population: </span>
							{country.population}
						</p>
						<p>
							<span className='country-details-span'>Region: </span>
							{country.region}
						</p>
						<p>
							<span className='country-details-span'>Capital: </span>
							{country.capital}
						</p>
					</div>
				</a>
			))}
		</div>
	);
};

export default Home;
