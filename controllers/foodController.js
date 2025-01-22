const connection = require("../data/db")

// get
const index = (req, res) => {  

    // preparare la query
    const sql = 'SELECT * FROM `posts`';

    // eseguire la query
    connection.query(sql, (err, results) => {
        
        // se trova errore mandare messaggio errore server sennò dare risultati richiesti
        if (err) {
            return res.status(500).json({
                message: 'Errore interno del server'
            });
        } else {
            return res.status(200).json({
                status: 'Success!',
                data: results
            });
        };
    });
};

// get
const show = (req, res) => {
    
    // recuperare l'id
    const id = req.params.id;

    // preparare la query
    const sql = "SELECT * FROM `posts` WHERE id = ?";

    // eseguire la query
    connection.query(sql, [id], (err, results) => {
        
        // se da errore mandare messaggio errore server
        if (err) {
            return res.status(500).json({
                message: 'Errore interno del server'
            });
        };
        // se non trova nulla mandare errore 404 sennò dare risultato richiesto
        if (results.length === 0) {
            return res.status(404).json({
                message: 'Elemento richiesto non trovato'
            });
        } else {
            return res.status(200).json({
                status: 'Success',
                data: results[0]
            });
        };
    });    
};

// post
// const create = (req, res) => {
    
// };

// put
// const update = (req, res) => {
    
// };

// patch
// const modify = (req, res) => {
    
// };

// delete
const destroy = (req, res) => {

    // recupero l'id
    const id = req.params.id;
    
    // preparare la query
    const sql = "DELETE FROM `posts` WHERE id = ?";

    // eseguire la query
    connection.query(sql, [id], (err) => {

        // se trova errore mandare messaggio errore sennò eliminare elemento richiesto
        if (err) {
            return res.status(500).json({
                message: 'Errore interno del server'
            });
        } else {
            return res.sendStatus(204);
        };
    });
};

module.exports = {
    index,
    show,
    // create,
    // update,
    // modify,
    destroy
};