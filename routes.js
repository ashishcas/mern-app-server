const express = require('express');


const routes = express.Router();


// GET  - to fetch values
// POST  -  to paass data 
// PUT  - to updte data 
// DELETE - to delete dat 

routes.get('/start', (req,res)=> {

    res.send({status: 200 , message: "first route"})
});

module.exports = routes;