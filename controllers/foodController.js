const recipesList = require("../data/foods");


// index
const index = (req, res) => {  
    const queryString = req.query;
    if(queryString.tag !== undefined) {
        recipesToSend = recipesList.filter((curRecipe) => curRecipe.tags.includes(queryString.tag));
        res.json(recipesToSend);
    } else {
        res.json({
            ricette: recipesList,
            totale: recipesList.length
        });
    };
};

// show
const show = (req, res) => {
    const recipeId = parseInt(req.params.id);
    const specRecipe = recipesList.find(curRecipe => curRecipe.id === recipeId);
    res.json(specRecipe);
};

// create
const create = (req, res) => {
    const lastIndex = recipesList.length - 1;
    const lastItem = recipesList[lastIndex];
    const newItemID = lastItem.id + 1;
    const newRecipe = {
        id: newItemID,
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        immagine: req.body.immagine,
        tags: req.body.tags
    };

    recipesList.push(newRecipe);
    res.statusCode = 201;
    res.json(recipesList);
};

// update
const update = (req, res) => {
    const recipeId = parseInt(req.params.id);
    const updatedElem = req.body;
    const indexToUpdate = recipesList.findIndex((curRecipe) => curRecipe.id === recipeId);
    updatedElem.id = recipeId

    if(indexToUpdate === -1) {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Elemento non trovato :("
        });
    } else {
        recipesList[indexToUpdate] = updatedElem
        res.json(updatedElem);
    };
};

// modify
const modify = (req, res) => {
    const recipeId = parseInt(req.params.id);
    res.json('modifichiamo gli specifici dati del post ' + recipeId);
};

// destroy
const destroy = (req, res) => {
    const recipeId = parseInt(req.params.id);
    const indexRecipe = recipesList.findIndex((curRecipe) => curRecipe.id);
    if(recipeId === -1) {
        res.sendStatus(404);
    } else {
        recipesList.splice(indexRecipe, 1);
        res.sendStatus(204);
        console.log(recipesList);
    };
};

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
};