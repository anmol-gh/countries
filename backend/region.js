import data from "./data.js"

const findByRegion = (region) => {
    console.log("Inside region")
    let validCountries = [];
    for (let country = 0; country < data.length; country++) {
        if (data[country].region.toLowerCase() == region) {
            validCountries.push(data[country]);
        }
    }
    return validCountries;
}

export default findByRegion;