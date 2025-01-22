const express = require("express");
const cors = require("cors");
const handleErrors = require("./middlewares/handleErrors");
const recipesRouters = require("./routers/posts");
const recipesList = require("./data/foods");

const app = express();
const port = 3001;

app.use(
    cors({
        origin: "http://localhost:5173/"
    })
);

app.use(express.json());
app.use(express.static("public"));
app.use("/posts", recipesRouters);


app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/ricerca', (req, res) => {
    const recipeTitle = req.params.titolo;
    const recipes = recipesList.filter((curRecipe) => curRecipe.titolo.toLowerCase().includes(recipeTitle.toLowerCase()));
    res.json(recipes);
});

app.use(handleErrors);

app.listen(port, () => {
    console.log('server partito');
});