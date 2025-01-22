const handleErrors = (err, req, res, next) => {
    res.statusCode = 500;
    res.json({
        error: true,
        message: "Errore interno del server :("
    });
    next();
};

module.exports = handleErrors;