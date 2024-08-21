import data from "./data.js";

const findByCountry = (country) => {
    try {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase() == country.toLowerCase()) {
                console.log(data[i]);
                return data[i]
            }
        }
        return "Country not found, please recheck details"
    }
    catch {
        return "Error occured, please try again later."
    }

}

export default findByCountry;