import data from "./data.js";

/**
 * @swagger
 * /country:
 *   get:
 *     summary: Get a country
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: The query parameter to search for a country
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: List of examples retrieved successfully
 */

const findByCountry = (country) => {
    try {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase() == country.toLowerCase()) {
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