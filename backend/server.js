import express from "express";
import fetch from "node-fetch";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/giphy", async (req, res) => {
  const query = req.query.q;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=5`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Giphy" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
