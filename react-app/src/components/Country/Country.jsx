import React from "react";
import "./Country.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Country = () => {
	const url = useLocation();
	const [country, setCountry] = useState([]);

	//UseState to check if value of country is loaded.
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		axios.get(`http://localhost:8000/country${url.search}`).then((res) => {
			setCountry(res.data);
			setLoading(true);
			console.log(res.data);
		});
	}, []);

	if (!loading) {
		return <div>loading</div>;
	}
	// Loads the below code when the value of Country is fetched.
	else {
		return (
			<div className='country-details-container'>
				<section className='country-top'>
					<button className='country-back' href='/'>
						Back
					</button>
				</section>
				<div className='country-flag'>
					<img src={country.flags.png} alt='' />
				</div>
				<div className='country-description'>
					<h1 className='country-heading'>{country.name}</h1>
					<p className='country-details-para'>
						<span className='country-details-span'>Native Name: </span>
						{country.nativeName}
					</p>
					<p className='country-details-para'>
						<span className='country-details-span'>Population: </span>
						{country.population}
					</p>
					<p className='country-details-para'>
						<span className='country-details-span'>Region: </span>
						{country.region}
					</p>
					<p className='country-details-para'>
						<span className='country-details-span'>Sub Region: </span>
						{country.subregion}
					</p>
					<p className='country-details-para'>
						<span className='country-details-span'>Capital: </span>
						{country.capital}
					</p>
					<p className='country-details-para'>
						<span className='country-details-span'>Top Level Domain: </span>
						{country.topLevelDomain[0]}
					</p>
					<p className='country-details-para'>
						<span className='country-details-span'>Currencies: </span>
						{country.currencies[0].code}
					</p>
					<p className='country-details-para'>
						<span className='country-details-span'> Languages: </span>
						{country.languages[0].name}
					</p>
				</div>
			</div>
		);
	}
};

export default Country;
