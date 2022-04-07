const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const getNews = async (req, res) => {
        const { q, sortBy, from, to } = req.query;
        const data = await newsapi.v2.everything({
            q,
            sources: "bbc-news",
            domains: "bbc.co.uk, techcrunch.com, engadget.com",
            language: "en",
            sortBy,
            from,
            to,
        });
        const news = await data.articles;
        res.render("news", { news });
};

const getHeadlines = async (req, res) => {
    const { q, country, category } = req.query;
    const data = await newsapi.v2.topHeadlines({
        q,
        category,
        country,
        language: "en",
    });
    const headlines = data.articles;
    res.render("headlines", { headlines });
};

module.exports = {
    getNews,
    getHeadlines,
};