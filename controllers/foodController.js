const connection = require("../data/db")

// get
const index = (req, res) => {  
    // preparare la query
    const sql = 'SELECT * FROM `posts`';

    // eseguire la query
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Errore interno del server"
            });
        } else {
            return res.status(200).json({
                status: "Success!",
                data: results
            });
        };
    });
};

// get
const show = (req, res) => {
    
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
    
};

module.exports = {
    index,
    show,
    // create,
    // update,
    // modify,
    destroy
};