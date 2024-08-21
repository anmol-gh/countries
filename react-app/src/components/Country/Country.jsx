import React from "react";
import "./Country.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Country = () => {
	const url = useLocation();
	var [country, setCountry] = useState([]);

	//UseState to check if value of country is loaded.
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		axios.get(`http://localhost:8000/country${url.search}`).then((res) => {
			console.log(res.data);
			setCountry(res.data);
			if (res.data == "Country not found, please recheck details") {
				country = "Country not found, please recheck details";
			}
			setLoading(true);
		});
	}, []);

	// const history = useNavigate();
	// const onBackClick = () => {
	// 	history.back();
	// };

	if (!loading) {
		return (
			<div className='country-loading'>
				<h1 className='country-loading-heading'>Loading...</h1>
			</div>
		);
	} else if (
		loading &&
		country == "Country not found, please recheck details"
	) {
		return (
			<h1 className='country-loading-heading'>
				Invalid Country details entered
			</h1>
		);
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
				<div className='country-container'>
					<div className='country-container-one'>
						<img
							src={country.flags.png}
							alt={country.name}
							className='country-flg'
						/>
					</div>
					<div className='country-container-two'>
						<div>
							<h1 className='country-heading'>{country.name}</h1>
						</div>
						<div className='country-column'>
							<div className='country-column-one'>
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
							</div>
							<div className='country-column-two'>
								<p className='country-details-para'>
									<span className='country-details-span'>
										Top Level Domain:{" "}
									</span>
									{country.topLevelDomain[0]}
								</p>
								<p className='country-details-para'>
									<span className='country-details-span'>Currencies: </span>
									{country.currencies[0].code}
								</p>
								<p className='country-details-para'>
									<span className='country-details-span'> Languages: </span>
									{/* {country.languages && country.languages.length > 0 ? (
										country.languages.map((language) => (
											<span key={language}>{language}</span>
										))
									) : (
										<span>non</span>
									)} */}

									{country.languages[0].name}
								</p>
							</div>
							<div></div>
						</div>
						<p className='country-details-para borders'>
							<span className='country-details-span'>Border Countries: </span>
							{country.borders && country.borders.length > 0 ? (
								country.borders.map((border) => (
									<button className='border-countries' key={border}>
										{" "}
										{border}
									</button>
								))
							) : (
								<span>None</span>
							)}
						</p>
					</div>
				</div>
			</div>
		);
	}
};

export default Country;
