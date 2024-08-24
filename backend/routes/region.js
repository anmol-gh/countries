import data from "./data.js"

/**
 * @swagger
 * /region:
 *   get:
 *     summary: Get countries of the entire region
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: The query parameter to search for a region
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: List of examples retrieved successfully
 */


const findByRegion = (region) => {
    let validCountries = [];
    for (let country = 0; country < data.length; country++) {
        if (data[country].region.toLowerCase() == region) {
            validCountries.push(data[country]);
        }
    }
    return validCountries;
}

export default findByRegion;