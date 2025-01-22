const recipesList = require("../data/foods");

const checkExists = (req, res, next) => {
    next();
    // const recipeId = parseInt(req.params.id);
    // const recipeToFind = recipesList.find((curRecipe) => curRecipe.id === recipeId);
    
    // if (recipeToFind !== undefined) {
    //     next();
    // } else {
    //     res.statusCode = 404;
    //     res.json({
    //         error: true,
    //         message: "Elemento non trovato :("
    //     });
    // };
};

module.exports = checkExists;