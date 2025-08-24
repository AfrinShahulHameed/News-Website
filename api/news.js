import fetch from "node-fetch";

export default async function handler(req, res) {
  const query = req.query.q || "Technology";
  const apiKey = process.env.API_KEY; // reads secret from Vercel

  const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
  const data = await response.json();

  res.status(200).json(data.articles);
}
