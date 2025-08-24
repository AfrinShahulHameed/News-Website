// functions/getNews.js

import fetch from "node-fetch";

export async function handler(event, context) {
    const query = event.queryStringParameters.q || "Technology";
    const API_KEY = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data.articles),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
}
