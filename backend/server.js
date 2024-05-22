import express from "express";
import fetch from "node-fetch";
import { config } from "dotenv";
import cors from "cors";

// load environment variables
config();

// initialise express app
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());

// random gif
app.get("/giphy/random", async (req, res) => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Giphy" });
  }
});

// search gifs
app.get("/giphy/search", async (req, res) => {
  const query = req.query.s;
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.GIPHY_API_KEY}&s=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Giphy" });
  }
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
