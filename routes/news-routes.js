const express = require("express");
const router = express.Router();

const { 
    getNews,
    getHeadlines,
} = require("./../controllers/news-controllers");

router.get("/news", getNews);
router.get("/headlines", getHeadlines);

module.exports = router;