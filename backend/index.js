import express from "express";
import cors from "cors";
import findByRegion from "./routes/region.js";
import findByCountry from "./routes/country.js";
import data from "./routes/data.js";
import swaggerUI from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./swagger.json" assert { type: "json" };

const app = express();
app.use(cors());
const port = 8000;

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


// Endpoint to get details of countries in a region
app.get("/region", async (req, res) => {
    var region = req.query.q;
    const results = await findByRegion(region);
    res.status(200).send(results)
})


// Endpoint to get details of a country
app.get("/country", async (req, res) => {
    var country = req.query.q;
    console.log(country)
    const result = await findByCountry(country);
    if (result == "Error occured, please try again later.") {
        res.status(400).send(result)
    }
    else res.status(200).send(result);
})



/**
 * @swagger
 * /:
 *   get:
 *     summary: Get details of all the countries
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: List of countries retrieved successfully
 */
// Endpoint to get details of all countries  

app.get("/", (req, res) => {
    res.status(200).send(data);
})