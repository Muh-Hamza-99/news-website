require("dotenv").config({ path: "./config.env" });

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`))

const newsRouter = require("./routes/news-routes");

app.use("/", newsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));