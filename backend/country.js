import data from "./data.js";

const findByCountry = (country) => {
    try {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase() == country.toLowerCase()) {
                console.log(data[i]);
                return data[i]
            }
        }
    }
    catch {
        return "Country not found, please recheck details"
    }

}

export default findByCountry;