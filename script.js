
 const API_KEY = "3b268c15f1d14bcab08b263b852f9fd8";

const url = "https://newsapi.org/v2/top-headlines?country=us&category=";

window.addEventListener("load", () => fetchNews("technology"));

async function fetchNews(query) {
    try {
        const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
        const data = await res.json();

        if (data.status !== "ok") {
            console.error("API Error:", data);
            bindData([]);
            return;
        }

        bindData(data.articles);
    } catch (error) {
        console.error("Fetch failed:", error);
        bindData([]);
    }
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";

    if (!articles || articles.length === 0) {
        cardsContainer.innerHTML = "<p>No articles found</p>";
        return;
    }

    articles.forEach(article => {
        const card = document.createElement("div");
        card.classList.add("news-card");
        card.innerHTML = `
            <h3>${article.title || "No title"}</h3>
            <p>${article.description || "No description"}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        cardsContainer.appendChild(card);
    });
}
