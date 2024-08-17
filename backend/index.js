import express from "express";
import cors from "cors";
import findByRegion from "./region.js";
import findByCountry from "./country.js";
import data from "./data.js";
const app = express();
app.use(cors());
const port = 8000;


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.get("/region", async (req, res) => {
    var region = req.query.region;
    const results = await findByRegion(region);
    res.send(results);
})

app.get("/country", async (req, res) => {
    var country = req.query.country;
    const result = await findByCountry(country);
    res.send(result);
})

app.get("/", (req, res) => {
    res.send(data);
})